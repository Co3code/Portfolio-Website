import React from "react";
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, StarsCanvas, Tech, Works } from "./components";

const App = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className="relative z-0 bg-primary">
        {/* Hero Section - full width */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          {/* Optional: wrap Hero text for desktop padding */}
          <div className="container">
            <Hero />
          </div>
        </div>

        {/* Main content - centered with max-width */}
        <div className="container">
          <About />
          <Experience />
          <Tech />
          <Works />
        </div>

        {/* Contact + StarsCanvas - full width */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
