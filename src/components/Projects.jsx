import { motion } from "framer-motion";

const projects = [
  {
    title: "SkillSwap",
    category: "Full Stack Web Application",
    description:
      "A peer-to-peer skill exchange platform where users can connect, share skills, communicate, and learn from each other.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    icon: "🔄",
    github: "#",
    demo: "#",
  },
  {
    title: "SensorPulse",
    category: "IoT Dashboard",
    description:
      "A responsive telemetry dashboard that displays real-time sensor data with interactive charts, statistics, alerts, and sensor status.",
    technologies: ["React.js", "JavaScript", "Recharts", "CSS"],
    icon: "📡",
    github: "#",
    demo: "#",
  },
  {
    title: "Starbucks Nutrition Analysis",
    category: "Data Analytics",
    description:
      "A data analysis project that explores Starbucks beverage nutrition data to compare calories, sugar, fat, caffeine, and other nutritional values.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    icon: "☕",
    github: "#",
    demo: "#",
  },
  {
    title: "Online Book Store",
    category: "Web Application",
    description:
      "An online bookstore website that allows users to browse books and interact with a database-driven web application.",
    technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
    icon: "📚",
    github: "#",
    demo: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="section-container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-tag">MY WORK</p>

          <h2>
            Featured <span>Projects</span>
          </h2>

          <p className="projects-intro">
            A selection of projects that demonstrate my development,
            data analysis, and problem-solving skills.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -12 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
            >
              <div className="project-top">
                <div className="project-icon">
                  {project.icon}
                </div>

                <div className="project-links">
                  <a href={project.github}>GitHub ↗</a>
                  <a href={project.demo}>Demo ↗</a>
                </div>
              </div>

              <p className="project-category">
                {project.category}
              </p>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="technology-list">
                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;