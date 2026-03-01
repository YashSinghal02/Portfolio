import './Home.css'
import { motion } from 'motion/react';
import HomeImg from '../../assets/homeimg.png'
import SocialMedIcons from '../../SocialMediaIcons/SocialMedIcons'
import AutoText from './AutoText';

function Home() {

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25
      }
    }
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  return (
    <motion.div
      id="home"
      className="home-offset"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <div className="contaner">

        {/* Background */}
        <div className="bg-circle-center">
          <div className="bg-circle-2"></div>
          <div className="bg-circle-3"></div>
          <div className="bg-circle"></div>
        </div>

        <div className="Intro-cnter">

          {/* Text Section */}
          <div className="auto-text">

            <motion.h3 variants={fadeUp}>
              Hi, Myself
            </motion.h3>

            <motion.h1 
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
            >
              Yash Singhal
            </motion.h1>

            <motion.div variants={fadeUp}>
              <AutoText />
            </motion.div>

          </div>

          {/* Image Section */}
          <motion.div
            className="home-img"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, 0, 0] 
            }}
            transition={{
              opacity: { duration: 1 },
              scale: { duration: 1 },
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <img src={HomeImg} alt="Yash Singhal" />
          </motion.div>

          {/* Tagline */}
          <motion.div
            className="tag-line"
            variants={fadeUp}
          >
            <p>
              Frontend web developer passionate about turning ideas into clean,
              dynamic, and engaging web experiences.
            </p>
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={fadeUp}>
            <SocialMedIcons />
          </motion.div>

        </div>
      </div>
    </motion.div>
  )
}

export default Home