import "./Projects.css";
import Button1 from "../Buttons/ButtonDark";
import gym from "../../assets/gym.png";
import tour from "../../assets/tour.png";
import education from "../../assets/education.png";
import samsung from "../../assets/samsung.png";
import TechMart from "../../assets/TechMart.png";
import wheather from "../../assets/wheather.png";
import HeadProject from "./HeadProject";
import ButtonDark from "../Buttons/ButtonDark";
import { motion } from "motion/react";
function Projects() {
  return (
    <div>
      <div className="about-heading">
        <h2>My Projects</h2>
      </div>
      <HeadProject />

      <div className="project-containers">
        {/* 1 */}
        <motion.div
          initial={{ scale: 0.8 }}
          whileInView={{
            scale: 1,

            transition: { duration: 0.3 },
          }}
          className="project-one"
        >
          <div className="project-img">
            <img src={TechMart} alt="" />
          </div>

          <div className="project-txt">
            <h2>TechMart</h2>
            <p>
              TechMart is your one-stop destination for the latest gadgets and
              accessories.We bring innovation,quality and unbeatable prices
              together making technology simple for everyone.
            </p>
            <div className="badge-flexx">
              <span className="badge1">ReactJS</span>
              <span className="badge1">TailwindCSS</span>
              <span className="badge1">Redux-Toolkit</span>
            </div>
            <div className="btns-flex">
              <a
                href="https://github.com/YashSinghal02/TechMart"
                target="_blank"
              >
                <Button1 name="Code" />
              </a>
              <a href="https://tech-mart-yash.vercel.app/" target="_blank">
                <Button1 name="Live View" />
              </a>
            </div>
          </div>
        </motion.div>
        {/* 2 */}
        <motion.div
          initial={{ scale: 0.8 }}
          whileInView={{
            scale: 1,

            transition: { duration: 0.3 },
          }}
          className="project-one"
        >
          <div className="project-img">
            <img src={gym} alt="" />
          </div>

          <div className="project-txt">
            <h2>Strength Lab</h2>
            <p>
              Gym website with class schedules and workouts.Book classes, track
              progress, and read fitness blogsEasy-to-use interface for a
              complete fitness experience
            </p>
            <div className="badge-flexx">
              <span className="badge1">ReactJs</span>
              <span className="badge1">Bootstrap</span>
            </div>
            <div className="btns-flex">
              <a
                href="https://github.com/YashSinghal02/Gym-Strength-Lab"
                target="_blank"
              >
                <Button1 name="Code" />
              </a>
              <a href="https://strengthlabgym.netlify.app/" target="_blank">
                <Button1 name="Live View" />
              </a>
            </div>
          </div>
        </motion.div>
        {/* 3 */}
        <motion.div
          initial={{ scale: 0.8 }}
          whileInView={{
            scale: 1,

            transition: { duration: 0.3 },
          }}
          className="project-one"
        >
          <div className="project-img">
            <img src={tour} alt="" />
          </div>

          <div className="project-txt">
            <h2>Ready To Go</h2>
            <p>
              Travel website offering various tour packages.Explore
              destinations, book trips, and view special offers.User-friendly
              interface for seamless travel planning.
            </p>
            <div className="badge-flexx">
              <span className="badge1">Bootstrap</span>
              <span className="badge1">JavaScript</span>
              <span className="badge1">JQuery</span>
            </div>
            <div className="btns-flex">
              <a
                href="https://github.com/YashSinghal02/Tour-Travel-Ready-ToGo-"
                target="_blank"
              >
                <Button1 name="Code" />
              </a>
              <a
                href="https://yashsinghal02.github.io/Tour-Travel-Ready-ToGo-/"
                target="_blank"
              >
                <Button1 name="Live View" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="project-containers">
        {/* 1 */}
        <motion.div
          initial={{ scale: 0.8 }}
          whileInView={{
            scale: 1,

            transition: { duration: 0.3 },
          }}
          className="project-one"
        >
          <div className="project-img">
            <img src={education} alt="" />
          </div>

          <div className="project-txt">
            <h2>Learning Platform</h2>
            <p>
              Various courses and resources.Interactive lessons and
              tutorials.Designed to boost skills and knowledge.
            </p>
            <div className="badge-flexx">
              <span className="badge1">Bootstrap</span>
              <span className="badge1">JavaScript</span>
            </div>
            <div className="btns-flex">
              <a
                href="https://github.com/YashSinghal02/Learning-Platform"
                target="_blank"
              >
                <Button1 name="Code" />
              </a>
              <a
                href="https://yashsinghal02.github.io/Learning-Platform/"
                target="_blank"
              >
                <Button1 name="Live View" />
              </a>
            </div>
          </div>
        </motion.div>
        {/* 2 */}
        <motion.div
          initial={{ scale: 0.8 }}
          whileInView={{
            scale: 1,

            transition: { duration: 0.3 },
          }}
          className="project-one"
        >
          <div className="project-img">
            <img src={samsung} alt="" />
          </div>

          <div className="project-txt">
            <h2>Samsung Clone</h2>
            <p>
              E-commerce website replicating Samsung’s online store.Browse
              products, view details, and explore offers.Clean and user-friendly
              interface for seamless shopping.
            </p>
            <div className="badge-flexx">
              <span className="badge1">HTML</span>
              <span className="badge1">CSS</span>
              <span className="badge1">JavaScript</span>
            </div>
            <div className="btns-flex">
              <a href="https://github.com/YashSinghal02/Sam" target="_blank">
                <Button1 name="Code" />
              </a>
              <a
                href="https://ssamsunggclonebyyash.netlify.app/"
                target="_blank"
              >
                <Button1 name="Live View" />
              </a>
            </div>
          </div>
        </motion.div>
        {/* 3 */}
        <motion.div
          initial={{ scale: 0.8 }}
          whileInView={{
            scale: 1,

            transition: { duration: 0.3 },
          }}
          className="project-one"
        >
          <div className="project-img">
            <img src={wheather} alt="" />
          </div>

          <div className="project-txt">
            <h2>Weather App</h2>
            <p>
              Displays real-time weather updates for any location.Shows
              temperature, humidity, and forecasts.Simple interface for quick
              and easy weather checks.
            </p>
            <div className="badge-flexx">
              <span className="badge1">HTML</span>
              <span className="badge1">CSS</span>
              <span className="badge1">JavaScript</span>
            </div>
            <div className="btns-flex">
              <a
                href="https://github.com/YashSinghal02/Weather-App"
                target="_blank"
              >
                <Button1 name="Code" />
              </a>
              <a href="https://weather-app-by-yash.vercel.app/" target="_blank">
                <Button1 name="Live View" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ scale: 0.8 }}
        whileInView={{
          scale: 1,

          transition: { duration: 0.3 },
        }}
        className="viewallbtn"
      >
        <a href="https://github.com/YashSinghal02" target="_blank">
          <ButtonDark name="View All" />
        </a>
      </motion.div>
    </div>
  );
}

export default Projects;
