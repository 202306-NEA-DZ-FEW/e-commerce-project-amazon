import Image from "next/image";
import Men from "../../assets/Men.svg"
const Item = ({ Links, title }) => {
  return (<div className="drop-shadow-md hover:shadow-md bg-white p-4 rounded-lg transition duration-300 transform hover:-translate-y-2">
    <div className="object-contain">
                <Image
                  src={Men}
                  width={400}
                  height={400}
                  alt="Illustration"
                  className="w-full rounded-lg bg-cover transform scale-100 filter  transition-all duration-300 ease-in-out hover:filter-blur-0"
                />
              </div>
    <ul className="flex-col items-center ">
      <h3 className="text-sm mb-1">{title}</h3>
      {Links &&
          Links.map((link) => (
            <li key={link.name} className=" text-base flex-row items-center  align-middle">
              <a
                className="text-whitebeige hover:text-red-700 duration-300 text-sm cursor-pointer leading-6 "
                href={link.link}
                target="_blank"
                rel="noopener"
              >
                {link.icon}
              </a>
              
            </li>
          ))}
    </ul>
   
    </div>
  );
};
// i  want to add an icon fr each link in the map through menus.js, but idk if it works in deployment.
export default Item;