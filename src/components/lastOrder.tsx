import { ordersData } from "@/dummy";
import OrderBox from "./orderBox";

const LastOrder = () => {
  return (
    <section className="w-full pt-5 dark:bg-[#0a0327] bg-white border dark:border-gray-700 border-[#EDF2F7] rounded-[14px]">
      <div className="flex justify-between items-center px-5">
        <h2 className="text-base sm:text-md font-semibold text-[#26282C] dark:text-white">
          Last Orders
        </h2>
        <button className="text-base sm:text-md font-medium text-primary">
          See All
        </button>
      </div>

      <div className="mt-4 text-sm sm:text-base overflow-x-scroll sm:overflow-x-visible scrollbar pb-5 px-5">
        <div className="flex text-[#9CA4AB] w-[700px] sm:w-auto">
          <span className="flex-[1.5]">Name</span>
          <span className="flex-[1.5]">Date</span>
          <span className="flex-[1.5]">Amount</span>
          <span className="flex-[1.5]">Status</span>
          <span className="flex-[1.5]">Invoice</span>
        </div>
        <div className="mt-5 border-t dark:border-gray-700 border-[#EDF2F6] divide-y dark:divide-gray-700 divide-[#EDF2F6] w-[700px] sm:w-auto">
          {ordersData.map((order, index) => (
            <OrderBox key={index} order={order} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LastOrder;
