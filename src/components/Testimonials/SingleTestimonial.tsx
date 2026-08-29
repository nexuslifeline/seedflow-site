import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
const starIcon = (
  <svg width="12" height="11" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { star, name, image, content, designation } = testimonial;

  let ratingIcons = [];
  for (let index = 0; index < star; index++) {
    ratingIcons.push(
      <span key={index}>
        {starIcon}
      </span>,
    );
  }

  return (
    <div className="h-full">
      <div className="group relative flex h-full min-h-[245px] flex-col rounded-xl border border-white/80 bg-white/65 p-5 shadow-[0_10px_25px_rgba(57,43,102,0.06)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/85">
        <div className="mb-4 flex items-center gap-3">
          <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-md">
            <Image src={image} alt={name} fill className="object-cover" />
          </div>
          <div className="min-w-0">
            <h3 className="truncate text-sm font-bold text-[#252132]">{name}</h3>
            <p className="truncate text-[10px] text-[#777282]">{designation}</p>
          </div>
        </div>
        <div
          className="mb-4 flex items-center gap-0.5 text-[#df7a34]"
          aria-label={`${star} out of 5 stars`}
        >
          {ratingIcons}
        </div>
        <p className="flex-1 text-xs leading-6 text-[#626074]">
          &quot;{content}&quot;
        </p>
        <span
          aria-hidden="true"
          className="absolute right-5 bottom-3 text-3xl leading-none text-primary/35"
        >
          &quot;
        </span>
      </div>
    </div>
  );
};

export default SingleTestimonial;
