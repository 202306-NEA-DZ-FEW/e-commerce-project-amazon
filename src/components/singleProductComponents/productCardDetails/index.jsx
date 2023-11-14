import { getStaticProps } from "@/pages";
import { BsFillStarFill } from "react-icons/bs";
import Link from "next/link";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "@/contexts/CartContext";

const ProductCardDetails = ({ product }) => {
  const { setStorage, storage } = useContext(CartContext);
  const [notification, setNotification] = useState(false);

  const handleAddToCart = (product) => {
    setStorage((prev) => [...prev, product]);
    setNotification(true);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setNotification(false);
    }, 3000);
    return () => clearTimeout(timer);
  });
  return (
    <div className="lg:cols-span-3 md:col-span-4 bg-gray-100 rounded-lg shadow-lg p-6">
      <h1 className="text-2xl font-bold text-gray-800">{product.title}</h1>
      <div className="flex items-center mt-2">
        <span className="text-xl flex items-center justify-center gap-2">
          {Array.from({ length: 5 }, (_, index) => (
            <BsFillStarFill key={index} className="text-yellow-300" />
          ))}
        </span>
      </div>

      <hr className="my-4" />
      <p className="text-gray-600 p-3">{product.description}</p>
      <p className="text-gray-500  ">
        <span className="text-xl font-bold ml-3">Catygory : </span>
        <mark className="bg-yellow-200 p-1 pt-0 text-gray-500 font-medium">
          <Link href={`/categories/${product.category}`}>
            {product.category}
          </Link>
        </mark>
      </p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-2xl font-semibold text-green-500 ml-3">
          ${product.price}.00
        </span>
        {notification && (
          <div className="relative transition-transform  -translate-x-1/2 bottom-[-3rem] w-[50%] text-center  bg-red-200 px-4 py-2 opacity-75 text-red-900 rounded-lg font-semibold">
            Added to the cart
          </div>
        )}
        <div className="flex items-center justify-center mb-5">
          <button
            onClick={() => handleAddToCart(product)}
            className="p-5 rounded-lg font-semibold py-2 px-4 shadow outline-none bg-black   hover:bg-red-200 active:bg-red-800 text-white hover:text-black active:text-black-font-bold"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardDetails;
