import useClick from "@/hooks/useClick";
import ArrowDownIcon from "@/icons/arrowDown";
import { useState } from "react";

const SalesTrendSortBox = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const ref = useClick(() => setOpenDropdown(false));
  const [sortBy, setSortBy] = useState("Weekly");

  const sortLevel = ["Daily", "Weekly", "Monthly"];

  return (
    <div className="relative" ref={ref}>
      <button
        className="flex px-4 py-2 gap-1 sm:gap-2.5 items-center rounded-full border dark:border-gray-600 border-[#E1DFDF] cursor-pointer"
        onClick={() => setOpenDropdown((prev) => !prev)}
      >
        <span className="text-xs font-Inter">{sortBy}</span>
        <ArrowDownIcon />
      </button>

      <div
        className={`absolute right-0 z-10 w-full dark:bg-[#0a0327] bg-white shadow border dark:border-gray-500 border-[#DADDD] rounded-lg transition-all duration-500 ${
          openDropdown
            ? "top-[40px] opacity-100 visible"
            : "top-[20px] opacity-0 invisible"
        }`}
      >
        <div className="w-full text-xs dark:divide-gray-500 divide-y-2">
          {sortLevel.map((level, index) => (
            <button
              key={index}
              onClick={() => {
                setSortBy(level);
                setOpenDropdown(false);
              }}
              className="px-5 py-2 w-full transition-color duration-500 dark:hover:bg-gray-700 hover:bg-gray-100 bg-transparent"
            >
              {level}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalesTrendSortBox;