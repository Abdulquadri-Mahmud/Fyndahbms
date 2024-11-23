import React, { useState } from 'react'
import { IoMdAdd } from 'react-icons/io';

// import './styles/';

export default function New_order() {
    const [isOpen, setIsOpen] = useState(false);

    const openDialog = () => setIsOpen(true);
    const closeDialog = () => setIsOpen(false);

    // to add more items
    const [inputFields, setInputFields] = useState([{ id: 1, value: "" }]);

    // Add a new input field
    const handleAddField = () => {
        setInputFields([...inputFields, { id: inputFields.length + 1, value: "" }]);
    };

    const handleInputChange = (id, value) => {
        const updatedFields = inputFields.map((field) =>
          field.id === id ? { ...field, value } : field
        );
        setInputFields(updatedFields);
    };

      
    const confirm = () => {

    }

  return (
    <div>
        <button onClick={openDialog} className='flex items-center gap-2 bg-blue-900 text-white rounded-md font-medium px-3 py-2'>
            <IoMdAdd className='text-xl'/>Add more items
        </button>

        {
            isOpen && (
                <div className="dialog-overlay">
                    <div className="dialog-box p-2">
                        <div className="">
                            <h2 className="font-medium text-2xl">New Order</h2>
                            <p className="text-sm text-gray-500 mt-1">Enter the details below to created a new order</p>
                        </div>

                        <div className="mt-2 ">
                            <h2 className="text-xl font-medium mb-3">Supplier details</h2>
                            <div className="mt-2">
                                <p className="pb-2 font-medium text-gray-500">Name</p>
                                <input type="text" placeholder='Enter client name' className='w-full py-2 border rounded-md px-3'/>
                            </div>
                        </div>

                        <div className="my-3 border-b border-t py-3">
                            <div className="">
                                <h2 className="text-xl font-medium">Product details</h2>
                                    {
                                    inputFields.map((field) => (
                                        <div key={field.id} style={{ marginBottom: "10px" }}>
                                            <div className="mt-1">
                                                <p className="pb-1 font-medium text-gray-500">Item {field.id}</p>
                                                <input type="text" placeholder='Enter client name' className='w-full py-2 border rounded-md px-3'/>
                                            </div>
                                            <div className="pt-1 w-full gap-3 flex text-gray-500 justify-start items-center">
                                                <div className="md:w-[48.5%]">
                                                    <p className="font-medium pb-3">Quantity</p>
                                                    <input type="text" id="idcard" placeholder='' className='border border-gray-300 text-black outline-none font-medium rounded-md h-[45px] w-full px-4'/>
                                                </div>
                                                <div className="md:w-[48.5%] relative">
                                                    <p className="font-medium pb-3">Price</p>
                                                    <input type="text" id="lastname" placeholder='Enter product price' className='border pl-9 border-gray-300 text-black outline-none font-medium rounded-md h-[45px] w-full px-4'/>
                                                    <p className="absolute top-12 left-4">$</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </div>

                            <div className="mb-1">
                                <p className="font-medium">Total Price</p>
                                <input type="number" placeholder='Automatically fills' className='w-full py-2 border rounded-md px-3'/>
                            </div>

                            <div className="mb-1">
                                <p className="font-medium">Expected date</p>
                                <input type="date" placeholder='' className='w-full py-2 border rounded-md px-3'/>
                            </div>

                            <div className="mt-1">
                                <button onClick={handleAddField} className='flex items-center gap-2 text-blue-900 font-medium'>
                                    <IoMdAdd className='text-xl'/>Add more items
                                </button>
                            </div>
                            
                        </div>
                        <div className="flex justify-between text-white">
                            <button onClick={closeDialog} className="border-2 text-black w-[150px] font-medium border-blue-900 py-2 rounded-md">Cancle</button>
                            <button onClick={confirm} className="w-[150px] bg-blue-900 py-2 font-medium rounded-md">Confirm</button>
                        </div>

                    </div>
                </div>
            )
        }

    </div>
  )
}
