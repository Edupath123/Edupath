import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaRoute,
  FaRobot,
  FaUserTie,
  FaBookOpen,
  FaCertificate,
  FaLandmark,
} from "react-icons/fa";

const features = [
  {
    icon: <FaRoute className="text-4xl text-indigo-600" />,
    title: "Personalized Learning Roadmap",
    description:
      "Tailored guidance based on your career interests and current level.",
    hoverShadow: "hover:shadow-indigo-400/60",
  },
  {
    icon: <FaRobot className="text-4xl text-green-600" />,
    title: "AI-Powered Weekly Timetables",
    description:
      "Smart schedules that align with your goals and available time.",
    hoverShadow: "hover:shadow-green-400/60",
  },
  {
    icon: <FaUserTie className="text-4xl text-yellow-500" />,
    title: "Career Counseling",
    description:
      "Get expert advice and career planning to secure your future.",
    hoverShadow: "hover:shadow-yellow-400/60",
  },
  {
    icon: <FaBookOpen className="text-4xl text-blue-500" />,
    title: "Domain-Specific Study Materials",
    description:
      "From fundamentals to advanced—get resources curated for your path.",
    hoverShadow: "hover:shadow-blue-400/60",
  },
  {
    icon: <FaCertificate className="text-4xl text-pink-500" />,
    title: "Certificates & Achievements",
    description: "Track progress and gain recognition as you learn.",
    hoverShadow: "hover:shadow-pink-400/60",
  },
  {
    icon: <FaLandmark className="text-4xl text-red-500" />,
    title: "Government Job Tracker",
    description:
      "Stay updated with real-time alerts and curated government job listings.",
    hoverShadow: "hover:shadow-red-400/60",
  },
];

const FeatureCards = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-3xl sm:text-5xl font-bold text-center mb-12 text-indigo-800 dark:text-white"
          data-aos="fade-down"
        >
          Highlighted Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`cursor-pointer bg-white dark:bg-slate-800 p-5 sm:p-6 rounded-xl sm:rounded-2xl shadow-md transition-all duration-300 transform hover:scale-105 ${feature.hoverShadow}`}
            >
              <div className="flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-center mb-2 text-indigo-700 dark:text-indigo-300">
                {feature.title}
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-300 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
