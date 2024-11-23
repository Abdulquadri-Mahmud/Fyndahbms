import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function New_suppler() {
    const [isBusinessDivVisible, setIsBusinessDivVisible] = useState(true);
    const [isIndividualDivVisible, setIsIndividualDivVisible] = useState(false);

    const business = (e) => {
        const event = e.target.value;
        if (event === "on") {
            console.log('on');
            setIsBusinessDivVisible(true); // Hide the div
            setIsIndividualDivVisible(false);
          }
    }
    const individual = (e) => {
        const event = e.target.value;
        if (event === "on") {
            console.log('on');
            setIsIndividualDivVisible(true);
            setIsBusinessDivVisible(false); // Hide the div
        } 
    }

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    const handleCancle = (e) => {
        
    }
    const handleContinue = (e) => {

    }
  return (
    <div className="bg-zinc-100 p-6 rounded">
        <div className="flex justify-between items-center flex-wrap gap-3">
            <div className="w-full">
                <h1 className='text-2xl font-medium'>New Suppliers</h1>
                <div className="font-medium text-gray-500 pt-2 flex items-center gap-1">
                    <Link to={'/'}>Dashboard</Link>
                    <span className="">/</span>
                    <Link to={'/supplier'}>Suppliers</Link>
                    <span className="">/</span>
                    <Link to={'/new-supplier'} className='text-red-700'>New Supplier</Link>
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
        <form onSubmit={handleSubmit} className="">
            <div className="p-3 mt-5 bg-white rounded-md">
                <div className="border-b pb-5 flex-wrap border-gray-300 flex justify-between items-center">
                    <div className="">
                        <h2 className='text-2xl font-medium'>Supplier Details</h2>
                        <p className="text-gray-400 font-medium pt-2 text-sm">Enter the neccessary details of the supplier</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <button onClick={handleCancle} className='border-2 border-blue-800 w-[80px] h-[40px] rounded-md font-medium text-blue-800'>Cancel</button>
                        <button onClick={handleContinue} className='bg-blue-800 w-[150px] h-[40px] rounded-md text-white font-medium'>Save & Continue</button>
                    </div>
                </div>

                <div className="border-b border-gray-200  py-5 ">
                    <div className="text-blackw-[80%] flex-wrap  flex justify-between items-center">
                        <div className="">
                            <h2 className='text-sm font-medium'>Supplier Type</h2>
                        </div>
                        <div className=" w-[70%] gap-3 flex-wrap flex justify-start items-center">
                            <div className="radio md:w-[40%] flex items-center gap-2">
                                <input onChange={business} type="radio" name="supply" id="supplier type"/>
                                <label htmlFor='supply' className='text-sm font-medium'>Business</label>
                            </div>
                            <div className="radio md:w-[40%] flex items-center gap-2">
                                <input onChange={individual} type="radio" name="supply" id="individual"/>
                                <label htmlFor='supply' className='text-sm font-medium'>Individual</label>
                            </div>
                        </div>
                    </div>
                </div>

                {
                    isBusinessDivVisible && (
                        <div className="">
                            <div className="border-b border-gray-200  py-4 ">
                                <div className="text-black w-[80%] flex-wrap  flex justify-between items-center">
                                    <div className="">
                                        <h2 className='text-sm font-medium'>Name</h2>
                                    </div>
                                    <div className=" w-[70%] gap-3 flex-wrap flex justify-start items-center">
                                        <div className="md:w-[48.5%] flex items-center gap-2">
                                            <input type="text" id="firstname" placeholder='First Name' className='border border-gray-300 text-black outline-none font-medium rounded-md h-[45px] w-full px-4'/>
                                        </div>
                                        <div className="md:w-[48.5%] flex items-center gap-2">
                                            <input type="text" id="lastname" placeholder='Last Name' className='border border-gray-300 text-black outline-none font-medium rounded-md h-[45px] w-full px-4'/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="border-b border-gray-200  py-5 ">
                                <div className="text-black w-[80%] flex-wrap  flex justify-between items-center">
                                    <div className="">
                                        <h2 className='text-sm font-medium'>Phone</h2>
                                    </div>
                                    <div className=" w-[70%] gap-3 flex-wrap flex justify-start items-center">
                                        <div className="w-full flex items-center gap-2">
                                            <input type="number" id="phone" placeholder='Enter phone number' className='border border-gray-300 text-black outline-none font-medium rounded-md h-[45px] w-full px-4'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="border-b border-gray-200  py-5 ">
                                <div className="text-black w-[80%] flex-wrap  flex justify-between items-center">
                                    <div className="">
                                        <h2 className='text-sm font-medium'>Email address</h2>
                                    </div>
                                    <div className=" w-[70%] gap-3 flex-wrap flex justify-start items-center">
                                        <div className="w-full flex items-center gap-2">
                                            <input type="email" id="email" placeholder='Enter email address' className='border border-gray-300 text-black outline-none font-medium rounded-md h-[45px] w-full px-4'/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="border-b border-gray-200  py-5 ">
                                <div className="text-black w-[80%] flex-wrap  flex justify-between items-center">
                                    <div className="">
                                        <h2 className='text-sm font-medium'>Company name</h2>
                                    </div>
                                    <div className=" w-[70%] gap-3 flex-wrap flex justify-start items-center">
                                        <div className="w-full flex items-center gap-2">
                                            <input type="number" id="phone" placeholder='ABC Limited' className='border border-gray-300 text-black outline-none font-medium rounded-md h-[45px] w-full px-4'/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="border-b border-gray-200  py-4 ">
                                <div className="text-black w-[80%] flex-wrap  flex justify-between items-center">
                                    <div className="">
                                        <h2 className='text-sm font-medium'>Industry & Category</h2>
                                    </div>
                                    <div className=" w-[70%] gap-3 flex-wrap flex justify-start items-center">
                                        <div className="md:w-[48.5%] flex items-center gap-2">
                                            <input type="text" id="Industry" placeholder='Industry' className='border border-gray-300 text-black outline-none font-medium rounded-md h-[45px] w-full px-4'/>
                                        </div>
                                        <div className="md:w-[48.5%] flex items-center gap-2">
                                            <input type="text" id="product" placeholder='Product Industry' className='border border-gray-300 text-black outline-none font-medium rounded-md h-[45px] w-full px-4'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            

                            <div className="border-b border-gray-200  py-5 ">
                                <div className="text-black w-[80%] flex-wrap  flex justify-between items-center">
                                    <div className="">
                                        <h2 className='text-sm font-medium'>Location</h2>
                                    </div>
                                    <div className=" w-[70%] gap-3 flex-wrap flex justify-start items-center">
                                        <div className="w-full flex items-center gap-2">
                                            <input type="text" id="location" placeholder='Enter location' className='border border-gray-300 text-black outline-none font-medium rounded-md h-[45px] w-full px-4'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }

                {
                    isIndividualDivVisible && (
                        <div className="">
                            <div className="border-b border-gray-200  py-4 ">
                                <div className="text-black w-[80%] flex-wrap  flex justify-between items-center">
                                    <div className="">
                                        <h2 className='text-sm font-medium'>Name</h2>
                                    </div>
                                    <div className=" w-[70%] gap-3 flex-wrap flex justify-start items-center">
                                        <div className="md:w-[48.5%] flex items-center gap-2">
                                            <input type="text" id="firstname" placeholder='First Name' className='border border-gray-300 text-black outline-none font-medium rounded-md h-[45px] w-full px-4'/>
                                        </div>
                                        <div className="md:w-[48.5%] flex items-center gap-2">
                                            <input type="text" id="lastname" placeholder='Last Name' className='border border-gray-300 text-black outline-none font-medium rounded-md h-[45px] w-full px-4'/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="border-b border-gray-200  py-5 ">
                                <div className="text-black w-[80%] flex-wrap  flex justify-between items-center">
                                    <div className="">
                                        <h2 className='text-sm font-medium'>Phone</h2>
                                    </div>
                                    <div className=" w-[70%] gap-3 flex-wrap flex justify-start items-center">
                                        <div className="w-full flex items-center gap-2">
                                            <input type="number" id="phone" placeholder='Enter phone number' className='border border-gray-300 text-black outline-none font-medium rounded-md h-[45px] w-full px-4'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="border-b border-gray-200  py-5 ">
                                <div className="text-black w-[80%] flex-wrap  flex justify-between items-center">
                                    <div className="">
                                        <h2 className='text-sm font-medium'>Email address</h2>
                                    </div>
                                    <div className=" w-[70%] gap-3 flex-wrap flex justify-start items-center">
                                        <div className="w-full flex items-center gap-2">
                                            <input type="email" id="email" placeholder='Enter email address' className='border border-gray-300 text-black outline-none font-medium rounded-md h-[45px] w-full px-4'/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="border-b border-gray-200  py-4 ">
                                <div className="text-black w-[80%] flex-wrap  flex justify-between items-center">
                                    <div className="">
                                        <h2 className='text-sm font-medium'>Industry & Category</h2>
                                    </div>
                                    <div className=" w-[70%] gap-3 flex-wrap flex justify-start items-center">
                                        <div className="md:w-[48.5%] flex items-center gap-2">
                                            <input type="text" id="Industry" placeholder='Industry' className='border border-gray-300 text-black outline-none font-medium rounded-md h-[45px] w-full px-4'/>
                                        </div>
                                        <div className="md:w-[48.5%] flex items-center gap-2">
                                            <input type="text" id="product" placeholder='Product Industry' className='border border-gray-300 text-black outline-none font-medium rounded-md h-[45px] w-full px-4'/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="border-b border-gray-200  py-5 ">
                                <div className="text-black w-[80%] flex-wrap  flex justify-between items-center">
                                    <div className="">
                                        <h2 className='text-sm font-medium'>Country</h2>
                                    </div>
                                    <div className=" w-[70%] gap-3 flex-wrap flex justify-start items-center">
                                        <div className="w-full flex items-center gap-2">
                                            <select id="country" className='border border-gray-300 text-black outline-none font-medium rounded-md h-[45px] w-full px-4'>
                                                <option value="">Nigeria</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }

                <div className="mt-5 flex justify-end items-end">
                    <div className="flex gap-3 items-center">
                        <button onClick={handleCancle} className='border-2 border-blue-800 w-[80px] h-[40px] rounded-md font-medium text-blue-800'>Cancel</button>
                        <button onClick={handleContinue} className='bg-blue-800 w-[150px] h-[40px] rounded-md text-white font-medium'>Save & Continue</button>
                    </div>
                </div>
            </div>
        </form>

    </div>
  )
}
