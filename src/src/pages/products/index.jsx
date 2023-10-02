const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1528141603775-81fd11f61682?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "electronics",
    //   path: `/Product/categories/${}`
  },
  {
    image:
      "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "jewelery",
    //   path:`/Product/categories/${}`
  },
  {
    image:
      "https://images.unsplash.com/photo-1505022610485-0249ba5b3675?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "men's clothing",
    //   path:`/Product/categories/${}`
  },

  {
    image:
      "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
    category: "women's clothing",
    //   path:`/Product/categories/${}`
  },
];

export default function index({ category }) {
  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-4 px-4 relative group">
      <div
        style={{ backgroundImage: ìmageToDisplay }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      >
        {/* Container for category name */}
        <div className="relative top-[35%] inset-0 space-y-5 flex flex-col items-center justify-center">
          {/* Category name */}
          <div className="flex items-center justify-center  bg-black/40 border-y-4 w-full">
            <h2 className="text-3xl font-bold text-white p-4 ">
              {`${slides[currentIndex].category}`}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://fakestoreapi.com/products?limit=15");
  const products = await res.json();
  return {
    props: {
      products,
    },
    revalidate: 60,
  };
}
