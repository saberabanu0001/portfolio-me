import { Github, LinkedIn, Twitter, Email, Facebook } from './Icons'
import { contact } from '../content'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const icons = {
    github: Github,
    linkedin: LinkedIn,
    twitter: Twitter,
    email: Email,
    facebook: Facebook,
  } as const

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-links">
            {contact.socials.map((social) => {
              const Icon = icons[social.icon as keyof typeof icons] ?? Github
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.name}
                >
                  <Icon />
                </a>
              )
            })}
            <a href={`mailto:${contact.email}`} className="social-link" aria-label="Email">
              <Email />
            </a>
          </div>
          <p className="footer-text">
            Designed & Built by <span className="highlight">Sabera Banu</span>
          </p>
          <p className="footer-copyright">© {currentYear} All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

