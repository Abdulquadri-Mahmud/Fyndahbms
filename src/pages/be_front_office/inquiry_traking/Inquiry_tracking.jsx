import Inquiry_modal from '@/components/front-office-management/inquiry-tracking/Inquiry_modal';
import New_log from '@/components/front-office-management/inquiry-tracking/New_log'
import { ChevronDown, Filter, Search } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Inquiry_tracking() {
  const [] = useState([]);
  const [] = useState([]);

  // Filter events based on search and categories
  // const filteredEvents = events.filter(event => {
  //   const matchesSearch = event.title.toLowerCase().includes(filters.search.toLowerCase()) ||
  //   event.Purpose.toLowerCase().includes(filters.search.toLowerCase());
    
  //   const matchesCategory = filters.categories.includes(event.category);
  //   return matchesSearch && matchesCategory;
  // });

  const datas = [
    {
        id: 1,
        trackingID : '123456',
        name: "Godwin Jacob",
        email: "anyone@example.com",
        subject: "To discuss with MD",
        type: "Dificulty",
        urgency: 'Medium',
        date: "23/11/2024",
    },
    {
        id: 2,
        trackingID : '123456',
        name: "Godwin Jacob",
        email: "anyone@example.com",
        subject: "To discuss with MD",
        type: "Transportation",
        urgency: 'Low',
        date: "23/11/2024",
    },
    {
        id: 3,
        trackingID : '123456',
        name: "Godwin Jacob",
        email: "anyone@example.com",
        subject: "On boarding of new client",
        type: "Downtime",
        urgency: 'High',
        date: "23/11/2024",
    },
    {
        id: 4,
        trackingID : '123456',
        name: "Godwin Jacob",
        email: "anyone@example.com",
        subject: "On boarding of new client",
        type: "Downtime",
        urgency: 'Low',
        date: "23/11/2024",
    },
    {
        id: 5,
        trackingID : '123456',
        name: "Godwin Jacob",
        email: "anyone@example.com",
        subject: "On boarding of new client",
        type: "Downtime",
        urgency: 'High',
        date: "23/11/2024",
    },
    {
        id: 6,
        trackingID : '123456',
        name: "Godwin Jacob",
        email: "anyone@example.com",
        subject: "On boarding of new client",
        type: "Downtime",
        urgency: 'Medium',
        date: "23/11/2024",
    },
    {
        id: 7,
        trackingID : '123456',
        name: "Godwin Jacob",
        email: "anyone@example.com",
        subject: "On boarding of new client",
        type: "Downtime",
        urgency: 'High',
        date: "23/11/2024",
    },
    {
        id: 8,
        trackingID : '123456',
        name: "Godwin Jacob",
        email: "anyone@example.com",
        subject: "On boarding of new client",
        type: "Downtime",
        urgency: 'Medium',
        date: "23/11/2024",
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
      <h1 className="text-2xl font-medium">Inquiry handling</h1>
        <div className="nav mt-6 w-full rounded-md bg-white py-3 font-medium px-3 flex items-center gap-4">
            <Link to={'/inquiry-tracking'} className='pl-3 text-red-500'>Inquiry tracking</Link>
            <Link to={'/resolution-management'} className='hover:text-red-500'>Resolution management</Link>
            <Link to={'/feedback'} className='hover:text-red-500'>Resolution management</Link>
        </div>
        <div className="flex justify-between items-center">
            <h1 className="my-5 font-medium text-2xl">Inquiry tracking</h1>
            <New_log/>
        </div>
        <div className="flex justify-between items-center flex-wrap">
          <div className="flex items-center gap-2 flex-wrap mt-2">
            <div className="relative">
              <button className="px-4 py-2 border border-blue-900 rounded-md flex items-center gap-2">
                <Filter className="h-4 w-4" />
                <span className='text-blue-900'>Filter</span>
              </button>
              {/* Category filters dropdown would go here */}
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <input type="text" placeholder="Search events..."
                className="pl-10 pr-4 py-2 outline-none border rounded-md w-64"/>
            </div>
          </div>
          <Link to="/view-template" className=' text-sm font-medium text-blue-900 underline'> View template</Link>
        </div>

        <section className='w-[100%] mt-5 overflow-y-auto'>
          <table className='w-full'>
            <thead className='w-full'>
              <tr className={'bg-blue-900'}>
                  <th className="py-2 px-2 text-white text-start font-medium">Tracking I.D</th>
                  <th className="py-2 px-2 text-white text-start font-medium">Customer</th>
                  <th className="py-2 px-2 text-white text-start font-medium">Subject</th>
                  <th className="py-2 px-2 text-white text-start font-medium">Type</th>
                  <th className="py-2 px-2 text-white text-start font-medium">Urgency</th>
                  <th className="py-2 px-2 text-white text-start font-medium">Date</th>
                  <th className="py-2 px-2 text-white text-start font-medium"></th>
              </tr>
            </thead>
            <tbody className='w-full'>
              {
                currentItems.length > 0 && currentItems.map((data) => {
                  return (
                    <tr key={data.id} className='relative'>
                      <td className="py-2 px-2 font-normal text-gray-500">{data.trackingID}</td>
                      <td className={'py-2 px-2 font-normal flex flex-col'}>
                        <span className="">{data.name}</span>
                        <span className="text-gray-500 text-sm">{data.email}</span>
                      </td>
                      <td className={'py-2 px-2 text-gray-500 font-normal'}>{data.subject}</td>
                      <td className={'py-2 px-2 text-gray-500 font-normal'}>{data.type}</td>
                      <td className={'py-2 px-2 text-gray-500 font-normal'}>{data.urgency}</td>
                      <td className={'py-2 px-2'}>{data.date}</td>
                      <td>
                          <Inquiry_modal data={data}/>
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
