import { range, salesData } from "@/dummy";
import SalesTrendSortBox from "./salesTrendSortBox";
import { motion } from "framer-motion";

const SalesTrend = () => {
  return (
    <section className="w-full h-[380px] py-4 dark:bg-[#0a0327] bg-white border dark:border-gray-700 border-[#EDF2F7] rounded-[14px]">
      <div className="flex justify-between items-center px-5">
        <h2 className="text-base sm:text-md font-semibold">Sales Trends</h2>
        <div className="flex gap-1 sm:gap-2.5 items-center">
          <h4 className="text-md font-medium text-nowrap">Sort by :</h4>
          <SalesTrendSortBox />
        </div>
      </div>

      <div className="h-[330px] sm:h-auto overflow-x-scroll px-5 sm:overflow-x-visible scrollbar">
        <div className="mt-5 flex h-[255px] gap-6 relative w-[700px] sm:w-full">
          <div className="w-[46px]">
            <div className="absolute inset-0 flex flex-col justify-between">
              {range.map((data, index) => (
                <div key={index} className="flex gap-6 justify-end">
                  <span className="w-[46px] text-center text-[#898989] text-xs -mb-2">
                    {data}
                    {data === 0 ? "" : ".00"}
                  </span>
                  <span className="w-full dark:border-gray-600 border-b border-dashed" />
                </div>
              ))}
            </div>
          </div>
          <div className="w-full flex justify-between items-end">
            {salesData.map((data, index) => {
              const { month, sale } = data;
              const highestRange = range[0];
              const rangePercent = (sale / highestRange) * 100;

              return (
                <motion.article
                  key={index}
                  initial={{ height: 0 }}
                  animate={{ height: `${rangePercent}%` }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2 + index / 20,
                  }}
                  className="w-[30px] bg-primary/10 dark:bg-primary/15 rounded-t-full group relative"
                >
                  <Tooltip sale={sale} />
                  <GradientAnimation />
                  <span className="absolute -bottom-8 left-0 text-sm text-center text-[#898989]">
                    {month}
                  </span>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const Tooltip = ({ sale }: { sale: number }) => (
  <span className="absolute -top-9 opacity-0 left-1/2 -translate-x-1/2 text-xs font-medium dark:bg-gray-200 bg-[#090C2C] rounded-md px-3 py-2 dark:text-black text-white transition-all duration-300 group-hover:-top-12 group-hover:opacity-100">
    ${sale}.00
    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 border-[10px] border-b-0 dark:border-t-gray-200 border-t-[#090C2C] border-l-transparent border-r-transparent" />
  </span>
);

const GradientAnimation = () => (
  <>
    <span className="absolute rounded-t-full bg-gradient-new inset-0 opacity-0 transition-all duration-500 group-hover:opacity-100" />
    <span className="absolute rounded-t-full bg-sky-500/[.06] dark:bg-sky-500/[.35] inset-0 opacity-100 transition-all duration-500 group-hover:opacity-50" />
  </>
);

export default SalesTrend;
