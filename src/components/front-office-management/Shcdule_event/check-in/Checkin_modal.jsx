import React from 'react'

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export default function Checkin_modal() {
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
				<DropdownMenu.Content className="bg-white shadow-md absolute right-2 p-2 rounded-md top-2 w-[150px]">
                    <DropdownMenu.Item className="border-none outline-none py-1">
						<div className="">
                            <a href={'/'}>Check-out</a>
                        </div>
					</DropdownMenu.Item>
                    <DropdownMenu.Item className="border-none outline-none py-1">
						<div className="">
                            <a to={'/'}>View details</a> 
                        </div>
					</DropdownMenu.Item>
                    <DropdownMenu.Item className="border-none outline-none py-1">
						<div className="">
                            <a to={'/'}>Edit details</a>
                        </div>
					</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
  )
}
