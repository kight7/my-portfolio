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
      title: 'ItmoLabs',
      description: 'My works at ITMO university — experiments, coursework and research projects.',
      tags: ['C', 'Linux'],
      github: 'https://github.com/kislaymishra/itmoLabs',
    },
    {
      title: 'VideoToASCII',
      description: 'Renders any video as ASCII art directly in your terminal.',
      tags: ['Python'],
      github: 'https://github.com/kislaymishra/VideoToASCII',
    },
    {
      title: 'Project Three',
      description: 'Description of your third project goes here.',
      tags: ['React', 'Node.js'],
      github: 'https://github.com/kislaymishra',
    },
  ],
};

export default portfolio;