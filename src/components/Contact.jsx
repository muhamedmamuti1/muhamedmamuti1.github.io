import { useEffect, useState } from 'react'
import { FiArrowUpRight, FiCheck, FiCopy, FiMail, FiMapPin } from 'react-icons/fi'
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { contactChannels, profile } from '../data/content'
import { Reveal, SectionHeading } from './Reveal'

const icons = {
  linkedin: FaLinkedinIn,
  github: FaGithub,
  whatsapp: FaWhatsapp,
  location: FiMapPin,
}

const [emailUser, emailDomain] = profile.email.split('@')

export function Contact() {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const timer = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(timer)
  }, [copied])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeading index="04" eyebrow="Contact" title="Want to talk shop, or just say hi?">
          Whether it&apos;s a question about my work, a backend idea worth discussing, or simply
          to connect with a fellow developer, my inbox is always open.
        </SectionHeading>

        <Reveal className="contact-panel">
          <div className="contact-email">
            <p className="contact-label">Email is the fastest way to reach me</p>
            <a href={`mailto:${profile.email}`} className="contact-address">
              {emailUser}
              <wbr />@{emailDomain}
            </a>
            <div className="contact-actions">
              <a href={`mailto:${profile.email}`} className="btn btn-primary">
                <FiMail aria-hidden />
                Send an email
              </a>
              <button type="button" className="btn btn-ghost" onClick={copyEmail}>
                {copied ? <FiCheck aria-hidden /> : <FiCopy aria-hidden />}
                {copied ? 'Copied' : 'Copy address'}
              </button>
              <span className="visually-hidden" aria-live="polite">
                {copied ? 'Email address copied to clipboard' : ''}
              </span>
            </div>
          </div>

          <ul className="channel-list">
            {contactChannels.map((channel) => {
              const Icon = icons[channel.type]
              const content = (
                <>
                  <span className="channel-icon">
                    <Icon aria-hidden />
                  </span>
                  <span className="channel-text">
                    <span className="channel-label">{channel.label}</span>
                    <span className="channel-value">{channel.value}</span>
                  </span>
                  {channel.href && <FiArrowUpRight className="card-arrow" aria-hidden />}
                </>
              )

              return (
                <li key={channel.label}>
                  {channel.href ? (
                    <a href={channel.href} target="_blank" rel="noreferrer" className="channel">
                      {content}
                    </a>
                  ) : (
                    <div className="channel">{content}</div>
                  )}
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
