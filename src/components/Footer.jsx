import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import portfolio from '../data/portfolio.js'

export default function Footer() {
  const email = portfolio.links.find(l => l.icon === 'mail')?.url

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center py-12 px-4 border-t border-blue-950"
    >
      <p className="text-gray-500 text-sm mb-3">Get in touch</p>
      
        href={email}
        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm mb-8"
      >
        <Mail size={15} />
        {email?.replace('mailto:', '')}
      </a>
      <p className="text-gray-600 text-xs">
        © 2026 {portfolio.name} · Built with React
      </p>
    </motion.footer>
  )
}
