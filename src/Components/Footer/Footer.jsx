import "./Footer.css";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa6";

function Footer() {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="footer-glow"></div>

      <motion.div
        className="footer-wrapper"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >

        {/* ================= FOOTER TOP ================= */}

        <div className="footer-top">

          {/* Brand */}
          <div className="footer-brand">

            {/* EXACT NAVBAR LOGO */}
            <div className="logo">
              <i className="fa-solid fa-less-than"></i>

              <span>
                Yash{" "}
                <span className="lastName">
                  Singhal /
                </span>
              </span>

              <i className="fa-solid fa-greater-than lastName"></i>
            </div>

            <p>
              Full Stack Developer focused on building modern, responsive, and engaging web experiences.

            </p>

            <div className="footer-available">
              <span className="status-dot"></span>
              Available for opportunities
            </div>

          </div>


          {/* Connect */}
          <div className="footer-connect">

            <h3>Let's Connect</h3>

            <p>
              Have an idea or opportunity?
              <br />
              Let's build something together.
            </p>

            {/* Social Icons */}
            <div className="footer-socials">

              <a
                href="https://github.com/YashSinghal02"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/yashsinghal01/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://www.instagram.com/yashsinghal21/#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

            </div>

          </div>

        </div>


        {/* ================= DIVIDER ================= */}

        <div className="footer-divider"></div>


        {/* ================= BOTTOM ================= */}

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Yash Singhal. All rights reserved.
          </p>

          <p className="footer-built">
            Designed & Built with <span>React</span>
          </p>

        </div>

      </motion.div>


      {/* ================= BACK TO TOP ================= */}

      <AnimatePresence>
        {showTopButton && (
          <motion.button
            className="footer-top-btn"
            onClick={scrollTop}
            aria-label="Back to top"

            initial={{
              opacity: 0,
              scale: 0.7,
              y: 20,
            }}

            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}

            exit={{
              opacity: 0,
              scale: 0.7,
              y: 20,
            }}

            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}

            whileTap={{
              scale: 0.92,
            }}
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>

    </footer>
  );
}

export default Footer;