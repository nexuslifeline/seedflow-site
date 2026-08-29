import SingleService from "./SingleService";
import servicesData from "./servicesData";

const Services = () => {
  return (
    <>
      <section id="services" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="w-full mx-auto text-center" style={{ maxWidth: "570px", marginBottom: "100px" }}>
            <span className="text-primary dark:text-primary relative z-10 mb-2 block text-sm font-semibold tracking-wider uppercase">
              Services
            </span>
            <h2 className="mb-4 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
              Our Services
            </h2>
            <p className="text-base leading-relaxed text-body-color md:text-lg">
              We provide comprehensive digital solutions to help your business grow and succeed in the digital world. From custom software development to SEO optimization, we've got you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((service) => (
              <SingleService key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
