import { GET_PRODUCTS_BY_CATEGORY, GET_ALL_CATEGORIES } from "@/lib/constants"
import { fetchApi } from "@/lib/utils/fetchApi"

export default function Category({ products }) {
  JSON.stringify(products)
  return <div></div>
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
    params: { id: category }, // Assuming 'category' is a string
  }))

  return {
    paths,
    fallback: false,
  }
}
