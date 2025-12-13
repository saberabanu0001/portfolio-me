import { motion } from 'framer-motion'
import { experiences } from '../content'

const Experience = () => {
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
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
        >
          <span className="section-number">04.</span>
          <h2 className="section-title">Experience</h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="experience-list">
          {experiences.map((experience) => (
            <motion.article
              key={`${experience.organization}-${experience.role}`}
              className="experience-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeInUp}
            >
              <header className="experience-card-header">
                <div>
                  <h3>{experience.role}</h3>
                  {experience.url ? (
                    <a href={experience.url} target="_blank" rel="noopener noreferrer" className="experience-org">
                      {experience.organization}
                    </a>
                  ) : (
                    <p>{experience.organization}</p>
                  )}
                </div>
                <div className="experience-meta">
                  <span>{experience.period}</span>
                  <span>{experience.location}</span>
                </div>
              </header>
              <ul>
                {experience.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
