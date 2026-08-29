import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;

  return (
    <article className="rounded-2xl border border-[#e8e1ff] bg-white p-6 shadow-[0_12px_30px_rgba(42,24,92,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(42,24,92,0.1)]">
      <div className="bg-primary/10 text-primary mb-5 flex h-11 w-11 items-center justify-center rounded-xl">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-bold text-[#1e1a2f]">{title}</h3>
      <p className="text-[#6b6877] text-sm leading-7">{paragraph}</p>
    </article>
  );
};

export default SingleFeature;
