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

        <div className="about-content">
          <motion.div
            className="about-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            {aboutContent.paragraphs.map((paragraph) => (
              <motion.p key={paragraph.substring(0, 20)} variants={fadeInUp}>
                {paragraph}
              </motion.p>
            ))}

            <motion.div className="about-highlights" variants={fadeInUp}>
              {aboutContent.highlights.map((item) => (
                <div key={item.label} className="highlight-card">
                  <span className="highlight-label">{item.label}</span>
                  <span className="highlight-value">{item.value}</span>
                </div>
              ))}
            </motion.div>

            <motion.div className="principles" variants={fadeInUp}>
              <h3>Guiding principles</h3>
              <ul>
                {aboutContent.principles.map((principle) => (
                  <li key={principle}>{principle}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            className="about-image"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
          >
            <div className="image-frame">
              <div className="image-content"></div>
              <div className="image-border"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

