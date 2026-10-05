import { motion } from 'framer-motion'
import { education, activities } from '../content'

const Education = () => {
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
    <section id="education" className="education">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
        >
          <span className="section-number">06.</span>
          <h2 className="section-title">Education & Beyond</h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="education-grid">
          <motion.div
            className="education-cards"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
          >
            {education.map((item) => (
              <article key={item.institution} className="education-card">
                <header>
                  {item.logo && (
                    <div className="education-logo">
                      <img src={item.logo} alt={`${item.institution} logo`} />
                    </div>
                  )}
                  <div>
                    <h3>{item.institution}</h3>
                    <p>{item.degree}</p>
                  </div>
                </header>
                <div className="education-meta">
                  <span>{item.period}</span>
                  <span>{item.location}</span>
                </div>
                <ul>
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </motion.div>

          <motion.aside
            className="activities"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
          >
            <h3>Beyond the classroom</h3>
            <ul>
              {activities.map((activity) => (
                <li key={activity}>{activity}</li>
              ))}
            </ul>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}

export default Education
