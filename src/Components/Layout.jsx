import Navbar from "../Components/Navbar/Navbar";
import { fetchApi } from "@/lib/utils/fetchApi";
import { GET_ALL_CATEGORIES } from "@/lib/constants";
export default function Layout({ children }) {
  return (
    <div className="container mx-auto">
      <Navbar />
      {children}
    </div>
  )
}


