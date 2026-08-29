const UseCases = () => {
  return (
    <div className="mb-12">
      <h2 className="mb-8 text-2xl font-bold text-black dark:text-white sm:text-3xl">
        Who It's For
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
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
            E-commerce brands
          </h3>
          <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed">
            Businesses selling physical or digital products online that need accurate tracking of which ads actually drive sales.
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
            Media buyers & performance marketers
          </h3>
          <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed">
            People managing ads on Facebook, Google, TikTok, etc., who need better attribution than what native ad platforms report.
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
            Agencies
          </h3>
          <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed">
            Marketing agencies handling multiple client accounts that require unified dashboards, cross-channel reporting, and accurate ROAS calculations.
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
            DTC (Direct-to-Consumer) founders
          </h3>
          <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed">
            Brand owners who want clearer insight into which channels are profitable and where to allocate budget.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UseCases;

