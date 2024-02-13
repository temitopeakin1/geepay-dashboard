import React, { useState } from "react";
import Image from "next/image";
import ArrowDownIcon from "@/icons/arrowDown";
import useClick from "@/hooks/useClick";

const UserDropdown = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const ref = useClick(() => setOpenDropdown(false));

  return (
    <div className="relative hidden lg:block" ref={ref}>
      <div
        className="px-2 py-1.5 border dark:border-gray-600 border-[#DADDDD] dark:bg-[#0a0327] cursor-pointer rounded-full flex gap-3 items-center"
        onClick={() => setOpenDropdown((prev) => !prev)}
      >
        <Image
          alt="user image"
          src="/img/user.png"
          height={45}
          width={45}
          className="rounded-full min-w-[45px]"
        />

        <div className="text-left font-Inter">
          <span className="block dark:text-[#DADDDD] text-[#26282C] font-medium">
            Temi Akinmegha
          </span>
          <span className="block text-[#787486]">temi@gmail.com</span>
        </div>

        <button>
          <ArrowDownIcon />
        </button>
      </div>
      <div
        className={`absolute right-0 w-full p-5 dark:bg-[#0a0327] bg-white shadow border dark:border-gray-700 border-[#DADDD] rounded-lg transition-all duration-500 ${
          openDropdown
            ? "top-[70px] opacity-100 visible"
            : "top-[50px] opacity-0 invisible"
        }`}
      >
        <div className="flex gap-5">
          <span className="w-10 h-10 dark:bg-gray-600 bg-gray-300 animate-pulse block rounded-full"></span>
          <div className="flex items-end flex-col gap-2">
            <span className="w-32 h-4 rounded-full dark:bg-gray-600 bg-gray-300 animate-pulse block"></span>
            <span className="w-32 h-4 rounded-full dark:bg-gray-600 bg-gray-300 animate-pulse block"></span>
          </div>
        </div>
        <div className="mt-6 space-y-3">
          <span className="w-full h-6 block dark:bg-gray-600 bg-gray-300 animate-pulse rounded-xl"></span>
          <span className="w-full h-6 block dark:bg-gray-600 bg-gray-300 animate-pulse rounded-xl"></span>
          <span className="w-full h-6 block dark:bg-gray-600 bg-gray-300 animate-pulse rounded-xl"></span>
          <span className="w-full h-6 block dark:bg-gray-600 bg-gray-300 animate-pulse rounded-xl"></span>
        </div>
      </div>
    </div>
  );
};

export default UserDropdown;
