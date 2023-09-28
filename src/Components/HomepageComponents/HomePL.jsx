import React, { useState, useEffect } from "react"
// import ProductCard from "@/Components/ProductCard/ProductCard";
import Link from "next/link"

export default function HomePL({ products }) {
  // const [products, setProducts] = useState([])

  // useEffect(() => {
  //   async function getProductsList() {
  //     const res = await fetch("https://fakestoreapi.com/products?limit=15")
  //     setProducts(await res.json())
  //   }
  //   getProductsList()
  // }, [])
  console.log(products)
  return (
    <div>
      <div className="flex flex-col space-y-4 items-center justify-center mt-5">
        <h1 className="text-5xl">Welcome to AmaZD</h1>
        <h2 className="text-3xl">
          the best online shopping experience you can have
        </h2>
      </div>
      <div className="container mx-auto flex ">
        <div className="grid md:grid-cols-3 lg:grid-cols-5 sm:grid-cols-1 gap-2">
          {products.map((product) => (
            <div className="border-2" key={product.id}>
              <Link href={`/Products/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-scale-down w-full h-3/4"
                />
                <h3>{product.title}</h3>

                {/* <ProductCard props={product} /> */}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
