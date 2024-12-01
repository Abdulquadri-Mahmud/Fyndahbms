import { Filter, Search } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Feedback() {
  return (
    <div>
      <h1 className="text-2xl font-medium">Inquiry handling</h1>
        <div className="nav mt-6 w-full rounded-md bg-white py-3 font-medium px-3 flex items-center gap-4">
            <Link to={'/inquiry-tracking'} className='pl-3 text-red-500'>Inquiry tracking</Link>
            <Link to={'/resolution-management'} className='hover:text-red-500'>Resolution management</Link>
            <Link to={'/feedback'} className='hover:text-red-500'>Feedback</Link>
        </div>
        <div className="flex justify-between items-center">
            <h1 className="my-5 font-medium text-2xl">Inquiry tracking</h1>
            {/* <New_log/> */}
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
    </div>
  )
}
