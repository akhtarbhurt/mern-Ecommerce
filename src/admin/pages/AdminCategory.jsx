import React, { useEffect, useState } from "react";
import Admindasjboardcomponents from "../components/Admindasjboardcomponents";
import { Link } from 'react-router-dom';
import "../../App.css";
import { FaPlus } from "react-icons/fa6";
import { GoEye } from "react-icons/go";
import AdminNavbar from "../components/AdminNavbar";
import { useDispatch, useSelector } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import Copyright from "./Copyright";

const AdminCategory = () => {
  
  console.log("inner width", window.outerWidth);



  const collapsed = useSelector((state) => state.counter.collapsed);
  const see = useSelector((state) => state.counter.see);
  const width = useSelector((state) => state.counter.width);

  // piechart



  const data = [
    // Add your data here
    { col1: '1', col2: 'Bike', col3: 'Super bike', col4: 'No', col5: 'Automobie',col6:"opop",col7:"ok" ,col8:"https://cdn.pixabay.com/photo/2024/05/02/16/22/parrots-8735074_640.jpg"},
    { col1: '1', col2: 'Bike', col3: 'Super bike', col4: 'No', col5: 'Automobie',col6:"opop",col7:"ok",col8:"https://cdn.pixabay.com/photo/2024/05/02/16/22/parrots-8735074_640.jpg" },
    { col1: '1', col2: 'Bike', col3: 'Super bike', col4: 'No', col5: 'Automobie',col6:"opop",col7:"ok",col8:"https://cdn.pixabay.com/photo/2024/05/02/16/22/parrots-8735074_640.jpg" },
    { col1: '1', col2: 'Bike', col3: 'Super bike', col4: 'No', col5: 'Automobie',col6:"opop",col7:"ok",col8:"https://cdn.pixabay.com/photo/2024/05/02/16/22/parrots-8735074_640.jpg" },
    { col1: '1', col2: 'Bike', col3: 'Super bike', col4: 'No', col5: 'Automobie',col6:"opop",col7:"ok",col8:"https://cdn.pixabay.com/photo/2024/05/02/16/22/parrots-8735074_640.jpg" },
    { col1: '1', col2: 'Bike', col3: 'Super bike', col4: 'No', col5: 'Automobie',col6:"opop",col7:"ok",col8:"https://cdn.pixabay.com/photo/2024/05/02/16/22/parrots-8735074_640.jpg" }, 
  ];

const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 5;

// Calculate the total number of pages
const totalPages = Math.ceil(data.length / itemsPerPage);

// Get the current items to display based on the current page
const currentItems = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
};

const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
};
  return (
    <div className="flex w-full ">
      {see ? (
        <Admindasjboardcomponents
          collapsed={collapsed}
          // toggleCollapsed={toggleCollapsed}
        />
      ) : (
        ""
      )}
      <div
        className={`relative homeright right min-h-screen  xs: ${
          see ? "w-[78%]" : "w-[100%]"
        }  lg:w-full  bg-[#f4f5f8] `}
      >
        <AdminNavbar />
       
        <div className='w-full flex justify-center mt-9 allorders'>
                <div className='w-full border-[2px] rounded-md mb-3'>
                    <div className='flex justify-between p-5 border-b-[1px]'>
                        <div className='font-sans font-medium text-gray-700 text-[18px]'>Banner List</div>
                        <Link to={'/admin/category/create'}>
                            <div className='cursor-pointer'>
                                <button className='bg-green-700 border-[1px] text-white p-2 rounded-md hover:bg-white hover:text-green-700 hover:border-green-700'>
                                   <span className=" text-[17px] font-semibold">AddCategory</span> 
                                </button>
                            </div>
                        </Link>
                    </div>

                    <div className='flex p-5 justify-end'>
                        <div>
                            <span>Search: </span>
                            <input type='search' className='border-[1px] border-gray-500 rounded-md p-1 ml-1' />
                        </div>
                    </div>

                    <div className='flex justify-between border-b-[2px] mb-3 pb-3 '>
                        <div className="w-full flex justify-center px-4">
                            <div className="w-full  h-[300px] border-[2px] border-gray-300 overflow-auto mt-5">
                                <table className="w-full border-[2px] bg-white  border-gray-300">
                                    <thead>
                                        <tr className="bg-green-700 text-white leading-10 border-gray-500 border-[2px]">
                                            <th className="px-4 py-2 border-[1px] border-gray-400">SN</th>
                                            <th className="px-4 py-2 border-[1px] border-gray-400">Title</th>
                                            <th className="px-4 py-2 border-[1px] border-gray-400">Slug</th>
                                            <th className="px-4 py-2 border-[1px] border-gray-400">Is parent</th>
                                            <th className="px-4 py-2 border-[1px] border-gray-400">Parent Category</th>
                                            <th className="px-4 py-2 border-[1px] border-gray-400">Photo</th>
                                            <th className="px-4 py-2 border-[1px] border-gray-400">Status</th>

                                            <th className="px-4 py-2 border-[1px] border-gray-400 lg:w-[100px]">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentItems.map((row, index) => (
                                            <tr key={index} className="border border-gray-300">
                                                <td className="px-4 py-2 border border-gray-300 text-center">{row.col1}</td>
                                                <td className="px-4 py-2 border border-gray-300 text-center">{row.col2}</td>
                                                <td className="px-4 py-2 border border-gray-300 text-center">{row.col3}</td>
                                                <td className="px-4 py-2 border border-gray-300 text-center">{row.col4}</td>
                                                <td className="px-4 py-2 border border-gray-300 text-center">{row.col5}</td>

                                                <td className="px-4 py-2 border border-gray-300 text-center">
                                                    <div >
                                                        <img src={row.col8} alt="logo" className=" object-cover h-[50px] w-full" />
                                                    </div>
                                                </td>

                                                <td className="px-4 py-2 border border-gray-300 text-center">{row.col5}</td>
                                                <td className=" py-2 border border-gray-300 text-center">
                                                    <div className='flex justify-around'>
                                                    <Link to={'/admin/category/id/edit'} className="bg-white rounded-lg border-[1px] border-green-700 text-[19px] p-2 text-green-700 hover:bg-green-700 hover:text-white"><FaRegEdit /></Link>

                                                        <Link to={'/orders/id'} className="bg-white rounded-lg border-[1px] border-red-500 text-[19px] p-2 text-red-500 hover:bg-red-500 hover:text-white"><MdDeleteForever /></Link>
                                                        </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

<div className=' w-full flex justify-center '>
                    <div className='flex w-11/12 justify-between py-5'>
                        <button onClick={handlePreviousPage} disabled={currentPage === 1} className="bg-green-700 text-white px-4 py-2 rounded disabled:opacity-50">
                            Previous
                        </button>
                        <span>Page {currentPage} of {totalPages}</span>
                        <button onClick={handleNextPage} disabled={currentPage === totalPages} className="bg-green-700 text-white px-4 py-2 rounded disabled:opacity-50">
                            Next
                        </button>
                    </div>
</div>  

                </div>
            </div>
      <Copyright />
      </div>
    </div>
  );
};

export default AdminCategory;
