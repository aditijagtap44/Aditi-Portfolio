import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <motion.div
          className="footer-logo"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Aditi<span>.</span>
        </motion.div>

        <p className="footer-text">
          Building meaningful digital experiences with code,
          creativity, and data.
        </p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-socials">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
        </div>

        <div className="footer-line"></div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Aditi Jagtap. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;