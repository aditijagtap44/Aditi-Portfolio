import { motion } from "framer-motion";

const certifications = [
  {
    title: "Programming in Python",
    organization: "NPTEL",
    description:
      "Completed certification focused on Python programming fundamentals, problem solving, and programming concepts.",
    icon: "🐍",
  },
  {
    title: "Cloud Computing",
    organization: "NPTEL",
    description:
      "Completed certification covering cloud computing concepts, architecture, services, and technologies.",
    icon: "☁️",
  },
  {
    title: "Data Analysis & Data Visualization with Python",
    organization: "IBM",
    description:
      "Learned practical techniques for data analysis and visualization using Python and popular data science libraries.",
    icon: "📊",
  },
  {
    title: "Generative AI",
    organization: "IBM SkillsBuild",
    description:
      "Completed learning focused on Generative AI concepts, applications, and emerging AI technologies.",
    icon: "🤖",
  },
];

function Certifications() {
  return (
    <section id="certifications" className="certifications-section">
      <div className="section-container">

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-tag">MY ACHIEVEMENTS</p>

          <h2>
            My <span>Certifications</span>
          </h2>

          <p className="certifications-intro">
            Certifications and courses that have strengthened my
            technical knowledge and practical skills.
          </p>
        </motion.div>

        <div className="certifications-grid">
          {certifications.map((certification, index) => (
            <motion.div
              className="certification-card"
              key={certification.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
            >
              <div className="certification-top">
                <div className="certification-icon">
                  {certification.icon}
                </div>

                <span className="certificate-badge">
                  ✓ Certified
                </span>
              </div>

              <h3>{certification.title}</h3>

              <h4>{certification.organization}</h4>

              <p>{certification.description}</p>

              <button className="certificate-button">
                View Certificate →
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certifications;