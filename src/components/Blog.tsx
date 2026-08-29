import { motion } from 'framer-motion'
import { blogPosts } from '../content'

const Blog = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  return (
    <section id="blog" className="blog">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
        >
          <span className="section-number">05.</span>
          <h2 className="section-title">Journal</h2>
          <div className="section-line"></div>
        </motion.div>

        <motion.p
          className="blog-intro"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
        >
          Activities, places, and moments — a running log of what I&apos;m building and exploring.
        </motion.p>

        <motion.div
          className="blog-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          {blogPosts.map((post) => (
            <motion.article key={post.title + post.date} className="blog-card" variants={fadeInUp}>
              <div className="blog-card-header">
                {post.category && <span className="blog-category">{post.category}</span>}
                <time className="blog-date" dateTime={post.date}>
                  {post.date}
                </time>
              </div>

              <h3 className="blog-title">{post.title}</h3>

              {post.location && (
                <p className="blog-location">
                  <span className="label">Where:</span> {post.location}
                </p>
              )}

              <p className="blog-excerpt">{post.description}</p>

              {post.image && (
                <div className="blog-image-wrapper">
                  <img src={post.image} alt={post.imageAlt ?? post.title} className="blog-image" />
                </div>
              )}

              {post.tags && post.tags.length > 0 && (
                <div className="blog-tags">
                  {post.tags.map((tag) => (
                    <span key={tag} className="blog-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Blog
