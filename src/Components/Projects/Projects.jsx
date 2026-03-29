import "./Projects.css";
import HeadProject from "./HeadProject";
import ButtonDark from "../Buttons/ButtonDark";
import Button1 from "../Buttons/ButtonDark";
import { motion } from "motion/react";
import HireBase from "../../assets/HireBase.png";
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
    title: "HireBase",
    image: HireBase,
    description:
      "A full-stack MERN job portal built to simulate real-world hiring workflows. Features secure authentication, role-based dashboards, job posting, and application tracking with a scalable architecture.",
    tech: ["ReactJS", "Node.js", "Express.js", "MongoDB"],
    code: "https://github.com/YashSinghal02/HireBase-Frontend",
    live: "https://hirebase-app.vercel.app/",
  },
  {
    title: "TechMart",
    image: TechMart,
    description:
      "A modern e-commerce frontend focused on performance and user experience. Includes product browsing, dynamic cart management, state handling with Redux Toolkit, and responsive UI design for seamless shopping across devices.",
    tech: ["ReactJS", "TailwindCSS", "Redux Toolkit"],
    code: "https://github.com/YashSinghal02/TechMart",
    live: "https://tech-mart-yash.vercel.app/",
  },
  {
    title: "Strength Lab",
    image: gym,
    description:
      "A responsive fitness website showcasing gym services, workout programs, and class schedules. Built with interactive UI sections and mobile-first design to enhance user engagement and accessibility.",
    tech: ["ReactJS", "Bootstrap"],
    code: "https://github.com/YashSinghal02/Gym-Strength-Lab",
    live: "https://strengthlabgym.netlify.app/",
  },
  {
    title: "Ready To Go",
    image: tour,
    description:
      "A travel booking website offering curated tour packages with destination exploration, pricing details, and user-friendly navigation. Designed to provide a smooth browsing and booking experience.",
    tech: ["Bootstrap", "JavaScript", "jQuery"],
    code: "https://github.com/YashSinghal02/Tour-Travel-Ready-ToGo-",
    live: "https://yashsinghal02.github.io/Tour-Travel-Ready-ToGo-/",
  },
  {
    title: "Learning Platform",
    image: education,
    description:
      "An educational platform delivering structured learning content with interactive UI. Focused on improving accessibility and engagement for users looking to enhance their skills online.",
    tech: ["HTML", "CSS","Bootstrap", "JavaScript"],
    code: "https://github.com/YashSinghal02/Learning-Platform",
    live: "https://yashsinghal02.github.io/Learning-Platform/",
  },
  {
    title: "Samsung Clone",
    image: samsung,
    description:
      "A frontend clone of Samsung’s official website, built to replicate real-world UI/UX patterns. Focused on layout precision, responsiveness, and clean design implementation.",
    tech: ["HTML", "CSS", "JavaScript"],
    code: "https://github.com/YashSinghal02/Sam",
    live: "https://ssamsunggclonebyyash.netlify.app/",
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