import Head from "next/head"
import dynamic from "next/dynamic"
import ProductCardDetailsPlaceHolder from "@/components/SingleProductComponents/ProductCardDetails/ProductCardDetailsPlaceHolder"
import ProductImagePlaceHolder from "@/components/SingleProductComponents/ProductImage/ProductImagePlaceHolder"
import { getProductById } from "@/lib/utils/fetchApi"

const ProductImage = dynamic(
  () => import("@/components/SingleProductComponents/ProductImage"),
  {
    loading: () => <ProductImagePlaceHolder />,
  },
)
const ProductCardDetails = dynamic(
  () => import("@/components/SingleProductComponents/ProductCardDetails"),
  {
    loading: () => <ProductCardDetailsPlaceHolder />,
  },
)

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
