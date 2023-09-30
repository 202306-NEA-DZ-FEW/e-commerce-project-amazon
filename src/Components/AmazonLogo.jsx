import Image from "next/image"
import Logo from "../assets/logo.svg"

const AmazonLogo = () => {
  return (
    <div>
      {" "}
      <Image src={Logo} alt="Logo" width={120} height={80} layout="fixed" />
    </div>
  )
}

export default AmazonLogo
