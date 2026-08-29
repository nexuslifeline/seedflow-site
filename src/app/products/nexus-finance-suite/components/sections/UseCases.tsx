const UseCases = () => {
  return (
    <div className="mb-12">
      <h2 className="mb-8 text-2xl font-bold text-black dark:text-white sm:text-3xl">
        Who It's For
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white dark:bg-gray-dark rounded-lg p-6 shadow-md">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/20">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-primary"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" />
            </svg>
          </div>
          <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">
            Small Retail Businesses
          </h3>
          <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed">
            Perfect for retail shops, boutiques, and small stores managing inventory, sales, and supplier payments. Track daily transactions and maintain accurate financial records.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-dark rounded-lg p-6 shadow-md">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/20">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-primary"
            >
              <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z" />
            </svg>
          </div>
          <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">
            Service-Based Companies
          </h3>
          <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed">
            Ideal for consulting firms, agencies, and service providers tracking client invoices, project expenses, and revenue streams. Simplify billing and financial reporting.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-dark rounded-lg p-6 shadow-md">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/20">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-primary"
            >
              <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V8L12 13L20 8V18ZM12 11L4 6H20L12 11Z" />
            </svg>
          </div>
          <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">
            Manufacturing & Trade
          </h3>
          <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed">
            Designed for manufacturers, distributors, and trading companies managing complex supply chains, multiple suppliers, and various financing arrangements.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-dark rounded-lg p-6 shadow-md">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/20">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-primary"
            >
              <path d="M12 2L2 7L12 12L22 7L12 2ZM2 17L12 22L22 17M2 12L12 17L22 12" />
            </svg>
          </div>
          <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">
            Growing Startups
          </h3>
          <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed">
            Perfect for startups and growing businesses that need professional financial management without the complexity of enterprise solutions. Scale as you grow.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-dark rounded-lg p-6 shadow-md">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/20">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-primary"
            >
              <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z" />
            </svg>
          </div>
          <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">
            Family-Owned Businesses
          </h3>
          <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed">
            Built for family businesses and local enterprises that need straightforward financial tracking. Easy to use, no accounting degree required.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-dark rounded-lg p-6 shadow-md">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/20">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-primary"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" />
            </svg>
          </div>
          <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">
            E-commerce Sellers
          </h3>
          <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed">
            Ideal for online sellers and e-commerce businesses managing multiple sales channels, inventory costs, and payment processing. Keep everything organized in one place.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UseCases;
