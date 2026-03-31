import { motion } from 'framer-motion'
import { hackathons } from '../content'

const Hackathons = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
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
        <section id="hackathons" className="hackathons">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    variants={fadeInUp}
                >
                    <span className="section-number">04.</span>
                    <h2 className="section-title">Hackathons & Events</h2>
                    <div className="section-line"></div>
                </motion.div>

                <motion.div
                    className="hackathons-grid"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    variants={staggerContainer}
                >
                    {hackathons.map((item, index) => (
                        <motion.div key={index} className="hackathon-card" variants={fadeInUp}>
                            <div className="hackathon-header">
                                <div className="hackathon-badge">{item.status}</div>
                                <span className="hackathon-date">{item.date}</span>
                            </div>

                            <div className="hackathon-content">
                                <h3 className="hackathon-event">{item.event}</h3>
                                {item.project && (
                                    <p className="hackathon-project">
                                        <span className="label">Project:</span> {item.project}
                                    </p>
                                )}
                                {item.organization && (
                                    <p className="hackathon-org">
                                        <span className="label">Organized by:</span> {item.organization}
                                    </p>
                                )}
                                <p className="hackathon-description">{item.description}</p>

                                <div className="hackathon-tech">
                                    {item.tech.map((tech, idx) => (
                                        <span key={idx} className="tech-tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Hackathons
