import React, { useEffect, useState } from 'react'
import { IoMdAdd, IoMdCloseCircleOutline, IoMdSearch } from 'react-icons/io';

export default function Add_new_event() {
    const [isOpen, setIsOpen] = useState(false);
    const [orderData, setOrderData] = useState({});



    const openDialog = () => setIsOpen(true);
    const closeDialog = () => setIsOpen(false);

    const handleSubmit = (e) => {
        e.preventDefault();

    }
    const staff = [
        {
            name: 'Selct staff to assgin'
        },
        {
            name: 'Selct staff to assgin'
        },
        {
            name: 'Selct staff to assgin'
        },
        {
            name: 'Selct staff to assgin'
        }
    ]
    const guest = [
        {
            name: 'Add other guest'
        },
        {
            name: 'Add other guest'
        },
        {
            name: 'Add other guest'
        },
        {
            name: 'Add other guest'
        }
    ]
    const confirm = () => {

    }

    const handleInputChange = () => {

    }

    const habdleNotification = () => {

    }

  return (
    <div>
        <button onClick={openDialog} className='flex items-center gap-2 bg-blue-900 text-white rounded-md font-medium px-3 py-2'>
            <IoMdAdd className='text-xl outline-none'/>Schedule event
        </button>

        {
            isOpen && (
                <div className=" dialog-overlay fixed top-0 left-0 w-full h-full flex justify-center items-center z-[1000]">
                    <form onSubmit={handleSubmit} className="dialog-box p-4 bg-white rounded-md md:max-w-[500px] xl:max-h-[600px] md:max-h-[500px] sm:max-h-[400px] max-h-[450px] max-w-[97%] w-full relative">
                        <div className="">
                            <h2 className="font-medium text-2xl">Add tiltle</h2>
                        </div>

                        <div className="mt-2">
                            <p className="pb-2 font-medium text-gray-500">Time</p>
                            <div className="flex justify-around items-center">
                                <div className="flex  items-center gap-2">
                                    <input id='date-start' onChange={handleInputChange} type="date" className='w-[120px] py-2 border rounded-md px-3 outline-none'/>
                                    <input id='time-start' onChange={handleInputChange} type="time" className='w-[80px] py-2 border rounded-md px-3 outline-none'/>
                                </div>
                                <span className="">to</span>
                                <div className="flex justify-around items-center gap-2">
                                    <input id='date-end' onChange={handleInputChange} type="date" className='w-[120px] py-2 border rounded-md px-3 outline-none'/>
                                    <input id='date-start' onChange={handleInputChange} type="time" className='w-[80px] py-2 border rounded-md px-3 outline-none'/>
                                </div>
                            </div>
                            <div className="flex justify-end items-end mt-3">
                                <button className='rounded-md py-2 px-3 border-2 border-blue-900 text-blue-900'>Confirm date</button>
                            </div>
                        </div>

                        <div className="mt-2 mb-4 relative">
                            <p className="pb-2 font-medium">Assign</p>
                            <select name="" id="staff" className='w-full pl-9 outline-none py-[6px] rounded-md bg-transparent font-medium placeholder:text-gray-400 border-2 border-gray-300'>
                                {
                                    staff.map((staff) => (
                                        <option value={staff.name}>{staff.name}</option>
                                    ))
                                }
                            </select>
                            <IoMdSearch className='absolute top-10 left-2 text-2xl text-gray-400'/>
                        </div>
                        <div className="my-5">
                            <p className="pb-2 font-medium">Notofication</p>
                            <div className="flex items-center gap-3">
                                <select name="" id="staff" className='w-[100px] outline-none py-2.5 rounded-md bg-transparent font-medium placeholder:text-gray-400 border'>
                                    <option value="email">Email</option>
                                    <option value="phone">Phone</option>
                                </select>
                                <input type="text" className='w-[60px] border py-2 rounded-md outline-none'/>
                                <select name="" id="staff" className='w-[100px] outline-none py-2.5 rounded-md bg-transparent font-medium placeholder:text-gray-400 border'>
                                    <option value="minute">Minute</option>
                                    <option value="hour">Hour</option>
                                    <option value="seconds">Seconds</option>
                                </select>
                                <button onClick={habdleNotification} className='font-medium text-blue-900'>Add notification</button>
                            </div>
                        </div>
                        <div className="my-3 relative">
                            <p className="pb-2 font-medium">Other guest</p>
                            <select name="" id="staff" className='w-full pl-9 outline-none py-[6px] rounded-md bg-transparent font-medium placeholder:text-gray-400 border'>
                                {
                                    guest.map((guest) => (
                                        <option value={guest.name}>{guest.name}</option>
                                    ))
                                }
                            </select>
                            <IoMdSearch className='absolute top-10 left-2 text-2xl text-gray-400'/>
                        </div>
                        <div className="mt-4">
                            <p className="font-medium pb-2">Purpose</p>
                            <textarea name="" id="" placeholder='Enter brief description' className='p-3 h-[100px] rounded-md border w-full'></textarea>
                        </div>
                        <div className="my-4">
                            <p className="font-medium">Created by</p>
                            <div className="flex items-center gap-2 mt-2">
                                <div className="w-[45px] h-[45px] rounded-full bg-blue-900">
                                    <img src="" alt="" />
                                </div>
                                <p className="font-medium">Godwin David</p>
                            </div>
                        </div>

                        <div className="absolute top-3 right-3" onClick={closeDialog}>
                            <IoMdCloseCircleOutline className='text-2xl text-gray-500' />
                        </div>
                        
                        <div className="flex justify-end text-white border-t pt-3">
                            <button type='submit' onClick={confirm} className="w-[150px] bg-blue-900 py-2 font-medium rounded-md">Create event</button>
                        </div>

                    </form>
                </div>
            )
        }

    </div>
  )
}
