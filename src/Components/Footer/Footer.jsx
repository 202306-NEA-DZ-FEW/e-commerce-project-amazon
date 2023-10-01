import Item from "./Item";
import { HACHEM, ISMAIL, HAKIM, HADIA, MERIEM, DALILA } from "./members";
const Footer = () => {
  return (
    <footer className="bg-darkgray text-whitebeige mt-24 w-full">
      <div className=" text-center grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:px-8 px-6 pt-16 pb-8 ">
      <Item Links={HACHEM} title="HACHEM BOUHADENE" />
      <Item Links={ISMAIL} title="ISMAIL BENLAREDJ" />
      <Item Links={HAKIM} title="HAKIM TIABI" />
      <Item Links={HADIA} title="HADIA DJADALLAH" />
      <Item Links={MERIEM} title="MERIEM MANSOURI" />
      <Item Links={DALILA} title="DALILA MUEGENNI" />
    </div>
    <div classNmae=""></div>
      <div
        className="w-full p-4 text-center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        MADE WITH LOVE ❤️ BY THE AmaZD SQUAD.
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


