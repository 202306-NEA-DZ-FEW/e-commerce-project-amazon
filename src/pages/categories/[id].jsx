import {
  GET_PRODUCTS_BY_CATEGORY,
  GET_ALL_CATEGORIES,
  slides
} from "@/lib/constants"
import { fetchApi } from "@/lib/utils/fetchApi"
import ProductCard from "@/Components/productCard/ProductICard"
import Head from "next/head";

export default function Category({ products }) {


  const category = products[0].category;

  const slideCat = slides.find((slide) => slide.category === category);

  return (
    <>
      <Head>
        <title>{category} | AmaZD</title>
        <meta name="description" content="shopping cart" />
      </Head>
      <div>
        <div className="max-w-[1400px] h-[780px] w-full m-auto py-4 px-4 relative group">
          <div
            style={{ backgroundImage: `url("${slideCat?.url || ""}")` }}
            className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
          >
            <div className="relative top-[35%] inset-0 space-y-5 flex flex-col items-center justify-center">
              {/* Category name */}
              <div className="flex items-center justify-center  bg-black/40 border-y-4 w-full">
                <h2 className="text-3xl font-bold text-white p-4 ">
                  {category}
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 mt-4 mx-4 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps({ params }) {
  const products = await fetchApi(GET_PRODUCTS_BY_CATEGORY + params.id)

  return {
    props: {
      products,
    },
    revalidate: 60,
  }
}

export async function getStaticPaths() {
  const categories = await fetchApi(GET_ALL_CATEGORIES)

  // Generate an array of objects with 'params' property for dynamic paths
  const paths = categories.map((category) => ({
    params: { id: category }, // 
  }))

  return {
    paths,
    fallback: false,
  }
}
