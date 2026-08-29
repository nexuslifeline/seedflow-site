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
              <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" />
            </svg>
          </div>
          <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">
            Real-time Analytics
          </h3>
          <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed">
            Monitor your ad campaigns in real-time with live dashboards and instant performance metrics.
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
            Conversion Tracking
          </h3>
          <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed">
            Track conversions across all channels and platforms with pixel-perfect accuracy and attribution modeling.
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
            Campaign Optimization
          </h3>
          <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed">
            AI-powered recommendations to optimize your campaigns and improve performance automatically.
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
              <path d="M11.8 10.9C9.53 10.31 8.8 9.7 8.8 8.75C8.8 7.66 9.81 6.9 11.5 6.9C13.28 6.9 13.94 7.75 14 9H16.21C16.14 7.28 15.09 5.7 13 5.19V3H10V5.16C8.06 5.58 6.5 6.84 6.5 8.77C6.5 11.08 8.41 12.23 11.2 12.9C13.7 13.5 14.2 14.38 14.2 15.31C14.2 16 13.71 17.1 11.5 17.1C9.28 17.1 8.63 16.18 8.5 15H6.32C6.44 17.12 8 18.45 10 18.83V21H13V18.85C14.95 18.5 16.7 17.35 16.7 15.3C16.7 12.46 14.07 11.5 11.8 10.9Z" />
            </svg>
          </div>
          <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">
            ROI Analysis
          </h3>
          <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed">
            Comprehensive ROI analysis to understand which campaigns deliver the best return on investment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;



