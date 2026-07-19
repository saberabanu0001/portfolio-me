import { motion } from 'framer-motion'
import { aboutContent } from '../content'
import { Rocket } from './Icons'

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

        <motion.div
          className="about-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.p className="about-intro" variants={fadeInUp}>
            <Rocket size={20} className="about-intro-icon" aria-hidden="true" />
            <span>{aboutContent.intro}</span>
          </motion.p>

          <div className="about-columns">
            {aboutContent.columns.map((column) => (
              <motion.div key={column.label} className="about-column" variants={fadeInUp}>
                <h3 className="about-column-label">{column.label}</h3>
                {column.paragraphs.map((paragraph) => (
                  <p key={paragraph.substring(0, 24)}>{paragraph}</p>
                ))}
              </motion.div>
            ))}
          </div>

          <motion.p className="about-personal" variants={fadeInUp}>
            {aboutContent.personalNote}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default About
