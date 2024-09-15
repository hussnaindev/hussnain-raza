'use client'
import { ProjectsData as data } from "@/data/ProjectsData";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { ReactElement } from "react";
import { FaCheckCircle, FaGithub } from "react-icons/fa";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

// Define the structure for tech stack items
interface TechStackItem {
  icon: ReactElement;
  label: string;
}

// Define the structure for the project object
interface Project {
  title: string;
  description: string;
  image: string;
  github?: string;
  live?: string;
  features?: string[];
  techStack?: TechStackItem[];
}

// Define the props for the ProjectCard component
interface ProjectCardProps {
  project: Project;
}

const poppins = Poppins({
  weight: "700",
  subsets: ["latin"],
});

// Project Card for non-featured projects
const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <Card onClick={() => project.live &&  (window.location.href = project.live)} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer ml-5 mr-5">
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
        {project?.techStack?.map((tech, idx) => (
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
  </Card>
);

// Featured Project Card for the third project
const FeaturedProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <Card className="bg-white ml-5 mr-5 dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer flex flex-row items-center justify-center align-middle flex-wrap" onClick={() => project.live &&  (window.location.href = project.live)}>
    <div className="p-6 flex flex-col text-left w-full md:w-2/3">
      <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>

      {/* Features */}
      <ul className="text-gray-600 dark:text-gray-400 space-y-2">
        {project?.features?.map((feature, idx) => (
          <li key={idx} className="flex items-center">
            <FaCheckCircle className="text-blue-500 dark:text-blue-300 mr-2" />
            {feature}
          </li>
        ))}
      </ul>

      {/* Tech Stack */}
      <div className="mt-4 flex space-x-4">
        {project?.techStack?.map((tech, idx) => (
          <div key={idx} className="text-3xl" title={tech.label}>
            {tech.icon}
          </div>
        ))}
      </div>

      {/* Links */}
      <div className="mt-8 flex space-x-4">
        <a
          href="https://play.google.com/store/apps/details?id=com.apnimanzil.app"
          className="hover:scale-105 transition-transform duration-300"
        >
          <Image
            src="/Google Play.png"
            alt="Get it on PlayStore"
            width={150}
            height={50}
            className="object-contain"
          />
        </a>
        <a
          href="https://apps.apple.com/us/app/apni-manzil/id123456789"
          className="hover:scale-105 transition-transform duration-300"
        >
          <Image
            src="/App Store.png"
            alt="Download it on AppStore"
            width={150}
            height={50}
            className="object-contain"
          />
        </a>
      </div>
    </div>
    <CardHeader className="max-h-svh w-full md:w-1/3">
      <Image
        src={project.image}
        alt={project.title}
        layout="responsive"
        width={200}
        height={200}
        className="object-contain"
      />
    </CardHeader>
  </Card>
);

// Main Projects Section
export default function ProjectsSection() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto text-center">
        <h2
          className={`text-3xl font-bold text-center text-[#403d39] mb-8 ${poppins.className} dark:text-white`}
        >
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.map((project, index) =>
            index === 2 ? (
              <FeaturedProjectCard key={index} project={project} />
            ) : (
              <ProjectCard key={index} project={project} />
            )
          )}
        </div>
      </div>
    </section>
  );
}
