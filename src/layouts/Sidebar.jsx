// "use client"

// import * as React from "react"
// import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline"

// const menuItems = [
//   { title: "Dashboard", url: "#" },
//   { title: "Users", url: "#" },
//   { title: "Inventory", url: "#", expandable: true },
//   { title: "Finance", url: "#", expandable: true },
//   { title: "HR Management", url: "#", expandable: true },
//   { title: "CRM", url: "#", expandable: true },
//   { title: "Documentation", url: "#", expandable: true },
//   { title: "Sales & Marketing", url: "#" },
//   { title: "Supplier & Vendor", url: "#", expandable: true },
//   { title: "Front Office", url: "#", expandable: true },
//   { title: "Project Management", url: "#", expandable: true },
//   { title: "BI & Analytics", url: "#", expandable: true },
//   { title: "Facility Management", url: "#", expandable: true },
//   { title: "Production", url: "#", expandable: true },
//   { title: "Access & Security", url: "#", expandable: true },
//   { title: "Collaboration", url: "#", expandable: true },
//   { title: "Virtual Workspace", url: "#", expandable: true },
//   { title: "Compliance & Risk", url: "#", expandable: true },
//   { title: "Warehouse", url: "#", expandable: true },
//   { title: "Customer Service", url: "#", expandable: true },
//   { title: "Tax Management", url: "#", expandable: true },
//   { title: "Supply Chain", url: "#", expandable: true },
// ]

// export default function Sidebar() {
//   const [openItems, setOpenItems] = React.useState([])

//   const toggleItem = (title) => {
//     setOpenItems((prev) =>
//       prev.includes(title) ? prev.filter((item) => item !== title) : [...prev, title]
//     )
//   }

//   return (
//     <div className="w-64 bg-blue-900 text-white p-4">
//       <ul>
//         {menuItems.map((item) => (
//           <li key={item.title} className="flex items-center justify-between py-2">
//             <a href={item.url} className="flex items-center gap-2">
//               <span>{item.title}</span>
//             </a>
//             {item.expandable && (
//               <button onClick={() => toggleItem(item.title)}>
//                 {openItems.includes(item.title) ? (
//                   <ChevronDownIcon className="w-5 h-5" />
//                 ) : (
//                   <ChevronRightIcon className="w-5 h-5" />
//                 )}
//               </button>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

"use client";

import * as React from "react";

import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const menuItems = [
  { title: "Dashboard", url: "#" },
  { title: "Users", url: "#" },
  { title: "Inventory", url: "#", expandable: true },
  { title: "Finance", url: "#", expandable: true },
  { title: "HR Management", url: "#", expandable: true },
  { title: "CRM", url: "#", expandable: true },
  { title: "Documentation", url: "#", expandable: true },
  { title: "Sales & Marketing", url: "#" },
  { title: "Supplier & Vendor", url: "#", expandable: true },
  { title: "Front Office", url: "#", expandable: true },
  { title: "Project Management", url: "#", expandable: true },
  { title: "BI & Analytics", url: "#", expandable: true },
  { title: "Facility Management", url: "#", expandable: true },
  { title: "Production", url: "#", expandable: true },
  { title: "Access & Security", url: "#", expandable: true },
  { title: "Collaboration", url: "#", expandable: true },
  { title: "Virtual Workspace", url: "#", expandable: true },
  { title: "Compliance & Risk", url: "#", expandable: true },
  { title: "Warehouse", url: "#", expandable: true },
  { title: "Customer Service", url: "#", expandable: true },
  { title: "Tax Management", url: "#", expandable: true },
  { title: "Supply Chain", url: "#", expandable: true },
];

export default function Sidebar() {
  const [openItems, setOpenItems] = React.useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  const toggleItem = (title) => {
    setOpenItems((prev) =>
      prev.includes(title) ? prev.filter((item) => item !== title) : [...prev, title]
    );
  };

  const toggleSidebar = () => {
    setIssuppSidebarOpen((prev) => !prev);
  };

  return (
    <div className={`flex ${isSidebarOpen ? "w-64" : "w-16"} bg-blue-900 text-white `}>
      {/* Sidebar Content */}
      <div className={`transition-all duration-300 p-4 ${isSidebarOpen ? "block" : "hidden"}`}>
        <ul>
          {menuItems.map((item) => (
            <li key={item.title} className={`relative flex items-center justify-between py-2 supplierCont ${item.title === 'Supplier & Vendor' ? 'supplierCont' : 'supplierCont'}`}>
              <Link href={item.url} className="flex items-center gap-2 hover:text-red-400 duration-150 focus:text-red-400">
                <span>{item.title}</span>
              </Link>
              {
                item.title === 'Supplier & Vendor' && (
                  <div className="supplierHover overflow-hidden absolute left-[8rem] z-10 bg-blue-900 w-[0px]">
                    <div className="flex flex-col gap-3 px-3 py-2">
                        <Link className='hover:text-red-400' to={'/procurement'}>Procurement Tracking</Link>
                        <Link className='hover:text-red-400' to={'/supplier'}>Supplier</Link>
                    </div>
                  </div>
                )
              }
              {
                item.title === 'Front Office' && (
                  <div className="officeHover overflow-hidden absolute left-[8rem] z-10 bg-blue-900 w-[0px]">
                    <div className="flex flex-col gap-3 px-3 py-2">
                        <Link className='hover:text-red-400' to={'/scheduling'}>Scheduling & appointment</Link>
                        <Link className='hover:text-red-400' to={'/inquiry-tracking'}>Inquiry tracking</Link>
                    </div>
                  </div>
                )
              }
              {item.expandable && (
                <button onClick={() => toggleItem(item.title)}>
                  {openItems.includes(item.title) ? (
                    <ChevronDownIcon className="w-5 h-5" />
                  ) : (
                    <ChevronRightIcon className="w-5 h-5" />
                  )}
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Toggle Sidebar Button */}
      <Button
        variant="link"
        onClick={toggleSidebar}
        className={cn("absolute top-28  bg-blue-800 text-white p-2 rounded-full focus:outline-none", isSidebarOpen ? "left-[234px]": "left-[42px]")}
      >
        {isSidebarOpen ? (
          <ChevronLeftIcon className="w-5 h-5" />
        ) : (
          <ChevronRightIcon className="w-5 h-5" />
        )}
      </Button>
    </div>
  );
}


