import { motion } from "framer-motion";

const experiences = [
  {
    year: "Mar 2025 – Apr 2025",
    title: "Generative AI Intern",
    company: "SystemTron",
    description:
      "Worked on Generative AI concepts and explored practical applications of AI technologies through hands-on tasks and projects.",
    icon: "🤖",
  },
  {
    year: "Oct 2024 – Nov 2024",
    title: "Oracle SQL Intern",
    company: "LearnTech",
    description:
      "Worked with Oracle SQL and database concepts while gaining practical experience in writing queries and working with relational databases.",
    icon: "🗄️",
  },
];

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="section-container">

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-tag">MY JOURNEY</p>

          <h2>
            Experience & <span>Internships</span>
          </h2>

          <p className="experience-intro">
            My practical experience and learning journey in technology.
          </p>
        </motion.div>

        <div className="timeline">

          {experiences.map((experience, index) => (
            <motion.div
              className="timeline-item"
              key={experience.title}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -60 : 60,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
              }}
            >
              <div className="timeline-dot">
                {experience.icon}
              </div>

              <div className="timeline-card">
                <span className="timeline-year">
                  {experience.year}
                </span>

                <h3>{experience.title}</h3>

                <h4>{experience.company}</h4>

                <p>{experience.description}</p>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;