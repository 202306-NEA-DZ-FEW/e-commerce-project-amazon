import Head from "next/head"
import Slider from "@/Components/HomepageComponents/Slider"
import Filter from "@/Components/Filter/Filter"

import { fetchApi } from "@/lib/utils/fetchApi"
import { GET_ALL_CATEGORIES, GET_ALL_PRODUCTS } from "@/lib/constants"


export default function Home({ products, categories }) {
  return (
    <>
      <Head>
        <title>AmaZD by Amazon Team</title>
      </Head>

      <Slider />
      <div >
        <Filter products={products} categories={categories} />
      </div>


    </>
  )
}

export async function getStaticProps() {

  const products = await fetchApi(GET_ALL_PRODUCTS)
  const categories = await fetchApi(GET_ALL_CATEGORIES)
  return {
    props: {
      products,
      categories,
    },
    revalidate: 60,
  }
}
