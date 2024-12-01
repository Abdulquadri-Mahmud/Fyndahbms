import React, { useState } from "react";
import { addDays, format, startOfWeek, isSameDay } from "date-fns";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const StaffReviews = () => {
  const [currentWeekStart, setCurrentWeekStart] = useState(startOfWeek(new Date()));

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false); // Add Event modal
  const [isViewModalOpen, setIsViewModalOpen] = useState(false); // View Event modal
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [newEventTitle, setNewEventTitle] = useState("");
  const [newEventStartTime, setNewEventStartTime] = useState("09:00"); // Default start time
  const [newEventEndTime, setNewEventEndTime] = useState("10:00"); // Default end time
  const [eventToView, setEventToView] = useState(null);

  // Search state
  const [searchQuery, setSearchQuery] = useState("");

  // Staff events state
  const [staffEvents, setStaffEvents] = useState([
    {
      id: 1,
      name: "Godwin Jacob",
      title: "Web Designer",
      events: [
        { date: "2024-12-12", title: "Meeting with Client", startTime: "10:00", endTime: "11:00" },
        { date: "2024-12-14", title: "Code Review", startTime: "14:00", endTime: "15:00" },
      ],
    },
    {
      id: 2,
      name: "David Gabriel",
      title: "Web Developer",
      events: [
        { date: "2024-12-11", title: "Design Presentation", startTime: "09:00", endTime: "10:00" },
        { date: "2024-12-13", title: "New Project Launch", startTime: "11:00", endTime: "12:00" },
      ],
    },
  ]);

  // Navigate to previous and next weeks
  const prevWeek = () => setCurrentWeekStart((prev) => addDays(prev, -5));
  const nextWeek = () => setCurrentWeekStart((prev) => addDays(prev, 5));

  // Get the days of the current week
  const getDaysOfWeek = () => Array.from({ length: 5 }).map((_, i) => addDays(currentWeekStart, i));
  const daysOfWeek = getDaysOfWeek();

  const handleSelectSlot = ({ start }) => {
    // setSelectedEvent(null);
    setNewEvent({
      title: '',
      guest: '',
      email: '',
      time: '30',
      minute: '',
      start,
      end: new Date(start.getTime() + 60 * 60 * 1000),
      category: 'Other'
    });
    setShowModal(true);
  };
  
  // Open modal for adding a new event
  const openModal = (date, staff) => {
    setSelectedDate(date);
    setSelectedStaff(staff);
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
    setNewEventStartTime("09:00");
    setNewEventEndTime("10:00");
  };

  const closeViewModal = () => {
    setIsViewModalOpen(false);
  };

  // Add a new event
  const addEvent = () => {
    if (!newEventTitle.trim()) return;

    setStaffEvents((prevEvents) =>
      prevEvents.map((staff) => {
        if (staff.id === selectedStaff.id) {
          return {
            ...staff,
            events: [
              ...staff.events,
              { 
                date: format(selectedDate, "yyyy-MM-dd"), 
                title: newEventTitle, 
                startTime: newEventStartTime, 
                endTime: newEventEndTime 
              },
            ],
          };
        }
        return staff;
      })
    );

    closeModal();
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

  return (
    <div className="p-4">
      <h1 className='text-2xl font-medium'>Scheduling</h1>
      <div className="nav mt-6 w-full rounded-md bg-white py-3 font-medium px-3 flex items-center gap-4">
          <Link to={'/scheduling'} className='pl-3 text-red-500'>Calendar Booking</Link>
          <Link to={'/checkin'} className='hover:text-red-500'>Check-in</Link>
      </div>
      <div className="flex justify-between items-center my-4">
        <h1 className="text-2xl font-semibold text-gray-800">Calendar Booking</h1>
        <Button onClick={() => handleSelectSlot({ start: new Date() })} className="bg-blue-900 hover:bg-indigo-700">
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
            <div className="bg-white p-6 rounded-md shadow-lg w-96">
              <h2 className="text-lg font-semibold mb-4">Add Event</h2>
              <p className="mb-2">
                <strong>Date:</strong> {format(selectedDate, "PPP")}
              </p>
              <p className="mb-4">
                <strong>Staff:</strong> {selectedStaff.name}
              </p>
              <input type="text" placeholder="Event Title" className="w-full p-2 border rounded mb-4"
                value={newEventTitle} onChange={(e) => setNewEventTitle(e.target.value)}/>
              <div className="flex gap-4 mb-4">
                <input type="time" className="w-full p-2 border rounded"
                  value={newEventStartTime} onChange={(e) => setNewEventStartTime(e.target.value)}/>
                <input type="time" className="w-full p-2 border rounded"
                  value={newEventEndTime} onChange={(e) => setNewEventEndTime(e.target.value)}/>
              </div>
              <div className="flex justify-end gap-2">
                <button className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                  onClick={closeModal}>
                  Cancel
                </button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  onClick={addEvent}>
                  Add
                </button>
              </div>
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
