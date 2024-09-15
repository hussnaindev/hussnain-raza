'use client';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { SiMaildotcom } from 'react-icons/si';
import IntroCard from './IntroCard';
import SkillsSlider from './SkillsSlider';
import { ThemeSwitch } from './ThemeSwitch';
import { Button } from './ui/button';

export default function HeroSection() {

  return (
    <section className="relative h-screen">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 min-w-full min-h-full bg-black"
      >
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>

      {/* Optional overlay to darken the video for better contrast */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="absolute top-0 left-0 z-20 flex items-center space-x-4 bg-black bg-opacity-20 p-4 w-full h-10">
        {/* Email Button using Shadcn's Button component */}
        <Button
          className="border-r-1 h-8 my-2 text-sm flex items-center space-x-1"
          variant={'secondary'}
          onClick={() => window.location.href = 'mailto:your-email@example.com'}
        >
          <SiMaildotcom className="h-4 w-4" />
          <span>Email</span>
          <IoIosArrowRoundForward className="h-4 w-4" />
        </Button>

        {/* Spacer to push SkillsSlider to the center */}
        <div className="flex-grow hidden lg:flex justify-center"> {/* Show on large screens */}
          <SkillsSlider />
        </div>

        {/* Theme Switch Button */}
        <div className="h-6">
          <ThemeSwitch />
        </div>
      </div>

      <div className="absolute bottom-5 left-5 mr-5 p-8 z-10 text-left backdrop-blur-lg bg-white/20 rounded-lg shadow-lg">
        <IntroCard />
      </div>
    </section>
  );
}
