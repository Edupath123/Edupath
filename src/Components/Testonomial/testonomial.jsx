import React, { useEffect } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const counselors = [
  {
    id: 1,
    name: "Dr. Anjali Sharma",
    title: "Career Psychologist",
    review: "Helped me find the right path. Very insightful and kind.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 2,
    name: "Rahul Verma",
    title: "Tech Mentor",
    review: "Guided me from beginner to job-ready developer.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Priya Mehta",
    title: "Education Consultant",
    review: "Helped with overseas study plan. Highly recommended!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 4,
    name: "Suresh Patel",
    title: "Growth Coach",
    review: "Structured, clear guidance—-exactly what I needed.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    id: 5,
    name: "Nina Kapoor",
    title: "Soft Skills Trainer",
    review: "Boosted my confidence for interviews!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    id: 6,
    name: "Vikram Singh",
    title: "Industry Expert",
    review: "Real-world insights that mattered in my job hunt.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
];

// Hover glow colors
const glowClasses = [
  "hover:shadow-[0_0_15px_rgba(220,38,38,0.7)]",
  "hover:shadow-[0_0_15px_rgba(34,197,94,0.7)]",
  "hover:shadow-[0_0_15px_rgba(59,130,246,0.7)]",
  "hover:shadow-[0_0_15px_rgba(168,85,247,0.7)]",
  "hover:shadow-[0_0_15px_rgba(244,114,182,0.7)]",
  "hover:shadow-[0_0_15px_rgba(249,115,22,0.7)]",
];

const TopCounselors = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
    appendDots: dots => (
      <div className="mt-4">
        <ul className="flex justify-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-2 h-2 bg-indigo-500 rounded-full cursor-pointer"></div>
    ),
  };

  return (
    <section className="py-12 bg-gray-100 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2
           className="text-3xl sm:text-5xl font-bold text-center mb-12 text-indigo-900 dark:text-white"
          data-aos="fade-down"
        >
         Our  Top Counselors
        </h2>
        <Slider {...settings}>
          {counselors.map((c, idx) => (
            <div key={c.id} className="px-3">
              <div
                className={`bg-white dark:bg-slate-800 rounded-2xl p-5 text-center flex flex-col items-center transition-all duration-300 ${glowClasses[idx % glowClasses.length]}`}
                data-aos="zoom-in"
              >
                <img
                  src={c.image}
                  alt={c.name}
                  className="w-24 h-24 rounded-full border-4 border-indigo-500 mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {c.name}
                </h3>
                <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-2">
                  {c.title}
                </p>

                {/* Dynamic Stars */}
                <div className="flex justify-center mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < c.rating
                          ? "text-yellow-400"
                          : "text-gray-300 dark:text-gray-600"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09L5.6 12.26.8 7.91l6.09-.88L10 1.5l3.11 5.53 6.09.88-4.8 4.35 1.48 5.83z" />
                    </svg>
                  ))}
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  “{c.review}”
                </p>
                <button className="mt-auto bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full text-sm transition">
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TopCounselors;
