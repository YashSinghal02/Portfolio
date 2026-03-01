import "./Projects.css";
import HeadProject from "./HeadProject";
import ButtonDark from "../Buttons/ButtonDark";
import Button1 from "../Buttons/ButtonDark";
import { motion } from "motion/react";

import gym from "../../assets/gym.png";
import tour from "../../assets/tour.png";
import education from "../../assets/education.png";
import samsung from "../../assets/samsung.png";
import TechMart from "../../assets/TechMart.png";
import wheather from "../../assets/wheather.png";

function Projects() {
  /* ================= Animation Variants ================= */

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95,
    rotateX: 8,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1], // premium cubic bezier
    },
  },
};
  /* ================= Projects Data ================= */

  const projects = [
    {
      title: "TechMart",
      image: TechMart,
      description:
        "TechMart is your one-stop destination for the latest gadgets and accessories. We bring innovation, quality, and unbeatable prices together — making technology simple for everyone.",
      tech: ["ReactJS", "TailwindCSS", "Redux Toolkit"],
      code: "https://github.com/YashSinghal02/TechMart",
      live: "https://tech-mart-yash.vercel.app/",
    },
    {
      title: "Strength Lab",
      image: gym,
      description:
        "Gym website with class schedules and workouts. Book classes, track progress, and read fitness blogs with an easy-to-use interface for a complete fitness experience.",
      tech: ["ReactJS", "Bootstrap"],
      code: "https://github.com/YashSinghal02/Gym-Strength-Lab",
      live: "https://strengthlabgym.netlify.app/",
    },
    {
      title: "Ready To Go",
      image: tour,
      description:
        "Travel website offering various tour packages. Explore destinations, book trips, and view special offers with a seamless and user-friendly experience.",
      tech: ["Bootstrap", "JavaScript", "jQuery"],
      code: "https://github.com/YashSinghal02/Tour-Travel-Ready-ToGo-",
      live: "https://yashsinghal02.github.io/Tour-Travel-Ready-ToGo-/",
    },
    {
      title: "Learning Platform",
      image: education,
      description:
        "An educational platform offering courses and interactive lessons designed to boost skills and knowledge efficiently.",
      tech: ["Bootstrap", "JavaScript"],
      code: "https://github.com/YashSinghal02/Learning-Platform",
      live: "https://yashsinghal02.github.io/Learning-Platform/",
    },
    {
      title: "Samsung Clone",
      image: samsung,
      description:
        "E-commerce website replicating Samsung’s online store. Browse products, explore offers, and enjoy a clean shopping interface.",
      tech: ["HTML", "CSS", "JavaScript"],
      code: "https://github.com/YashSinghal02/Sam",
      live: "https://ssamsunggclonebyyash.netlify.app/",
    },
    {
      title: "Weather App",
      image: wheather,
      description:
        "Real-time weather app displaying temperature, humidity, and forecasts for any location with a clean and simple UI.",
      tech: ["HTML", "CSS", "JavaScript"],
      code: "https://github.com/YashSinghal02/Weather-App",
      live: "https://weather-app-by-yash.vercel.app/",
    },
  ];

  /* ================= Component ================= */

  return (
    <div className="projects-section">
      {/* Heading */}
      <motion.div
        className="about-heading"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>My Projects</h2>
      </motion.div>

      {/* Intro Section */}
      <HeadProject />

      {/* Projects Grid */}
      <motion.div
        className="project-containers"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div key={index} variants={item} className="project-one">
            <div className="project-img">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-txt">
              <h2>{project.title}</h2>
              <p>{project.description}</p>

              <div className="badge-flexx">
                {project.tech.map((techItem, i) => (
                  <span key={i} className="badge1">
                    {techItem}
                  </span>
                ))}
              </div>

              <div className="btns-flex">
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button1 name="Code" />
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button1 name="Live View" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* View All Button */}
      <motion.div
        className="viewallbtn"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <a
          href="https://github.com/YashSinghal02"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ButtonDark name="View All" />
        </a>
      </motion.div>
    </div>
  );
}

export default Projects;