import Item from "./Item";
import { HACHEM, ISMAIL, HAKIM, HADIA, MERIEM, DALILA } from "./members";
const Footer = () => {
  return (
    <footer className="bg-darkgray text-whitebeige mt-24 w-full">
      <div className="md:flex md:justify-center md:items-center sm:px-12 px-4 bg-bkg/20 py-4">
        <h1
          className="lg:text-xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5 text-center justify-center"
        >
        </h1>
      </div>
      <div className=" text-center grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:px-8 px-6 py-16">
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