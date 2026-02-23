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
      label: 'GitHub',
      url: 'https://github.com/kight7',
      icon: 'github',
    },
    {
      label: 'Email',
      url: 'mailto:kislaymishra07@gmail.com',
      icon: 'mail',
    },
    {
      label: 'Telegram',
      url: 'https://t.me/yourusername',
      icon: 'send',
    },
    {
      label: 'X',
      url: 'https://x.com/yourusername',
      icon: 'x',
    },
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
  ],
};

export default portfolio;