import Link from "next/link"
import Image from "next/image"
import AmazonLogo from "../AmazonLogo"
import DropDown from "./DropDown"
import { BsBag } from "react-icons/bs"
import { useState, useContext } from "react"
import { CartContext } from "@/contexts/CartContext"

const Navbar = () => {
  const [searchList, setSearchList] = useState([])
  const [searchInput, setSearchInput] = useState("")
  const { itemAmount } = useContext(CartContext)

  return (
    <nav className=" bg-white w-full top-0 sticky z-20  flex flex-row items-center justify-between gap-2 mx-2 mb-4">
      <Link href={"/"}>
        <AmazonLogo />
      </Link>
      <div className="md:flex hidden">
        <ul>
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
          <li className="inline-block px-4">
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
      <div className=" md:flex hidden flex-row  w-fit items-center gap-4">
        <div className="flex items-center mt-2">
          <div className="flex border border-red-200 rounded">
            <input
              type="text"
              className="block px-1 py-2 text-red-700 bg-white border rounded-md focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Search..."
              value={searchInput}
              onChange={(e) => handleSeacrh(e)}
            />
            <button className="px-4 text-white bg-red-600 border-l rounded ">
              Search
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar