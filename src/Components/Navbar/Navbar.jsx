"use client";
import { useState, useContext } from "react"
import { useMediaQuery } from "usehooks-ts"
import Link from "next/link"
import AmazonLogo from "../AmazonLogo"
import DropDown from "./DropDown"
import { BsBag } from "react-icons/bs"
import { GiHamburgerMenu } from "react-icons/gi"
import { IoMdClose } from "react-icons/io"
import { CartContext } from "@/contexts/CartContext"

const Navbar = () => {
  const [searchList, setSearchList] = useState([])
  const [searchInput, setSearchInput] = useState("")
  const [isopen, setisOpen] = useState(false)
  const { itemAmount } = useContext(CartContext)
  const matches = useMediaQuery("(min-width: 768px)")

  return (
    <div>
      {matches ? (
        <nav className=" bg-white w-full top-0 sticky z-20  flex flex-row items-center justify-between gap-2 mx-2 mb-4">
          <Link href={"/"}>
            <AmazonLogo />
          </Link>
          <div className="flex">
            <ul className="flex uppercase items-center gap-8">
              <li className="px-4 hover:text-red-700">
                <Link href={"/"}>men's clothing</Link>
              </li>
              <li className="px-4 hover:text-red-700">
                <Link href={"/"}>women's clothing</Link>
              </li>
              <li className="px-4 hover:text-red-700">
                <Link href={"/"}>jewlery</Link>
              </li>
              <li className="px-4 hover:text-red-700 relative">
                <DropDown />
              </li>
              <li className=" inline-block px-4">
                <Link href={"/"}>
                  <div className="cursor-pointer flex relative">
                    <BsBag className="text-2xl" />
                    <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items center">
                      {itemAmount}
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      ) : (
        <nav className="h-[80%]">
          <div className="text-xl z-100" onClick={() => setisOpen(!isopen)}>
            {isopen ? <IoMdClose /> : <GiHamburgerMenu />}
            <div className="bg-white w-full ">
              <ul
                className={`bg-bkg fixed  w-64 z-20 top-0 overflow-y-auto bottom-0 py-24 pl-4 duration-500 left-0 ${
                  isopen ? "right-0" : "right-[-100%]"
                }`}
              >
                <li className="inline-block px-4 hover:text-red-700">
                  <Link href={"/"}>men's clothing</Link>
                </li>
                <li className="inline-block px-4 hover:text-red-700">
                  <Link href={"/"}>women's clothing</Link>
                </li>
                <li className="inline-block px-4 hover:text-red-700">
                  <Link href={"/"}>jewlery</Link>
                </li>
                <li className="inline-block px-4 hover:text-red-700 relative">
                  <DropDown />
                  {/* <ul className="opacity-0 group-hover:opacity-100 absolute bg-blue-500 top-10"><DropDown/></ul> */}
                </li>
                <li className=" inline-block px-4">
                  <Link href={"/"}>
                    <div className="cursor-pointer flex relative">
                      <BsBag className="text-2xl" />
                      <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items center">
                        {itemAmount}
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </div>
  )
}
export default Navbar
