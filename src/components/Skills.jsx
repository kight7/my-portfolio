import { motion } from 'framer-motion'

const skills = [
  { name: 'Python', color: '#3B82F6', bg: 'rgba(59,130,246,0.1)', emoji: '🐍' },
  { name: 'Java', color: '#F97316', bg: 'rgba(249,115,22,0.1)', emoji: '☕' },
  { name: 'FastAPI', color: '#22C55E', bg: 'rgba(34,197,94,0.1)', emoji: '⚡' },
  { name: 'React', color: '#38BDF8', bg: 'rgba(56,189,248,0.1)', emoji: '⚛️' },
  { name: 'Node.js', color: '#86EFAC', bg: 'rgba(134,239,172,0.1)', emoji: '🟢' },
  { name: 'SQL', color: '#A78BFA', bg: 'rgba(167,139,250,0.1)', emoji: '🗄️' },
  { name: 'PostgreSQL', color: '#60A5FA', bg: 'rgba(96,165,250,0.1)', emoji: '🐘' },
  { name: 'ChromaDB', color: '#F472B6', bg: 'rgba(244,114,182,0.1)', emoji: '🔮' },
  { name: 'TensorFlow', color: '#FB923C', bg: 'rgba(251,146,60,0.1)', emoji: '🧠' },
  { name: 'Deep Learning', color: '#C084FC', bg: 'rgba(192,132,252,0.1)', emoji: '🤖' },
  { name: 'Machine Learning', color: '#34D399', bg: 'rgba(52,211,153,0.1)', emoji: '📊' },
  { name: 'scikit-learn', color: '#FCD34D', bg: 'rgba(252,211,77,0.1)', emoji: '🔬' },
  { name: 'NumPy', color: '#67E8F9', bg: 'rgba(103,232,249,0.1)', emoji: '🔢' },
  { name: 'Pandas', color: '#A3E635', bg: 'rgba(163,230,53,0.1)', emoji: '🐼' },
  { name: 'OpenCV', color: '#F87171', bg: 'rgba(248,113,113,0.1)', emoji: '👁️' },
]

export default function Skills() {
  return (
    <div className="px-6 py-16 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center"
      >
        <h2 className="text-xl font-bold text-white mb-2 font-mono tracking-widest uppercase">// Skills</h2>
        <div className="w-16 h-px mx-auto" style={{ background: 'linear-gradient(90deg, transparent, #2563EB, transparent)' }}></div>
      </motion.div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 w-full max-w-3xl">
        {skills.map(function(skill, i) {
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              whileHover={{ scale: 1.08, y: -4 }}
              className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl cursor-default transition-all duration-300"
              style={{
                border: '1px solid rgba(37,99,235,0.2)',
                background: skill.bg,
              }}
              onMouseEnter={function(e) {
                e.currentTarget.style.border = '1px solid ' + skill.color
                e.currentTarget.style.boxShadow = '0 0 20px ' + skill.color + '33'
              }}
              onMouseLeave={function(e) {
                e.currentTarget.style.border = '1px solid rgba(37,99,235,0.2)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <span className="text-2xl">{skill.emoji}</span>
              <span className="text-xs font-mono text-center leading-tight" style={{ color: skill.color }}>
                {skill.name}
              </span>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
