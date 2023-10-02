/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { useContext, useEffect, useState } from "react"
import { CartContext } from "@/contexts/CartContext"

export default function ProductCard({ product }) {
  const { setStorage, storage } = useContext(CartContext)
  const [notification, setNotification] = useState(false)

  const handleAddToCart = (product) => {
    setStorage((prev) => [...prev, product])
    setNotification(true)
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setNotification(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [notification])
  return (
    <div className=" relative mt-4 flex flex-col items-center justify-between lg-w-[1/4] box-border p-2 rounded-lg border border-gray-300">
      <Link href={`/products/${product.id}`} className="relative w-full">
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
        </div>

        {notification && (
          <div className="absolute transition-transform  left-1/2 -translate-x-1/2 top-0 w-[90%] text-center  bg-red-300 px-4 py-2 opacity-75 text-red-900 rounded-lg font-semibold">
            Added to the cart
          </div>
        )}
      </Link>
      <div className="flex items-center justify-center mb-5">
        <button
          onClick={() => handleAddToCart(product)}
          className="p-5 rounded-lg bg-black  text-white font-semibold py-2 px-4 shadow outline-none hover:bg-red-400 active:bg-red-800"
        >
          Add to cart
        </button>
      </div>
    </div>
  )
}
