import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker';
import { IoMdAdd } from 'react-icons/io';

export default function New_checkin() {
    const [isOpen, setIsOpen] = useState(false);
    const [newEvent, setNewEvent] = useState({
        title: '',
        other: '',
        start: new Date(),
        end: new Date(),
        Purpose: '',
      });

    const openDialog = () => setIsOpen(true);
    const closeDialog = () => setIsOpen(false);

    const handleInputChange = (e, id, value) => {
        setNewEvent({
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
            <IoMdAdd className='text-xl outline-none'/>Check-in
        </button>
        {
            isOpen && (
                <div className="dialog-overlay fixed top-0 left-0 w-full h-full flex justify-center items-center z-[1000]">
                    <form onSubmit={handleSubmit} className="dialog-box p-4 bg-white rounded-md md:max-w-[400px] xl:max-h-[600px] md:max-h-[500px] sm:max-h-[450px] max-h-[] max-w-[97%] w-full relative">
                        <button onClick={closeDialog} className="absolute top-3 right-3 text-gray-500 border border-gray-500 rounded-full w-[25px] h-[25px] outline-none flex justify-center items-center">X</button>
                        
                        <div className="mt-3">
                            <h2 className="font-medium text-2xl">New Check-in</h2>
                        </div>

                        <div className="flex items-center gap-2  mt-5">
                            <div className="">
                                <p className="font-medium pb-2">Check-in</p>
                                <div className='flex gap-2'>
                                    <DatePicker selected={newEvent.start} onChange={(date) => setNewEvent({...newEvent, start: date})}
                                    // showTimeSelect
                                    dateFormat="MMMM d" // dateFormat="MMMM d, yyyy h:mm aa" 
                                    className="w-full outline-none px-3 font-medium text-sm py-2 border rounded-md"/>
                                    <DatePicker selected={newEvent.start} onChange={(date) => setNewEvent({...newEvent, start: date})}
                                    showTimeSelect dateFormat="h:mm aa" 
                                    className="w-[80px] px-3 outline-none font-medium text-sm py-2 border rounded-md"/>
                                </div>
                            </div>
                            <div className="">
                                <p className="font-medium pb-2">Check-out</p>
                                <div  className='flex gap-2'>
                                    <DatePicker selected={newEvent.end}
                                        onChange={(date) => setNewEvent({...newEvent, end: date})}
                                        // showTimeSelect
                                        dateFormat="MMMM d" className="outline-none w-full text-sm font-medium px-3 py-2 border rounded-md"/>
                                    <DatePicker selected={newEvent.end} onChange={(date) => setNewEvent({...newEvent, end: date})}
                                        showTimeSelect dateFormat="h:mm aa" 
                                        className="w-[80px] outline-none font-medium text-sm px-3 py-2 border rounded-md"/>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <div className="mt-2">
                                <label className="pb-2 font-medium">Name</label>
                                <input id='name' onChange={handleInputChange} type="text" placeholder='Enter guest name' className='w-full py-2 border rounded-md px-3 outline-none'/>
                            </div>
                        </div>

                        <div className="mt-6">
                            <div className="mt-2">
                                <label className="pb-2 font-medium">Phone number</label>
                                <input id='phone' onChange={handleInputChange} type="Number" placeholder='Enter guest phone' className='w-full py-2 border rounded-md px-3 outline-none'/>
                            </div>
                        </div>

                        <div className="mt-6">
                            <div className="mt-2">
                                <label className="pb-2 font-medium">Email address</label>
                                <input id='email' onChange={handleInputChange} type="email" placeholder='Enter guest name' className='w-full py-2 border rounded-md px-3 outline-none'/>
                            </div>
                        </div>

                        <div className='mt-6'>
                            <label className="block font-medium mb-1">Purpose</label>
                            <textarea className="w-full h-[100px] px-3 py-2 border rounded-md"
                            value={newEvent.Purpose}
                            onChange={(e) => setNewEvent({...newEvent, Purpose: e.target.value})}
                            placeholder="Enter brief description"
                            />
                        </div>
                        
                        <div className="mt-4 flex justify-end text-white">
                            <button type='submit' onClick={confirm} className="w-[150px] bg-blue-900 py-2 font-medium rounded-md">Confirm</button>
                        </div>

                    </form>
                </div>
            )
        }

    </div>
  )
}
