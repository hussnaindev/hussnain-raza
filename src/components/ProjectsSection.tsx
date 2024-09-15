import { Poppins } from 'next/font/google';
import Image from 'next/image';
import { FaAws, FaCheckCircle, FaGithub, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiExpo, SiGooglecloud, SiMongodb, SiNextdotjs, SiRedux, SiTypescript } from 'react-icons/si';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';

const poppins = Poppins({
  weight: '700',
  subsets: ['latin'],
});

const projects = [
  {
    title: 'Explore Games',
    description: 'ExploreGames is a Web App where you can explore 15k+ games',
    image: '/explore-games.png',
    github: 'https://github.com/hussnaindev/Explore-Gamese',
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
    github: 'https://github.com/hussnaindev/Explore-Games',
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
    live: 'https://movies-unicornplus.vercel.app/',
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

export default function ProjectsSection() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
    <div className="container mx-auto text-center">
      <h2 className={`text-3xl font-bold text-center text-[#403d39] mb-8 ${poppins.className} dark:text-white`}>Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            className={`bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer ${
              index === 2 ? 'md:col-span-2 grid grid-cols-1 md:grid-cols-2' : ''
            }`}
          >
            {index === 2 ? (
              <>
                <div className="p-4 flex flex-col text-left">
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>

                  {/* Features */}
                  <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                    {project?.features &&
                      project?.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <FaCheckCircle className="text-blue-500 dark:text-blue-300 mr-2" />
                          {feature}
                        </li>
                      ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="mt-4 flex space-x-4">
                    {project?.techStack &&
                      project.techStack.map((tech, idx) => (
                        <div key={idx} className="text-3xl" title={tech.label}>
                          {tech.icon}
                        </div>
                      ))}
                  </div>

                  <div className="mt-8 flex space-x-4">
  <a
    href="https://play.google.com/store/apps/details?id=com.apnimanzil.app"
    className="hover:scale-105 transition-transform duration-300"
  >
    <Image
      src={'/Google Play.png'}
      alt="Get it on PlayStore"
      width={150} // Adjust width as necessary
      height={50} // Adjust height as necessary
      className="object-contain"
    />
  </a>
  <a
    href="https://apps.apple.com/us/app/apni-manzil/id123456789"
    className="hover:scale-105 transition-transform duration-300"
  >
    <Image
      src={'/App Store.png'}
      alt="Download it on AppStore"
      width={150} // Adjust width as necessary
      height={50} // Adjust height as necessary
      className="object-contain"
    />
  </a>
</div>
                </div>
                <CardHeader className="max-h-svh">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="responsive"
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </CardHeader>
              </>
            ) : (
              <>
                <CardHeader>
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="responsive"
                    width={900}
                    height={300}
                    className="object-cover"
                  />
                </CardHeader>
                <CardContent>
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="mt-4 flex space-x-4 justify-center">
                    {project?.techStack &&
                      project.techStack.map((tech, idx) => (
                        <div key={idx} className="text-3xl" title={tech.label}>
                          {tech.icon}
                        </div>
                      ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center p-4">
                  {project.github && (
                    <a
                      href={project.github}
                      className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-300"
                    >
                      <FaGithub size={24} />
                    </a>
                  )}
                </CardFooter>
              </>
            )}
          </Card>
        ))}
      </div>
    </div>
  </section>
  );
}
