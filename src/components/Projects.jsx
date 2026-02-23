import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import portfolio from '../data/portfolio.js'

export default function Projects() {
  return (
  <div className="px-6 py-24 mt-16 flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <h2 className="text-xl font-bold text-white mb-2 font-mono tracking-widest uppercase">// Projects</h2>
        <div className="w-16 h-px mx-auto" style={{ background: 'linear-gradient(90deg, transparent, #2563EB, transparent)' }}></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {portfolio.projects.map(function(project, i) {
          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="flex flex-col rounded-2xl overflow-hidden transition-all duration-300 group"
              style={{ border: '1px solid rgba(37,99,235,0.2)', background: 'rgba(5,5,20,0.6)' }}
              onMouseEnter={function(e) {
                e.currentTarget.style.border = '1px solid rgba(37,99,235,0.7)'
                e.currentTarget.style.boxShadow = '0 0 40px rgba(37,99,235,0.15)'
              }}
              onMouseLeave={function(e) {
                e.currentTarget.style.border = '1px solid rgba(37,99,235,0.2)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Image Preview Area */}
              <div
                className="relative overflow-hidden flex items-center justify-center"
                style={{ height: '180px', background: 'rgba(37,99,235,0.04)', borderBottom: '1px solid rgba(37,99,235,0.15)' }}
              >
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(37,99,235,0.4) 0%, transparent 70%)'
                }}></div>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(37,99,235,0.4)" strokeWidth="1">
                  <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
                {/* Corner tag */}
                <div className="absolute top-3 right-3 font-mono text-xs px-2 py-1 rounded" style={{ background: 'rgba(37,99,235,0.15)', color: '#60a5fa', border: '1px solid rgba(37,99,235,0.3)' }}>
                  {project.tags[0]}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                <h3 className="text-white font-bold text-base mb-2 font-mono group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-4 flex-1 font-mono">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(function(tag) {
                    return (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-full font-mono"
                        style={{ border: '1px solid rgba(37,99,235,0.35)', color: '#60a5fa', background: 'rgba(37,99,235,0.08)' }}>
                        {tag}
                      </span>
                    )
                  })}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-3" style={{ borderTop: '1px solid rgba(37,99,235,0.12)' }}>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-blue-400 transition-colors font-mono">
                      <Github size={13} /> github
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-blue-400 transition-colors font-mono">
                      <ExternalLink size={13} /> live demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
