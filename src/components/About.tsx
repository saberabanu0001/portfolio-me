import { motion } from 'framer-motion'
import { aboutContent } from '../content'

const About = () => {
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

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
        >
          <span className="section-number">01.</span>
          <h2 className="section-title">{aboutContent.heading}</h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="about-content single-column">
          <motion.div
            className="about-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.p className="about-micro-intro" variants={fadeInUp}>
              {aboutContent.microIntro}
            </motion.p>
            
            {aboutContent.paragraphs.map((paragraph) => (
              <motion.p key={paragraph.substring(0, 20)} variants={fadeInUp}>
                {paragraph}
              </motion.p>
            ))}

            <motion.p className="about-impact" variants={fadeInUp}>
              {aboutContent.impact}
            </motion.p>

            <motion.p className="about-personal" variants={fadeInUp}>
              {aboutContent.personalNote}
            </motion.p>

            <motion.div className="about-highlights" variants={fadeInUp}>
              {aboutContent.highlights.map((item) => (
                <div key={item.label} className="highlight-card">
                  <span className="highlight-icon" aria-hidden="true">
                    {item.icon}
                  </span>
                  <span className="highlight-label">{item.label}</span>
                  <span className="highlight-value">{item.value}</span>
                </div>
              ))}
            </motion.div>

            <motion.div className="principles" variants={fadeInUp}>
              <h3>Guiding principles</h3>
              <ul>
                {aboutContent.principles.map((principle) => (
                  <li key={principle.text}>
                    <span aria-hidden="true">{principle.icon}</span>
                    {principle.text}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

