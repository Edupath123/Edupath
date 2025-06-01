import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Components
import Navbar from "./Components/Navbar/nav";
import Hero from "./Components/Hero/hero";
import FeatureCards from "./Components/features/features";
import CareerDomains from "./Components/domain/domain";
import ScreenshotCarousel from "./Components/howwork/howwork";
import TopCounselors from "./Components/Testonomial/testonomial";
import AppDownloadSection from "./Components/download/download";
import Footer from "./Components/Footer/footer";
import Loader from "./Components/loader/loader"; // Import loader

function App() {
  const [orderPopup, setorderPopup] = useState(false);
  const [loading, setLoading] = useState(true); 

  const handleorderPopup = () => {
    setorderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();

    // Simulate 2s loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
          <Navbar />
          <Hero />
          <FeatureCards />
          <CareerDomains />
          <ScreenshotCarousel />
          <TopCounselors />
          <AppDownloadSection />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
