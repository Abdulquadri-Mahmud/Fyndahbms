import React, { useState } from 'react'

import { LucideListFilter, Search } from 'lucide-react';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { FaAngleDown } from 'react-icons/fa';

export default function Filter_menu() {
    const [isOpen, setIsOpen] = useState(false);

    const openDialog = () => setIsOpen(true);
    const closeDialog = () => setIsOpen(false);

    const [searchTerm1, setSearchTerm1] = useState(""); // State for search input
    const [searchTerm2, setSearchTerm2] = useState(""); // State for search input
    const [searchTerm3, setSearchTerm3] = useState(""); // State for search input
    
    const [isDropdownOpen1, setIsDropdownOpen1] = useState(false); // State for dropdown visibility for the first dropdown
    const [isDropdownOpen2, setIsDropdownOpen2] = useState(false); // State for dropdown visibility for the second dropdown
    const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);// State for dropdown visibilityfor the third dropdown
    
    const [selectedOption1, setSelectedOption1] = useState(""); // State for selected option
    const [selectedOption2, setSelectedOption2] = useState(""); // State for selected option
    const [selectedOption3, setSelectedOption3] = useState(""); // State for selected option

    const [searchDrop, setSearchDrop] = useState(false);

    // Example category
    const category = [
        "Software",
        "anything",
    ];

    const industry = [
        "Engineering",
        "electronics",
    ];

    const location = [
        "United States",
        "England",
    ];

    // Filter category based on search term
    const filteredcategory = category.filter((option) =>
        option.toLowerCase().includes(searchTerm1.toLowerCase())
    );

    const filteredindustry = industry.filter((option) =>
        option.toLowerCase().includes(searchTerm2.toLowerCase())
    );

    const filteredlocation = location.filter((option) =>
        option.toLowerCase().includes(searchTerm3.toLowerCase())
    );

    const handleSelectOption1 = (option) => {
        setSelectedOption1(option); // Update selected option
        setSearchTerm1(option);// Update the search term to reflect the selected option
        setIsDropdownOpen1(false); // Close the dropdown
    };

    const handleSelectOption2 = (option) => {
        setSelectedOption2(option); // Update selected option
        setSearchTerm2(option); // Update the search term to reflect the selected option
        setIsDropdownOpen2(false); // Close the dropdown
    };

    const handleSelectOption3 = (option) => {
        setSelectedOption3(option); // Update selected option
        setSearchTerm3(option); // Update the search term to reflect the selected option
        setIsDropdownOpen3(false); // Close the dropdown
    };

    const clearAll = () => {
        setSearchTerm1('');
        setSearchTerm2('');
        setSearchTerm3('');
    }

    const confirm = () => {
        
    }

  return (
    <div className='relative'>
        <div onClick={openDialog} className="my-3 h-[45px] w-[130px] font-medium flex justify-center items-center px-3 py-2 border-2 border-blue-900 rounded-md gap-2">
            <LucideListFilter className='text-blue-900'/>
            <span className=" Filter"> Filter</span>
        </div>
        {
            isOpen && (
                <div className="dialog-overlay absolute">
                    <div className="dialog-box p-4">
                        <div className="">
                            <h2 className='font-medium text-2xl'>Filters</h2>
                        </div>

                        <div className="">

                            <div className="mt-4">
                                <div className="relative">
                                    <p className="font-medium mb-2">Product category</p>
                                    <input type="text" placeholder='Search or Select' value={searchTerm1} onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    onChange={(e) => {
                                        setSearchTerm1(e.target.value);
                                        setIsDropdownOpen1(true); // Open dropdown while typing
                                    }}
                                    className='border placeholder:font-normal border-gray-300 pl-10 text-black outline-none font-medium rounded-md h-[45px] w-full px-4'/>
                                    <div className="absolute top-11 left-0 px-3">
                                        <Search className='text-[12px] text-gray-500'/>
                                    </div>
                                    <div className="absolute top-11 right-0 px-3">
                                        <FaAngleDown className='text-xl text-gray-500'/>
                                    </div>
                                </div>
                            </div>

                            {
                                isDropdownOpen1 && (
                                    <div className='my-2 flex gap-2 flex-wrap'>
                                        {filteredcategory.length > 0 ? (
                                            filteredcategory.map((option, index) => (
                                                <div key={index} onClick={() => handleSelectOption1(option)}
                                                className='text-sm font-normal px-2 py-1 bg-blue-900 rounded-md text-white hover:bg-blue-700 cursor-pointer'
                                                >
                                                {option}
                                                </div>
                                            ))
                                            ) : (
                                                <div style={{ padding: "10px", color: "#888" }}>No category found</div>
                                            )}
                                        </div>
                                    )
                            }
                        </div>
                        <div className="">

                            <div className="mt-4">
                                <div className="relative">
                                    <p className="font-medium mb-2">Product category</p>
                                    <input type="text" placeholder='Search or Select' value={searchTerm2} onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    onChange={(e) => {
                                        setSearchTerm2(e.target.value);
                                        setIsDropdownOpen2(true); // Open dropdown while typing
                                    }}
                                    className='border placeholder:font-normal border-gray-300 pl-10 text-black outline-none font-medium rounded-md h-[45px] w-full px-4'/>
                                    <div className="absolute top-11 left-0 px-3">
                                        <Search className='text-[12px] text-gray-500'/>
                                    </div>
                                    <div className="absolute top-11 right-0 px-3">
                                        <FaAngleDown className='text-xl text-gray-500'/>
                                    </div>
                                </div>
                            </div>

                            {
                                isDropdownOpen2 && (
                                    <div className='my-2 flex gap-2 flex-wrap'>
                                        {filteredindustry.length > 0 ? (
                                            filteredindustry.map((option, index) => (
                                                <div key={index} onClick={() => handleSelectOption2(option)}
                                                className='text-sm font-normal px-2 py-1 bg-blue-900 rounded-md text-white hover:bg-blue-700 cursor-pointer'
                                                >
                                                {option}
                                                </div>
                                            ))
                                            ) : (
                                                <div style={{ padding: "10px", color: "#888" }}>No category found</div>
                                            )}
                                        </div>
                                    )
                            }
                        </div>
                        <div className="">

                            <div className="mt-4">
                                <div className="relative">
                                    <p className="font-medium mb-2">Product category</p>
                                    <input type="text" placeholder='Search or Select' value={searchTerm3} onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    onChange={(e) => {
                                        setSearchTerm3(e.target.value);
                                        setIsDropdownOpen3(true); // Open dropdown while typing
                                    }}
                                    className='border placeholder:font-normal border-gray-300 pl-10 text-black outline-none font-medium rounded-md h-[45px] w-full px-4'/>
                                    <div className="absolute top-11 left-0 px-3">
                                        <Search className='text-[14px] text-gray-500'/>
                                    </div>
                                    <div className="absolute top-11 right-0 px-3">
                                        <FaAngleDown className='text-xl text-gray-500'/>
                                    </div>
                                </div>
                            </div>

                            {
                                isDropdownOpen3 && (
                                    <div className='my-2 flex gap-2 flex-wrap'>
                                        {filteredlocation.length > 0 ? (
                                            filteredlocation.map((option, index) => (
                                                <div key={index} onClick={() => handleSelectOption3(option)}
                                                className='text-sm font-normal px-2 py-1 bg-blue-900 rounded-md text-white hover:bg-blue-700 cursor-pointer'
                                                >
                                                {option}
                                                </div>
                                            ))
                                            ) : (
                                                <div style={{ padding: "10px", color: "#888" }}>No category found</div>
                                            )}
                                        </div>
                                    )
                            }
                        </div>

                        <div className="absolute top-3 right-3" onClick={closeDialog}>
                            <IoMdCloseCircleOutline className='text-2xl text-gray-500' />
                        </div>

                        <div className="pt-2 flex justify-between text-white">
                            <button onClick={clearAll}  className="border-2 text-black w-[150px] font-medium border-blue-900 py-2 rounded-md">Clear all filters</button>
                            <button onClick={confirm} className="w-[150px] bg-blue-900 py-2 font-medium rounded-md">Confirm</button>
                        </div>

                    </div>
                </div>
            )
        }
    </div>
  )
}
