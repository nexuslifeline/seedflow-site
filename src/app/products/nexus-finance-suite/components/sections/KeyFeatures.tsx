const KeyFeatures = () => {
  return (
    <div className="mb-12">
      <h2 className="mb-8 text-2xl font-bold text-black dark:text-white sm:text-3xl">
        Key Features
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
              <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V8L12 13L20 8V18ZM12 11L4 6H20L12 11Z" />
            </svg>
          </div>
          <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">
            Journal Entries
          </h3>
          <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed">
            Record and manage all accounting transactions with double-entry bookkeeping support.
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
            Invoice Management
          </h3>
          <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed">
            Create, send, and track invoices effortlessly. Automate recurring invoices and payment reminders.
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
            Expense Tracking
          </h3>
          <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed">
            Monitor all business expenses in one place. Categorize and track spending patterns for better budgeting.
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
            Financial Reports
          </h3>
          <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed">
            Generate comprehensive financial reports including profit & loss, balance sheets, and cash flow statements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
