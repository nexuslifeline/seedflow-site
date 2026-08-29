import Image from "next/image";
import { Product } from "@/types/product";

const SingleProduct = ({ product, reverse = false }: { product: Product; reverse?: boolean }) => {
  const { icon, title, paragraph, image, features, stats } = product;

  return (
    <div className="mb-16 md:mb-20 lg:mb-28">
      <div className="-mx-4 flex flex-wrap items-center">
        {/* Left Column - Image and Description */}
        <div className={`w-full px-4 lg:w-1/2 ${reverse ? "lg:order-2" : ""}`}>
          <div className="relative mx-auto mb-12 max-w-[550px] lg:mb-0">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-xl mb-6">
              <Image
                src={image}
                alt={typeof title === 'string' ? title : 'Product'}
                fill
                className="object-cover object-center"
              />
              {/* Overlay card for features */}
              {features && (
                <div className="absolute bottom-6 left-6 right-6 bg-white dark:bg-gray-dark rounded-lg p-6 shadow-lg">
                  <div className="mb-4 flex items-center">
                    <div className="bg-primary/10 text-primary mr-3 flex h-[50px] w-[50px] items-center justify-center rounded-md">
                      {icon}
                    </div>
                    <h4 className="text-xl font-bold text-black dark:text-white">{title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {features.map((feature, index) => (
                      <li key={index} className="text-body-color flex items-center text-sm font-medium">
                        <span className="bg-primary/10 text-primary mr-2 flex h-2 w-2 rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            {/* Description on left side */}
            <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
              {paragraph}
            </p>
          </div>
        </div>

        {/* Right Column - Title and Stats */}
        <div className={`w-full px-4 lg:w-1/2 ${reverse ? "lg:order-1" : ""}`}>
          <div className="max-w-[570px] lg:ml-auto">
            <span className="text-primary dark:text-primary relative z-10 mb-2 block text-sm font-semibold tracking-wider uppercase">
              Coming Soon
            </span>
            <h2 className="mb-6 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
              {title}
            </h2>

            {/* Stats */}
            {stats && (
              <div className="flex flex-wrap gap-8">
                {stats.map((stat, index) => {
                  const percentage = parseInt(stat.value);
                  const circumference = 2 * Math.PI * 45; // radius = 45
                  const offset = circumference - (percentage / 100) * circumference;
                  
                  return (
                    <div key={index} className="flex flex-col items-center">
                      <div className="relative mb-3 h-24 w-24">
                        <svg className="h-24 w-24 -rotate-90 transform" viewBox="0 0 100 100">
                          <circle
                            cx="50"
                            cy="50"
                            r="45"
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="none"
                            className="text-body-color/20 dark:text-white/10"
                          />
                          <circle
                            cx="50"
                            cy="50"
                            r="45"
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="none"
                            strokeDasharray={circumference}
                            strokeDashoffset={offset}
                            strokeLinecap="round"
                            className="text-primary transition-all duration-1000"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-2xl font-bold text-primary dark:text-primary">
                            {stat.value}
                          </span>
                        </div>
                      </div>
                      <div className="text-body-color text-sm font-medium">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
