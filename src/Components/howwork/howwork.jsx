import React, { useEffect } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ss1 from "../../assets/ss/img1.jpg";
import ss2 from "../../assets/ss/img2.jpg";
import ss3 from "../../assets/ss/img3.jpg";
import ss4 from "../../assets/ss/img5.jpg";
import ss5 from "../../assets/ss/img4.jpg";
import ss6 from "../../assets/ss/img6.jpg";
import ss7 from "../../assets/ss/img7.jpg";
import ss8 from "../../assets/ss/img8.jpg";
import ss9 from "../../assets/ss/img9.jpg";

const screenshots = [ss1, ss2, ss3, ss4, ss5, ss6,ss7,ss8,ss9];

const ScreenshotCarousel = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 200,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.2,
        }
      }
    ]
  };

  return (
    <section id="howwork" className="py-16 bg-gray-50 dark:bg-slate-900 z-10 ">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-5xl font-bold text-center mb-12 text-indigo-800 dark:text-white"
          data-aos="fade-down">
          How It Works
        </h2>

        <Slider {...settings}>
          {screenshots.map((img, index) => (
            <div key={index} className="px-2">
              <div
                className="mx-auto w-[200px] h-[420px] rounded-xl hoverShadow: hover:shadow-blue-500/90  overflow-hidden shadow-lg bg-white dark:bg-slate-800 transform transition duration-300 hover:scale-105"
                data-aos="zoom-in"
              >
                <img
                  src={img}
                  alt={`Screen ${index + 1}`}
                  className="w-full h-full object-cover "
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ScreenshotCarousel;
