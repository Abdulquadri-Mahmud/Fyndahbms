import React, { useState } from "react";
import { addDays, format, startOfWeek, isSameDay } from "date-fns";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import DatePicker from "react-datepicker";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@radix-ui/react-select";
import { IoIosArrowDown, IoMdSearch } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";

const otherGuest = [
  { name: 'David Jhon',},
  { name: 'David Jhon2',},
  { name: 'David Jhon3',}
];
const assignStaff = [
  { name: 'Godwin David',},
  { name: 'Godwin David2',},
  { name: 'Godwin David3',}
];

const StaffReviews = () => {
  const [currentWeekStart, setCurrentWeekStart] = useState(startOfWeek(new Date()));

  // Modal state
  // const [currentWeekStart, setCurrentWeekStart] = useState(startOfWeek(new Date()));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [newEventTitle, setNewEventTitle] = useState("");
  const [newEventGuest, setNewEventGuest] = useState("");
  const [newEventStaff, setNewEventStaff] = useState("");
  const [newEventEmail, setNewEventEmail] = useState("");
  const [newEventTime, setNewEventTime] = useState("");
  const [newEventMinute, setNewEventMinute] = useState("");
  const [newEventStartDate, setNewEventStartDate] = useState(new Date());
  const [newEventStartTime, setNewEventStartTime] = useState(new Date());
  const [newEventEndDate, setNewEventEndDate] = useState(new Date());
  const [newEventEndTime, setNewEventEndTime] = useState(new Date());

  // Search state
  const [searchQuery, setSearchQuery] = useState("");

  // Staff events state
  const [staffEvents, setStaffEvents] = useState([
    {
      id: 1,
      name: "Godwin Jacob",
      title: "Web Designer",
      events: [
        { start: new Date(), end: new Date(),date: "2024-12-12", guest: '', assign: '',title: "Meeting with Client", startTime: "10:00", endTime: "11:00" },
        { start: new Date(), end: new Date(),date: "2024-12-14",guest: '', assign: '', title: "Code Review", startTime: "14:00", endTime: "15:00" },
      ],
    },
    {
      id: 2,
      name: "David Gabriel",
      title: "Web Developer",
      events: [
        { start: new Date(), end: new Date(),date: "2024-12-11",guest: '', assign: '', title: "Design Presentation", startTime: "09:00", endTime: "10:00" },
        { start: new Date(), end: new Date(),date: "2024-12-13",guest: '', assign: '', title: "New Project Launch", startTime: "11:00", endTime: "12:00" },
      ],
    },
  ]);

  // Navigate to previous and next weeks
  const prevWeek = () => setCurrentWeekStart((prev) => addDays(prev, -5));
  const nextWeek = () => setCurrentWeekStart((prev) => addDays(prev, 5));

  // Get the days of the current week
  const getDaysOfWeek = () => Array.from({ length: 5 }).map((_, i) => addDays(currentWeekStart, i));
  const daysOfWeek = getDaysOfWeek();

  // Open modal for adding a new event
  const openModal = (date, staff) => {
    setSelectedDate(date);
    setSelectedStaff(staff);
    setNewEventStartDate(date);
    setNewEventEndDate(date);
    setIsModalOpen(true);
  };

  // Open view event modal
  const openViewModal = (event) => {
    setEventToView(event);
    setIsViewModalOpen(true);
  };

  // Close modals
  const closeModal = () => {
    setIsModalOpen(false);
    setNewEventTitle("");
    setNewEventGuest('');
    setNewEventStaff('');
    setNewEventEmail('');
    setNewEventTime('');
    setNewEventMinute('');
  };

  const closeViewModal = () => {
    setIsViewModalOpen(false);
  };

  const createStaffEvent = () => {
    // Open the modal with no pre-selected date or staff
    setSelectedDate(new Date()); // Default to today for convenience
    setSelectedStaff(null); // No specific staff selected
    setNewEventStartDate(new Date()); // Default to today
    setNewEventEndDate(new Date()); // Default to today
    setIsModalOpen(true); // Open the modal
  };
  
  //Add Event Logic
  const addEvent = () => {
    if (!newEventTitle.trim()) {
      alert("Please provide a title for the event.");
      return;
    }
  
    const newEvent = {
      date: format(newEventStartDate, "yyyy-MM-dd"),
      title: newEventTitle,
      guest: newEventGuest,
      assign: newEventStaff,
      email: newEventEmail,
      time: newEventTime,
      minute: newEventMinute,
      startTime: format(newEventStartTime, "HH:mm"),
      endTime: format(newEventEndTime, "HH:mm"),
    };
  
    // Add the event to a specific staff or create a new entry if no staff is selected
    if (selectedStaff) {
      setStaffEvents((prevEvents) =>
        prevEvents.map((staff) => {
          if (staff.id === selectedStaff.id) {
            return {
              ...staff,
              events: [...staff.events, newEvent],
            };
          }
          return staff;
        })
      );
    } else {
      // If no specific staff is selected, add the event to a default staff or create a new entry
      setStaffEvents((prevEvents) => [
        ...prevEvents,
        {
          id: prevEvents.length + 1,
          name: newEventStaff, // Default name for unassigned staff
          title: "N/A",
          events: [newEvent],
        },
      ]);
    }
  
    closeModal(); // Close the modal after adding the event
  };
  

  // Filter staff events based on search query
  const filteredStaffEvents = staffEvents.map(staff => ({
    ...staff,
    events: staff.events.filter(event => 
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      staff.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }));

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const notification = () => {

  }

  return (
    <div className="p-4">
      <h1 className='text-2xl font-medium'>Scheduling</h1>
      <div className="nav mt-6 w-full rounded-md bg-white py-3 font-medium px-3 flex items-center gap-4">
          <Link to={'/scheduling'} className='pl-3 text-red-500'>Calendar Booking</Link>
          <Link to={'/checkin'} className='hover:text-red-500'>Check-in</Link>
      </div>
      <div className="flex justify-between items-center my-4">
        <h1 className="text-2xl font-semibold text-gray-800">Calendar Booking</h1>
        <Button onClick={createStaffEvent} className="bg-blue-900 hover:bg-indigo-700">
          Schedule event
        </Button>
      </div>
      <div className="p-4 rounded-md bg-white">
        {/* Search Input */}
        <div className="flex justify-between gap-2 flex-wrap items-center border-b ">
            <p className="text-xl font-semibold">{format(currentWeekStart, "MMMM yyyy")}</p>
            <div className="flex gap-3 ">
                <input type="text" placeholder="Search events..." className="w-[200px] p-2 border rounded mb-4" value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}/>
              {/* dropdown menu */}
              <div className='relative'>
                  <button type="button" className="text-black font-medium border p-2 rounded-md" onClick={toggleDropdown}>
                    Calendar view
                  </button>

                  {isOpen && (
                    <div className="absolute md:right-0 font-medium z-10 w-48 bg-white rounded-md shadow-lg">
                      <div className="py-1">
                        <Link to="/scheduling" className="block px-4 py-2">
                          Calendar view
                        </Link>
                        <Link to="/staff-reviews" className="block px-4 py-2">
                          Staff view
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
            </div>
        </div>
        <div className="flex justify-between items-center mb- pt-4">
            <button className="px-4 py-2 bg-blue-900 font-medium text-white rounded hover:bg-blue-800" onClick={prevWeek}>
                Previous Week
            </button>
            <button className="px-4 py-2 bg-blue-900 font-medium text-white rounded hover:bg-blue-800" onClick={nextWeek}>
                Next Week
            </button>
        </div>

        <div className="overflow-x-scroll">
            <table className="border-collapse w-full bg-white rounded-md">
                <thead>
                <tr className="border-b">
                    <th className="border-collapse p-2 font-medium text-start">Staff Name</th>
                    {daysOfWeek.map((day, index) => (
                    <th key={index} className="text-start border-collapse p-4">
                        <div className="flex items-center gap-1">
                        <p className="font-medium">{format(day, "EEE")}</p>
                        <p className="font-medium">{format(day, "d")}</p>
                        </div>
                    </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                    {filteredStaffEvents.map((staff) => (
                        <tr key={staff.id}>
                        <td className="border-collapse border-b text-sm border-gray-200 w-[20%] p-2">
                            <p className="font-medium">{staff.name}</p>
                            <p className="text-slate-400">{staff.title}</p>
                        </td>
                        {daysOfWeek.map((day, index) => {
                            const event = staff.events.find((e) => isSameDay(new Date(e.date), day));

                            return (
                            <td key={index} className="border-collapse  border-b text-sm border-gray-200 p-4 text-start">
                                {event ? (
                                <div className="w-[140px] h-[90px] border-green-300 border-2 border-dotted rounded-md bg-green-50 p-2 relative inline-block group">
                                    {/* Tooltip */}
                                    <div className="absolute bottom-full mb-2 w-max p-2 bg-gray-700 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {event.title} <br />
                                        {event.startTime} - {event.endTime}
                                    </div>
                                    <div className="font-medium cursor-pointer" onClick={() => openViewModal(event)}>
                                        <p className="text-gray-400 text-sm pb-1">{event.startTime} - {event.endTime}</p>
                                        <p className="text-[16px]">{event.title}</p>
                                    </div>
                                </div>
                                ) : (
                                    <div className="w-[100px]">
                                        <button className="font-medium text-xl border-2 border-dotted border-gray-500 flex justify-center items-center h-[60px] w-[45px] rounded-md" onClick={() => openModal(day, staff)}>
                                            +
                                        </button>
                                    </div>
                                )}
                            </td>
                            );
                        })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>

      {/* React Portal for Add Event Modal */}
      {isModalOpen &&
        ReactDOM.createPortal(
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white relative p-4 py-4 rounded-md shadow-lg w-96">
              <h2 className="text-lg font-semibold mb-4">Add Event</h2>
              {/* DatePicker for Start Date & Time */}
              <label className="block font-medium mb-2">Time</label>
              
              <div className="flex gap-2">
                <div className="flex gap-2">
                  <DatePicker
                    selected={newEventStartDate}
                    onChange={(date) => setNewEventStartDate(date)}
                    dateFormat="MMMM d"
                    className="border rounded-lg px-2 text-sm font-medium py-2 outline-none w-full"
                        calendarClassName="bg-white absolute left-0 border border-gray-300 rounded-lg shadow-lg p-4"
                        dayClassName={(date) =>
                          "text-center p-2 rounded-full hover:bg-indigo-100 transition ease-in-out"
                        }
                        popperClassName="shadow-lg border border-gray-200 rounded-lg"
                  />
                    <DatePicker
                      selected={newEventStartTime}
                      onChange={(date) => setNewEventStartTime(date)}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={15}
                      timeCaption="Time"
                      dateFormat="h:mm aa"
                      className="border rounded-lg px-2 text-sm font-medium py-2 outline-none w-[70px]"
                          calendarClassName="bg-white absolute left-0 border border-gray-300 rounded-lg shadow-lg p-4"
                          dayClassName={(date) =>
                            "text-center p-2 rounded-full hover:bg-indigo-100 transition ease-in-out"
                          }
                          popperClassName="shadow-lg border border-gray-200 rounded-lg"/>
                    
                </div>

                {/* DatePicker for Start Time */}
                  <div className="flex gap-2">
                      <DatePicker
                        selected={newEventEndDate}
                        onChange={(date) => setNewEventEndDate(date)}
                        dateFormat="MMMM d"
                        className="border rounded-lg px-2 text-sm font-medium py-2 outline-none w-full"
                            calendarClassName="bg-white absolute right-0 border border-gray-300 rounded-lg shadow-lg p-4"
                            dayClassName={(date) =>
                              "text-center p-2 rounded-full hover:bg-indigo-100 transition ease-in-out"
                            }
                            popperClassName="shadow-lg border border-gray-200 rounded-lg"
                      />
                    <DatePicker
                    selected={newEventEndTime}
                    onChange={(date) => setNewEventEndTime(date)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                    className="border rounded-lg px-2 text-sm font-medium py-2 outline-none w-[70px]"
                        calendarClassName="bg-white absolute right-0 border border-gray-300 rounded-lg shadow-lg p-4"
                        dayClassName={(date) =>
                          "text-center p-2 rounded-full hover:bg-indigo-100 transition ease-in-out"
                        }
                        popperClassName="shadow-lg border border-gray-200 rounded-lg"
                  />
                  </div>
              </div>

              <div className='relative mt-4'>
                <label className="block font-medium mb-1">Assign</label>
                <Select value={newEventStaff}
                  onValueChange={(value) => setNewEventStaff(value)}>
                  <SelectTrigger className="relative text-start pl-9 font-medium w-full border h-[40px] text-black border-gray-300 rounded-md py-2 px-4 shadow-sm">
                    {/* Show selected value or placeholder */}
                    <SelectValue>{newEventStaff || "Select a guest"}</SelectValue>
                    <IoMdSearch className="absolute top-2.5 left-2 text-gray-500 text-xl" />
                    <IoIosArrowDown className="absolute top-2.5 right-2 text-gray-500 text-xl" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-200 z-10 rounded-md shadow-lg max-h-56 overflow-auto">
                    {assignStaff.map((staff) => (
                      <SelectItem
                        key={staff.name}
                        value={staff.name}
                        className="p-2 font-normal text-sm hover:bg-indigo-100 cursor-pointer rounded-md"
                      >
                        {staff.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
            </div>
            <div className="mt-4">
              <h2 className="font-medium text-sm">Notification</h2>
              <div className="flex gap-2 mt-2 items-center">
                  {/* nottification */}
                  <select value={newEventEmail} onChange={(e) => setNewEventEmail(e.target.value)} className='w-[90px] outline-none font-medium text-sm px-3 py-2 border rounded-md'>
                      <option value="email">Email</option>
                  </select>
                  <input value={newEventTime} onChange={(e) => setNewEventTime(e.target.value)} type="text" className='w-[40px] text-center outline-none border rounded-md py-2'/>
                  <select value={newEventMinute} onChange={(e) => setNewEventMinute(e.target.value)} className='w-[100px] outline-none font-medium text-sm px-3 py-2 border rounded-md'>
                      <option value="minutes">Minutes</option>
                  </select>
                  <p onClick={notification} className="text-blue-900 font-medium text-sm pl-3">Add notification</p>
              </div>
            </div>

              <div className='relative mt-4'>
                <label className="block font-medium mb-1">Other guest</label>
                <Select value={newEventGuest}
                  onValueChange={(value) => setNewEventGuest(value)}>
                  <SelectTrigger className="relative text-start pl-9 font-medium w-full border h-[40px] text-black border-gray-300 rounded-md py-2 px-4 shadow-sm">
                    {/* Show selected value or placeholder */}
                    <SelectValue>{newEventGuest || "Select a guest"}</SelectValue>
                    <IoMdSearch className="absolute top-2.5 left-2 text-gray-500 text-xl" />
                    <IoIosArrowDown className="absolute top-2.5 right-2 text-gray-500 text-xl" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-200 rounded-md shadow-lg max-h-56 overflow-auto">
                    {otherGuest.map((guest) => (
                      <SelectItem
                        key={guest.name}
                        value={guest.name}
                        className="p-2 font-normal text-sm hover:bg-indigo-100 cursor-pointer rounded-md"
                      >
                        {guest.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
            </div>

              <div className="mt-4">
                <p className="font-medium">Purpose</p>
                <textarea type="text" placeholder="Purpose" className="font-medium outline-none h-[80px] w-full p-2 border rounded mb-4"
                  value={newEventTitle} onChange={(e) => setNewEventTitle(e.target.value)}/>
              </div>

              <div className="flex justify-end gap-2">
                <button className="px-6 py-2 bg-blue-900 text-white rounded hover:bg-blue-800" onClick={addEvent}>Create event</button>
              </div>
              <button className="absolute top-3 right-3 text-gray-500 text-xl" onClick={closeModal}><MdOutlineCancel /></button>
            </div>
          </div>,
          document.body
        )}

      {/* React Portal for View Event Modal */}
      {isViewModalOpen &&
        ReactDOM.createPortal(
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-md shadow-lg w-96">
              <h2 className="text-lg font-semibold mb-4">View Event</h2>
              <p className="mb-2">
                <strong>Date:</strong> {format(new Date(eventToView.date), "PPP")}
              </p>
              <p className="mb-2">
                <strong>Title:</strong> {eventToView.title}
              </p>
              <p className="mb-2">
                <strong>Time:</strong> {eventToView.startTime} - {eventToView.endTime}
              </p>
              <div className="flex justify-end gap-2">
                <button
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                  onClick={closeViewModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default StaffReviews;
