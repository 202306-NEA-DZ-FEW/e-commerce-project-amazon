import Head from "next/head"
import ProductCardDetails from "@/Components/SingleProductComponents/ProductCardDetails"
import ProductImage from "@/Components/SingleProductComponents/ProductImage"
import { getProductById } from "@/lib/utils/fetchApi"



function ProductDetails({ product }) {
  return (
    <>
      <Head>
        <title>{product.title}</title>
        <meta name="description" content="Product details" />
      </Head>
      <main className="grid gap-8 md:grid-cols-6 xl:px-20 p-8  ">
        <ProductImage product={product} />
        <ProductCardDetails product={product} />
      </main>
    </>
  )
}

export default ProductDetails

export async function getServerSideProps(context) {
  const { productId } = context.query
  const product = await getProductById(productId)
  return {
    props: {
      product,
    },
  }
}
