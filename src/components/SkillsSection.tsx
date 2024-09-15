import { Poppins } from 'next/font/google';
import { FaAws, FaGitAlt, FaJs, FaNodeJs, FaReact, FaVuejs } from 'react-icons/fa';
import { SiCss3, SiHtml5, SiMongodb, SiMysql, SiRedux, SiTypescript } from 'react-icons/si';
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

// Load Poppins font with a weight of 700
const poppins = Poppins({
  weight: '700',
  subsets: ['latin'],
});

export default function SkillsSection() {
  const skills = [
    { name: 'JavaScript', icon: <FaJs />, color: 'bg-yellow-400' },
    { name: 'Git', icon: <FaGitAlt />, color: 'bg-orange-500' },
    { name: 'CSS', icon: <SiCss3 />, color: 'bg-blue-500' },
    { name: 'Vue', icon: <FaVuejs />, color: 'bg-green-500' },
    { name: 'MySQL', icon: <SiMysql />, color: 'bg-blue-700' },
    { name: 'Node.js', icon: <FaNodeJs />, color: 'bg-green-700' },
    { name: 'TypeScript', icon: <SiTypescript />, color: 'bg-blue-600' },
    { name: 'HTML', icon: <SiHtml5 />, color: 'bg-orange-600' },
    { name: 'React', icon: <FaReact />, color: 'bg-blue-400' },
    { name: 'Redux Toolkit', icon: <SiRedux />, color: 'bg-purple-600' },
    { name: 'MongoDB', icon: <SiMongodb />, color: 'bg-green-600' },
    { name: 'AWS', icon: <FaAws />, color: 'bg-orange-400' },
  ];

  return (
    <section className="py-12 bg-muted dark:bg-gray-800 scale-100">
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl font-bold text-center text-[#403d39] mb-8 ${poppins.className} dark:text-white`}>
          Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="hover:scale-105 transition-transform duration-300">
              <CardHeader className="flex justify-center p-4 align-middle items-center">
                <div
                  className={`w-12 h-12 flex items-center justify-center align-middle rounded-full shadow-md text-white ${skill.color}`}
                >
                  <div className="text-2xl">{skill.icon}</div>
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-center text-lg font-semibold">{skill.name}</CardTitle>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
