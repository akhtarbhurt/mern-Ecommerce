import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../components/Navbar";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { Button, Dropdown, Space } from "antd";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import "../../App.css";
import Navcomp from "../components/Navcomp";
import Threecarts from "../components/Threecarts";
import Slider from "react-slick";
import Slidercomponent from "../components/Slider";
import SimpleSlider from "../components/Slider";
import Slidertwo from "../components/Slidertwo";
import { FaShoppingBag } from "react-icons/fa";
import { TbJewishStar } from "react-icons/tb";
import Twocards from "../components/Twocards";
import { IoLockClosedSharp } from "react-icons/io5";
import { IoSendOutline } from "react-icons/io5";
import Footer from "../components/Footer";
import Fourcarts from "../components/Fourcarts";
import Subscribed from "../components/Subscribed";
const Home = () => {
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

 

  return (
    <>
      <Navbar />
      
{/* ========carosel========= */}
   
        <SimpleSlider />

    {/* ============threecarts============== */}
    <Threecarts />


    <div className=" text-center flex flex-col justify-center  lg:mt-24 items-center">
<div className=" font-bold text-[22px]"> Trending Items</div>
    <div className=" h-[2px] bg-green-700 w-[15%] lg:w-[6%]"></div>
    </div>


<div className=" flex justify-center w-full mt-16 mb-10  lg:mb-16 lg:mt-20 ">
<div className="  w-11/12 lg:w-8/12  flex justify-around flex-col  lg:flex-row"> 
<button className=" bg-green-700 p-1 rounded-lg text-white border-[1px] border-green-600 hover:bg-white hover:text-green-600">ALL PRODUCTS</button>
<button className=" bg-green-700 p-1 rounded-lg text-white border-[1px] border-green-600 hover:bg-white hover:text-green-600 my-2 lg:my-0">GROCERIES & PETS</button>
<button className=" bg-green-700 p-1 rounded-lg text-white border-[1px] border-green-600 hover:bg-white hover:text-green-600 mb-2 lg:mb-0">HEALTH & BEAUTY</button>
<button className=" bg-green-700 p-1 rounded-lg text-white border-[1px] border-green-600 hover:bg-white hover:text-green-600">MEN'S FASHION</button>
</div>
</div>


<div className="flex justify-center w-full  ">
<div className=" w-11/12 flex flex-wrap justify-between lg:flex-nowrap">
<div className="containercard border-[2px] w-full lg:w-[23%] relative cursor-pointer">
  <div className="newbadge absolute right-3 bg-green-600 px-1 text-white rounded-lg top-3">new</div>
  <img className=" w-full" src="https://bachatmart.pk/public/images/1718369139-666c3b734ea7d.jpeg" alt="" />
  <div className="cardanima  pl-2">
    <div><button>Add to Cart</button></div>
    <div className=" flex">< FaShoppingBag className=" mr-2 hover:text-green-600"/>< TbJewishStar className="  hover:text-green-600"/></div>
  </div>
  <div className=" mt-2 hover:text-green-600 pl-2">Permanent Colour Pencils - 12 Pcs
  Rs.320</div>
</div>
<div className="containercard border-[2px] w-full lg:w-[23%] relative cursor-pointer my-4 lg:my-0"> 
  <div className="newbadge absolute right-3 bg-green-600 px-1 text-white rounded-lg top-3">new</div>
  <img className=" w-full" src="https://bachatmart.pk/public/images/1718369139-666c3b734ea7d.jpeg" alt="" />
  <div className="cardanima pl-2">
    <div><button>Add to Cart</button></div>
    <div className=" flex">< FaShoppingBag className=" mr-2 hover:text-green-600"/>< TbJewishStar className="  hover:text-green-600"/></div>
  </div>
  <div className=" mt-2 hover:text-green-600 pl-2">Permanent Colour Pencils - 12 Pcs
  Rs.320</div>
</div>
<div className="containercard border-[2px] mb-4 lg:mb-0  lg:w-[23%] relative cursor-pointer">
  <div className="newbadge absolute right-3 bg-green-600 px-1 text-white rounded-lg top-3">new</div>
  <img className=" w-full" src="https://bachatmart.pk/public/images/1718369139-666c3b734ea7d.jpeg" alt="" />
  <div className="cardanima pl-2">
    <div><button>Add to Cart</button></div>
    <div className=" flex">< FaShoppingBag className=" mr-2 hover:text-green-600"/>< TbJewishStar className="  hover:text-green-600"/></div>
  </div>
  <div className=" mt-2 hover:text-green-600 pl-2">Permanent Colour Pencils - 12 Pcs
  Rs.320</div>
</div>
<div className="containercard border-[2px] w-full lg:w-[23%] relative cursor-pointer">
  <div className="newbadge absolute right-3 bg-green-600 px-1 text-white rounded-lg top-3">new</div>
  <img className=" w-full" src="https://bachatmart.pk/public/images/1718369139-666c3b734ea7d.jpeg" alt="" />
  <div className="cardanima pl-2">
    <div><button>Add to Cart</button></div>
    <div className=" flex">< FaShoppingBag className=" mr-2 hover:text-green-600"/>< TbJewishStar className="  hover:text-green-600"/></div>
  </div>
  <div className=" mt-2 hover:text-green-600 pl-2">Permanent Colour Pencils - 12 Pcs
  Rs.320</div>
</div>
</div>
</div>


<Twocards />


<div className=" text-center flex flex-col justify-center items-center">
  <div className=" text-[23px] font-bold">
Hot Item
</div>
<div className=" h-[2px] bg-green-600 w-[70px]"></div>
</div>

<div className=" mt-16 lg:mt-24 w-full flex justify-center ">
<div className=" w-[94%] ml-[19px] ">

<Slidertwo />
</div>

</div>


<div className="  flex flex-col justify-center items-center  mt-[230px] lg:mt-[150px]">
  <div className=" text-[23px] font-bold">
Latest Items
</div>
<div className=" h-[2px] bg-green-600 w-[70px]"></div>
</div>


<div className=" w-full flex justify-center my-10 lg:my-24">
<div className=" w-11/12 flex justify-between flex-wrap">
<div className=" border-[1px] my-4 flex  lg:w-[32%] justify-between">
<div className="cartimg w-9/12 cursor-pointer relative">
  <img className=" w-full hover:grayscale" src="https://bachatmart.pk/public/images/1718371475-666c4493a8a82.webp" alt="" />
  <div className="lock bg-green-600  text-[22px] p-2 rounded-full absolute top-[50%] left-[40%] hidden hover:bg-white"><IoLockClosedSharp/></div>
</div>
<div className="  w-[45%] flex justify-center items-start flex-col pl-3">
  <div className="">Permanent Colour Pencils - 12 Pcs</div>
  <div className=" mt-4 bg-green-600 p-1 text-white rounded-lg cursor-pointer ">Rs.320</div>
</div>
</div>



<div className=" border-[1px] my-4 flex lg:w-[32%] justify-between">
<div className="cartimg w-9/12 cursor-pointer relative">
  <img className=" w-full hover:grayscale" src="https://bachatmart.pk/public/images/1718371475-666c4493a8a82.webp" alt="" />
  <div className="lock bg-green-600  text-[22px] p-2 rounded-full absolute top-[50%] left-[40%] hidden hover:bg-white"><IoLockClosedSharp/></div>
</div>
<div className="  w-[45%] flex justify-center items-start flex-col pl-3">
  <div className="">Permanent Colour Pencils - 12 Pcs</div>
  <div className=" mt-4 bg-green-600 p-1 text-white rounded-lg cursor-pointer ">Rs.320</div>
</div>
</div>


<div className=" border-[1px] my-4 flex lg:w-[32%] justify-between">
<div className="cartimg w-9/12 cursor-pointer relative">
  <img className=" w-full hover:grayscale" src="https://bachatmart.pk/public/images/1718371475-666c4493a8a82.webp" alt="" />
  <div className="lock bg-green-600  text-[22px] p-2 rounded-full absolute top-[50%] left-[40%] hidden hover:bg-white"><IoLockClosedSharp/></div>
</div>
<div className="  w-[45%] flex justify-center items-start flex-col pl-3">
  <div className="">Permanent Colour Pencils - 12 Pcs</div>
  <div className=" mt-4 bg-green-600 p-1 text-white rounded-lg cursor-pointer ">Rs.320</div>
</div>
</div>
<div className=" border-[1px] my-4 flex lg:w-[32%] justify-between">
<div className="cartimg w-9/12 cursor-pointer relative">
  <img className=" w-full hover:grayscale" src="https://bachatmart.pk/public/images/1718371475-666c4493a8a82.webp" alt="" />
  <div className="lock bg-green-600  text-[22px] p-2 rounded-full absolute top-[50%] left-[40%] hidden hover:bg-white"><IoLockClosedSharp/></div>
</div>
<div className="  w-[45%] flex justify-center items-start flex-col pl-3">
  <div className="">Permanent Colour Pencils - 12 Pcs</div>
  <div className=" mt-4 bg-green-600 p-1 text-white rounded-lg cursor-pointer ">Rs.320</div>
</div>
</div>
<div className=" border-[1px] my-4 flex lg:w-[32%] justify-between">
<div className="cartimg w-9/12 cursor-pointer relative">
  <img className=" w-full hover:grayscale" src="https://bachatmart.pk/public/images/1718371475-666c4493a8a82.webp" alt="" />
  <div className="lock bg-green-600  text-[22px] p-2 rounded-full absolute top-[50%] left-[40%] hidden hover:bg-white"><IoLockClosedSharp/></div>
</div>
<div className="  w-[45%] flex justify-center items-start flex-col pl-3">
  <div className="">Permanent Colour Pencils - 12 Pcs</div>
  <div className=" mt-4 bg-green-600 p-1 text-white rounded-lg cursor-pointer ">Rs.320</div>
</div>
</div>
<div className=" border-[1px] my-4 flex lg:w-[32%] justify-between">
<div className="cartimg w-9/12 cursor-pointer relative">
  <img className=" w-full hover:grayscale" src="https://bachatmart.pk/public/images/1718371475-666c4493a8a82.webp" alt="" />
  <div className="lock bg-green-600  text-[22px] p-2 rounded-full absolute top-[50%] left-[40%] hidden hover:bg-white"><IoLockClosedSharp/></div>
</div>
<div className="  w-[45%] flex justify-center items-start flex-col pl-3">
  <div className="">Permanent Colour Pencils - 12 Pcs</div>
  <div className=" mt-4 bg-green-600 p-1 text-white rounded-lg cursor-pointer ">Rs.320</div>
</div>
</div>





</div>
</div>




<Fourcarts />


{/* <div className="mb-7 lg:mb-14">
  <div className=" text-center font-bold">
  NEWSLETTER
  </div>
  <div className=" text-center">
  Subscribe to our newsletter and get <span className=" text-green-600">10%</span> off your first purchase
  </div>
</div> */}
<Subscribed />

<div className="my-3 lg:my-6">
  <div className=" flex justify-center w-full">
    <input type="text" placeholder=" Your email address" className=" border-[1px] w-8/12 lg:w-4/12 py-4 rounded-l-md"/>
    <button className=" bg-green-600 px-6 text-white rounded-r-md">Subscribe</button>
  </div>
</div>



<Footer />
    </>
  );
};

export default Home;
