'use client';

import { Poppins } from 'next/font/google';
import Image from 'next/image';
import Slider from 'react-slick';

const poppins = Poppins({
  weight: '700',
  subsets: ['latin'],
});

const certificatesAndAwards = [
  {
    title: 'HactoberFest: Open Source Contributions',
    image: '/hacktoberfest.png',
    issuedBy: 'Digital Ocean',
  },
  {
    title: 'Learning C#',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
    issuedBy: 'LinkedIn',
  },
  {
    title: 'Serverless Cloud Run Deployment',
    image: '/serverless-cloud.png',
    issuedBy: 'Google Cloud',
  },
  {
    title: 'Automating Infrastructure using Terraform',
    image: '/terraform.png',
    issuedBy: 'Google Cloud',
  },
  {
    title: 'Intro to ML: Language Processing',
    image: '/intro-to-ml.png',
    issuedBy: 'Google Cloud',
  },
  {
    title: 'Create and Manage Cloud Resources',
    image: '/manage-cloud-resources.png',
    issuedBy: 'Google Cloud',
  },
  // Add more certificates and awards as needed
];

const settings = {
  dots: false,
  infinite: true,
  speed: 4000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: 'linear',
  pauseOnHover: false,
  swipeToSlide: true,
  arrows: false
};

export default function CertificatesAndAwardsSection() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-bold text-center text-[#403d39] mb-8 ${poppins.className} dark:text-white`}>
          Certificates & Awards
        </h2>
        <Slider {...settings}>
          {certificatesAndAwards.map((item, index) => (
            <div key={index} className="flex flex-col items-center p-4">
              {/* Set a fixed height for the image container */}
              <div className="mb-4 flex justify-center items-center" style={{ height: '150px' }}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={120} // Adjust the width as needed
                  height={120} // Adjust the height as needed
                  className="object-contain"
                />
              </div>
              {/* Title and IssuedBy */}
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2 text-center">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                {item.issuedBy}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
