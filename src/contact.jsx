import React, { useEffect, useState, useRef } from 'react';
import './index.css';  // Import the CSS file to use the styles
import gif from './assets/gif.gif';  // Import your local GIF (adjust the path as needed)

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const contactSectionRef = useRef(null);

  useEffect(() => {
    // Create the IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // Set visibility to true when the contact section is in the viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    if (contactSectionRef.current) {
      observer.observe(contactSectionRef.current); // Start observing the section
    }

    // Cleanup observer when component unmounts
    return () => {
      if (contactSectionRef.current) {
        observer.unobserve(contactSectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="contacts"
      ref={contactSectionRef}
      className="min-h-screen px-10 py-40 scroll-mt-24 relative z-10 flex flex-col justify-center items-center animate-slide-up"
      style={{
        opacity: isVisible ? 1 : 0, // Fade in when section is in view
        transition: 'opacity 0.5s ease-in-out',
      }}
    >
      {/* Title */}
      <h2 id="hit-me-up" className="text-[120px] font-bold text-center mb-6 tracking-tight leading-tight animate-fadeInUp">
        Hit Me Up
      </h2>

      {/* Add GIF under "Hit Me Up" */}
      <div className="mb-10">
        <img
          src={gif}  // Use the imported gif here
          alt="Animated GIF"
          className="w-full max-w-xs mx-auto"
        />
      </div>

      {/* Increase the height of the section to make the user scroll further */}
      <div className="h-[100vh]"></div> {/* Empty div to create space */}

      {/* Contact Cards */}
      <div className="flex flex-col md:flex-row justify-between gap-10 mt-32 z-10 w-full">
        {/* Location */}
<div className="flex-1 bg-[#f1f1f1] dark:bg-[#2c2c2c] p-10 shadow-md text-center flex flex-col items-center justify-between border-r border-b md:border-none md:border-b-0 md:border-r-0 md:mr-4">
  <img
    src="https://cdn-icons-png.flaticon.com/512/535/535239.png"
    alt="Location Icon"
    className="w-8 h-8 mb-4"
  />
  <h3 className="text-lg uppercase mb-2 tracking-wide text-black dark:text-white">Location</h3>
  <p className="text-xl text-black dark:text-white">New York City, NY</p>
</div>

{/* LinkedIn */}
<div className="flex-1 bg-[#f1f1f1] dark:bg-[#2c2c2c] p-10 shadow-md text-center flex flex-col items-center justify-between border-r border-b md:border-none md:border-b-0 md:border-r-0 md:mr-4">
  <img
    src="https://cdn-icons-png.flaticon.com/512/145/145807.png"
    alt="LinkedIn Icon"
    className="w-8 h-8 mb-4"
  />
  <h3 className="text-lg uppercase mb-2 tracking-wide text-black dark:text-white">LinkedIn</h3>
  <p className="text-xl text-black dark:text-white">
    <a
      href="https://www.linkedin.com/in/sneha-priya-prakash/"
      target="_blank"
      rel="noreferrer"
      className="underline hover:text-gray-500"
    >
      Sneha Priya Prakash
    </a>
  </p>
</div>
{/* Email */}
<div className="flex-1 bg-[#f1f1f1] dark:bg-[#2c2c2c] p-10 shadow-md text-center flex flex-col items-center justify-between border-b">
  <img
    src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
    alt="Email Icon"
    className="w-8 h-8 mb-4"
  />
  <h3 className="text-lg uppercase mb-2 tracking-wide text-black dark:text-white">Email</h3>
  <p className="text-xl text-black dark:text-white break-words">
    <a
      href="mailto:snehapriyap99@gmail.com"  // Mailto link for email
      className="underline hover:text-gray-500"
    >
      snehapriyap99@gmail.com
    </a>
  </p>
</div>


      </div>
    </section>
  );
};

export default Contact;
