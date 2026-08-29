const Roadmap = () => {
  return (
    <div className="mb-12">
      <h2 className="mb-8 text-2xl font-bold text-black dark:text-white sm:text-3xl">
        Roadmap
      </h2>
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 dark:bg-primary/30 md:left-1/2 md:-translate-x-0.5"></div>
        
        <div className="space-y-12">
          {/* Development Started */}
          <div className="relative flex items-start md:items-center">
            <div className="relative z-10 flex w-full flex-col md:flex-row md:items-center">
              <div className="mb-4 w-full md:mb-0 md:w-1/2 md:pr-8 md:text-right">
                <div className="bg-white dark:bg-gray-dark rounded-lg p-6 shadow-md">
                  <div className="mb-2 flex items-center justify-end gap-2">
                    <span className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Development
                    </span>
                    <h3 className="text-xl font-bold text-black dark:text-white">
                      Core Features Development
                    </h3>
                  </div>
                  <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed">
                    Started development of core features including journal entries, invoices, expense tracking, and financial reports.
                  </p>
                </div>
              </div>
              
              {/* Timeline Dot */}
              <div className="absolute left-8 top-6 h-4 w-4 rounded-full border-4 border-white bg-primary dark:border-gray-dark dark:bg-primary md:left-1/2 md:-translate-x-1/2"></div>
              
              <div className="mt-4 w-full md:mt-0 md:w-1/2 md:pl-8">
                <div className="text-primary dark:text-primary text-lg font-bold">
                  November 2025
                </div>
              </div>
            </div>
          </div>

          {/* Admin System Development */}
          <div className="relative flex items-start md:items-center">
            <div className="relative z-10 flex w-full flex-col md:flex-row md:items-center">
              <div className="mb-4 w-full md:mb-0 md:w-1/2 md:pr-8 md:text-right">
                <div className="text-primary dark:text-primary text-lg font-bold">
                  December 2025
                </div>
              </div>
              
              {/* Timeline Dot */}
              <div className="absolute left-8 top-6 h-4 w-4 rounded-full border-4 border-white bg-primary dark:border-gray-dark dark:bg-primary md:left-1/2 md:-translate-x-1/2"></div>
              
              <div className="mt-4 w-full md:mt-0 md:w-1/2 md:pl-8">
                <div className="bg-white dark:bg-gray-dark rounded-lg p-6 shadow-md">
                  <div className="mb-2 flex items-center gap-2">
                    <h3 className="text-xl font-bold text-black dark:text-white">
                      Admin System Development
                    </h3>
                    <span className="bg-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Internal
                    </span>
                  </div>
                  <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed">
                    Development of the internal admin system to monitor new users with their business or organization.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Beta Version */}
          <div className="relative flex items-start md:items-center">
            <div className="relative z-10 flex w-full flex-col md:flex-row md:items-center">
              <div className="mb-4 w-full md:mb-0 md:w-1/2 md:pr-8 md:text-right">
                <div className="bg-white dark:bg-gray-dark rounded-lg p-6 shadow-md">
                  <div className="mb-2 flex items-center justify-end gap-2">
                    <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Beta
                    </span>
                    <h3 className="text-xl font-bold text-black dark:text-white">
                      Beta Version Release
                    </h3>
                  </div>
                  <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed">
                    Initial release for beta testing with select businesses. We'll gather feedback and refine features based on real-world usage.
                  </p>
                </div>
              </div>
              
              {/* Timeline Dot */}
              <div className="absolute left-8 top-6 h-4 w-4 rounded-full border-4 border-white bg-primary dark:border-gray-dark dark:bg-primary md:left-1/2 md:-translate-x-1/2"></div>
              
              <div className="mt-4 w-full md:mt-0 md:w-1/2 md:pl-8">
                <div className="text-primary dark:text-primary text-lg font-bold">
                  January 2026
                </div>
              </div>
            </div>
          </div>

          {/* Alpha Version */}
          <div className="relative flex items-start md:items-center">
            <div className="relative z-10 flex w-full flex-col md:flex-row md:items-center">
              <div className="mb-4 w-full md:mb-0 md:w-1/2 md:pr-8 md:text-right">
                <div className="text-primary dark:text-primary text-lg font-bold">
                  March 2026
                </div>
              </div>
              
              {/* Timeline Dot */}
              <div className="absolute left-8 top-6 h-4 w-4 rounded-full border-4 border-white bg-primary dark:border-gray-dark dark:bg-primary md:left-1/2 md:-translate-x-1/2"></div>
              
              <div className="mt-4 w-full md:mt-0 md:w-1/2 md:pl-8">
                <div className="bg-white dark:bg-gray-dark rounded-lg p-6 shadow-md">
                  <div className="mb-2 flex items-center gap-2">
                    <h3 className="text-xl font-bold text-black dark:text-white">
                      Alpha Version Release
                    </h3>
                    <span className="bg-yellow-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Alpha
                    </span>
                  </div>
                  <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed">
                    Alpha release for broader testing and validation. We'll refine features and address any issues before the public launch.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Public Release */}
          <div className="relative flex items-start md:items-center">
            <div className="relative z-10 flex w-full flex-col md:flex-row md:items-center">
              <div className="mb-4 w-full md:mb-0 md:w-1/2 md:pr-8 md:text-right">
                <div className="bg-white dark:bg-gray-dark rounded-lg p-6 shadow-md">
                  <div className="mb-2 flex items-center justify-end gap-2">
                    <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Launch
                    </span>
                    <h3 className="text-xl font-bold text-black dark:text-white">
                      Public Release
                    </h3>
                  </div>
                  <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed">
                    Full public release after incorporating improvements and feedback from the alpha phase. Available to all businesses across the Philippines.
                  </p>
                </div>
              </div>
              
              {/* Timeline Dot */}
              <div className="absolute left-8 top-6 h-4 w-4 rounded-full border-4 border-white bg-primary dark:border-gray-dark dark:bg-primary md:left-1/2 md:-translate-x-1/2"></div>
              
              <div className="mt-4 w-full md:mt-0 md:w-1/2 md:pl-8">
                <div className="text-primary dark:text-primary text-lg font-bold">
                  Q2 2026
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
