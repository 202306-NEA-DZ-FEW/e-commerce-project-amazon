import { getStaticProps } from "@/pages"
import { BsFillStarFill } from "react-icons/bs"
import Link from "next/link"

const ProductCardDetails = ({ product }) => {
  return (
    <div className="lg:cols-span-3 md:col-span-4 bg-gray-100 rounded-lg shadow-lg p-6">
      <h1 className="text-2xl font-bold text-gray-800">{product.title}</h1>
      <div className="flex items-center mt-2">
        <span className="text-xl flex items-center justify-center gap-2">
          {Array.from({ length: 5 }, (_, index) => (
            <BsFillStarFill key={index} className="text-yellow-300" />
          ))}
        </span>
      </div>

      <hr className="my-4" />
      <p className="text-gray-600 p-3">{product.description}</p>
      <p className="text-gray-500  ">
        <span className="text-xl font-bold ml-3">Catygory : </span>
        <mark className="bg-yellow-200 p-1 pt-0 text-gray-500 font-medium">
          <Link href={`/categories/${product.category}`}>{product.category}</Link>
        </mark>
      </p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-2xl font-semibold text-green-500 ml-3">
          ${product.price}.00
        </span>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none focus:bg-blue-600 mt-4 pr-5 pl-5 hover:bg-green-400 font-medium">
          <Link href="/shopcart">ADD TO CART</Link>
        </button>
      </div>
    </div>
  )
}

export default ProductCardDetails
