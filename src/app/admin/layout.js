"use client"
import React, {useState} from "react";
import { FaRegUser, FaChartLine, FaInbox, FaCar, FaHome, FaWallet } from "react-icons/fa";
import { IoIosSettings, IoIosHelpCircle } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { selectTheme } from '@/store/themeSlice';
import { useSelector } from "react-redux";

const layout = ({children}) => {
  const router = useRouter()
  const [selectedMenu, setSelectedMenu] = useState(null);
  const isDarkMode = useSelector(selectTheme);

    const handleLogout = async () => {
      router.push("/")
    };

  return (
    <>
    <div className="flex">
      <div className={`absolute md:sticky ${isDarkMode ? "bg-[#333] text-white" : "bg-white text-black"} left-0 w-64 transform p-8 transition-transform'
                  }`}>
          <div className="">
              <div className="flex flex-col gap-10">
                  <div className="">
                      <p className="pb-4 text-xs text-[#dbe2ed] font-semibold" >MAIN MENU</p>
                      <div className="flex flex-col gap-4 text-[#90A3BF]">
                        <Link href="/admin">
                          <div
                            className={`flex gap-2 rounded-md p-1 items-center ${selectedMenu === "dashboard" ? "bg-indigo-500 text-white" : ""
                              }`}
                            onMouseEnter={() => setSelectedMenu("dashboard")}
                            onMouseLeave={() => setSelectedMenu(null)}
                          >
                            <FaHome />
                            <p className="font-medium">Dashboard</p>
                          </div>
                        </Link>
                        <Link href="/admin/manage">
                          <div
                            className={`flex gap-2 rounded-md p-1 items-center ${selectedMenu === "carRent" ? "bg-indigo-500 text-white" : ""
                              }`}
                            onMouseEnter={() => setSelectedMenu("carRent")}
                            onMouseLeave={() => setSelectedMenu(null)}
                          >
                            <FaCar />
                            <p className="font-medium">Car Rent</p>
                          </div>
                        </Link>
                        <Link href="/admin/insight">
                          <div
                            className={`flex gap-2 p-1 rounded-md items-center ${selectedMenu === "insight" ? "bg-indigo-500 text-white" : ""
                              }`}
                            onMouseEnter={() => setSelectedMenu("insight")}
                            onMouseLeave={() => setSelectedMenu(null)}
                          >
                            <FaChartLine />
                            <p className="font-medium">Insight</p>
                          </div>
                        </Link>
                          <div
                            className={`flex gap-2 p-1 rounded-md items-center ${selectedMenu === "user" ? "bg-indigo-500 text-white" : ""
                              }`}
                            onMouseEnter={() => setSelectedMenu("user")}
                            onMouseLeave={() => setSelectedMenu(null)}
                            >
                              <FaRegUser />
                              <p className="font-medium">Users</p>
                          </div>
                          <div
                            className={`flex gap-2 p-1 rounded-md items-center ${selectedMenu === "inbox" ? "bg-indigo-500 text-white" : ""
                                }`}
                              onMouseEnter={() => setSelectedMenu("inbox")}
                              onMouseLeave={() => setSelectedMenu(null)}
                            >
                              <FaInbox />
                              <p className="font-medium">Inbox</p>
                          </div>
                          <div
                            className={`flex gap-2 p-1 rounded-md items-center ${selectedMenu === "reimburse" ? "bg-indigo-500 text-white" : ""
                              }`}
                            onMouseEnter={() => setSelectedMenu("reimburse")}
                            onMouseLeave={() => setSelectedMenu(null)}
                          >
                            <FaWallet />
                            <p className="font-medium">Reimburse</p>
                          </div>
                      </div>
                  </div>
                  <div className="">
                      <p className="pb-4 text-xs text-[#dbe2ed] font-semibold" >PREFERENCES</p>
                      <div className="flex flex-col gap-4 text-[#90A3BF]">
                          <div className="flex gap-2 items-center">
                              <IoIosSettings />
                              <p className="font-medium">Settings</p>
                          </div>
                          <div className="flex gap-2 items-center">
                              <IoIosHelpCircle />
                              <p className="font-medium">Help & Center</p>
                          </div>
                      </div>
                  </div>
                  <div className="pt-24">
                          <button onClick={handleLogout} className="flex gap-2 items-center">
                          <CiLogout />
                          <p className="text-base text-[#90A3BF]">Log Out</p>
                      </button>
                  </div>
              </div>
          </div>
      </div>
      {children}
      </div>
    </>
  );
};

export default layout;
