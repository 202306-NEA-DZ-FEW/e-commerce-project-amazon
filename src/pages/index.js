import Head from "next/head"
import Slider from "@/Components/HomepageComponents/Slider"
import ProductCard from "../Components/ProductCard/ProductICard"
import { fetchApi } from "@/lib/utils/fetchApi"
import { GET_ALL_CATEGORIES } from "@/lib/constants"

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>AmaZD by Amazon Team</title>
      </Head>
     
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
  const resP = await fetch("https://fakestoreapi.com/products?limit=15")
  const products = await resP.json()
  const categories = await fetchApi(GET_ALL_CATEGORIES)
  return {
    props: {
      products,
      categories,
    },
    revalidate: 60,
  }
}
