const WhyWeBuiltIt = () => {
  return (
    <div className="mb-12">
      <h2 className="mb-4 text-2xl font-bold text-black dark:text-white sm:text-3xl">
        Why We Built It
      </h2>
      <div className="bg-white dark:bg-gray-dark rounded-lg p-8 shadow-md">
        <p className="text-body-color dark:text-body-color-dark mb-4 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
          Seedflow Ad Tracker was born from the frustration of managing multiple advertising platforms without a clear view of what's actually working. As e-commerce businesses grow, they often find themselves running ads across Google, Facebook, Instagram, TikTok, and other platforms—each with its own dashboard, metrics, and reporting system. This fragmentation makes it nearly impossible to get a complete picture of advertising performance and ROI. Agencies managing multiple e-commerce clients face the same challenge, needing to track and report on campaigns across different accounts and platforms.
        </p>
        <p className="text-body-color dark:text-body-color-dark mb-4 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
          We discovered a critical problem: Meta and Google's native reporting tools are over-attributing conversions. These platforms use last-click attribution models and often claim credit for sales that were influenced by multiple touchpoints, leading to inflated ROAS numbers and misleading performance data. This happens because each platform wants to show it's driving results, so they attribute conversions to their own ads even when users interacted with multiple channels before purchasing. The result? Businesses make budget decisions based on inaccurate data, potentially overspending on channels that aren't as effective as they appear.
        </p>
        <p className="text-body-color dark:text-body-color-dark mb-4 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
          We saw businesses and agencies struggling to answer basic questions: Which campaigns are driving real sales? How much are we actually spending across all platforms? What's the true return on our advertising investment? Existing solutions were either too expensive, too complex, or didn't integrate well with the platforms popular in the Philippines.
        </p>
        <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
          That's why we built Seedflow Ad Tracker—a unified platform that brings all your advertising data together in one place with accurate, unbiased attribution. We designed it for e-commerce businesses and agencies that need clarity across their marketing channels. Our goal is to give businesses and agencies the clarity they need to make smarter advertising decisions and maximize their marketing ROI based on real, accurate data.
        </p>
      </div>
    </div>
  );
};

export default WhyWeBuiltIt;

