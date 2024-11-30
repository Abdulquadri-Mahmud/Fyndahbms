import React, { useState } from 'react'
import Add_new_note from './Add_new_note';
import { Link } from 'react-router-dom';

export default function Resolution_management_modal() {
    // State to control dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State to store the selected dropdown option
  const [selectedOption, setSelectedOption] = useState("");

  // Open modal when a dropdown item is clicked
  const handleOptionClick = (option) => {
    setSelectedOption(option); // Save selected option
    setIsModalOpen(true); // Open modal
    setIsDropdownOpen(false); // Close dropdown
  };

  // Close the modal
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="p-8 flex flex-col items-center">
      {/* Dropdown */}
        <div className="relative">
            <div className={'bg-transparent flex flex-col gap-1 cursor-pointer px-1 py-1'} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <p className="w-1 h-1 rounded-full bg-gray-400"></p>
                <p className="w-1 h-1 rounded-full bg-gray-400"></p>
                <p className="w-1 h-1 rounded-full bg-gray-400"></p>
            </div>

            {isDropdownOpen && (
            <div className="absolute flex flex-col gap-3 font-medium px-4 py-4 right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-md z-10">
                <Add_new_note/>
                <Link to={'/'}>View details</Link>
                <Link to={'/'}>Edit</Link>
                <Link to={'/'} className='text-red-600'>Delete</Link>
            </div>
            )}
        </div>

        {/* Modal */}
        {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
                <div className="bg-white w-96 p-6 rounded-md shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Modal</h2>
                    <p className="mb-6">You selected: <span className="font-bold">{selectedOption}</span></p>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={closeModal}>Close</button>
                </div>
            </div>
        )}
    </div>
  )
}
