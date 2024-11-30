import React, { useState } from 'react'
import { IoMdAdd, IoMdSearch } from 'react-icons/io'

export default function New_log() {
    const [isOpen, setIsOpen] = useState(false);

    const openDialog = () => setIsOpen(true);
    const closeDialog = () => setIsOpen(false);

    // to add more items
    const [inputFields, setInputFields] = useState([{ id: 1, value: "" }]);

    const handleInputChange = (e, id, value) => {
        setOrderData({
            ...orderData,
            [e.target.id]: e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();

    }
      
    const confirm = () => {

    }

  return (
    <div>
        <button onClick={openDialog} className='flex items-center gap-2 bg-blue-900 text-white rounded-md font-medium px-3 py-2'>
            <IoMdAdd className='text-xl outline-none'/>Create new log
        </button>
        {
            isOpen && (
                <div className=" dialog-overlay fixed top-0 left-0 w-full h-full flex justify-center items-center z-[1000]">
                    <form onSubmit={handleSubmit} className="dialog relative bg-white p-6 rounded-lg w-[400px] max-h-[90vh] overflow-y-auto">
                        <button onClick={closeDialog} className="absolute top-3 right-3 text-gray-500 border border-gray-500 rounded-full w-[25px] h-[25px] outline-none flex justify-center items-center">X</button>
                        <div className="">
                            <h2 className="font-medium text-2xl">New Inquiry</h2>
                        </div>

                        <div className="mt-3">
                            <p className="pb-2 font-medium">Inquiry subject</p>
                            <input id='subject' onChange={handleInputChange} type="text" placeholder='Enter inquiry subject' className='w-full py-2 border rounded-md px-3 outline-none'/>
                        </div>

                        <div className="grid grid-cols-2 gap-3 my-5">
                            <div className="">
                                <p className="font-medium pb-2">Type</p>
                                <input id='type' onChange={handleInputChange} type="text" placeholder='Enter inquiry type' className='w-full py-2 border rounded-md px-3 outline-none'/>
                            </div>
                            <div className="">
                                <p className="pb-2 font-medium">Urgency</p>
                                <select id="urgency" onChange={handleInputChange} className='outline-none w-full border py-2 rounded-md'>
                                    <option value="low">Low</option>
                                    <option value="medium">Medium</option>
                                    <option value="high">High</option>
                                </select>
                            </div>
                        </div>

                        <div className="">
                            <p className="font-medium pb-2">Description</p>
                            <textarea onChange={handleInputChange} id="description" className='p-3 h-[100px] w-full rounded-md outline-none border'></textarea>
                        </div>

                        <div className='relative mt-3'>
                            <label className="block font-medium mb-1">Assign</label>
                            <select onChange={handleInputChange} className="w-full px-3 py-2 outline-none border rounded-md pl-6" >
                                <option value=""></option>
                            </select>
                            <IoMdSearch className='absolute top-9 left-2 text-gray-500 text-xl'/>
                        </div>

                        <div className="my-3 py-3">
                            <div className="mb-3">
                                <p className="font-medium">Customer name</p>
                                <input id='customerName' onChange={handleInputChange} type="text" placeholder='Enter customer name' className='w-full py-2 border rounded-md px-3 outline-none'/>
                            </div>

                            <div className="mb-3">
                                <p className="font-medium">Customer email address</p>
                                <input id='customerEmail' onChange={handleInputChange} type="email" placeholder='Enter customer email' className='w-full py-2 border rounded-md px-3 outline-none'/>
                            </div>
                        </div>
                        <div className="flex justify-between text-white">
                            <button type='submit' onClick={confirm} className="w-[150px] bg-blue-900 py-2 font-medium rounded-md">Create inquiry</button>
                        </div>

                    </form>
                </div>
            )
        }
    </div>
  )
}
