import { motion } from 'framer-motion'
import { awards } from '../content'
import { GraduationCap, Star, Trophy, User } from './Icons'

const Awards = () => {
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
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <section id="awards" className="awards">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
        >
          <span className="section-number">03.</span>
          <h2 className="section-title">Awards & Recognition</h2>
          <div className="section-line"></div>
        </motion.div>

        <motion.div
          className="awards-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          {awards.map((award, index) => (
            <motion.article key={index} className="award-card" variants={fadeInUp}>
              <div className="award-badge">
                <span className="award-icon" aria-hidden="true">
                  <Trophy size={18} />
                </span>
                <span className="award-badge-text">Award Winner</span>
              </div>

              <div className="award-content">
                <h3 className="award-title">{award.title}</h3>
                <p className="award-project">
                  <span className="award-label">Project:</span> {award.project}
                </p>
                <p className="award-organization">
                  <span className="award-label">Organization:</span> {award.organization}
                </p>
                <p className="award-date">
                  <span className="award-label">Date:</span> {award.date}
                </p>

                <p className="award-description">{award.description}</p>

                {award.image && (
                  <div className="award-image-wrapper">
                    <img
                      src={award.image}
                      alt={award.imageAlt || `${award.title} ceremony`}
                      className="award-image"
                    />
                  </div>
                )}

                <div className="award-team">
                  <h4 className="award-team-title">Team Members:</h4>
                  <ul className="award-team-list">
                    {award.teamMembers.map((member, idx) => (
                      <li key={idx} className={member === 'Sabera Banu' ? 'highlight' : ''}>
                        <span className="award-list-icon" aria-hidden="true">
                          {member === 'Sabera Banu' ? <Star size={16} /> : <User size={16} />}
                        </span>
                        {member}
                      </li>
                    ))}
                  </ul>
                </div>

                {award.professors && award.professors.length > 0 && (
                  <div className="award-professors">
                    <h4 className="award-professors-title">Awarded by:</h4>
                    <ul className="award-professors-list">
                      {award.professors.map((prof, idx) => (
                        <li key={idx}>
                          <span className="award-list-icon" aria-hidden="true">
                            <GraduationCap size={16} />
                          </span>
                          <span>
                            <strong>{prof.name}</strong> — {prof.role}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Awards

