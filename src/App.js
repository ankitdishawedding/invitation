import Navigation from "./components/Navigation";
import Bridegroom from "./components/brideGroomDetails";
import Countdown from "./components/Countdown";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Organization from "./components/Organization";
import RSVP from "./components/RSVP";
import Seeyou from "./components/Seeyou";
import Sidebar from "./components/Sidebar";
import Story from "./components/Story";
import Where from "./components/Where";
import { useEffect, useRef, useState } from "react";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [activeStep, setActiveStep] = useState(0);
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      debugger;
      const visibleSection = entries.find(
        (entry) => entry.isIntersecting
      )?.target;

      if (visibleSection) {
        if (visibleSection.id === "home") setActiveStep(0);
        if (visibleSection.id === "couple") setActiveStep(2);
        if (visibleSection.id === "countdown") setActiveStep(3);
      }
    });

    const sections = document.querySelectorAll("[data-section]");

    sections.forEach((section) => {
      observer.current.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.current.unobserve(section);
      });
    };
  }, []);
  return (
    <BrowserRouter>
      <Sidebar />
      <div id="oliven-main">
        <Header />
        <Bridegroom />
        <Countdown />
        <Organization />
        <Seeyou />
        <Where />
        <Footer />
        <div className="fixed bottom-0 w-full block md:hidden z-10">
          <Navigation activeStep={activeStep} setActiveStep={setActiveStep} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
