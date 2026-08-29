import { Testimonial } from "@/types/testimonial";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Eljei Del Rio",
    designation: "CEO @Furnitures Pampanga",
    content:
      "Mas naging organized kami sa invoices at expenses gamit ang Seedflow. Mas mabilis naming nakikita kung ano ang paid, pending, at upcoming, kaya less hassle sa daily operations at mas makapag-focus kami sa pag-grow ng business.",
    image: "/images/testimonials/eljei-del-rio.png",
    star: 5,
  },
  {
    id: 2,
    name: "Alicia Hemsworth",
    designation: "Owner @Luru Product Agency",
    content:
      "Seedflow makes it easier to keep our invoices and expenses organized without adding unnecessary complexity. I can quickly see where things stand financially, which helps me make confident decisions as the business grows.",
    image: "/images/testimonials/alicia-hemsworth.png",
    star: 5,
  },
  {
    id: 3,
    name: "David Rodriguez",
    designation: "CTO @InnovateFlow Systems",
    content:
      "With Seedflow, our financial records are easier to manage and our team always knows where things stand. It gives us the confidence to make better business decisions.",
    image: "/images/testimonials/david-rodriguez.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="px-4 py-16 md:py-20 lg:py-28">
      <div className="relative container overflow-hidden rounded-[28px] bg-gradient-to-br from-[#f3efff] via-[#faf9ff] to-[#f7f4ff] px-5 py-12 sm:px-8 md:py-16 lg:px-12">
        <div
          aria-hidden="true"
          className="absolute top-[-145px] left-[-100px] h-[300px] w-[300px] rounded-full bg-[#e4dcff]/70"
        />
        <div
          aria-hidden="true"
          className="absolute top-[-150px] right-[-55px] h-[310px] w-[310px] rounded-full bg-[#ebe5ff]/80"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-[-170px] left-[-30px] h-[310px] w-[310px] rounded-full bg-[#e9e1ff]/70"
        />

        <div className="relative z-10 mx-auto mb-10 max-w-[620px] text-center md:mb-12">
          <span className="border-primary/15 bg-white/70 text-primary mb-5 inline-flex items-center rounded-full border px-4 py-2 text-xs font-semibold">
            Testimonials <span className="ml-2">✨</span>
          </span>
          <h2 className="mb-4 text-3xl leading-tight font-bold tracking-[-0.02em] text-[#252132] sm:text-4xl md:text-[42px]">
            What our customers say
          </h2>
          <p className="text-base leading-8 text-[#626074] md:text-lg">
            See how Seedflow helps businesses stay organized and keep growing.
          </p>
        </div>

        <div className="relative z-10 mx-auto grid max-w-[1000px] grid-cols-1 gap-5 md:grid-cols-3">
          {testimonialData.map((testimonial) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
