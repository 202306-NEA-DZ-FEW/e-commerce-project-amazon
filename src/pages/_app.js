import "@/styles/globals.css"
import Layout from "@/Components/Layout"
import CartProvider from "@/contexts/CartContext"
import { useState } from "react"
export default function App({ Component, pageProps }) {

  const [categories, setCategories] = useState([])
  

  return (
    <CartProvider>
      <Layout categories = {categories}>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  )
}
