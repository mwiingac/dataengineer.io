// main.js

// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Make sure GSAP and ScrollTrigger are available
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      // Register the ScrollTrigger plugin
      gsap.registerPlugin(ScrollTrigger);
  
      // Select all the linkR elements inside detailResearch
      const links = document.querySelectorAll('.detailData .link');
  
      // Loop through each linkR element
      links.forEach((link, index) => {
        // Create a GSAP timeline for each linkR
        gsap.from(link, {
          opacity: 0,          // Start from fully transparent
          y: 20,               // Start from 20px below its original position
          duration: 0.6,       // Animation duration
          delay: index * 0.3,  // Stagger the animation based on index
          ease: 'power2.out',  // Use an easing function for smooth animation
          scrollTrigger: {
            trigger: link,        // Trigger animation when this link comes into view
            start: 'top 80%',     // Start the animation when the top of the link is 80% from the top of the viewport
            toggleActions: 'play none none none',  // Play the animation on scroll, do not reverse
          },
        });
      });
    } else {
      console.error('GSAP or ScrollTrigger not loaded');
    }
  });
  