import Navbar from "../Components/Navbar/Navbar"

export default function Layout({ children }) {
  return (
    <div className="container mx-auto">
      <Navbar />
      {children}
    </div>
  )
}
