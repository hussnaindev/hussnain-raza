'use client';

import { FaAws, FaGitAlt, FaJs, FaNodeJs, FaReact, FaVuejs } from 'react-icons/fa';
import { SiCss3, SiHtml5, SiMongodb, SiMysql, SiRedux, SiTypescript } from 'react-icons/si';
import Slider from 'react-slick';
import { Card, CardHeader, CardTitle } from "../components/ui/card";

const skills = [
  { name: 'JavaScript', icon: <FaJs />, color: '' },
  { name: 'Git', icon: <FaGitAlt />, color: '' },
  { name: 'CSS', icon: <SiCss3 />, color: '' },
  { name: 'Vue', icon: <FaVuejs />, color: '' },
  { name: 'MySQL', icon: <SiMysql />, color: '' },
  { name: 'Node.js', icon: <FaNodeJs />, color: '' },
  { name: 'TypeScript', icon: <SiTypescript />, color: '' },
  { name: 'HTML', icon: <SiHtml5 />, color: '' },
  { name: 'React', icon: <FaReact />, color: '' },
  { name: 'Redux Toolkit', icon: <SiRedux />, color: '' },
  { name: 'MongoDB', icon: <SiMongodb />, color: '' },
  { name: 'AWS', icon: <FaAws />, color: '' },
];

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 4000,
  slidesToShow: 6, // Reduced number of slides to show
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: 'linear',
  pauseOnHover: false,
  swipeToSlide: true,
  arrows: false
};

export default function SkillsSlider() {
  return (
    <section className="bg-transparent">
      <div className="container mx-auto px-2">
        <Slider {...sliderSettings}>
          {skills.map((skill, index) => (
            <Card key={index} className="hover:scale-105 transition-transform duration-300 bg-transparent border-transparent">
              <CardHeader className="flex-row items-center p-2 bg-transparent">
                <div className="w-6 h-6 flex items-center justify-center rounded-full text-white dark:text-white">
                  <div className="text-xl">{skill.icon}</div>
                </div>
                <div className="ml-2">
                  <CardTitle className="text-sm font-semibold text-white dark:text-white">{skill.name}</CardTitle>
                </div>
              </CardHeader>
            </Card>
          ))}
        </Slider>
      </div>
    </section>
  );
}
