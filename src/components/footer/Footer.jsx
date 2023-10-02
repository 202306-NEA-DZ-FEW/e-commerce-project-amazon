import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";
import Image from "next/image";
// import Men from "../../assets/Men.svg";

const members = [
  {
    id: 1,
    name: "HACHEM BOUHADENE",
    github: "https://github.com/HachemBouhadede",
    linkedin: "https://www.linkedin.com/in/hachem-bouhadede/",
    src: "/assets/team/hachem.jpeg",
  },
  {
    id: 2,
    name: "ISMAIL BENLAREDJ",
    github: "https://github.com/ismail-benlaredj",
    linkedin: "https://www.linkedin.com/in/ismailbenlaredj/",
    src: "/assets/team/ismail.jpeg",
  },
  {
    id: 3,
    name: "HAKIM TIABI",
    github: "https://github.com/Hxkim10",
    linkedin: "https://www.linkedin.com/in/abdelhakimtiabi/",
    src: "/assets/team/hakim.jpg",
  },
  {
    id: 4,
    name: "HADIA DJADALLAH",
    github: "https://github.com/liliumorion",
    linkedin: "https://www.linkedin.com/in/hadia-djadallah/",
    src: "/assets/team/hadia.jpeg",
  },
  {
    id: 5,
    name: "MERIEM MANSOURI",
    github: "https://github.com/meryem08",
    linkedin: "https://github.com/meryem08",
    src: "/assets/team/Meriem.jpg",
  },
  {
    id: 6,
    name: "DALILA MUEGENNI",
    github: "https://github.com/dalilia",
    linkedin: "https://www.linkedin.com",
    src: "/assets/team/hadia.jpeg",
  },
];
const Footer = () => {
  return (
    <footer className="bg-darkgray  mt-24">
      <div className=" footer-grantita p-4 ">
        <div className=" flex flex-row items-center justify-center">
          <Image
            src="/assets/ReCoded.png"
            width={250}
            height={100}
            alt="Organization"
          />
        </div>
        <ul className="flex-col flex items-center lg:flex-row justify-between w-full">
          {members.map((member) => (
            <div
              className="mt-10  flex flex-col items-center  "
              key={member.id}
            >
              <Image
                src={member.src}
                width={100}
                height={100}
                alt="Illustration"
                className="w-40 lg:w-20  rounded-lg bg-cover transform filter  transition-all duration-300 ease-in-out hover:filter-blur-0"
              />

              <li
                key={member.name}
                className=" flex-row items-center justify-center  "
              >
                <h3 className=" text-1xl mb-1 text-center my-5 font-semibold">
                  {member.name}
                </h3>
                <div className="flex justify-center gap-4 mt-5">
                  <a href={member.github} target="_blank">
                    <AiFillGithub className="text-3xl cursor-pointer" />
                  </a>
                  <a href={member.linkedin} target="_blank">
                    <AiOutlineLinkedin className="text-3xl cursor-pointer" />
                  </a>
                </div>
              </li>
            </div>
          ))}
        </ul>
      </div>
      <div
        className="w-full p-4 text-center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        AmaZD MADE WITH PASSION ❤️ BY THE AMAZON SQUAD.
      </div>
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
      illustration: '/card1.jpeg', // Provide a path to your illustration
    },
    {
      name: 'Hachem',
      linkedin: 'https://www.linkedin.com/in/user1/',
      github: 'https://github.com/user1',
      illustration: '/card1.jpeg', // Provide a path to your illustration
    },
    {
      name: 'Hachem',
      linkedin: 'https://www.linkedin.com/in/user1/',
      github: 'https://github.com/user1',
      illustration: '/card1.jpeg', // Provide a path to your illustration
    },
    {
      name: 'Hachem',
      linkedin: 'https://www.linkedin.com/in/user1/',
      github: 'https://github.com/user1',
      illustration: '/card1.jpeg', // Provide a path to your illustration
    },
    {
      name: 'Hachem',
      linkedin: 'https://www.linkedin.com/in/user1/',
      github: 'https://github.com/user1',
      illustration: '/card1.jpeg', // Provide a path to your illustration
    },
    {
      name: 'Hachem',
      linkedin: 'https://www.linkedin.com/in/user1/',
      github: 'https://github.com/user1',
      illustration: '/card1.jpeg', // Provide a path to your illustration
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
