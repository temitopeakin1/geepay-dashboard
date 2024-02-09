import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Layout from "@/components/layout";
import SalesTrend from "@/components/salesTrend";
import LastOrder from "@/components/lastOrder";
import PrevMonthComparison from "@/components/prevMonthComparison";
import TopPlatform from "@/components/topPlatform";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function Home() {
  return (
    <div
      className={`${jakarta.className} ${inter.variable} text-black dark:text-white`}
    >
      <Layout>
        <div className="pl-5 sm:pl-[100px] pt-5 sm:pt-[106px] pb-20 pr-5 space-y-5">
          <div className="flex gap-5 flex-col">
            <div className="flex gap-5 flex-col lg:flex-row">
              <SalesTrend />
              <PrevMonthComparison />
            </div>
            <div className="flex gap-5 flex-col lg:flex-row">
              <LastOrder />
              <TopPlatform />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
