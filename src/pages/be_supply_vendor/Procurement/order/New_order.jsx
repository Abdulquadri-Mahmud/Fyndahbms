import React, { useEffect, useState } from 'react'
import { IoMdAdd } from 'react-icons/io';

// import './styles/';

export default function New_order() {
    const [isOpen, setIsOpen] = useState(false);
    const [orderData, setOrderData] = useState({});



    const openDialog = () => setIsOpen(true);
    const closeDialog = () => setIsOpen(false);

    // to add more items
    const [inputFields, setInputFields] = useState([{ id: 1, value: "" }]);

    // Add a new input field
    const handleAddField = () => {
        setInputFields([...inputFields, { id: inputFields.length + 1, value: "" }]);
    };

    const handleInputChange = (e, id, value) => {
        const updatedFields = inputFields.map((field) =>
          field.id === id ? { ...field, value } : field
        );
        setInputFields(updatedFields);

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
            <IoMdAdd className='text-xl outline-none'/>Add more items
        </button>

        {
            isOpen && (
                <div className=" dialog-overlay fixed top-0 left-0 w-full h-full flex justify-center items-center z-[1000]">
                    <form onSubmit={handleSubmit} className="dialog-box p-4 bg-white rounded-md md:max-w-[400px] xl:max-h-[600px] md:max-h-[500px] sm:max-h-[400px] max-h-[350px] max-w-[97%] w-full relative">
                        <div className="">
                            <h2 className="font-medium text-2xl">New Order</h2>
                            <p className="text-sm text-gray-500">Enter the details below to created a new order</p>
                        </div>

                        <div className="mt-4 ">
                            <h2 className="text-xl font-medium mb-3">Supplier details</h2>
                            <div className="mt-2">
                                <p className="pb-2 font-medium text-gray-500">Name</p>
                                <input id='name' onChange={handleInputChange} type="text" placeholder='Enter client name' className='w-full py-2 border rounded-md px-3 outline-none'/>
                            </div>
                        </div>

                        <div className="my-3 border-b border-t py-3">
                            <div className="">
                                <h2 className="text-xl font-medium">Product details</h2>
                                    {
                                    inputFields.map((field) => (
                                        <div key={field.id} style={{ marginBottom: "10px" }}>
                                            <div className="mt-3">
                                                <p className="pb-1 font-medium text-gray-700">Item {field.id}</p>
                                                <input id='item' onChange={handleInputChange} type="text" placeholder='Enter client name' className='w-full py-2 border rounded-md px-3 outline-none'/>
                                            </div>
                                            <div className="pt-3 w-full gap-3 flex text-gray-500 justify-start items-center">
                                                <div className="md:w-[40%]">
                                                    <p className="font-medium pb-3">Quantity</p>
                                                    <input id='quantity' onChange={handleInputChange} type="text" placeholder='' className='border border-gray-300 text-black outline-none font-medium rounded-md h-[45px] w-full px-4 outline-none'/>
                                                </div>
                                                <div className="md:w-[57%] relative">
                                                    <p className="font-medium pb-3">Price</p>
                                                    <input id='price' onChange={handleInputChange} type="text" placeholder='Enter product price' className='border pl-9 border-gray-300 text-black outline-none font-medium rounded-md h-[45px] w-full px-4 outline-none'/>
                                                    <p className="absolute top-12 left-4">$</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </div>

                            <div className="my-4">
                                <button type='button' onClick={handleAddField} className='flex items-center gap-2 text-blue-900 font-medium'>
                                    <IoMdAdd className='text-xl outline-none'/>Add more items
                                </button>
                            </div>

                            <div className="mb-1">
                                <p className="font-medium">Total Price</p>
                                <input id='totalPrice' onChange={handleInputChange} type="number" placeholder='Automatically fills' className='w-full py-2 border rounded-md px-3 outline-none'/>
                            </div>

                            <div className="mb-1">
                                <p className="font-medium">Expected date</p>
                                <input id='expectedDate' onChange={handleInputChange} type="date" placeholder='' className='w-full py-2 border rounded-md px-3 outline-none'/>
                            </div>

                            
                        </div>
                        <div className="flex justify-between text-white">
                            <button onClick={closeDialog} className="border-2 text-black w-[150px] cursor-pointer font-medium border-blue-900 py-2 rounded-md">Cancle</button>
                            <button type='submit' onClick={confirm} className="w-[150px] bg-blue-900 py-2 font-medium rounded-md">Confirm</button>
                        </div>

                    </form>
                </div>
            )
        }

    </div>
  )
}
