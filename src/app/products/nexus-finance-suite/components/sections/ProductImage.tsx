import Image from "next/image";

const ProductImage = () => {
  return (
    <div className="mb-12 flex justify-center">
      <div className="relative w-full max-w-[900px] overflow-hidden rounded-xl border-4 border-primary/20 shadow-2xl dark:border-primary/30">
        {/* Light mode image */}
        <Image
          src="/images/products/finance-suite.png"
          alt="Seedflow accounting dashboard"
          width={900}
          height={600}
          className="w-full h-auto dark:hidden"
          priority
        />
        {/* Dark mode image */}
        <Image
          src="/images/products/finance-suite-black.png"
          alt="Seedflow accounting dashboard"
          width={900}
          height={600}
          className="hidden w-full h-auto dark:block"
          priority
        />
      </div>
    </div>
  );
};

export default ProductImage;
