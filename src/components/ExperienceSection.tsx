import { Poppins } from 'next/font/google';
import Image from 'next/image';
import { FaAws, FaCalendarAlt, FaMapMarkerAlt, FaNode } from 'react-icons/fa';
import { RiFlag2Fill } from "react-icons/ri";
import { SiAngular, SiDatadog, SiDotnet, SiExpo, SiGoogleanalytics, SiHelm, SiMongodb, SiReact, SiTypescript } from 'react-icons/si';


const poppins = Poppins({
  weight: '700',
  subsets: ['latin'],
});

const experiences = [
  {
    company: 'D Hives',
    role: 'Software Engineer',
    period: 'March 2023 - Present',
    location: 'Lahore, Pakistan',
    logo: '/DHives.jpg', // Add your company logo path
    description: [
      { text: 'Developed a Real Estate Portal using the MERN Stack', icon: <SiReact size={24} color="#61DAFB" /> },
      { text: 'Created a Content Creation Portal with social media integration', icon: <SiTypescript size={24} color="#3178c6" /> },
      { text: 'Managed database migrations and collaborated with Chargify Service', icon: <SiMongodb size={24} color="green" /> },
      { text: 'Utilized AWS services for Logging, Request Tracing, and Monitoring', icon: <FaAws size={24} color="#232F3E" /> },
      { text: 'Employed Datadog for custom metrics and monitoring', icon: <SiDatadog size={24} color="#FF5A1F" /> },
      { text: 'Implemented Helm Charts for Deployments and used Jest for testing', icon: <SiHelm size={24} color="#0F1689" /> },
      { text: 'Managed cronjobs and webhooks for real-time updates', icon: <FaNode size={24} color="#606F7B" /> },
      { text: 'Worked with LaunchDarkly for feature flagging and phased releases', icon: <RiFlag2Fill size={24} color="#3D3D3D" /> },
      { text: 'Utilized Google Analytics and HubSpot for tracking user activities', icon: <SiGoogleanalytics size={24} color="orange" /> },
      { text: 'Developed a React Native application for property browsing with Expo CLI', icon: <SiExpo size={24} color="#000" /> },
    ],
  },
  {
    company: '1OPearls',
    role: 'Software Engineer (Intern)',
    period: 'June 2022 - August 2022',
    location: 'Lahore, Pakistan',
    logo: '/10P.jpg', // Add your company logo path
    description: [
      { text: 'Developed a carpooling feature for "PULSE" using AngularJS and .NET', icon: <SiAngular size={24} color="#DD0031" /> },
      { text: 'Resolved bugs and issues ensuring seamless functionality', icon: <SiDotnet size={24} color="#5c2d91" /> },
      { text: 'Enhanced the platform with new features and functionalities', icon: <SiAngular size={24} color="#DD0031" /> },
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-bold text-center text-[#403d39] mb-8 ${poppins.className} dark:text-white`}>Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
              <div className="flex items-center p-6 bg-gray-200 dark:bg-gray-700">
                <Image src={experience.logo} alt={`${experience.company} logo`} width={50} height={50} className="rounded-full mr-4" />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">{experience.role}</h3>
                  <p className="text-gray-600 dark:text-gray-400 flex items-center">
                    <FaMapMarkerAlt size={16} className="mr-2" />
                    {experience.location}
                    <span className="mx-2">|</span>
                    <FaCalendarAlt size={16} className="mr-2" />
                    {experience.period}
                  </p>
                </div>
              </div>
              <div className="p-6 space-y-4">
                {experience.description.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start space-x-3">
                    <div className="text-gray-600 dark:text-gray-400">{item.icon}</div>
                    <p className="text-gray-600 dark:text-gray-400">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
