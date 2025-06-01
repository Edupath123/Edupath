import React from "react";
import mobileScreenshot from "../../assets/hero/img1.jpg";

const AppDownloadSection = () => {
  const handleDownloadClick = () => {
   
  };

  return (
    <section className="relative py-20 bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-slate-800 dark:to-slate-900 overflow-hidden">
      {/* Moving Download Strip */}
    <div className="absolute top-1/2 -translate-y-1/2 w-full z-0 overflow-hidden pointer-events-none">
  <div className="flex animate-marquee whitespace-nowrap rotate-[-0deg]">
    <p className="text-white text-3xl sm:text-3xl font-bold tracking-wider bg-gradient-to-r from-indigo-500 via-pink-500 to-slate-500  px-4 py-2 shadow-lg mr-8">
      {Array(30).fill("Download •").join(" ")}
    </p>
  </div>
</div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-4" data-aos="fade-up">
        <img
          src={mobileScreenshot}
          alt="App Screenshot"
          className="w-[240px] sm:w-[300px] rounded-xl shadow-2xl border-4 border-white"
          data-aos="zoom-in"
        />

        <button
          onClick={handleDownloadClick}
          className="text-2xl bg-gradient-to-r from-indigo-500 via-pink-500 to-slate-500 
             hover:from-pink-500 hover:via-indigo-500 hover:to-indigo-900 
             hover:scale-110 hover:shadow-[0_0_25px_rgba(199,21,133,0.6)] 
             transition-all duration-300 text-white py-3 px-11 rounded-full font-semibol"
        >
          Download App
        </button>
      </div>
    </section>
  );
};

export default AppDownloadSection;
