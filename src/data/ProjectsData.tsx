import { FaAws, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiExpo, SiGooglecloud, SiMongodb, SiNextdotjs, SiRedux, SiTypescript } from 'react-icons/si';

export const ProjectsData = [
    {
      title: 'Explore Games',
      description: 'ExploreGames is a Web App where you can explore 15k+ games',
      image: '/explore-games.png',
      github: 'https://github.com/hussnaindev/Explore-Games',
      live: 'https://hussnaindev.github.io/Explore-Games/',
      techStack: [
        { icon: <FaReact color="#61DBFB" />, label: 'React' },
        { icon: <SiRedux color="#764ABC" />, label: 'Redux' },
        { icon: <FaNodeJs color="#339933" />, label: 'Node.js' },
      ],
    },
    {
      title: 'Movies UnicornPlus',
      description: 'All about movies aka. Movies Wikipedia',
      image: '/movies-unicornplus.png',
      github: 'https://github.com/hussnaindev/movies-unicornplus',
      live: 'https://movies-unicornplus.vercel.app/',
      techStack: [
        { icon: <SiNextdotjs color="#000000" />, label: 'Next.js' },
        { icon: <FaNodeJs color="#339933" />, label: 'Node.js' },
        { icon: <SiTypescript color="#3178C6" />, label: 'TypeScript' },
      ],
    },
    {
      title: 'ApniManzil App',
      description: 'Pakistan 1st Map Based Real Estate Portal App',
      image: '/apni-manzil-v3.jpeg',
      github: '',
      live: '',
      features: [
        'Map-based search for properties',
        'Real-time property updates',
        'User-friendly interface',
        'Advanced filtering options',
        'Integration with WhatsApp for agent contact',
        'Property recommendations',
        'Multiple listing types',
        'Responsive design',
      ],
      techStack: [
        { icon: <FaReact color="#61DBFB" />, label: 'React' },
        { icon: <SiExpo color="#000000" />, label: 'React' },
        { icon: <SiTypescript color="#3178C6" />, label: 'TypeScript' },
        { icon: <FaNodeJs color="#339933" />, label: 'Node.js' },
        { icon: <SiMongodb color="#47A248" />, label: 'MongoDB' },
        { icon: <SiGooglecloud color="#4285F4" />, label: 'Google Cloud' },
        { icon: <FaAws color="#FF9900" />, label: 'AWS' },
      ],
    },
  ];