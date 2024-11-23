import React, { useState } from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { IoMdAddCircleOutline } from "react-icons/io";
import New_order from './order/New_order';

export default function Procurement() {
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
        <div className='bg-zinc-200 rounded-md w-full py-3'>
            <div className="">
                <div className=" px-6 flex justify-between items-center">
                    <div className="">
                        <h2 className='font-medium text-2xl'>Procurement Tracking</h2>
                    </div>
                    <div className="">
                        <New_order/>
                    </div>
                </div>
                <div className="px-6 mt-5 flex justify-center flex-wrap md:flex-nowrap items-center gap-3">
                {
                    procure.length > 0 && procure.map((pro) => {
                        const {status, icon, total} = pro;

                        return (
                            <div className="w-[25%] p-4 rounded-md bg-white">
                                <div className="bg-purple-300 w-[40px] h-[40px] rounded-full">
                                    {icon}
                                </div>
                                <p className="py-2 text-gray-400 text-sm">{status}</p>
                                <h2 className="text-2xl font-bold">{total}</h2>
                            </div>
                        )
                    })
                }
            </div>
            <div className="mt-5 px-6  overflow-x-scroll">
                <div className="pb-4 flex justify-between items-center">
                    <h2 className='font-medium text-xl'>Recent Order</h2>
                    <Link to={'/all-orders'} className='text-sm text-gray-500 flex items-center gap-3'>View all orders <FaLongArrowAltRight /></Link>
                </div> 
                <div className='max-w-[100%] overflow-auto'>
                    <table className='w-full '>
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
  )
}
