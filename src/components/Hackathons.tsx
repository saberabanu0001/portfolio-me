import { useEffect, useState, type MouseEvent } from 'react'
import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'
import { hackathons } from '../content'

const WARM_HACKATHON_STATUSES = new Set(['Featured Project', 'Innovation Track'])

type HackathonImage = { src: string; alt?: string }

type HackathonItem = (typeof hackathons)[number] & {
  images?: HackathonImage[]
  image?: string
  imageAlt?: string
}

function getImages(item: HackathonItem): HackathonImage[] {
  if (item.images && item.images.length > 0) return item.images
  if (item.image) return [{ src: item.image, alt: item.imageAlt }]
  return []
}

const HackathonGallery = ({ images, event }: { images: HackathonImage[]; event: string }) => {
  const [index, setIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const hasMultiple = images.length > 1
  const current = images[index]

  const goPrev = (e?: MouseEvent) => {
    e?.stopPropagation()
    setIndex((i) => (i - 1 + images.length) % images.length)
  }

  const goNext = (e?: MouseEvent) => {
    e?.stopPropagation()
    setIndex((i) => (i + 1) % images.length)
  }

  const openLightbox = () => setLightboxOpen(true)
  const closeLightbox = () => setLightboxOpen(false)

  useEffect(() => {
    if (!lightboxOpen) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft' && hasMultiple) {
        setIndex((i) => (i - 1 + images.length) % images.length)
      }
      if (e.key === 'ArrowRight' && hasMultiple) {
        setIndex((i) => (i + 1) % images.length)
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [lightboxOpen, hasMultiple, images.length])

  return (
    <>
      <div className={`hackathon-gallery${hasMultiple ? ' has-multiple' : ''}`}>
        <div className="hackathon-image-wrapper">
          <button
            type="button"
            className="hackathon-image-trigger"
            onClick={openLightbox}
            aria-label={`View full photo: ${current.alt ?? event}`}
          >
            <img
              src={current.src}
              alt={current.alt ?? `${event} photo ${index + 1}`}
              className="hackathon-image"
            />
          </button>

          {hasMultiple && (
            <>
              <button
                type="button"
                className="hackathon-gallery-nav prev"
                onClick={goPrev}
                aria-label="Previous photo"
              >
                ‹
              </button>
              <button
                type="button"
                className="hackathon-gallery-nav next"
                onClick={goNext}
                aria-label="Next photo"
              >
                ›
              </button>
              <span className="hackathon-gallery-count">
                {index + 1} / {images.length}
              </span>
            </>
          )}
        </div>

        {hasMultiple && (
          <div className="hackathon-gallery-dots" role="tablist" aria-label="Photo gallery">
            {images.map((img, i) => (
              <button
                key={img.src}
                type="button"
                className={`hackathon-gallery-dot${i === index ? ' active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation()
                  setIndex(i)
                }}
                aria-label={`Show photo ${i + 1}`}
                aria-selected={i === index}
              />
            ))}
          </div>
        )}
      </div>

      {lightboxOpen &&
        createPortal(
          <div
            className="hackathon-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Full-size photo"
            onClick={closeLightbox}
          >
            <button
              type="button"
              className="hackathon-lightbox-close"
              onClick={closeLightbox}
              aria-label="Close full photo"
            >
              ×
            </button>

            {hasMultiple && (
              <button
                type="button"
                className="hackathon-lightbox-nav prev"
                onClick={(e) => {
                  e.stopPropagation()
                  goPrev()
                }}
                aria-label="Previous photo"
              >
                ‹
              </button>
            )}

            <img
              src={current.src}
              alt={current.alt ?? `${event} photo ${index + 1}`}
              className="hackathon-lightbox-image"
              onClick={(e) => e.stopPropagation()}
            />

            {hasMultiple && (
              <button
                type="button"
                className="hackathon-lightbox-nav next"
                onClick={(e) => {
                  e.stopPropagation()
                  goNext()
                }}
                aria-label="Next photo"
              >
                ›
              </button>
            )}

            {hasMultiple && (
              <span className="hackathon-lightbox-count">
                {index + 1} / {images.length}
              </span>
            )}
          </div>,
          document.body,
        )}
    </>
  )
}

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
          {hackathons.map((item, index) => {
            const images = getImages(item as HackathonItem)
            return (
              <motion.div key={index} className="hackathon-card" variants={fadeInUp}>
                <div className="hackathon-header">
                  <div
                    className={`hackathon-badge${
                      WARM_HACKATHON_STATUSES.has(item.status) ? ' badge-warm' : ''
                    }`}
                  >
                    {item.status}
                  </div>
                  <span className="hackathon-date">{item.date}</span>
                </div>

                <div className="hackathon-content">
                  <h3 className="hackathon-event">{item.event}</h3>
                  {'project' in item && item.project && (
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

                  {images.length > 0 && <HackathonGallery images={images} event={item.event} />}

                  <div className="hackathon-tech">
                    {item.tech.map((tech, idx) => (
                      <span key={idx} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Hackathons
