import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

export const IntroCardData = {
    name: "Hussnain Raza",
    image: '/profile-img.jpeg',
    roles: "Software Engineer | Full Stack Engineer",
    contacts: [
        {
            platform: "github",
            icon:  <FaGithub />,
            link: 'https://github.com/hussnaindev'
        },
        {
            platform: "linkedin",
            icon:  <FaLinkedin />,
            link: 'https://www.linkedin.com/in/hussnain-raza'
        },
        {
            platform: "email",
            icon: <MdOutlineMail />, 
            link: 'mailto:hussnain.444.work@gmail.com'
        },
    ]
}