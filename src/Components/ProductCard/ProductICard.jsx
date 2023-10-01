/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { useContext } from "react"
import { CartContext } from "@/contexts/CartContext"

export default function ProductCard({ product }) {
  const { setStorage } = useContext(CartContext)

  const handleAddToCart = (product) => {
    // console.log([...prev, product])
    setStorage((prev) => [...prev, product])
  }
  return (
    <div className="card relative mt-4 hover:bg-red-200" key={product.id}>
      <Link href={`/products/${product.id}`}>
        <div className="flex flex-col items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="rounded shadow mx-auto mt-2 w-32 h-40"
          />

          <div className="flex flex-col items-center justify-center p-5">
            <h2 className="text-lg text-center overflow-hidden">
              <div className="line-clamp-2">{product.title}</div>
            </h2>
            <p className="mb-2">{product.category}</p>
            <p>${product.price}</p>
          </div>

          <div className="flex items-center justify-center mb-5">
            <button
              onClick={() => handleAddToCart(product)}
              className="p-5 rounded bg-amber-200 py-2 px-4 shadow outline-none hover:bg-amber-600 active:bg-amber-500">
              Add to cart
            </button>
          </div>
        </div>
      </Link>
    </div>
  )
}
