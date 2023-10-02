import Image from "next/image"
import { useState } from "react"
import { AiOutlineDelete } from "react-icons/ai"

const ShopCartProduct = ({ product, setCart, setTotal }) => {
  const [quantity, setQuantity] = useState(1)
  const handleRemove = () => {
    setCart((prev) => prev.filter((item) => item.id !== product.id))
  }

  const handleAdd = () => {
    setQuantity(quantity + 1)
    setTotal((prev) => prev + product.price)
  }
  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
      setTotal((prev) => prev - product.price)
    }
  }
  return (
    <div className="flex flex-col lg:flex-row lg:px-2 py-3 border-b-2 ">
      <div className="lg:w-[40%]  flex  flex-row gap-2">
        <div className=" border border-gray-300 lg:w-fit w-1/2  p-2 rounded-lg flex">
          <Image
            src={product.image}
            alt="product"
            width={100}
            height={100}
            className="self-center mx-auto"
          />
        </div>
        <div className="w-2/3">
          <div className="font-bold">
            <p>{product.title}</p>
          </div>
          <div className="text-sm lg:w-4/5 ">
            <p className="text-ellipsis overflow-hidden h-32">
              {product.description}
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-[60%] flex justify-between lg:justify-start items-center lg:items-start pt-5 px-2 lg:pt-0">
        <div className="lg:w-[33.33%] text-xl">${product.price}</div>
        <div className=" lg:w-[33.33%] w-[45%] flex justify-center lg:justify-start">
          <div className="flex py-1 rounded-md border border-gray-300 w-3/4 justify-around items-stretch">
            <div
              onClick={handleMinus}
              className="text-2xl text-gray-700 cursor-pointer select-none"
            >
              - {/* minus button */}
            </div>
            <div className="text-xl">{quantity}</div>
            <div
              onClick={handleAdd}
              className="text-2xl text-gray-700 cursor-pointer select-none"
            >
              + {/* add button */}
            </div>
          </div>
        </div>
        <div className="w-[18%] text-xl flex">
          ${(product.price * quantity).toFixed(2)}
        </div>
      </div>

      <div className="w-[6%] self-center mt-8 lg:mt-0">
        <AiOutlineDelete
          onClick={handleRemove}
          className="text-3xl text-red-400 cursor-pointer"
        />
      </div>
    </div>
  )
}

export default ShopCartProduct
