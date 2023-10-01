import { useState, useContext } from "react";
import Link from "next/link";
import AmazonLogo from "../AmazonLogo";
import { BsBag } from "react-icons/bs";
import { CartContext } from "@/contexts/CartContext";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false)
  const { storage } = useContext(CartContext)


  return (
    <nav className=" relative">
      <div className="flex flex-col lg:flex-row h-full items-center justify-between p-4">
        <div className="flex flex-row w-full justify-between items-center">
          <div className="w-fit">
            <Link href="/">
              <AmazonLogo />
            </Link>
          </div>
          {isOpen ? (
            <div
              className=" w-10 cursor-pointer lg:hidden"
              onClick={() => {
                setisOpen(false)
              }}
            >
              <AiOutlineClose className="text-2xl" />
            </div>
          ) : (
            <div
              className={`w-10 lg:hidden cursor-pointer`}
              onClick={() => setisOpen(true)}
            >
              <AiOutlineMenu className="text-2xl mt-1 mr-1" />
            </div>
          )}
        </div>
        <div
          className={`${isOpen ? "flex" : "hidden"
            } mt-5  relative lg:flex flex-col space-y-10 lg:space-y-0 w-full h-full items-start justify-around lg:justify-end lg:flex-row`}
        >
          <div className="flex flex-col space-y-2 md:space-y-0 lg:flex-row items-start">
            <div className="text-l lg:mx-7 lg:text-link font-medium hover:text-red-700">
              <Link href="/categories/men's clothing"> men's clothing</Link>
            </div>
            <div className="text-l lg:mx-7 lg:text-link font-medium hover:text-red-700">
              <Link href="/categories/women's clothing">women's clothing</Link>
            </div>
            <div className="text-l lg:mx-7 lg:text-link font-medium hover:text-red-700">
              <Link href="/categories/jewelery"> jewelery</Link>
            </div>
            <div className="text-l lg:mx-7 lg:text-link font-medium hover:text-red-700">
              <Link href="/categories/electronics"> electronics</Link>
            </div>
            <div className="cursor-pointer flex relative " href="/shopcart">
              <BsBag className="text-2xl" />
              <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items center">
                {storage.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
