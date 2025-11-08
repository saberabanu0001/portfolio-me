import { motion } from 'framer-motion'
import { skills } from '../content'

const Skills = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
        >
          <span className="section-number">04.</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="section-line"></div>
        </motion.div>

        <motion.div
          className="skills-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
        >
          {skills.categories.map((category) => (
            <motion.div
              key={category.name}
              className="skill-card"
              variants={fadeInUp}
              whileHover={{ scale: 1.04, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="skill-card-header">
                <h3>{category.name}</h3>
              </div>
              <div className="skill-list">
                {category.items.map((skill, index) => (
                  <div key={skill.label} className="skill-bar-wrapper">
                    <div className="skill-header">
                      <span className="skill-name">{skill.label}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="skills-bottom"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
        >
          <div className="soft-skills">
            <h3>Human skills I rely on</h3>
            <div className="tech-tags">
              {skills.softSkills.map((skill) => (
                <span key={skill} className="tech-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="learning">
            <h3>Currently leveling up</h3>
            <div className="tech-tags">
              {skills.learning.map((item) => (
                <span key={item} className="tech-tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

