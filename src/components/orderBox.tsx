import { ordersData } from '@/dummy';
import { DownloadIcon } from '@/icons'
import React from 'react'
import Image from "next/image";

const OrderBox = ({ order}: { order: (typeof ordersData)[0]}) => {
    const { amount, date, img, name, status } = order;

  return (
    <div className="py-4 flex items-center gap-2">
      <div className="flex gap-2.5 items-center flex-[1.5]">
      <Image alt={name} src={img} height={32} width={32} />
        <span className="dark:text-gray-400 text-secondary font-medium">
          {name}
        </span>
      </div>
      <span className="flex-[1] text-[#737373]">{date}</span>
      <span className="dark:text-gray-300 text-[#0D062D] font-medium flex-[1]">
        ${amount}
      </span>
      <span
        className={`capitalize flex-[1] ${
          status === "paid" ? "text-primary" : "text-error"
        }`}
      >
        {status}
      </span>
      <button className="flex flex-[0.5] gap-1.5 items-center text-xs sm:text-sm">
        <DownloadIcon />
        <span>View</span>
      </button>
    </div>
  )
}

export default OrderBox
