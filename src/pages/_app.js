import "@/styles/globals.css"
import Layout from "@/Components/Layout"
import CartProvider from "@/contexts/CartContext"
export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  )
}
