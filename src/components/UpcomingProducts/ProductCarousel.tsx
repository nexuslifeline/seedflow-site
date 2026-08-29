"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types/product";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProductCarousel = ({ products }: { products: Product[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Map product IDs to their detail page routes
  const getProductUrl = (productId: number) => {
    const routes: { [key: number]: string } = {
      1: "/products/nexus-finance-suite",
      2: "/products/nexus-ad-tracker",
    };
    return routes[productId] || "#";
  };

  // Get product image based on product ID and theme
  const getProductImage = (productId: number, productImage?: string) => {
    if (productId === 1) {
      // Finance Suite - return both light and dark images
      return {
        light: "/images/products/finance-suite.jpg",
        dark: "/images/products/finance-suite-black.jpg",
      };
    }
    if (productId === 2) {
      // Ad Tracker - return both light and dark images
      return {
        light: "/images/products/ad-tracker.jpg",
        dark: "/images/products/ad-tracker-black.jpg",
      };
    }
    // For other products, use the image from product data
    return {
      light: productImage || "",
      dark: productImage || "",
    };
  };

  return (
    <div className="relative mx-auto max-w-[650px]">
      {/* Dashboard/Product Preview with Overlapping Card */}
      <div className="relative aspect-[3/2] w-full overflow-visible rounded-lg mb-6 min-h-[500px]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination-custom",
            bulletClass: "swiper-pagination-bullet-custom",
            bulletActiveClass: "swiper-pagination-bullet-active-custom",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={800}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="absolute inset-0 w-full h-full !overflow-hidden"
        >
          {products.map((product, index) => {
            const productImages = getProductImage(product.id, product.image);
            return (
              <SwiperSlide key={index} className="!flex items-center justify-center">
                <div className="relative w-full h-full rounded-xl border-4 border-primary/20 dark:border-primary/30 shadow-2xl overflow-hidden">
                    {(product.id === 1 || product.id === 2) ? (
                      <>
                        {/* Light mode image */}
                        <Image
                          src={productImages.light}
                          alt={typeof product.title === 'string' ? product.title : 'Product'}
                          fill
                          className="object-cover rounded-lg dark:hidden"
                          priority={index === 0}
                          sizes="(max-width: 768px) 100vw, 650px"
                        />
                        {/* Dark mode image */}
                        <Image
                          src={productImages.dark}
                          alt={typeof product.title === 'string' ? product.title : 'Product'}
                          fill
                          className="hidden object-cover rounded-lg dark:block"
                          priority={index === 0}
                          sizes="(max-width: 768px) 100vw, 650px"
                        />
                      </>
                    ) : product.image ? (
                      <Image
                        src={product.image}
                        alt={typeof product.title === 'string' ? product.title : 'Product'}
                        fill
                        className="object-cover rounded-lg"
                        priority={index === 0}
                        sizes="(max-width: 768px) 100vw, 650px"
                      />
                    ) : null}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Custom Navigation Arrows */}
        <button
          className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-gray-dark rounded-full p-3 shadow-lg hover:bg-primary hover:text-white dark:hover:bg-primary transition-all duration-300 group"
          aria-label="Previous product"
        >
          <svg
            className="w-5 h-5 text-black dark:text-white group-hover:text-white transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-gray-dark rounded-full p-3 shadow-lg hover:bg-primary hover:text-white dark:hover:bg-primary transition-all duration-300 group"
          aria-label="Next product"
        >
          <svg
            className="w-5 h-5 text-black dark:text-white group-hover:text-white transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Productivity/Features Card - Overlapping bottom right */}
        <div className="absolute bottom-0 right-0 bg-white dark:bg-gray-dark rounded-lg rounded-tl-lg p-6 shadow-lg max-w-[450px] translate-x-16 translate-y-12 z-10">
          <h3 className="text-dark mb-3 text-xl font-bold sm:text-2xl dark:text-white">
            {products[activeIndex].title}
          </h3>
          <p className="text-body-color dark:text-body-color-dark mb-4 text-base leading-relaxed font-medium">
            {products[activeIndex].paragraph}
          </p>
          <Link
            href={getProductUrl(products[activeIndex].id)}
            className="text-primary dark:text-primary hover:text-primary/80 inline-flex items-center text-base font-semibold transition-colors duration-300"
          >
            Read more
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Navigation Controls - Custom Pagination */}
      <div className="swiper-pagination-custom flex items-center justify-center gap-2 mt-16"></div>
    </div>
  );
};

export default ProductCarousel;

