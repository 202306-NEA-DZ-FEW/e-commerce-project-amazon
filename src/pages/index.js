import Head from "next/head"
import Slider from "@/Components/HomepageComponents/Slider"
import HomePageProduct from "@/Components/HomepageComponents/HomePL"
import { fetchApi } from "@/lib/utils/fetchApi"
import { GET_ALL_CATEGORIES } from "@/lib/constants"
import { useEffect } from "react"

export default function Home({ products, categories}) {

useEffect = (() => {
  setCategories (categories)
}, [])

  return (
    <>
      <Head>
        <title>AmaZD by Amazon Team</title>
      </Head>
      <h1> Hello Amazon Team </h1>
      <Slider categories={categories}/>
      <HomePageProduct products={products} />
    </>
  )
}

export async function getStaticProps() {
  const resP = await fetch("https://fakestoreapi.com/products?limit=15")
  const products = await resP.json()
  const categories =  await fetchApi(GET_ALL_CATEGORIES)
  // console.log(products)
  return {
    props: {
      products,
      categories
    },
    revalidate: 60,

  }
}

