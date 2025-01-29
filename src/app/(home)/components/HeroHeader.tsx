import { Image } from "@nextui-org/react";

const HeroHeader = () => {
  return (
    <>
<div className="flex items-end border-b border-[gray] mb-8 pb-6 border-secondary">
      <Image
        src={'shared/logo.png'}
        alt="Fluence Logo"
        width={100}
        height={100}
      />
      <h1 className="text-5xl font-bold -ml-3 gradient-text">LUENCE</h1>
      </div>
      <p className="text-xl text-[#c9c9c9] mb-12 text-center max-w-2xl">
        Master English like never before. Your journey to fluency starts here.
      </p>
    </>
  );
};

export default HeroHeader;
