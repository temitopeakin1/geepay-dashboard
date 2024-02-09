import { useEffect, useState } from "react";
import useClick from "../hooks/useClick";
import {
  CategoryIcon,
  Logo,
  TrendUpIcon,
  ProfileIcon,
  BoxIcon,
  DiscountIcon,
  InfoIcon,
  SunIcon,
  MoonIcon,
  ArrowRightIcon,
  SettingIcon,
  LogoutIcon,
  OpenBar,
} from "@/icons";

const Sidebar = () => {
  const [openSidebar, setOpenSideBar] = useState(false);
  const ref = useClick(() => setOpenSideBar(false));

  // useEffect to update  the sidebar
  
  useEffect(() => {
    if(openSidebar) {
        document.body.style.overflowY = 'hidden';
    } else {
        document.body.style.overflowY = 'scroll';
    }
  }, [openSidebar]);

  useEffect(() => {
    const LS = localStorage.getItem("dashboard-theme");
    if (!LS) return;

    const theme = JSON.parse(LS);
    selectTheme(theme);
  }, []);

  const selectTheme = (theme: 'light' | 'dark') => {
    if (theme == 'light') {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('dashboard-theme', JSON.stringify('light'));
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('dashboard-theme', JSON.stringify('dark'));
    }
  };
  

  return (
    <>
      {/*begin blur*/}
      <div
        className={`fixed h-screen inset-0 w-full backdrop-blur-[2px] transition-opacity z-30 duration-400 ${
          openSidebar ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>

      <div ref={ref}>
      {/* sidebar */}
      <button
        className="fixed left-3 top-5 p-2 z-30 sm:hidden rounded-full bg-primary"
        onClick={() => setOpenSideBar((prev) => !prev)}
      >
        <OpenBar />
      </button>
      <aside
        className={`w-20 z-50 h-screen overflow-y-scroll 2xl:overflow-y-visible scrollbar flex flex-col 
        justify-between gap-24 py-5 dark:bg-gray-900 bg-[#F7F8FA] fixed sm:left-0 top-0 border-r dark:border-gray-700 border-[#EBECF2] transition-all duration-500 ${
          openSidebar ? "left-0" : "-left-20"
        }`}
      >
        <div className="flex flex-col gap-6 2xl:gap-8 items-center">
          <button>
            <Logo />
          </button>

          <button className="p-2 rounded-full bg-transparent hover:bg-primary/20 transition-colors duration-500 relative">
            <CategoryIcon />
            <span className="absolute -right-5 top-1/2 -translate-y-1/2">
              <SelectBar />
            </span>
          </button>

          <button className="p-2 rounded-full bg-transparent hover:bg-primary/20 transition-colors duration-500 relative">
            <TrendUpIcon />
          </button>

          <button className="p-2 rounded-full bg-transparent hover:bg-primary/20 transition-colors duration-500 relative">
            <ProfileIcon />
          </button>

          <button className="p-2 rounded-full bg-transparent hover:bg-primary/20 transition-colors duration-500 relative">
            <BoxIcon />
          </button>

          <button className="p-2 rounded-full bg-transparent hover:bg-primary/20 transition-colors duration-500 relative">
            <DiscountIcon />
          </button>

          <button className="p-2 rounded-full bg-transparent hover:bg-primary/20 transition-colors duration-500 relative">
            <InfoIcon />
          </button>

          <div className="w-[46px] p-2 dark:bg-[#0a0327] bg-white h-[92px] rounded-full flex flex-col gap-4">
            <button onClick={() => selectTheme("light")}>
              <SunIcon />
            </button>

            <button onClick={() => selectTheme("dark")}>
              <MoonIcon />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-6 2xl:gap-8 items-center mb-10">
          <button className="p-2 rounded-full bg-transparent hover:bg-primary/20 transition-colors duration-500 relative">
            <ArrowRightIcon />
          </button>

          <button className="p-2 rounded-full bg-transparent hover:bg-primary/20 transition-colors duration-500 relative">
            <SettingIcon />
          </button>

          <button className="p-2 rounded-full bg-transparent hover:bg-primary/20 transition-colors duration-500 relative">
            <LogoutIcon />
          </button>
        </div>
      </aside>
      </div>
    </>
  );
};

const SelectBar = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="3"
      height="21"
      viewBox="0 0 3 21"
      fill="none"
    >
      <path
        d="M6.53467e-06 3.02509C7.11773e-06 1.42129 1.40951 0.182713 3 0.388889V21C1.34315 21 4.88293e-07 19.6569 1.09063e-06 18L6.53467e-06 3.02509Z"
        fill="#0D062D"
        className="fill-current dark:text-white text-[#231b49]"
      />
    </svg>
  );

export default Sidebar;
