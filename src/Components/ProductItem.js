import Link from "next/link"
import React from "react"

export default function ProductItem({ products }) {
  return products.map((product) => (
    <div className="card" key={product.id}>
      <Link href={`/Products/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="rounded shadow w-32 h-40 mx-auto"
        />
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.id}`}>
          <h2 className="text-lg">{product.name}</h2>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <p>${product.price}</p>

        <button className="primary-button mt-2" type="button">
          Add to cart
        </button>
      </div>
    </div>
  ))
}
