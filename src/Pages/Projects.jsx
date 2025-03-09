import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A sleek and modern personal portfolio showcasing skills and projects.",
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://yourportfolio.com",
  },
  {
    id: 2,
    title: "E-Commerce Store",
    description:
      "A fully functional e-commerce website with payment integration.",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://yourstore.com",
  },
  {
    id: 3,
    title: "Dashboard UI",
    description:
      "A powerful admin dashboard with analytics and user management.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://yourdashboard.com",
  },
  {
    id: 4,
    title: "Blog Platform",
    description:
      "A blog platform with user authentication and comment functionality.",
    image:
      "https://plus.unsplash.com/premium_photo-1683120974913-1ef17fdec2a8?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://yourblog.com",
  },
  {
    id: 5,
    title: "AI Chatbot",
    description:
      "An AI-powered chatbot built with React and OpenAI's GPT technology.",
    image:
      "https://images.unsplash.com/photo-1562813733-b31f71025d54?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://yourchatbot.com",
  },
  {
    id: 6,
    title: "Fitness Tracker App",
    description:
      "A mobile-friendly fitness tracking app with real-time progress monitoring.",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://yourfitnesstracker.com",
  },
];

const Projects = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
    });
  }, []);

  return (
    <div className="bg-gradient-to-b from-blue to-dark-blue w-full min-h-screen flex flex-col justify-center items-center overflow-hidden font-mono">
      {/* Scrollable Container */}
      <div className="w-full max-h-[90vh] overflow-y-auto scrollbar-hide flex flex-col items-center">
        {/* Page Title */}
        <h1
          className="text-3xl sm:text-5xl font-bold text-white font-mono my-8"
          data-aos="zoom-in"
        >
          My <span className="text-purple">Projects</span>
        </h1>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="relative bg-dark-blue rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-105"
              data-aos={index % 2 === 0 ? "flip-up" : "zoom-in"}
              style={{ width: "100%", maxWidth: "330px", margin: "auto" }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-36 object-cover"
              />

              <div className="p-4">
                <h2 className="text-lg font-bold text-purple mb-1">
                  {project.title}
                </h2>
                <p className="text-gray-400 text-xs mb-2">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 text-xs font-semibold text-white rounded-lg shadow-md transition-all duration-300 bg-gradient-to-r from-purple to-blue hover:from-blue hover:to-purple"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
