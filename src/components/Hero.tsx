import { useState } from 'react'
import { motion } from 'framer-motion'
import { heroContent } from '../content'

const Hero = () => {
  const [showPhoto, setShowPhoto] = useState(true)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="home" className="hero">
      <motion.div
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-content" variants={itemVariants}>
          <p className="hero-greeting">{heroContent.greeting}</p>
          <h1 className="hero-name">
            <span className="gradient-text">{heroContent.name}</span>
          </h1>
          <h2 className="hero-title">{heroContent.title}</h2>
          <p className="hero-description">{heroContent.description}</p>
          <ul className="hero-meta">
            <li>{heroContent.location}</li>
            <li>{heroContent.availability}</li>
          </ul>
          <div className="hero-cta">
            <a href={heroContent.primaryCta.href} className="btn btn-primary">
              {heroContent.primaryCta.label}
            </a>
            <a href={heroContent.secondaryCta.href} className="btn btn-secondary">
              {heroContent.secondaryCta.label}
            </a>
          </div>
        </motion.div>

        <motion.div className="hero-image" variants={itemVariants}>
          <div className="image-wrapper">
            {showPhoto && (
              <img
                src="/sabera-profile-pic.jpeg"
                alt="Sabera Banu"
                className="profile-photo"
                onError={() => setShowPhoto(false)}
              />
            )}
            <div className={`gradient-orb ${showPhoto ? 'behind-photo' : ''}`}></div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero

