import { motion } from "framer-motion";

const skills = [
  { name: "Python", icon: "🐍", level: "Advanced" },
  { name: "JavaScript", icon: "🟨", level: "Intermediate" },
  { name: "HTML", icon: "🌐", level: "Advanced" },
  { name: "CSS", icon: "🎨", level: "Intermediate" },
  { name: "React.js", icon: "⚛️", level: "Intermediate" },
  { name: "Node.js", icon: "🟢", level: "Intermediate" },
  { name: "SQL", icon: "🗄️", level: "Advanced" },
  { name: "MongoDB", icon: "🍃", level: "Intermediate" },
  { name: "Pandas", icon: "🐼", level: "Advanced" },
  { name: "NumPy", icon: "🔢", level: "Advanced" },
  { name: "Matplotlib", icon: "📈", level: "Intermediate" },
  { name: "Seaborn", icon: "📊", level: "Intermediate" },
  { name: "Machine Learning", icon: "🤖", level: "Intermediate" },
  { name: "Power BI", icon: "📊", level: "Intermediate" },
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="section-container">

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-tag">MY TECHNOLOGIES</p>

          <h2>
            Skills & <span>Expertise</span>
          </h2>

          <p className="skills-intro">
            Technologies and tools I use to build applications,
            analyze data, and solve problems.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              className="skill-card"
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >
              <div className="skill-icon">
                {skill.icon}
              </div>

              <div className="skill-info">
                <h3>{skill.name}</h3>

                <p>{skill.level}</p>
              </div>

              <div className="skill-arrow">
                →
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;