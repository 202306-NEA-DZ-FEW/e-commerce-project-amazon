import Link from "next/link"
import React from "react"

export default function ProductItem({ product }) {
  return (
    <div className="card relative mt-4 hover:bg-red-200" key={product.id}>
      <div className="flex flex-col items-center justify-center">
        <Link href={`/pages/Products/${product.id}`}>
          <img
            src={product.image}
            alt={product.title}
            className="rounded shadow mx-auto mt-2 w-32 h-40"
          />
        </Link>

        <div className="flex flex-col items-center justify-center p-5">
          <h2 className="text-lg text-center overflow-hidden">
            <div className="line-clamp-2">{product.title}</div>
          </h2>
          <p className="mb-2">{product.category}</p>
          <p>${product.price}</p>
        </div>

        <div className="flex items-center justify-center mb-5">
          <button className="p-5 rounded bg-amber-200 py-2 px-4 shadow outline-none hover:bg-amber-600 active:bg-amber-500">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}
