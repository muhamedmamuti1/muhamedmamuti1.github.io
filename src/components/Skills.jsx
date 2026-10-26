import { FiLayers, FiPenTool, FiServer } from 'react-icons/fi'
import { skillGroups } from '../data/content'
import { Reveal, SectionHeading } from './Reveal'

const icons = {
  server: FiServer,
  layers: FiLayers,
  pen: FiPenTool,
}

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading index="03" eyebrow="Skills & Superpowers" title="Hands-on engineering with a designer's empathy." />

        <div className="skill-grid">
          {skillGroups.map((group, index) => {
            const Icon = icons[group.icon]
            return (
              <Reveal as="article" key={group.title} className="card skill-card" delay={index * 0.06}>
                <div className="skill-icon">
                  <Icon aria-hidden />
                </div>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
