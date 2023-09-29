import Head from "next/head"
import Slider from "@/Components/HomepageComponents/Slider"
import ProductCard from "../Components/ProductCard/ProductICard"

export default function Home({ products }) {
  console.log(products)
  return (
    <>
      <Head>
        <title>AmaZD by Amazon Team</title>
      </Head>
      <h1> Hello Amazon Team </h1>
      <Slider />
      <div className="grid grid-cols-1 mt-4 mx-4 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch("https://fakestoreapi.com/products?limit=15")
  const products = await res.json()
  console.log(products)
  return {
    props: {
      products,
    },
    revalidate: 60,
  }
}
