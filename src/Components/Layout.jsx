import Navbar from "../Components/Navbar/Navbar";

export default function Layout({ children }) {
  return (
    <div className="container m-0">
     <Navbar/>
      {children}
      
    </div>
  );
}