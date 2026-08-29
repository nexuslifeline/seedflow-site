import ProductCarousel from "./ProductCarousel";
import productsData from "./productsData";

const UpcomingProducts = () => {

  return (
    <>
      <section id="upcoming-products" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center gap-8">
            {/* Left Column - Carousel */}
            <div className="w-full px-4 lg:w-[55%]">
              <ProductCarousel 
                products={productsData} 
              />
            </div>

            {/* Right Column - Marketing Content with Stats */}
            <div className="w-full px-4 lg:w-[40%]">
              <div className="max-w-[500px]">
                <span className="text-primary dark:text-primary relative z-10 mb-2 block text-sm font-semibold tracking-wider uppercase">
                  Coming Soon
                </span>
                <h2 className="mb-4 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                  Products on the Horizon
                </h2>
                <p className="text-body-color dark:text-body-color-dark mb-4 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
                  Discover innovative solutions currently in development by our team. These products are designed to help businesses streamline operations and improve efficiency.
                </p>
                <p className="text-body-color dark:text-body-color-dark mb-8 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
                  Stay tuned as we continue to build cutting-edge tools that will transform how businesses manage their finances and track their marketing performance.
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UpcomingProducts;

