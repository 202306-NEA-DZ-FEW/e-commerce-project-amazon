import Image from "next/image"

function ProductImage({ product }) {
  return (
    <div className="w-full h-[300px] md:min-h-[500px] xl:min-h-[530px] xl:col-span-2 relative">
      <div className="absolute w-full h-[20%] bg-gradient-to-b from-black opacity-10 to-transparent z-10"></div>
      <Image
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        src={product.image}
        alt={product.tit}
        priority
      />

      <div className="absolute bottom-0 w-full h-[0%] bg-gradient-to-t from-black opacity-10 to-transparent z-10"></div>
    </div>
  )
}

export default ProductImage
