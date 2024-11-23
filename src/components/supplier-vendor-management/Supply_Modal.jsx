import React from 'react'

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export default function Supply_Modal() {
    const handleDelete = () => {

    }
    
  return (
    <DropdownMenu.Root>
			<DropdownMenu.Trigger asChild>
                <div className={'bg-transparent flex flex-col gap-1 cursor-pointer px-1 py-1'}>
                    <p className="w-1 h-1 rounded-full bg-gray-400"></p>
                    <p className="w-1 h-1 rounded-full bg-gray-400"></p>
                    <p className="w-1 h-1 rounded-full bg-gray-400"></p>
                </div>
			</DropdownMenu.Trigger>

			<DropdownMenu.Portal>
				<DropdownMenu.Content className="bg-white shadow-md absolute right-2 p-2 rounded-md top-2 w-[200px] text-sm">
					
                    <DropdownMenu.Item className="border-none outline-none py-1">
						<div className="">
                            <a href={'/'}>Place Order</a>
                        </div>
					</DropdownMenu.Item>
					
                    <DropdownMenu.Item className="border-none outline-none py-1">
						<div className="">
                            <a to={'/'}>Supplier Profile</a> 
                        </div>
					</DropdownMenu.Item>
					
                    <DropdownMenu.Item className="border-none outline-none py-1">
						<div className="">
                            <a to={'/'}>Compliance verification</a>
                        </div>
					</DropdownMenu.Item>
					
                    <DropdownMenu.Item className="border-none outline-none py-1">
						<div className="">
                            <a to={'/'}>Contract management</a>
                        </div>
					</DropdownMenu.Item>

                    <DropdownMenu.Item className="border-none outline-none py-1">
						<div className="text-red-700">
                            <button onClick={handleDelete}>Delete</button>
                        </div>
					</DropdownMenu.Item>

				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>

  )
}
