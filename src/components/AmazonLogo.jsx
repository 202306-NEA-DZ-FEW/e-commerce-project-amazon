import Image from "next/image";

const AmazonLogo = () => {
  return (
    <div>
      {" "}
      <Image src={"/assets/logo.png"} alt="Logo" width={120} height={80} />
    </div>
  );
};

export default AmazonLogo;
