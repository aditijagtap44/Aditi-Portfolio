import { motion } from "framer-motion";

function Education() {
  return (
    <section id="education" className="education">
      <div className="section-container">

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-tag">MY EDUCATION</p>

          <h2>
            Academic <span>Background</span>
          </h2>

          <p className="education-intro">
            My academic journey and educational background in
            Computer Science and Engineering.
          </p>
        </motion.div>

        <div className="education-timeline">

          <motion.div
            className="education-card"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="education-icon">
              🎓
            </div>

            <div className="education-content">
              <span className="education-year">
                2022 – 2026
              </span>

              <h3>
                B.Tech in Computer Science & Engineering
              </h3>

              <h4>
                Sanjeevan Group Of Institutions, Panhala
              </h4>

              <p>
                Completed my Bachelor of Technology in Computer
                Science and Engineering with a focus on software
                development, data analytics, and emerging
                technologies.
              </p>

              <div className="education-result">
                CGPA: <strong>8.3</strong>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Education;