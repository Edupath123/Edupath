import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaLaptopCode,
  FaCloud,
  FaDatabase,
  FaRobot,
  FaShieldAlt,
  FaMobileAlt,
  FaBuilding,
  FaMoneyBill,
  FaHeartbeat
} from "react-icons/fa";

const domains = [ 
  {
    icon: <FaLaptopCode className="text-4xl text-indigo-600" />,
    title: "Software Development",
    caption: "Build websites, apps & games",
    details: [
      "Frontend Developer (React.js, Angular, Vue.js)",
      "Backend Developer (Node.js, Django, Java Spring Boot)",
      "Full Stack Developer",
      "Mobile App Developer (React Native, Flutter, Kotlin)",
      "Game Developer (Unity, Unreal Engine)"
    ],
    hoverShadow: "hover:shadow-indigo-400/60"
  },
  {
    icon: <FaCloud className="text-4xl text-blue-600" />,
    title: "Cloud Computing",
    caption: "Master cloud platforms and DevOps",
    details: [
      "Cloud Engineer",
      "AWS/GCP/Azure Intern",
      "DevOps Engineer",
      "Site Reliability Engineer (SRE)"
    ],
    hoverShadow: "hover:shadow-blue-400/60"
  },
  {
    icon: <FaDatabase className="text-4xl text-green-600" />,
    title: "Data Science & Analytics",
    caption: "Analyze data and build ML models",
    details: [
      "Data Analyst",
      "Data Scientist",
      "Business Intelligence Analyst",
      "Machine Learning Engineer"
    ],
    hoverShadow: "hover:shadow-green-400/60"
  },
  {
    icon: <FaRobot className="text-4xl text-yellow-500" />,
    title: "AI & Machine Learning",
    caption: "Create smart and adaptive systems",
    details: [
      "AI/ML Intern",
      "Computer Vision Engineer",
      "NLP Engineer",
      "Research Assistant (ML/DL)"
    ],
    hoverShadow: "hover:shadow-yellow-400/60"
  },
  {
    icon: <FaShieldAlt className="text-4xl text-red-600" />,
    title: "Cybersecurity",
    caption: "Protect systems and data",
    details: [
      "Cybersecurity Analyst",
      "SOC Intern",
      "Ethical Hacker",
      "Vulnerability Analyst"
    ],
    hoverShadow: "hover:shadow-red-400/60"
  },
  {
    icon: <FaMobileAlt className="text-4xl text-purple-600" />,
    title: "Mobile App Development",
    caption: "Develop Android/iOS apps",
    details: [
      "Android Developer",
      "iOS Developer",
      "Cross-platform Developer (Flutter/React Native)"
    ],
    hoverShadow: "hover:shadow-purple-400/60"
  },
  {
    icon: <FaBuilding className="text-4xl text-gray-800" />,
    title: "Govt. Jobs",
    caption: "Work in public sector institutions",
    details: [
      "IAS/IPS Officer",
      "Banking Jobs (PO, Clerk)",
      "Civil Services",
      "Defence Jobs"
    ],
    hoverShadow: "hover:shadow-gray-400/60"
  },
  {
    icon: <FaMoneyBill className="text-4xl text-yellow-600" />,
    title: "Commerce",
    caption: "Pursue finance, accounting & business",
    details: [
      "Chartered Accountant",
      "Investment Banker",
      "Financial Analyst",
      "Accountant"
    ],
    hoverShadow: "hover:shadow-yellow-400/60"
  },
  {
    icon: <FaHeartbeat className="text-4xl text-red-500" />,
    title: "Medical",
    caption: "Work in healthcare and medicine",
    details: [
      "Doctor (MBBS)",
      "Nurse",
      "Pharmacist",
      "Medical Researcher"
    ],
    hoverShadow: "hover:shadow-red-400/60"
  }
];

const CareerDomainCards = () => {
  
  const [activeCard, setActiveCard] = useState(null);

  const handleCardEnter = (index) => {
    setActiveCard(index);
  };

  const handleCardLeave = () => {
    setActiveCard(null);
  };

   

  return (
    <section id="domain" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-bold text-center mb-12 text-indigo-800 dark:text-white">
          Career Domains
        </h2>
        <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
          {domains.map((domain, index) => (
            <div
              key={index}
              onMouseEnter={() => handleCardEnter(index)}
              onMouseLeave={handleCardLeave}
              className={`relative min-w-[280px] max-w-[280px] flex-shrink-0 bg-white dark:bg-slate-800 p-5 rounded-xl shadow-md transition-all duration-300 transform ${
                domain.hoverShadow
              } ${activeCard === index ? "scale-105 z-10 shadow-xl" : "hover:scale-105"}`}
            >
              <div className="flex items-center justify-center mb-4">
                {domain.icon}
              </div>
              <h3 className="text-lg font-semibold text-center mb-2 text-indigo-700 dark:text-indigo-300">
                {domain.title}
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-300 text-sm mb-4">
                {domain.caption}
              </p>

              <button
                disabled
                className="w-full py-2 px-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-lg shadow-md border-2 border-transparent cursor-default"
              >
                Explore
              </button>

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden mt-4 ${
                  activeCard === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="space-y-2 text-left text-sm">
                  {domain.details.map((item, idx) => (
                    <p key={idx} className="text-gray-600 dark:text-gray-300">
                      • {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerDomainCards;
