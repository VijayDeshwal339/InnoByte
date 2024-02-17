import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Pricing from "../Pricing/Pricing";
import About from "../about/About";
import Features from "../features/Features";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  useEffect(() => {
    const handleSmoothScroll = (hash) => {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    // Handle smooth scroll on initial page load
    const hash = window.location.hash;
    if (hash) {
      handleSmoothScroll(hash);
    }

    // Add event listener for hash changes
    const handleHashChange = () => {
      const newHash = window.location.hash;
      if (newHash) {
        handleSmoothScroll(newHash);
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <>
      <Header/>
     
      <div id="about">
        <About />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="help">
        <Footer />
      </div>
      
    </>
  );
};

export default Home;
