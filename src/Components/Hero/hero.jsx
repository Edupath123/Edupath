import React from "react";
import Image1 from "../../assets/hero/img1.jpg";
import Image2 from "../../assets/hero/img2.jpg";
import Image3 from "../../assets/hero/img3.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ImageList = [
  {
    id: 1,
    img: Image2,
    title: "Empower Your Career Journey with EduMarg",
    description:
      "Personalized roadmaps, AI-driven learning, and expert guidance — all in one app",
    id: 2,
    img: Image1,
    title: "Empower Your Career Journey with EduMarg",
    description:
      "Personalized roadmaps, AI-driven learning, and expert guidance — all in one app.",
  },
  {
    id: 3,
    img: Image3,
    title: " Learn, Grow, Succeed ",
    description:
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Hero = ({ handleOrderPopup }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div id="about" className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-slate-950 dark:text-white duration-200 ">
      {/* background pattern */}
      <div className="h-[700px] w-[900px] bg-indigo-400/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
            {ImageList.map((data) => (
           <div key={data.id}>

         
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button
                      
                      className="bg-gradient-to-r from-indigo-500 via-blue-500 to-slate-500 
             hover:from-pink-500 hover:via-indigo-500 hover:to-indigo-900 
             hover:scale-110 hover:shadow-[0_0_25px_rgba(199,21,133,0.6)] 
             transition-all duration-300 text-white py-3 px-11 rounded-full font-semibol"
                    >
                      Downlod
                    </button>
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[570px] sm:w-[550px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
