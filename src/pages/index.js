import Head from "next/head"
import Slider from "@/Components/HomepageComponents/Slider"
import HomePageProduct from "@/Components/HomepageComponents/HomePL"

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>AmaZD by Amazon Team</title>
      </Head>
     
      <Slider />
      <HomePageProduct products={products} />
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch("https://fakestoreapi.com/products?limit=15")
  const products = await res.json()
 
  return {
    props: {
      products,
    },
    revalidate: 60,
  }
}
