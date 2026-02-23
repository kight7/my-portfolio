import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import portfolio from '../data/portfolio.js'

export default function Projects() {
  return (
    <div className="px-6 py-8 flex flex-col items-center overflow-x-hidden">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-12 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Projects</h2>
        <div className="w-12 h-0.5 bg-blue-500 mx-auto rounded-full"></div>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
        {portfolio.projects.map((project, i) => (
          <motion.div key={project.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} whileHover={{ y: -4 }} className="flex flex-col justify-between p-5 rounded-xl border border-blue-900 bg-blue-950/10 hover:border-blue-500 hover:bg-blue-950/20 transition-all duration-300">
            <div>
              <h3 className="text-white font-semibold text-base mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (<span key={tag} className="text-xs px-2.5 py-1 rounded-full border border-blue-800 text-blue-300 bg-blue-950/30">{tag}</span>))}
              </div>
            </div>
            <div className="flex gap-3">
              {project.github && (<a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-blue-400 transition-colors"><Github size={14} />GitHub</a>)}
              {project.live && (<a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-blue-400 transition-colors"><ExternalLink size={14} />Live</a>)}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
