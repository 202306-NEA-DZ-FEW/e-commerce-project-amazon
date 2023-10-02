import Navbar from "../Components/Navbar/Navbar"
import { fetchApi } from "@/lib/utils/fetchApi"
import { GET_ALL_CATEGORIES } from "@/lib/constants"
import Footer from "./Footer/Footer"
export default function Layout({ children }) {
  return (
    <div className="w-fit-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
