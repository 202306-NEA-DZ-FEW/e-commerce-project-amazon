import Item from "./Item";
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";
import Image from "next/image";
import Men from "../../assets/Men.svg";

const members=[
  {
    id:1,
    name:"HACHEM BOUHADENE",
    github:"https://github.com/HachemBouhadede",
    linkedin:"https://www.linkedin.com/in/hachem-bouhadede/",
  },
  {
    id:2,
    name:"ISMAIL BENLAREDJ",
    github:"https://github.com/ismail-benlaredj",
    linkedin:"https://www.linkedin.com/in/ismailbenlaredj/",
  },
  {
    id:3,
    name:"HAKIM TIABI",
    github:"https://github.com/Hxkim10",
    linkedin:"https://www.linkedin.com/in/abdelhakimtiabi/",
  },
  {
    id:4,
    name:"HADIA DJADALLAH",
    github:"https://github.com/liliumorion",
    linkedin:"https://www.linkedin.com/in/hadia-djadallah/",
  },
  {
    id:5,
    name:"MERIEM MANSOURI",
    github:"https://github.com/meryem08",
    linkedin:"https://github.com/meryem08",
  },
  {
    id:6,
    name:"DALILA MUEGENNI" ,
    github: "https://github.com/dalilia",
    linkedin:"https://www.linkedin.com",
  },
]
const Footer = () => {
  return (
    <footer className="bg-darkgray text-whitebeige mt-24 w-full">
      <div className=" text-center grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:px-8 px-6 pt-16 pb-8 ">
        <div className="drop-shadow-md hover:shadow-md bg-white p-4 rounded-lg transition duration-300 transform hover:-translate-y-2">
        <div className="object-contain">
        <ul className="flex-col items-center ">
          {members.map((member) => (<>
          <Image
          src={Men}
          width={400}
          height={400}
          alt="Illustration"
          className="w-full rounded-lg bg-cover transform scale-100 filter  transition-all duration-300 ease-in-out hover:filter-blur-0"/>  
          
            <li key={member.name} className=" text-base flex-row items-center  align-middle">
               <h3 className="text-sm mb-1">{member.name}</h3>
              <a
                className="text-whitebeige hover:text-red-700 duration-300 text-sm cursor-pointer leading-6 "
                href={member.link}
                target="_blank"
                rel="noopener"
              >
              {member.github}
              {member.linkedin}
              </a>
              
            </li>
            </>
  ))}
    </ul>
    </div>
    </div>
      </div>
      <div
        className="w-full p-4 text-center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >MADE WITH LOVE ❤️ BY THE AmaZD SQUAD.</div>
    </footer>
  );
};

export default Footer;
 












/*const Footer = () => {
  const cards = [
    {
      name: 'Hachem',
      linkedin: 'https://www.linkedin.com/in/user1/',
      github: 'https://github.com/user1',
      illustration: '/card1.jpg', // Provide a path to your illustration
    },
    {
      name: 'Hachem',
      linkedin: 'https://www.linkedin.com/in/user1/',
      github: 'https://github.com/user1',
      illustration: '/card1.jpg', // Provide a path to your illustration
    },
    {
      name: 'Hachem',
      linkedin: 'https://www.linkedin.com/in/user1/',
      github: 'https://github.com/user1',
      illustration: '/card1.jpg', // Provide a path to your illustration
    },
    {
      name: 'Hachem',
      linkedin: 'https://www.linkedin.com/in/user1/',
      github: 'https://github.com/user1',
      illustration: '/card1.jpg', // Provide a path to your illustration
    },
    {
      name: 'Hachem',
      linkedin: 'https://www.linkedin.com/in/user1/',
      github: 'https://github.com/user1',
      illustration: '/card1.jpg', // Provide a path to your illustration
    },
    {
      name: 'Hachem',
      linkedin: 'https://www.linkedin.com/in/user1/',
      github: 'https://github.com/user1',
      illustration: '/card1.jpg', // Provide a path to your illustration
    },
  
    // Add more cards in a similar format
  ];

  return (
    <footer className="bg-white text-grey-700 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
        {cards.map((card, index) => (
          <div key={index} className="bg-gray-700 p-4 rounded-lg transition duration-300 transform hover:-translate-y-2">
            <img src={card.illustration} alt={card.name} className=" mb-4" />
            <h2 className="text-xl font-bold mb-2">{card.name}</h2>
            <div className="flex items-center mb-2">
              <a href={card.linkedin} target="_blank" rel="noopener noreferrer" className="mr-2">
                LinkedIn
              </a>
              <a href={card.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
 */


