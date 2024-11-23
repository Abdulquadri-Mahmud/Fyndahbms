import React, { useState } from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { IoMdAddCircleOutline } from "react-icons/io";
import { SlashIcon } from 'lucide-react';

export default function All_orders() {
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(6);

    const datas = [
        {
            id: 1,
          orderCode: "INV001",
          supplierName: "Carlos Kamara",
          totalItem: "25",
          totalAmount: "2500",
          status: "Pending",
          deliveryDate: "12/24/2024",
        },
        {
            id: 2,
          orderCode: "INV002",
          supplierName: "Adeleke Taofeeq",
          totalItem: "35",
          totalAmount: "40000",
          status: "Shipped",
          deliveryDate: "12/24/2024",
        },
        {
            id: 3,
          orderCode: "INV003",
          supplierName: "Oshodi Godwin",
          totalItem: "40",
          totalAmount: "30000",
          status: "Delivered",
          deliveryDate: "12/24/2024",
        },
        {
            id: 4,
          orderCode: "INV004",
          supplierName: "Kabiru Shamsideen",
          totalItem: "10000",
          totalAmount: "99032457897",
          status: "Pending",
          deliveryDate: "12/24/2024",
        },
        {
            id: 5,
          orderCode: "INV005",
          supplierName: "Godwin Samuel",
          totalItem: "90000",
          totalAmount: "912032457897",
          status: "Shipped",
          contractDate: "12/24/2024",
        },
        {
            id: 6,
          orderCode: "INV006",
          supplierName: "Godwin Emmanuel",
          totalItem: "30",
          totalAmount: "50000",
          status: "Pending",
          deliveryDate: "12/24/2024",
        },
        {
            id: 7,
          orderCode: "INV006",
          supplierName: "Godwin Emmanuel",
          totalItem: "23000",
          totalAmount: "76000",
          status: "Pending",
          deliveryDate: "12/24/2024",
        },
    ]

    const startIndex = currentPage * postPerPage;
    const endIndex = startIndex - postPerPage;

    const currentPost = datas.slice(endIndex, startIndex);

    const paginate  = paginate => setCurrentPage(paginate);

    const procure = [
        {
            status: 'Total Orders',
            icon: '',
            total: 1000,
        },
        {
            status: 'Pending',
            icon: '',
            total: 500,
        },
        {
            status: 'Shipped',
            icon: '',
            total: 200,
        },
        {
            status: 'Delivered',
            icon: '',
            total: 300,
        },
    ]

    return (
        <div className='bg-zinc-100 p-5 rounded-md'>
            <div className='flex'>
                <div className="flex-1">
                    <div className="w-full">
                        <h1 className='text-2xl font-medium'>All Orders</h1>
                        <div className="font-medium text-gray-500 text-sm pt-2 flex items-center gap-1">
                            <Link to={'/'}>Dashboard</Link>
                            <span className="">/</span>
                            <Link to={'/all-orders'}>Procurement Tracking</Link>
                            <span className="">/</span>
                            <Link to={'/new-supplier'} className='text-red-700'>All Orders</Link>
                        </div>
                        <div className=" border-b text-sm pb-5 mt-8 mon_navs text-gray-500 w-full font-medium flex flex-wrap items-center justify-start gap-5">
                            <div className="flex items-center gap-2">
                                <Link to={'/new-supplier'} className='text-red-700'>All Orders</Link>
                                <p className="w-[50px] h-6 flex justify-center items-center rounded-full bg-red-100 text-red-700 text-sm">1000</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Link to={'/new-supplier'} className=''>Pending Orders</Link>
                                <p className="w-[50px] h-6 flex justify-center items-center rounded-full bg-gray-200 text-sm">1000</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Link to={'/new-supplier'} className=''>All Orders</Link>
                                <p className="w-[50px] h-6 flex justify-center items-center rounded-full bg-gray-200  text-sm">1000</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Link to={'/new-supplier'} className=''>All Orders</Link>
                                <p className="w-[50px] h-6 flex justify-center items-center rounded-full bg-gray-200  text-sm">1000</p>
                            </div>
                        </div>
                    </div>
                <div className="mt-5 overflow-x-scroll">
                    <div className="pb-4 flex justify-between items-center">
                        <h2 className='font-medium text-xl'>All Order</h2>
                    </div> 
                    <div className='max-w-[100%] overflow-auto'>
                        <table className='w-full'>
                            <thead className=''>
                                <tr className={'bg-blue-950 hover:bg-blue-950 text-start'}>
                                    <th className="py-3 px-3 text-white text-start font-normal text-sm flex items-center gap-2"><input type="checkbox"/>Order code</th>
                                    <th className="py-3 px-3 text-white text-start font-normal text-sm">Supplier name</th>
                                    <th className="py-3 px-3 text-white text-start font-normal text-sm">Total Items</th>
                                    <th className="py-3 px-3 text-white text-start font-normal text-sm">Total Amount</th>
                                    <th className="py-3 px-3 text-white text-start font-normal text-sm">Status</th>
                                    <th className="py-3 px-3 text-white text-start font-normal text-sm">Delivery date Date</th>
                                    <th className="py-3 px-3 text-white text-start font-normal text-sm"></th>
                                </tr>
                            </thead>
                            <tbody className='w-full'>
                                {
                                    datas.length > 0 && datas.map((data) => {
                                        return (
                                            <tr key={data.id} className='relative text-gray-500 text-sm'>
                                                <td className="py-3 px-3 font-medium flex justify-start items-center gap-2"><input type="checkbox" name="" id="" />{data.orderCode}</td>
                                                <td className={'py-3 px-3 font-medium text-black'}>{data.supplierName}</td>
                                                <td className={'py-3 px-3'}>{data.totalItem}</td>
                                                <td className={'py-3 px-3'}>{data.totalAmount}</td>
                                                <td className={'py-3 px-3'}>{data.status}</td>
                                                <td className={``}>
                                                <div className={`${data.status === 'Shipped' ? ' w-[100px] text-purple-700 flex items-center justify-center gap-2 bg-purple-300 py-1 rounded-full' : 'rounded-full bg-yellow-200 py-1 text-red-800 w-[110px]'} text-sm  text-center font-medium`}>
                                                    <p> {data.status}</p>
                                                </div>
                                                </td>
                                                <td className={'py-3 px-3'}>{data.deliveryDate}</td>
                                                <td className={'py-4 flex gap-3 items-center'}>
                                                    <p className="font-medium text-blue-900">View Details</p>
                                                    <p className="font-medium text-red-700">Track</p>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    
                    {/* <SuppliersTable/> */}
                </div>
    
            </div>
        </div>
    </div>
  )
}
