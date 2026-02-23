import { motion } from 'framer-motion'
import { Github, Mail, Send, X } from 'lucide-react'
import portfolio from '../data/portfolio.js'

const LeetCodeIcon = () => (
  <svg width="26" height="17" viewBox="0 0 26 17" fill="currentColor" style={{ color: '#60a5fa' }}>
    <path d="M1 0.5 C1 0.5 1 0.5 1 0.5 L1 14.5 C1 14.8 1.2 15 1.5 15 L7 15 C7.4 15 7.7 14.7 7.7 14.3 L7.7 12.8 C7.7 12.4 7.4 12.1 7 12.1 L4.2 12.1 L4.2 0.5 C4.2 0.2 3.9 0 3.6 0 L1.6 0 C1.3 0 1 0.2 1 0.5 Z"/>
    <path transform="translate(9, -1) scale(0.72)" d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.396a.61.61 0 0 0 .036-.852l-2.344-2.344a.61.61 0 0 0-.852 0l-1.878 1.878a1.619 1.619 0 0 1-2.297-.056L6.506 13.95a1.619 1.619 0 0 1 .056-2.297l5.956-5.956a1.619 1.619 0 0 1 2.284.028l1.976 2.044a.61.61 0 0 0 .877.013l2.344-2.344a.61.61 0 0 0 .013-.877L15.56.501A1.374 1.374 0 0 0 13.483 0z"/>
  </svg>
)

const iconMap = {
  github: Github,
  mail: Mail,
  send: Send,
  x: X,
  leetcode: LeetCodeIcon,
}

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

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-col gap-3 w-full max-w-sm">
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
              className="flex items-center justify-center gap-4 py-3.5 rounded-xl text-white text-sm font-medium transition-all duration-200"
              style={{ border: '1px solid rgba(37,99,235,0.3)', background: 'rgba(37,99,235,0.05)' }}
              onMouseEnter={function(e) { e.currentTarget.style.border = '1px solid rgba(37,99,235,0.8)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(37,99,235,0.3)'; e.currentTarget.style.background = 'rgba(37,99,235,0.12)' }}
              onMouseLeave={function(e) { e.currentTarget.style.border = '1px solid rgba(37,99,235,0.3)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.background = 'rgba(37,99,235,0.05)' }}
            >
              <Icon size={17} />
              <span className="font-mono">{link.label}</span>
            </motion.a>
          )
        })}
      </motion.div>
    </div>
  )
}
