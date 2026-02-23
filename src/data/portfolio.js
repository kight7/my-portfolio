// ============================================
// EDIT THIS FILE TO UPDATE YOUR PORTFOLIO
// ============================================

const portfolio = {
  name: 'Kislay Mishra',
  title: 'Programmer...',
  bio: 'I build these internet things',
  avatar: '/assets/profile.jpg', // drop your photo in public/assets/

  links: [
    {
      url: 'https://github.com/kight7',
      icon: 'github',
    },
    {
      url: 'mailto:kislaymishra07@gmail.com',
      icon: 'mail',
    },
    {
      url: 'https://t.me/yourusername',
      icon: 'send',
    },
    {
      url: 'https://x.com/yourusername',
      icon: 'x',
    },
    {
      url: 'https://leetcode.com/u/Ashura_/',
      icon: 'leetcode',
    }
  ],

  projects: [
    {
      title: 'AI-Investment Research Copilot',
      description: 'Built LLM-powered platform ingesting financial data to genearate analyst memos and investment with Q&A cited sources using RAG over vector embeddings',
      tags: ['Fast API', 'LangChain','ChromaDB','PostgreSQL'],
      github: 'https://github.com/kight7/AI-Investment-Research-Copilot',
    },
    {
      title: 'AEGIS',
      description: 'AEGIS (Autonomous Exploration for Gathering Increased Science) AI-powered system designed to autonomously collect scientific data during planetary exploration',
      tags: ['Python'],
      github: 'https://github.com/kight7/AEGIS',
    },
    {
      title: 'my-portfolio',
      description: 'A personal portfolio website showcasing my projects and skills.',
      tags: ['React', 'Node.js'],
      github: 'https://github.com/kight7/my-portfolio',
    },
    {
      title: 'VAPT-X',
      description: 'A vulnerability automated penetration testing tool using Local LLMs',
      tags: ['Ollama','LangChain','ChromaDB','Nmap'],
      github: 'https://github.com/kight7/VAPT-X'
    }
  ],
};

export default portfolio;