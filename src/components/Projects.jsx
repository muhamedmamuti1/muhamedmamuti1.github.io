import { FiArrowUpRight } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'
import { profile, projects } from '../data/content'
import { Reveal, SectionHeading } from './Reveal'

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading index="02" eyebrow="Projects & Code" title="Explore my work on GitHub.">
          Check out my repositories, contributions, and open-source projects.
        </SectionHeading>

        <div className="project-grid">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.06}>
              <a href={project.href} target="_blank" rel="noreferrer" className="card project-card">
                <div className="project-top">
                  <FaGithub className="project-icon" aria-hidden />
                  <FiArrowUpRight className="card-arrow" aria-hidden />
                </div>
                <h3 className="project-name">{project.name}</h3>
                <p className="project-desc">{project.description}</p>
                <p className="project-lang">
                  <span className={`lang-dot lang-${project.language.toLowerCase()}`} aria-hidden />
                  {project.language}
                </p>
              </a>
            </Reveal>
          ))}

          <Reveal delay={projects.length * 0.06}>
            <a href={profile.github} target="_blank" rel="noreferrer" className="card project-card project-cta">
              <div className="project-top">
                <FaGithub className="project-icon" aria-hidden />
                <FiArrowUpRight className="card-arrow" aria-hidden />
              </div>
              <h3 className="project-name">View full GitHub profile</h3>
              <p className="project-desc">Repositories, experiments and contributions.</p>
              <p className="project-lang">github.com/muhamedmamuti1</p>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
