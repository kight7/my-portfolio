export default function NavBar() {
  const items = ['Profile', 'Skills', 'Projects', 'Contact']
  return (
    <div style={{ border: '1px solid rgba(37,99,235,0.5)', boxShadow: '0 0 20px rgba(37,99,235,0.2)', background: 'rgba(5,5,15,0.8)' }} className="px-6 py-2 rounded-lg">
      <div className="flex items-center gap-8">
        {items.map(function(item) {
          return (
            <a
              key={item}
              href={'#' + item.toLowerCase()}
              className="font-mono text-sm text-gray-400 hover:text-blue-400 transition-colors tracking-widest uppercase"
            >
              {item}
            </a>
          )
        })}
      </div>
    </div>
  )
}
