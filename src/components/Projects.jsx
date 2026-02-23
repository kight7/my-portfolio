import { motion } from 'framer-motion'
import { Github, ExternalLink, Code2 } from 'lucide-react'
import portfolio from '../data/portfolio.js'

export default function Projects() {
  return (
    <div className="px-6 py-16 flex flex-col items-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 text-center">
        <h2 className="text-xl font-bold text-white mb-2 font-mono tracking-widest uppercase">// Projects</h2>
        <div className="w-16 h-px mx-auto" style={{ background: 'linear-gradient(90deg, transparent, #2563EB, transparent)' }}></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
        {portfolio.projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="flex flex-col justify-between p-5 rounded-xl transition-all duration-300 relative overflow-hidden"
            style={{ border: '1px solid rgba(37,99,235,0.25)', background: 'rgba(37,99,235,0.04)' }}
            onMouseEnter={e => { e.currentTarget.style.border = '1px solid rgba(37,99,235,0.7)'; e.currentTarget.style.boxShadow = '0 0 30px rgba(37,99,235,0.2)'; e.currentTarget.style.background = 'rgba(37,99,235,0.08)' }}
            onMouseLeave={e => { e.currentTarget.style.border = '1px solid rgba(37,99,235,0.25)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.background = 'rgba(37,99,235,0.04)' }}
          >
            <div className="absolute top-3 right-3 opacity-10"><Code2 size={40} className="text-blue-400" /></div>
            <div>
              <h3 className="text-white font-bold text-base mb-2 font-mono">{project.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-full font-mono" style={{ border: '1px solid rgba(37,99,235,0.4)', color: '#60a5fa', background: 'rgba(37,99,235,0.1)' }}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="flex gap-4 pt-2 border-t" style={{ borderColor: 'rgba(37,99,235,0.15)' }}>
              {project.github && (<a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-blue-400 transition-colors font-mono"><Github size={13} />github</a>)}
              {project.live && (<a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-blue-400 transition-colors font-mono"><ExternalLink size={13} />live</a>)}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
