import { motion } from 'framer-motion'

const tags = {
  div: motion.div,
  li: motion.li,
  article: motion.article,
}

export function Reveal({ as = 'div', delay = 0, children, ...rest }) {
  const Tag = tags[as]

  return (
    <Tag
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export function SectionHeading({ index, eyebrow, title, children }) {
  return (
    <Reveal className="section-head">
      <p className="eyebrow">
        <span className="eyebrow-index">{index}</span>
        {eyebrow}
      </p>
      <h2>{title}</h2>
      {children && <p className="section-lede">{children}</p>}
    </Reveal>
  )
}
