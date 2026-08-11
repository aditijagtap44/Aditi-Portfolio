import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg"></div>

      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="hero-intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            👋 Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Aditi <span>Jagtap</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            Software Engineer , Web Developer & Data Analyst
          </motion.h2>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            I build modern web applications and data-driven solutions
            using Python, React, JavaScript, SQL, and modern technologies.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
          >
            <a href="#projects" className="primary-btn">
              View My Projects →
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </motion.div>

          <motion.div
            className="social-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <a href="#" target="_blank" rel="noreferrer">
              GitHub
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="glow-circle"></div>

          <motion.div
            className="code-card"
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="code-header">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <pre>
{`const developer = {
  name: "Aditi Jagtap",
  role: "Software Engineer",
  skills: [
    "Python",
    "React",
    "JavaScript",
    "SQL"
  ],
  passion: "Building & Learning"
};`}
            </pre>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;