import { topPlatformData } from '@/dummy';
import PlatformBox from './platformBox';

const TopPlatform = () => {
  return (
    <section className="py-4 px-5 dark:bg-[#0a0327] bg-white border dark:border-gray-700 border-[#EDF2F7] rounded-[14px] sm:min-w-[496px]">
    <div className="flex justify-between items-center">
        <h2 className="text-base sm:text-md font-semibold text-[#26282C] dark:text-white">
          Top Platform
        </h2>
        <button className="text-base sm:text-md font-medium text-primary">
          See All
        </button>
      </div>

      <div className="mt-5 space-y-5">
        {topPlatformData.map((data, index) => (
          <PlatformBox key={index} data={data} />
        ))}
      </div>
      
    </section>
  );
};

export default TopPlatform;
