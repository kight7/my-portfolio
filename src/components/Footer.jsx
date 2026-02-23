import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import portfolio from '../data/portfolio.js'

export default function Footer() {
  const emailLink = portfolio.links.find(function(l) { return l.icon === 'mail' })
  const email = emailLink ? emailLink.url : ''
  const displayEmail = email.replace('mailto:', '')

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center py-12 px-4"
      style={{ borderTop: '1px solid rgba(37,99,235,0.15)' }}
    >
      <p className="text-gray-500 text-sm mb-3 font-mono tracking-widest uppercase">Connect</p>
      <a
        href={email}
        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm mb-8 font-mono"
      >
        <Mail size={15} />
        {displayEmail}
      </a>
      <p className="text-gray-600 text-xs font-mono">
        2026 {portfolio.name} - Built with React
      </p>
    </motion.footer>
  )
}
