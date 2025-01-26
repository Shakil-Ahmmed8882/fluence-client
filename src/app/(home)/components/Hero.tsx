import Image from "next/image";
import logo from "@/assets/shared/logo.png";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <Image src={logo} alt="Fluence" width={100} height={100} />
      <h1 className="text-5xl mt-3 font-bold">Fluence</h1>

      
    </div>
  );
};


export default Hero;