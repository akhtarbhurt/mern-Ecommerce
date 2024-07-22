import React, { useState, useEffect } from "react";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { MdTrackChanges } from "react-icons/md";
import { FaSellsy } from "react-icons/fa6";
import { IoHomeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import "../../App.css";
import Navscrolldown from "./Navbarsubcomponent/Navscrolldown";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { Button, Dropdown, Space } from "antd";
import { IoIosArrowDown } from "react-icons/io";
import Navcomp from "./Navcomp";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  const items = [
    {
      key: "1",
      label: <Link className="mg-ten">1st menu item</Link>,
    },
    {
      key: "2",
      label: <Link className="mg-ten">2nd menu item</Link>,
    },
    {
      key: "3",
      label: <Link className="mg-ten">3rd menu item</Link>,
    },
  ];


  return (
    <>
      {/* Top Home */}
      <nav
        className={`fixed w-full top-0 left-0 z-50 bg-white shadow-md ${
          isScrolled ? "hidden" : "block"
        }`}
      >
        <div className="w-full flex justify-center">
          <div className="w-11/12  flex flex-col justify-between lg:flex-row py-1 lg:py-4">
            <div className="w-[100%] sm:w-[80%] flex justify-between lg:w-[30%]">
              <div className="flex items-center cursor-pointer hover:text-green-700 text-[17px]">
                <div className="pr-2 text-green-600 text-[16px]">
                  <FaPhone />
                </div>
                <div className=" text-[10px] lg:text-[14px]">+9233122626227</div>
              </div>
              <div className="border-2  xl:mx-0"></div>
              <div className="flex items-center cursor-pointer hover:text-green-700 text-[17px]">
                <div className="pr-2 text-green-600 text-[16px]">
                  <IoMdMail />
                </div>
                <div className=" text-[10px] lg:text-[14px]">Contact@madeinpak.com.pk</div>
              </div>
            </div>
            <div className="mt-4 w-[100%] sm:w-[85%] flex justify-between lg:w-[35%] lg:mt-0">
              <div className="flex items-center cursor-pointer hover:text-green-700 text-[17px]">
                <div className="text-green-600 text-[16px]">
                  <MdTrackChanges />
                </div>
                <div className="pl-2 text-[10px] lg:text-[14px]">Track Order</div>
              </div>
              <div className="border-2  xl:mr-0"></div>
              <div className="flex items-center cursor-pointer hover:text-green-700 text-[17px]">
                <div className="pr-2 text-green-600 text-[16px]">
                  <FaSellsy />
                </div>
                <div className=" text-[10px] lg:text-[14px]">Become a Seller</div>
              </div>
              <div className="border-2 mr-2 xl:mr-0"></div>
              <div className="flex items-center cursor-pointer hover:text-green-700 text-[17px]">
                <div className="pr-2 text-green-600 text-[16px]">
                  <IoHomeSharp />
                </div>
                <div className=" text-[10px] lg:text-[14px]">Dashboard</div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className=" mt-[60px] lg:mt-[50px] flex justify-center mb-4 lg:mb-0">
        <div className="w-full lg:w-11/12  flex justify-between items-center flex-col lg:flex-row">
          <div className="  w-2/12">
            <img
              src="../../../public/IMG-20240712-WA0094-removebg-preview.png"
              className="h-[50px] lg:h-[100px] "
              alt="logo"
            />
          </div>
          <div className=" w-11/12 my-4 lg:w-7/12 flex justify-center homesearch lg:my-0">
            <Dropdown
              menu={{
                items,
              }}
              placement="bottom"
            >
              <Button
                className="  flex justify-between h-[4vh] lg:h-[8vh]"
                style={{
                  backgroundColor: "white",
                  borderColor: "#38A169",
                  color: "#38A169",
                  borderTopRightRadius: "1px",
                  borderBottomRightRadius: "1px",
                }}
              >
                <div className=" text-[12px] lg:text-[16px]">Allcategory</div>
                <div>
                  <IoIosArrowDown />
                </div>
              </Button>
            </Dropdown>
            <Space direction="vertical">
              <Space wrap></Space>
            </Space>
            <input
              type="text"
              className="border-[1px] border-green-600  w-7/12 pl-2 h-[4vh] lg:h-[8vh] text-[12px] lg:text-[16px]"
              placeholder=" Search product here.."

            />
            <button className=" border-[1px]  w-2/12 border-green-600  bg-green-600 rounded-r-md text-white text-[12px] lg:text-[16px]">
              Search
            </button>
          </div>
          <div className=" w-1/12 flex justify-end">
            <div className=" flex ">
              <div className=" mr-3  relative">
                <IoIosHeartEmpty className=" text-[27px]" />
                <div className="rounded-full h-[20px] w-[20px] flex justify-center items-center bg-green-700 absolute top-0 left-4 text-white">
                  1
                </div>
              </div>
              <div className=" mr-2  relative">
                <CiShoppingCart className=" text-[27px]" />
                <div className="rounded-full h-[20px] w-[20px] flex justify-center items-center bg-green-700 absolute top-0 left-4 text-white">
                  1
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full ">
<Navcomp />
        </div>
      {/* {scroll down } */}

      <Navscrolldown />
    </>
  );
};

export default Navbar;
