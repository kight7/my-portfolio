import { motion } from 'framer-motion'
import { Github, Mail, Send, X } from 'lucide-react'
import portfolio from '../data/portfolio.js'

const iconMap = { github: Github, mail: Mail, send: Send, x: X }

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="mb-6">
        <div style={{ boxShadow: '0 0 60px rgba(37,99,235,0.8), 0 0 120px rgba(37,99,235,0.3)' }} className="rounded-full p-1 border-2 border-blue-500">
          <img
            src={portfolio.avatar}
            alt={portfolio.name}
            onError={function(e) { e.target.src = 'https://ui-avatars.com/api/?name=' + portfolio.name + '&background=2563EB&color=fff&size=128' }}
            className="w-28 h-28 rounded-full object-cover"
          />
        </div>
      </motion.div>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl font-bold text-white mb-1 tracking-tight">
        {portfolio.name}
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-blue-400 text-sm mb-1 font-mono">
        {portfolio.title}
      </motion.p>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} className="text-gray-500 text-xs mb-8 font-mono">
        {portfolio.bio}
      </motion.p>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-col gap-3 w-full max-w-xs">
        {portfolio.links.map(function(link, i) {
          const Icon = iconMap[link.icon] || Github
          return (
            <motion.a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.08 }}
              whileHover={{ scale: 1.03, x: 4 }}
              className="flex items-center justify-between px-5 py-3.5 rounded-xl text-white text-sm font-medium transition-all duration-200"
              style={{ border: '1px solid rgba(37,99,235,0.3)', background: 'rgba(37,99,235,0.05)' }}
              onMouseEnter={function(e) { e.currentTarget.style.border = '1px solid rgba(37,99,235,0.8)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(37,99,235,0.3)'; e.currentTarget.style.background = 'rgba(37,99,235,0.12)' }}
              onMouseLeave={function(e) { e.currentTarget.style.border = '1px solid rgba(37,99,235,0.3)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.background = 'rgba(37,99,235,0.05)' }}
            >
              <div className="flex items-center gap-3">
                <Icon size={17} className="text-blue-400" />
                <span className="font-mono">{link.label}</span>
              </div>
              <span className="text-blue-600 font-mono">→</span>
            </motion.a>
          )
        })}
      </motion.div>
    </div>
  )
}
