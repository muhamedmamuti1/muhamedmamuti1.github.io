import { FiFileText } from 'react-icons/fi'
import { experiences, profile } from '../data/content'
import { Reveal, SectionHeading } from './Reveal'

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeading index="01" eyebrow="Experience" title="Crafting products across startups, enterprises, and academia." />

        <ol className="xp-list">
          {experiences.map((item) => (
            <Reveal as="li" key={`${item.company}-${item.period}`} className="xp-item">
              <div className="xp-meta">
                <p className="xp-period">
                  {item.current && <span className="status-dot" aria-hidden />}
                  {item.period}
                </p>
                <p className="xp-location">{item.location}</p>
              </div>

              <div className="xp-body">
                <h3>
                  {item.role}
                  <span className="xp-company">
                    <span className="xp-at">at</span> {item.company}
                  </span>
                </h3>
                {item.via && <p className="xp-via">Engaged via {item.via}</p>}
                <p className="xp-summary">{item.summary}</p>

                {item.highlights.length > 0 && (
                  <ul className="xp-highlights">
                    {item.highlights.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}

                {item.stack.length > 0 && (
                  <ul className="tags" aria-label="Tech stack">
                    {item.stack.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="xp-footer">
          <p>Freelance work, education and the full timeline are in my CV.</p>
          <a href={profile.cv} target="_blank" rel="noreferrer" className="btn btn-ghost">
            <FiFileText aria-hidden />
            View full CV (PDF)
          </a>
        </Reveal>
      </div>
    </section>
  )
}
