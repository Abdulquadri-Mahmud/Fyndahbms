import { ChevronDown, Search } from 'lucide-react';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import New_checkin from '../../../components/front-office-management/Shcdule_event/check-in/New_checkin';
import Checkin_modal from '@/components/front-office-management/Shcdule_event/check-in/Checkin_modal';

export default function Checkin() {
    const totalVisitor = 200;
    const currentVisitor = 100;

    const datas = [
        {
            id: 1,
            name: "Godwin Jacob",
            email: "anyone@example.com",
            purpose: "To discuss with MD",
            checkin: "8:20, Nov 04",
            checkout: "12:20, Nov 04",
        },
        {
            id: 2,
            name: "David Gabriel",
            email: "anyone@example.com",
            purpose: "On-boarding of new client",
            checkin: "12:20, Nov 04",
            checkout: "4:20, Nov 04",
        },
        {
            id: 3,
            name: "Godwin Jacob",
            email: "anyone@example.com",
            purpose: "To discuss with MD",
            checkin: "8:20, Nov 04",
            checkout: "12:20, Nov 04",
        },
        {
            id: 4,
            name: "David Gabriel",
            email: "anyone@example.com",
            purpose: "On-boarding of new client",
            checkin: "12:20, Nov 04",
            checkout: "4:20, Nov 04",
        },
        {
            id: 5,
            name: "Godwin Jacob",
            email: "anyone@example.com",
            purpose: "To discuss with MD",
            checkin: "8:20, Nov 04",
            checkout: "12:20, Nov 04",
        },
        {
            id: 6,
            name: "David Gabriel",
            email: "anyone@example.com",
            purpose: "On-boarding of new client",
            checkin: "12:20, Nov 04",
            checkout: "4:20, Nov 04",
        },
    ]

    // Step 2: State for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    // Step 3: Calculate pagination
    const totalPages = Math.ceil(datas.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = datas.slice(startIndex, startIndex + itemsPerPage);

    // Step 4: Change page
    const goToPage = (page) => {
      if (page >= 1 && page <= totalPages) {
        setCurrentPage(page);
      }
    };

  return (
    <div className='p-4'>
        <h1 className="text-2xl font-medium">Scheduling</h1>
        <div className="nav mt-6 w-full rounded-md bg-white py-3 font-medium px-3 flex items-center gap-4">
            <Link to={'/scheduling'} className='pl-3 hover:text-red-500'>Calendar Booking</Link>
            <Link to={'/checkin'} className='hover:text-red-500 text-red-500'>Check-in</Link>
        </div>
        <div className="flex justify-between items-center">
            <h1 className="my-5 font-medium text-2xl">Check-in management</h1>
            <New_checkin/>
        </div>
        <div className="flex flex-wrap gap-5">
            <div className="bg-white py-4 px-6 rounded-md w-[250px]">
                <div className="icon w-[50px] h-[50px] rounded-full bg-blue-300">

                </div>
                <p className="text-blue-900 my-3 font-medium">Total visitor today</p>
                <h2 className='text-3xl font-bold'>{totalVisitor}</h2>
            </div>
            <div className="bg-white py-4 px-6 rounded-md w-[250px]">
                <div className="icon w-[50px] h-[50px] rounded-full bg-blue-300">

                </div>
                <p className="text-blue-900 my-3 font-medium">Current visitor today</p>
                <h2 className='text-3xl font-bold'>{currentVisitor}</h2>
            </div>
        </div>

        <div className="flex items-center justify-between mt-5">
            <h3 className="font-medium text-xl">Recent Check-in</h3>
            <div className="flex flex-wrap items-center">
                <button className="flex gap-2 font-medium bg-white py-2 px-3 border rounded-md">All check-in <ChevronDown/></button>
                <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <input type="text" placeholder="Search events..."
                        className="pl-10 pr-4 py-2 outline-none border rounded-md w-54"/>
                </div>
            </div>
        </div>

        <section className='w-[100%] mt-5 overflow-y-auto'>
            <table className='w-full'>
                <thead className='w-full'>
                    <tr className={'bg-blue-900'}>
                        <th className="py-4 px-3 text-white text-start font-medium">Name</th>
                        <th className="py-4 px-3 text-white text-start font-medium">Email</th>
                        <th className="py-4 px-3 text-white text-start font-medium">Purpose</th>
                        <th className="py-4 px-3 text-white text-start font-medium">Check-in</th>
                        <th className="py-4 px-3 text-white text-start font-medium">Check-out</th>
                        <th className="py-4 px-3 text-white text-start font-medium"></th>
                    </tr>
                </thead>
                <tbody className='w-full'>
                    {
                        currentItems.length > 0 && currentItems.map((data) => {
                            return (
                                <tr key={data.id} className='relative'>
                                    <td className="py-4 px-3 font-medium">{data.name}</td>
                                    <td className={'py-4 px-3 font-medium text-gray-500'}>{data.email}</td>
                                    <td className={'py-4 px-3 text-gray-500'}>{data.purpose}</td>
                                    <td className={'py-4 px-3'}>{data.checkin}</td>
                                    <td className={'py-4 px-3'}>{data.checkout}</td>
                                    {/* <td className={'py-4 px-3 relative'}>{data.contractDate}</td> */}
                                    <td>
                                        <Checkin_modal data={data}/>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </section>
        {/* Pagination Controls */}
        <div className="flex items-center justify-between mt-4 space-x-2">
            {/* Previous Button */}
            <button className={`px-4 py-2 bg-blue-500 text-white rounded-md ${
                currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`} onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
              Previous
            </button>

            {/* Page Numbers */}
            <div className="flex gap-2 items-center">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 ${
                    currentPage === index + 1
                      ? "bg-slate-200 text-black"
                      : "bg-gray-200 text-gray-600"
                  } rounded-md`}
                  onClick={() => goToPage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button
              className={`px-4 py-2 bg-blue-500 text-white rounded-md ${
                currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
    </div>
  )
}
