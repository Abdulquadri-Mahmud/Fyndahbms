// import Modal from '@/components/supplier-vendor-management/Modal';
import Filter_menu from '@/components/supplier-vendor-management/Filter_menu';
import Supply_Modal from '@/components/supplier-vendor-management/Supply_Modal';
import { LucideListFilter } from 'lucide-react'
import React, { createContext, Suspense } from 'react'
import { IoMdAdd, IoMdSearch } from 'react-icons/io'
import { Link } from 'react-router-dom'

export const MenuContext = createContext();

export default function Supplier() {
    const datas = [
        {
        id: 1,
      code: "INV001",
      name: "Carlos Kamara",
      email: "anyone@gmail.com",
      totalItem: "25",
      compilance: "Compliant",
      contractDate: "12/24/2024",
    },
    {
        id: 2,
      code: "INV002",
      name: "Adeleke Taofeeq",
      email: "anyone@gmail.com",
      totalItem: "35",
      compilance: "Compliant",
      contractDate: "12/24/2024",
    },
    {
        id: 3,
      code: "INV003",
      name: "Oshodi Godwin",
      email: "anyone@gmail.com",
      totalItem: "40",
      compilance: "Non Compliant",
      contractDate: "12/24/2024",
    },
    {
        id: 4,
      code: "INV004",
      name: "Kabiru Shamsideen",
      email: "anyone@gmail.com",
      totalItem: "10",
      compilance: "Compliant",
      contractDate: "12/24/2024",
    },
    {
        id: 5,
      code: "INV005",
      name: "Godwin Samuel",
      email: "anyone@gmail.com",
      totalItem: "90",
      compilance: "Non Compliant",
      contractDate: "12/24/2024",
    },
    {
        id: 6,
      code: "INV006",
      name: "Godwin Emmanuel",
      email: "anyone@gmail.com",
      totalItem: "20",
      compilance: "Non Compliant",
      contractDate: "12/24/2024",
    },
    {
        id: 7,
      code: "INV007",
      name: "Godwin Jacob",
      email: "anyone@gmail.com",
      totalItem: "22",
      compilance: "Compliant",
      contractDate: "12/24/2024",
    },
  ]
  return (
    <div className="bg-zinc-100 p-6 rounded">
        <div className="flex justify-between items-center flex-wrap gap-3">
            <div className="">
                <h1 className='text-2xl font-medium'>Suppliers</h1>
                <p className="text-gray-500 pt-3">Manage your suppliers including their contact and compliance</p>
                <div className="flex items-center gap-3 mt-3">
                    <div className="">
                        <Filter_menu/>
                    </div>
                    <div className="relative flex justify-center items-center gap-2">
                        <input type="text" placeholder='Search' className='w-[200px] h-[45px] pl-9 outline-none py-[8px] rounded-md bg-transparent font-medium placeholder:text-gray-400 border-2 text-white border-gray-300'/>
                        <IoMdSearch className='absolute top-3 left-2 text-2xl text-gray-400'/>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <button className='text-sm h-[45px] text-white font-medium px-3 py-2 rounded-md  bg-blue-950'>
                    <Link to={'/new-supplier'} className='flex items-center gap-2'>
                        <IoMdAdd className='text-xl'/>Add New Supplier
                    </Link>
                </button>
            </div>
        </div>

        <div className="mt-5">
            <section className='w-[100%] h-[90vh] overflow-y-auto'>
                <table className='w-full'>
                    <thead className='w-full'>
                        <tr className={'bg-blue-950 hover:bg-blue-950'}>
                            <th className="py-4 px-3 text-white text-start font-normal text-sm flex items-center gap-2"><input type="checkbox"/> Code</th>
                            <th className="py-4 px-3 text-white text-start font-normal text-sm">Supplier name</th>
                            <th className="py-4 px-3 text-white text-start font-normal text-sm">Total Items</th>
                            <th className="py-4 px-3 text-white text-start font-normal text-sm">Email</th>
                            <th className="py-4 px-3 text-white text-start font-normal text-sm">Compilance</th>
                            <th className="py-4 px-3 text-white text-start font-normal text-sm">Contract Date</th>
                            <th className="py-4 px-3 text-white text-start font-normal text-sm"></th>
                        </tr>
                    </thead>
                    <tbody className='w-full'>
                        {
                            datas.length > 0 && datas.map((data) => {
                                return (
                                    <tr key={data.id} className='relative text-gray-500 text-sm'>
                                        <td className="py-4 px-3 font-medium flex justify-start items-center gap-2"><input type="checkbox" name="" id="" />{data.code}</td>
                                        <td className={'py-4 px-3 font-medium text-black'}>{data.name}</td>
                                        <td className={'py-4 px-3'}>{data.totalItem}</td>
                                        <td className={'py-4 px-3'}>{data.email}</td>
                                        <td className={``}>
                                        <div className={`${data.compilance === 'Non Compliant' ? ' w-[100px] text-purple-700 flex items-center justify-center gap-2 bg-purple-300 py-1 rounded-full' : 'rounded-full bg-yellow-200 py-1 text-red-800 w-[110px]'} text-sm  text-center font-medium`}>
                                            <p> {data.compilance}</p>
                                        </div>
                                        </td>
                                        <td className={'py-4 px-3 relative'}>{data.contractDate}</td>
                                        <Supply_Modal data={data}/>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </section>

            {/* <SuppliersTable/> */}
        </div>

    </div>
  )
}
