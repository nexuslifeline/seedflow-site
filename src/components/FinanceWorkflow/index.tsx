import Link from "next/link";

const workflowCards = [
  {
    title: "Invoice sent",
    subtitle: "Acme Supplies",
    value: "₱24,500.00",
    status: "Paid",
    statusClass: "bg-[#e9f8ef] text-[#21834b]",
    position: "right-0 top-0 lg:right-4",
  },
  {
    title: "Expense tracked",
    subtitle: "Office supplies",
    value: "₱3,240.00",
    status: "Recorded",
    statusClass: "bg-[#f0ebff] text-primary",
    position: "right-[12%] top-[32%] lg:right-[18%]",
  },
  {
    title: "Cash flow",
    subtitle: "This month",
    value: "₱86,420.00",
    status: "On track",
    statusClass: "bg-[#fff5df] text-[#a66b00]",
    position: "bottom-[2%] left-[4%] lg:bottom-[7%] lg:left-0",
  },
];

const FinanceWorkflow = () => {
  return (
    <section id="finance-workflow" className="bg-white py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="max-w-[540px]">
            <span className="border-primary/15 bg-primary/5 text-primary mb-5 inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold">
              Everything in one flow <span className="ml-2">✨</span>
            </span>
            <h2 className="mb-5 text-3xl leading-tight font-bold tracking-[-0.02em] text-[#1e1a2f] sm:text-4xl md:text-[45px]">
              Stay on top of your business finances.
            </h2>
            <p className="mb-8 max-w-[500px] text-base leading-8 text-[#626074] md:text-lg">
              From the first invoice to the latest expense, Seedflow gives you
              a clearer view of the money moving through your business.
            </p>
            <Link
              href="/signup"
              className="bg-primary hover:bg-primary/90 inline-flex items-center rounded-full px-7 py-4 text-base font-bold text-white transition duration-300"
            >
              Join the beta
              <span aria-hidden="true" className="ml-2 text-lg">
                →
              </span>
            </Link>
          </div>

          <div className="relative mx-auto h-[370px] w-full max-w-[620px] sm:h-[430px]">
            <div
              aria-hidden="true"
              className="bg-primary/10 absolute top-1/2 left-1/2 h-[74%] w-[74%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
            />
            <div
              aria-hidden="true"
              className="border-primary/10 absolute top-[13%] left-[10%] h-[74%] w-[74%] rounded-[35%] border border-dashed"
            />

            {workflowCards.map((card, index) => (
              <div
                key={card.title}
                className={`absolute z-10 w-[78%] rounded-xl border border-[#e6e1f1] bg-white p-4 shadow-[0_18px_40px_rgba(50,31,110,0.12)] transition-transform duration-300 hover:-translate-y-1 sm:w-[66%] ${card.position}`}
              >
                <div className="mb-5 flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="bg-primary/10 text-primary flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold">
                      {index === 0 ? "₱" : index === 1 ? "↗" : "◒"}
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-[#252132]">{card.title}</h3>
                      <p className="mt-1 text-xs text-[#8a8695]">{card.subtitle}</p>
                    </div>
                  </div>
                  <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${card.statusClass}`}>
                    {card.status}
                  </span>
                </div>
                <div className="flex items-end justify-between border-t border-[#f0edf6] pt-3">
                  <span className="text-[11px] text-[#8a8695]">Today, 07:02 AM</span>
                  <strong className="text-sm text-[#252132]">{card.value}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinanceWorkflow;
