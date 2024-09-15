import { IntroCardData as data } from "@/data/IntroCardData";
import Image from "next/image";

const IntroCard = () => {
  return (
    <div>
      <div className="flex flex-row items-center space-x-4">
        <Image
          src={data.image}
          width={80}  
          height={80}
          alt="profile-img"
          className="rounded-full shadow-lg"
        />
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          {data.name}
        </h1>
      </div>
      <p className="mt-4 text-lg md:text-xl text-gray-300">{data.roles}</p>
      <div className="mt-8 flex space-x-4">
        {data.contacts.map((contact) => (
          <a
            href={contact.link}
            className="text-white text-3xl hover:text-gray-300"
            key={contact.link}
          >
            {contact.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default IntroCard;
