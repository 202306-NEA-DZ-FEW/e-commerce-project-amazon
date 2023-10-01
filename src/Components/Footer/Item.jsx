import {AiFillGithub, AiOutlineLinkedin} from "react-icons/ai";
const Item = ({ Links, title }) => {
  return (<>
    <ul>
      <h3 className="mb-1">{title}</h3>
      {Links &&
        Links.map((link) => (
          <li key={link.name}>
            <a
              className="text-whitebeige hover:text-red-700 duration-300 text-sm cursor-pointer leading-6 "
              href={link.link}
              target="_blank"
              rel="noopener"
            >
              {link.name}
            </a>
          </li>
        ))}
    </ul>
   {/*  <div className="object-contain">
add image ?
          </div> */}
    </>
  );
};
// i  want to add an icon fr each link in the map through menus.js, but idk if it works in deployment.
export default Item;