import { useState, useContext, useEffect } from "react";
import Link from "next/link";
import AmazonLogo from "../AmazonLogo";
import { BsBag } from "react-icons/bs";
import { CartContext } from "@/contexts/CartContext";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { CgProfile } from "react-icons/cg"

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  const { storage } = useContext(CartContext);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <nav className=" sticky top-0 z-10 nav-grantita">
      <div className="flex flex-col lg:flex-row h-full text-center align-middle align-items-center justify-around p-4">
        <div className="flex flex-row w-full justify-between items-center">
          <div className="w-fit">
            <Link href="/">
              <AmazonLogo />
            </Link>
          </div>
          {isOpen ? (
            <div
              className=" w-10 cursor-pointer md:border lg:hidden flex-col-reverse"
              onClick={() => {
                setisOpen(false);
              }}
            >
              <AiOutlineClose className="text-2xl" />
            </div>
          ) : (
            <div
              className={`w-10 justify-around lg:hidden items-end cursor-pointer`}
              onClick={() => setisOpen(true)}
            >
              <AiOutlineMenu className="text-2xl  mt-1 mr-1" />
            </div>
          )}
        </div>
        <div
          className={`${
            isOpen ? "flex space-x-4" : "hidden"
          } mt-5  relative lg:flex flex-col space-y-8 lg:space-y-0 w-full h-full items-center justify-between lg:justify-end lg:flex-row`}
        >
          <div className="flex flex-col space-y-2 items-center md:space-y-0 lg:flex-row ">
            <div className="text-l text-center lg:mx-7 lg:text-link font-medium hover:text-red-700 hover:font-bold ">
              <Link href="/categories/men's clothing">
                {" "}
                Men&apos;s clothing
              </Link>
            </div>
            <div className="text-l lg:mx-7 lg:text-link font-medium hover:text-red-700 hover:font-bold ">
              <Link href="/categories/women's clothing">
                Women&apos;s clothing
              </Link>
            </div>
            <div className="text-l lg:mx-7 lg:text-link font-medium hover:text-red-700 hover:font-bold ">
              <Link href="/categories/jewelery"> Jewelery</Link>
            </div>
            <div className="text-l lg:mx-7 lg:text-link font-medium hover:text-red-700 hover:font-bold ">
              <Link href="/categories/electronics"> Electronics</Link>
            </div>
            <Link href="/shopcart">
              <div className="cursor-pointer flex relative ">
                <BsBag className="text-2xl " />
                <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items center">
                  {isClient && storage.length}
                </div>
              </div>
            </Link>
            <div className="text-l lg:mx-7 lg:text-link hover:text-red-700 hover:font-bold ">
              <Link href="/authentification">
                <CgProfile  className="text-3xl"/>
              </Link>
            </div>          
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
