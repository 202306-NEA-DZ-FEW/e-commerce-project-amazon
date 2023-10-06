import ShopCartProduct from "@/components/shopCart/ShopCartProduct";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "@/contexts/CartContext";
import Head from "next/head";
import { useUser } from "@/contexts/UserContext";
import Link from "next/link";

const ShopCart = () => {
  const { storage, setStorage } = useContext(CartContext);
  const user = useUser();

  const [total, setTotal] = useState(0);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
    let sum = 0;
    storage.forEach((product) => {
      sum += product.price;
    });
    setTotal(sum);
  }, [storage]);

  return (
    <>
      {user ? (
        <div className=" mx-auto pt-24">
          <h1 className="text-center text-2xl font-semibold mb-10">
            Welcome {user.email} to your shopping cart
          </h1>
          <h1 className="text-center text-4xl font-semibold mb-10">
            Shopping Cart
          </h1>
          {isClient && (
            <ShopCartTable total={total}>
              {storage.length > 0 ? (
                storage.map((product) => {
                  return (
                    <ShopCartProduct
                      product={product}
                      key={product.id}
                      setCart={setStorage}
                      setTotal={setTotal}
                    />
                  );
                })
              ) : (
                <span className="text-xl font-thin text-center p-10 w-full ">
                  Shopping cart is empty
                </span>
              )}
            </ShopCartTable>
          )}
          <div className="mx-auto w-fit pt-10">
            <button
              onClick={() => alert("You need Salah's credit card to checkout")}
              className="bg-black opacity-90 text-white px-8 py-2 rounded-md"
            >
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="min-h-screen flex items-center justify-center">
          <div className="relative flex place-content-center">
            <Link href="/authentification">
              <button className="rounded-md mx-auto py-3 px-5 bg-black text-white font-semibold  w-[300px]">
                Please Sign In First
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

const ShopCartTable = ({ children, total }) => {
  return (
    <>
      <Head>
        <title>Shop Cart | AmaZD</title>
        <meta name="description" content="shopping cart" />
      </Head>
      <div className="flex flex-col">
        <div className="lg:w-4/5 w-[90%] mx-auto flex flex-col">
          <div className="lg:flex px-2 py-3 border-b-2 hidden ">
            <div className="w-[40%]">Product</div>
            <div className="w-[18%]">Price</div>
            <div className="w-[18%]">Quantity</div>
            <div className="w-[18%]">Total</div>
          </div>
          {children}
          <div className="flex justify-end gap-5 px-4 pt-5 pb-2">
            <div className="text-xl ">Total</div>
            <div className="text-xl font-bold">${total.toFixed(2)}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopCart;
