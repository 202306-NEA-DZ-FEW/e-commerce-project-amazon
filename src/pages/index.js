import Head from "next/head"
import Slider from "@/Components/HomepageComponents/Slider"
import HomePageProduct from "@/Components/HomepageComponents/HomePL"

export default function Home() {
  return (
    <>
      <Head>
        <title>AmaZD by Amazon Team</title>
      </Head>
      <h1> Hello Amazon Team </h1>
      <Slider />
      <HomePageProduct />
    </>
  )
}
