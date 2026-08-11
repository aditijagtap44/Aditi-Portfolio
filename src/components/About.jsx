import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="about">
      <div className="section-container">

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-tag">GET TO KNOW ME</p>
          <h2>About <span>Me</span></h2>
        </motion.div>

        <div className="about-content">

          <motion.div
            className="about-card"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-icon">{"</>"}</div>

            <h3>Building Ideas Into Reality</h3>

            <p>
              I am a Computer Science graduate passionate about software
              development, data analysis, and creating practical technology
              solutions.
            </p>

            <p>
              I enjoy working with Python, JavaScript, React, SQL, and
              data-related technologies to build useful and user-friendly
              applications.
            </p>

            <p>
              I am continuously learning new technologies and looking for
              opportunities where I can contribute, grow my technical skills,
              and solve real-world problems.
            </p>
          </motion.div>

          <motion.div
            className="about-info"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="info-item">
              <span>🎓</span>
              <div>
                <h4>Education</h4>
                <p>B.Tech in Computer Science & Engineering</p>
              </div>
            </div>

            <div className="info-item">
              <span>💻</span>
              <div>
                <h4>Focus</h4>
                <p>Software Development & Data Analytics</p>
              </div>
            </div>

            <div className="info-item">
              <span>🚀</span>
              <div>
                <h4>Currently Learning</h4>
                <p>Python Full Stack Development & Data Analytics</p>
              </div>
            </div>

            <div className="info-item">
              <span>📍</span>
              <div>
                <h4>Location</h4>
                <p> Pune,Maharashtra,India</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;