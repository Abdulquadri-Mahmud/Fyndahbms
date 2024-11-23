
import { MagnifyingGlassIcon, Cog6ToothIcon, BellIcon, ChevronDownIcon } from "@heroicons/react/24/outline"

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-gradient-to-r from-red-500 to-purple-500 text-white">
      <div className="flex items-center gap-4">
        <img src="/logo.png" alt="Logo"  width={161} height={32} />
      
        <img src="/cmlogo.png" alt="Company Logo" className="h-10 ml-[208px]" />
        <span className="text-xl font-bold">Company Name</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 rounded-md bg-transparent border border-white placeholder-white"
          />
          <MagnifyingGlassIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white w-5 h-5" />
        </div>
        <Cog6ToothIcon className="w-6 h-6" />
        <BellIcon className="w-6 h-6" />
        <div className="flex items-center gap-2">
          <img src="/avatar.png" alt="User Avatar" className="h-10 w-10 rounded-full" />
          <span>Your Name</span>
          <ChevronDownIcon className="w-5 h-5" />
        </div>
      </div>
    </header>
  )
}

