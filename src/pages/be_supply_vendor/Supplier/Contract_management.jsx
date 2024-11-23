import { LucideLayoutGrid, LucideListFilter, SlashIcon } from 'lucide-react'
import React, { createContext, Suspense, useRef, useState } from 'react'

import { Link } from 'react-router-dom'
import { RxSlash } from "react-icons/rx";
import { IoMdCopy } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";

export default function Contract_management() {
    const [upload, setUpload] = useState(true);

    const fileRef = useRef(null);

    const [files, setFile] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    const handleCancle = (e) => {
        
    }
    const handleContinue = (e) => {

    }

  return (
    <div>
        <div className="bg-zinc-100 p-6 rounded">
            <div className="flex justify-between items-center flex-wrap gap-3">
                <div className="w-full">
                    <h1 className='text-2xl font-medium'>Suppliers</h1>
                    <div className="font-medium text-gray-500 pt-2 flex items-center gap-1">
                        <Link to={'/'}>Dashboard</Link>
                        <RxSlash className='text-[13px]'/>
                        <Link to={'/supplier'}>Suppliers</Link>
                        <RxSlash className='text-[13px]'/>
                        <Link to={'/new-supplier'} className='text-red-700'>New Supplier</Link>
                    </div>
                    <div className="mt-8 mon_navs text-gray-500 w-full font-medium flex items-center justify-start gap-5">
                        <div className="">
                            <Link to={'/new-supplier'}>Supplier Details</Link>
                        </div>
                        <div className="">
                            <Link to={'/contract-management'} className='text-red-700'>Contract management</Link>
                        </div>
                        <div className="">
                            <Link to={'/compliance-verification'}>Compliance verification</Link>
                        </div>
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit} className="">
                <div className="mt-5 p-3 bg-white rounded-md">
                    <div className="border-b pb-5 gap-3 flex-wrap border-gray-300 flex justify-between items-center">
                        <div className="">
                            <h2 className='text-2xl font-medium'>Contract Management</h2>
                        </div>
                        <div className="flex gap-3 items-center">
                            <button onClick={handleCancle} className='border-2 border-blue-900 w-[80px] h-[40px] rounded-md font-medium text-blue-800'>Cancel</button>
                            <button onClick={handleContinue} className='bg-blue-900 w-[150px] h-[40px] rounded-md text-white font-medium'>Save & Continue</button>
                        </div>
                    </div>

                    <div className="border-b border-gray-300  py-7 ">
                        <div className="md:w-[80%] w-full gap-7 flex justify-center flex-wrap">
                            <div className="md:w-[35%] w-[100%]">
                                <h2 className="text-xl font-medium">Upload Contract</h2>
                                <p className="text-gray-500 font-medium">Upload any format of document here.</p>
                            </div>

                            <div className="flex-1">
                                {
                                    !upload ? (
                                        <>
                                            <div className="">
                                                <p className="py-2 font-medium">Expiring date</p>
                                                <input type="date" id="Industry" placeholder='Industry' className='border border-gray-300 text-black outline-none font-medium rounded-md h-[45px] w-full px-4'/>
                                            </div>
                                            <div className="mt-5 h-[70px] relative p-3 rounded-md w-full flex gap-3 justify-start border border-red-200">
                                                <div className="w-7 h-7 bg-red-100 rounded-full flex justify-center items-center">
                                                    <IoMdCopy className='text-red-800'/>
                                                </div>
                                                <div className="flex-1 pr-5">
                                                    <p className="text-sm font-medium">Supplier name Contract.pdf</p>
                                                    <p className="text-sm text-gray-500">200KB</p>
                                                </div>
                                                <div className="absolute top-3 right-3 text-gray-500">
                                                    <RiDeleteBinLine/>
                                                </div>
                                            </div>
                                            <div className="mt-5">
                                                <div className="rounded-md py-2 md:w-[60%] border border-blue-900">
                                                    <p className="text-center text-blue-900 font-medium">Upload another Document to replace</p>
                                                </div>
                                                <input type="file" onChange={(e) => setFile(e.target.files)} ref={fileRef} id="image"  accept='/*' className='hidden'/>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="">
                                                <p className="py-2 font-medium">Expiring date</p>
                                                <input type="date" id="Industry" placeholder='Industry' className='border border-gray-300 text-black outline-none font-medium rounded-md h-[45px] w-full px-4'/>
                                            </div>
                                            <div className="mt-5 h-[250px] rounded-md flex justify-center items-center border border-gray-300">
                                                <div  onClick={() => fileRef.current.click()} className="cursor-pointer flex flex-col justify-center items-center">
                                                    <div className="cursor-pointer">
                                                        <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="16" cy="16" r="16" fill="#F0F2F5"></circle>
                                                            <path
                                                                d="M11.9998 14.3334C11.9998 12.3083 13.6415 10.6667 15.6665 10.6667C17.4603 10.6667 18.9545 11.9555 19.2712 13.6578C19.3156 13.8965 19.4863 14.0922 19.7167 14.1687C21.0439 14.6088 21.9998 15.8603 21.9998 17.3334C21.9998 19.1743 20.5075 20.6667 18.6665 20.6667C18.2983 20.6667 17.9998 20.9652 17.9998 21.3334C17.9998 21.7016 18.2983 22 18.6665 22C21.2438 22 23.3332 19.9107 23.3332 17.3334C23.3332 15.4051 22.164 13.7514 20.4974 13.0398C19.9271 10.9054 17.981 9.33337 15.6665 9.33337C12.9051 9.33337 10.6665 11.572 10.6665 14.3334C10.6665 14.4002 10.6678 14.4668 10.6704 14.5331C9.47349 15.2236 8.6665 16.517 8.6665 18C8.6665 20.2092 10.4574 22 12.6665 22C13.0347 22 13.3332 21.7016 13.3332 21.3334C13.3332 20.9652 13.0347 20.6667 12.6665 20.6667C11.1937 20.6667 9.99984 19.4728 9.99984 18C9.99984 16.8951 10.672 15.9457 11.6323 15.5412C11.9102 15.4241 12.0749 15.1351 12.034 14.8363C12.0115 14.6722 11.9998 14.5043 11.9998 14.3334Z"
                                                                fill="#475367"></path>
                                                            <path d="M15.5569 17.5018C15.8095 17.2772 16.1902 17.2772 16.4427 17.5018L17.4427 18.3907C17.7179 18.6353 17.7427 19.0567 17.4981 19.3318C17.2841 19.5726 16.9348 19.6217 16.6665 19.4664V22.6667C16.6665 23.0349 16.368 23.3334 15.9998 23.3334C15.6316 23.3334 15.3332 23.0349 15.3332 22.6667V19.4664C15.0648 19.6217 14.7156 19.5726 14.5016 19.3318C14.257 19.0567 14.2817 18.6353 14.5569 18.3907L15.5569 17.5018Z" fill="#475367"></path>
                                                        </svg>
                                                    </div>
                                                    <input type="file" onChange={(e) => setFile(e.target.files)} ref={fileRef} id="image"  accept='/*' className='hidden'/>
                                                    <p className="text-center text-red-700 font-medium">Click to upload <span className="text-gray-700">or drag and drop <br /> PDF, CVS DOC, JPG, etc.</span></p>
                                                </div>
                                            </div>
                                        </>
                                    )
                                }

                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-5 flex justify-end items-end">
                        <div className="flex gap-3 items-center">
                            <button onClick={handleCancle} className='border-2 border-blue-800 w-[80px] h-[40px] rounded-md font-normal text-blue-800'>Cancel</button>
                            <button onClick={handleContinue} className='bg-blue-800 w-[150px] h-[40px] rounded-md text-white font-normal'>Save & Continue</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}
