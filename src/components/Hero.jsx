import { motion } from 'framer-motion'
import { Github, Mail, Send, X } from 'lucide-react'
import portfolio from '../data/portfolio.js'

const iconMap = {
  github: Github,
  mail: Mail,
  send: Send,
  x: X,
}

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center px-4 pt-16 pb-8">

      {/* Profile Photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <img
          src={portfolio.avatar}
          alt={portfolio.name}
          onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=' + portfolio.name + '&background=2563EB&color=fff&size=128' }}
          className="w-28 h-28 rounded-full object-cover border-2 border-blue-600"
          style={{ boxShadow: '0 0 30px rgba(37,99,235,0.4)' }}
        />
      </motion.div>

      {/* Name + Title + Bio */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-3xl font-bold text-white mb-1"
      >
        {portfolio.name}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-blue-400 text-sm mb-2"
      >
        {portfolio.title}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-gray-400 text-sm mb-8"
      >
        {portfolio.bio}
      </motion.p>

      {/* Status Badge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-900 bg-blue-950 bg-opacity-40 mb-8"
      >
        <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
        <span className="text-blue-300 text-xs">Available for opportunities</span>
      </motion.div>

      {/* Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="flex flex-col gap-3 w-full max-w-sm"
      >
        {portfolio.links.map((link, i) => {
          const Icon = iconMap[link.icon] || Github
          return (
            <motion.a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="blue-glow flex items-center justify-between px-5 py-3.5 rounded-xl border border-blue-900 bg-blue-950/20 text-white text-sm font-medium transition-all duration-200 hover:border-blue-500 hover:bg-blue-950/40"
            >
              <div className="flex items-center gap-3">
                <Icon size={18} className="text-blue-400" />
                <span>{link.label}</span>
              </div>
              <span className="text-gray-500">→</span>
            </motion.a>
          )
        })}
      </motion.div>

    </div>
  )
}