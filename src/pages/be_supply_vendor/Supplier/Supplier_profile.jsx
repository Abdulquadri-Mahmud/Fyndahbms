import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Supplier_profile() {
    const [open, setOpen] = useState(false);

    const handleCancel = () => {

    }
    const handleProfil = () => {

    }

    const showHistory = () => {
        if (!open) {
            setOpen(true);
        }else{
            setOpen(false);
        }
    }

    const datas = [
        {
            id: 1,
          orderCode: "INV001",
          totalItem: "25",
          totalAmount: "2500",
          status: "Pending",
          deliveryDate: "12/24/2024",
        },
        {
            id: 2,
          orderCode: "INV002",
          totalItem: "35",
          totalAmount: "40000",
          status: "Shipped",
          deliveryDate: "12/24/2024",
        },
        {
            id: 3,
          orderCode: "INV003",
          totalItem: "40",
          totalAmount: "30000",
          status: "Delivered",
          deliveryDate: "12/24/2024",
        },
        {
            id: 4,
          orderCode: "INV004",
          totalItem: "10000",
          totalAmount: "99032457897",
          status: "Pending",
          deliveryDate: "12/24/2024",
        },
        {
            id: 5,
          orderCode: "INV005",
          totalItem: "90000",
          totalAmount: "912032457897",
          status: "Shipped",
          contractDate: "12/24/2024",
        },
        {
            id: 6,
          orderCode: "INV006",
          totalItem: "30",
          totalAmount: "50000",
          status: "Pending",
          deliveryDate: "12/24/2024",
        },
        {
            id: 7,
          orderCode: "INV006",
          totalItem: "23000",
          totalAmount: "76000",
          status: "Pending",
          deliveryDate: "12/24/2024",
        },
    ]

  return (
    <div className='bg-zinc-100 p-3'>
        <div className="flex justify-between items-center flex-wrap gap-3">
            <div className="w-full">
                <h1 className='text-2xl font-medium'>New Suppliers</h1>
                <div className="font-medium text-gray-500 pt-2 flex items-center gap-1">
                    <Link to={'/'}>Dashboard</Link>
                    <span className="">/</span>
                    <Link to={'/supplier'}>Suppliers</Link>
                    <span className="">/</span>
                    <Link to={'/new-supplier'} className='text-red-700'>Supplier Profile</Link>
                </div>
                <div className="mt-8 mon_navs text-gray-500 w-full font-medium flex items-center justify-start gap-5">
                    <div className="">
                        <Link to={'/new-supplier'} className='text-red-700'>Supplier Details</Link>
                    </div>
                    <div className="">
                        <Link to={'/contract-management'}>Contract management</Link>
                    </div>
                    <div className="">
                        <Link to={'/compliance-verification'}>Compliance verification</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-white rounded-md mt-6">
            <div className="p-6 flex justify-between items-center">
                <div className="">
                    <h2 className='text-2xl font-medium'>Supplier Details</h2>
                </div>
                <div className="flex gap-3 items-center">
                    <button onClick={handleCancel} className='border-2 border-blue-900 w-[80px] h-[40px] rounded-md font-medium text-blue-800'>Cancel</button>
                    <button onClick={handleProfil} className='bg-blue-900 w-[150px] h-[40px] rounded-md text-white font-medium'>Edit profile</button>
                </div>
            </div>
            <div className="bg-gray-700 grid lg:grid-cols-3 p-6 text-white">
                <div className="p-5">
                    <h2 className='text-gray-400 text-xl font-medium'>Contact Info</h2>
                    <div className="mt-4 text-sm font-medium">
                        <div className="flex justify-between items-center">
                            <p className="text-gray-400">Name:</p>
                            <p className="">Business</p>
                        </div>
                        <div className="py-3 flex justify-between items-center">
                            <p className="text-gray-400">Phone:</p>
                            <p className="">ABC Limited</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-gray-400">Email:</p>
                            <p className="">Email@example.com</p>
                        </div>
                        <div className="pt-3 flex justify-between items-center">
                            <p className="text-gray-400">Colorado:</p>
                            <p className="">Software</p>
                        </div>
                    </div>
                </div>
                <div className="lg:border-l border-gray-500 p-5">
                    <h2 className='text-gray-400 text-xl font-medium'>Other Info</h2>
                    <div className="mt-4 pr-3 text-sm font-medium">
                        <div className="flex justify-between items-center">
                            <p className="text-gray-400">Supplier type:</p>
                            <p className="">Business</p>
                        </div>
                        <div className="py-3 flex justify-between items-center">
                            <p className="text-gray-400">Company name:</p>
                            <p className="">ABC Limited</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-gray-400">Industry:</p>
                            <p className="">Engineering</p>
                        </div>
                        <div className="pt-3 flex justify-between items-center">
                            <p className="text-gray-400">Product category:</p>
                            <p className="">Software</p>
                        </div>
                    </div>
                </div>
                <div className="lg:border-l border-gray-500 p-5">
                    <h2 className="text-gray-400 text-xl">Performance</h2>
                    
                </div>
            </div>
        </div>
        <div className="bg-white mt-6 rounded-md">
            <div className="w-full py-4 text-xl px-4 font-medium rounded-md bg-white">
                <button type='button' onClick={showHistory}>History</button>
            </div>
            {
                open && (
                    <section className='w-[100%] h-[90vh] overflow-y-auto'>
                        <table className='w-full'>
                            <thead className='w-full'>
                                <tr className={'bg-blue-950 hover:bg-blue-950'}>
                                    <th className="py-3 px-3 text-white font-normal text-start text-sm flex items-center gap-2"><input type="checkbox"/>Order Code</th>
                                    <th className="py-3 px-3 text-white font-normal text-start text-sm">Total Items</th>
                                    <th className="py-3 px-3 text-white font-normal text-start text-sm">Total Amount</th>
                                    <th className="py-3 px-3 text-white font-normal text-start text-sm">Status</th>
                                    <th className="py-3 px-3 text-white font-normal text-start text-sm">Delivery date</th>
                                    <th className="py-3 px-3 text-white font-normal text-start text-sm"></th>
                                </tr>
                            </thead>
                            <tbody className='w-full'>
                                {
                                    datas.length > 0 && datas.map((data) => {
                                        return (
                                            <tr key={data.id} className='relative text-gray-500 text-sm'>
                                                <td className="py-3 px-3 font-medium flex justify-start items-center gap-2"><input type="checkbox" name="" id="" />{data.orderCode}</td>
                                                <td className={'py-3 px-3'}>{data.totalItem}</td>
                                                <td className={'py-3 px-3'}>{data.totalAmount}</td>
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
                    </section>
                )
            }
        </div>
    </div>
  )
}
