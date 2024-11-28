import React, { useState, useEffect } from 'react';
import { Calendar, dateFnsLocalizer, Views } from 'react-big-calendar';
import DatePicker from 'react-datepicker';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import { format, parse, startOfWeek, getDay, addMonths, isAfter } from 'date-fns';
import { Bell, Filter, Search, ChevronDown, X, Clock, MapPin, Users } from 'lucide-react';
// import { Alert, AlertPurpose } from './Alert';
import 'react-big-calendar/lib/css/react-big-calendar.css';
// Add drag and drop functionality
const DragAndDropCalendar = withDragAndDrop(Calendar);

import { enUS } from 'date-fns/locale';

// Required CSS imports for react-big-calendar and react-datepicker
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-datepicker/dist/react-datepicker.css';
import { Alert, AlertDescription } from '@/pages/be_front_office/scheduling_appointment/alert-components';
import { IoMdSearch } from 'react-icons/io';

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

// Event categories with their respective colors
const EVENT_CATEGORIES = {
  meeting: { label: 'Meeting', color: '#22C55E' },
  development: { label: 'Development', color: '#F97316' },
  planning: { label: 'Planning', color: '#3B82F6' },
  deadline: { label: 'Deadline', color: '#EF4444' },
  other: { label: 'Other', color: '#A855F7' },
};

// // Recurring event patterns
// const RECURRENCE_PATTERNS = [
//   { value: 'none', label: 'None' },
//   { value: 'daily', label: 'Daily' },
//   { value: 'weekly', label: 'Weekly' },
//   { value: 'monthly', label: 'Monthly' },
// ];

const AdvancedCalendar = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: '',
    other: '',
    start: new Date(),
    end: new Date(),
    Purpose: '',
    recurrence: 'none',
    recurrenceEnd: addMonths(new Date(), 1),
  });
  
  const [showNewEventModal, setShowNewEventModal] = useState(false);
  const [showEventDetailsModal, setShowEventDetailsModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [view, setView] = useState('month');
  const [date, setDate] = useState(new Date());
  const [filters, setFilters] = useState({
    categories: Object.keys(EVENT_CATEGORIES),
    search: '',
  });

  const [notification, setNotification] = useState(null);

  // Initialize with sample events
  useEffect(() => {
    const sampleEvents = [
      {
        id: 1,
        title: '',
        other: '',
        start: new Date(2024, 11),
        end: new Date(2024, 11, 1, 11, 30),
        Purpose: 'Monthly team planning session',
      },
    ];
    setEvents(sampleEvents);
  }, []);

  // Event handlers
  const handleDragEvent = ({ event, start, end }) => {
    const updatedEvents = events.map(e => 
      e.id === event.id ? { ...e, start, end } : e
    );
    setEvents(updatedEvents);
    showNotification('Event updated successfully');
  };

  const handleResizeEvent = ({ event, start, end }) => {
    const updatedEvents = events.map(e => 
      e.id === event.id ? { ...e, start, end } : e
    );
    setEvents(updatedEvents);
    showNotification('Event duration updated');
  };

  const handleSelectSlot = ({ start, end }) => {
    setNewEvent(prev => ({ ...prev, start, end }));
    setShowNewEventModal(true);
  };

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setShowEventDetailsModal(true);
  };

  const handleAddEvent = () => {
    const eventToAdd = {
      id: Date.now(),
      ...newEvent,
    };

    // Handle recurring events
    if (newEvent.recurrence !== 'none') {
      const recurringEvents = generateRecurringEvents(eventToAdd);
      setEvents(prev => [...prev, ...recurringEvents]);
    } else {
      setEvents(prev => [...prev, eventToAdd]);
    }

    setShowNewEventModal(false);
    resetNewEvent();
    showNotification('Event added successfully');
  };

  const handleDeleteEvent = (eventId) => {
    setEvents(prev => prev.filter(e => e.id !== eventId));
    setShowEventDetailsModal(false);
    showNotification('Event deleted successfully');
  };

  const generateRecurringEvents = (baseEvent) => {
    const events = [];
    let currentDate = baseEvent.start;
    const endRecurrence = baseEvent.recurrenceEnd;

    while (isAfter(endRecurrence, currentDate)) {
      events.push({
        ...baseEvent,
        id: Date.now() + events.length,
        start: new Date(currentDate),
        end: new Date(currentDate.getTime() + (baseEvent.end - baseEvent.start)),
      });

      switch (baseEvent.recurrence) {
        case 'daily':
          currentDate = addDays(currentDate, 1);
          break;
        case 'weekly':
          currentDate = addWeeks(currentDate, 1);
          break;
        case 'monthly':
          currentDate = addMonths(currentDate, 1);
          break;
        default:
          break;
      }
    }

    return events;
  };

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  const resetNewEvent = () => {
    setNewEvent({
      title: '',
      start: new Date(),
      end: new Date(),
      category: 'meeting',
      assgin: '',
      Purpose: '',
      attendees: '',
      recurrence: 'none',
      recurrenceEnd: addMonths(new Date(), 1),
    });
  };

  // Custom event styling
  const eventStyleGetter = (event) => ({
    style: {
      backgroundColor: EVENT_CATEGORIES[event.category].color,
      borderRadius: '4px',
      opacity: 0.8,
      color: 'white',
      border: '0px',
      display: 'block',
    },
  });

  // Filter events based on search and categories
  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(filters.search.toLowerCase()) ||
    event.Purpose.toLowerCase().includes(filters.search.toLowerCase());
    
    const matchesCategory = filters.categories.includes(event.category);
    return matchesSearch && matchesCategory;
  });

    const today = new Date();
    const formattedDate = new Intl.DateTimeFormat("en-US", {
        month: "long",
        year: "numeric",
    }).format(today);

    const [calendarView, setCalandarView] = useState(true);
    const [staffView, setStaffView] = useState(false);

    const options = [
        { value: 'Option 1', label: 'Calendar View' },
        { value: 'Option 2', label: 'Staff View' },
    ];

    // State to track the selected value
    const [selectedValue, setSelectedValue] = useState('');
    const [valueExists, setValueExists] = useState(false);

    // Check if the value exists in the options
    const checkValueExists = (value) => {
        const exists = options.some((option) => option.value === value);
        setValueExists(exists); // Update state
        return exists; // Return true/false
    };
    const handleChangeView = (event) => {
        const value = event.target.value;
        setSelectedValue(value); // Update selected value
        checkValueExists(value); // Check if the value exists
    }

  return (
    <div className=" h-screen flex flex-col">
      {/* Header Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Calendar Booking</h1>
          <button
            onClick={() => setShowNewEventModal(true)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
          >
            + Schedule event
          </button>
        </div>

        {/* Filters and Controls */}
        <div className="bg-white p-3 rounded-md mt-4 ">

            <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="">
                    <h1 className='font-medium text-xl'>{formattedDate}</h1>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                    <div className="relative">
                        <button className="px-4 py-2 border rounded-md flex items-center gap-2">
                            <Filter className="h-4 w-4" />
                            <span>Filter</span>
                            <ChevronDown className="h-4 w-4" />
                        </button>
                        {/* Category filters dropdown would go here */}
                    </div>
                    <div className="relative">
                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search events..."
                            className="pl-10 pr-4 py-2 outline-none border rounded-md w-64"
                            value={filters.search}
                            onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}/>
                    </div>
                
                    <div className="flex items-center gap-4">
                        <select
                        className="px-4 py-2 border outline-none rounded-md"
                        value={selectedValue}
                        onChange={handleChangeView}
                        >
                        {/* <option value=""></option> */}
                            {options.map(({ value, label }) => (
                            <option key={value} value={value}>
                                {label}
                            </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex items-center gap-4">
                        <select
                        className="px-4 py-2  outline-none border rounded-md"
                        value={view}
                        onChange={handleChangeView}
                        >
                        <option value="month">Month</option>
                        <option value="week">Week</option>
                        <option value="day">Day</option>
                        <option value="agenda">Agenda</option>
                        </select>
                    </div>
                </div>
            </div>
            {selectedValue === 'Option 1' && (
                <>
                    {/* Calendar Component */}
                    <div className="h-[90vh] mt-5">
                        <DragAndDropCalendar
                        localizer={localizer}
                        events={filteredEvents}
                        startAccessor="start"
                        endAccessor="end"
                        style={{ height: '100%' }}
                        views={['month', 'week', 'day', 'agenda']}
                        step={30}
                        showMultiDayTimes
                        defaultDate={date}
                        onNavigate={setDate}
                        onView={setView}
                        eventPropGetter={eventStyleGetter}
                        onEventDrop={handleDragEvent}
                        onEventResize={handleResizeEvent}
                        onSelectSlot={handleSelectSlot}
                        onSelectEvent={handleSelectEvent}
                        selectable
                        resizable
                        />
                    </div>
                </>
            )}
        </div>
      </div>

      {/* New Event Modal */}
      {showNewEventModal && (
        <div className=" fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="dialog bg-white p-6 rounded-lg w-[480px] max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Schedule New Event</h2>
              <button
                onClick={() => setShowNewEventModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4">
                <h2 className="font-medium mb-3">Time</h2>
                    <div className="flex items-center gap-2">
                        <div className='flex gap-2'>
                            <DatePicker selected={newEvent.start} onChange={(date) => setNewEvent({...newEvent, start: date})}
                            // showTimeSelect
                            dateFormat="MMMM d" // dateFormat="MMMM d, yyyy h:mm aa" 
                            className="w-full px-3 font-medium text-sm py-2 border rounded-md"/>
                            <DatePicker selected={newEvent.start} onChange={(date) => setNewEvent({...newEvent, start: date})}
                            showTimeSelect dateFormat="h:mm aa" 
                            className="w-[80px] px-3 font-medium text-sm py-2 border rounded-md"/>
                        </div>
                        <p className="">to</p>
                        <div  className='flex gap-2'>
                            <DatePicker selected={newEvent.end}
                                onChange={(date) => setNewEvent({...newEvent, end: date})}
                                // showTimeSelect
                                dateFormat="MMMM d" className="w-full text-sm font-medium px-3 py-2 border rounded-md"/>
                            <DatePicker selected={newEvent.end} onChange={(date) => setNewEvent({...newEvent, end: date})}
                                showTimeSelect dateFormat="h:mm aa" 
                                className="w-[80px] font-medium text-sm px-3 py-2 border rounded-md"/>
                        </div>
                    </div>
                    <div className="flex justify-end w-full mt-4">
                        <button className="border border-blue-900 text-blue-900 rounded-md py-2 px-4">Confirm date</button>
                    </div>

                    <div className='relative'>
                        <label className="block text-sm font-medium mb-1">Assign</label>
                        <select className="w-full px-3 py-2 border rounded-md pl-6"
                            value={newEvent.title}
                            onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}>
                            {Object.entries(EVENT_CATEGORIES).map(([value, { label }]) => (
                                <option key={value} value={value}>{label}</option>
                            ))}
                        </select>
                        <IoMdSearch className='absolute top-9 left-2 text-gray-500 text-xl'/>
                    </div>
                    
                    <div className="mt-4">
                        <h2 className="font-medium text-gray-500">Notification</h2>
                        <div className="flex gap-2 mt-2 items-center">
                            {/* nottification */}
                            <select className='w-[90px] outline-none font-medium text-sm px-3 py-2 border rounded-md'>
                                <option value="email">Email</option>
                            </select>
                            <input type="text" className='w-[50px] outline-none border rounded-md py-2'/>
                            <select className='w-[100px] outline-none font-medium text-sm px-3 py-2 border rounded-md'>
                                <option value="minutes">Minutes</option>
                            </select>
                            <p className="text-blue-900 font-medium pl-3">Add notification</p>
                        </div>
                    </div>

                    <div className='relative'>
                        <label className="block text-sm font-medium mb-1">Other guests</label>
                        <select className="w-full px-3 py-2 border rounded-md pl-6"
                            value={newEvent.other}
                            onChange={(e) => setNewEvent({...newEvent, other: e.target.value})}>
                            {Object.entries(EVENT_CATEGORIES).map(([value, { label }]) => (
                                <option key={value} value={value}>{label}</option>
                            ))}
                        </select>
                        <IoMdSearch className='absolute top-9 left-2 text-gray-500 text-xl'/>
                    </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Purpose</label>
                    <textarea
                    className="w-full px-3 py-2 border rounded-md"
                    rows="3"
                    value={newEvent.Purpose}
                    onChange={(e) => setNewEvent({...newEvent, Purpose: e.target.value})}
                    placeholder="Add Purpose"
                    />
                </div>
                <div className="">
                    <h3 className="font-medium">Created by</h3>
                    <div className="flex items-center gap-2 mt-3">
                        <div className="w-[45px] h-[45px] bg-slate-200 rounded-full flex items-center">
                            <img src="/avatar.png" alt="" className='object-fill'/>
                        </div>
                        <p className="font-medium">Godwin David</p>
                    </div>
                </div>


                <div className="flex justify-end gap-2 mt-6">
                    <button
                        onClick={handleAddEvent}
                        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                            Add Event
                    </button>
                </div>
            </div>
          </div>
        </div>
      )}

      
      {/* Event Details Modal */}
      {showEventDetailsModal && selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-[480px]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Event Details</h2>
              <button
                onClick={() => setShowEventDetailsModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">{selectedEvent.title}</h3>
                <div className="flex items-center gap-2 text-gray-600 mt-1">
                  <Clock className="h-4 w-4" />
                  <span>
                    {format(selectedEvent.start, 'MMM d, yyyy h:mm a')} - 
                    {format(selectedEvent.end, 'h:mm a')}
                  </span>
                </div>
              </div>

              {selectedEvent.other && (
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-gray-400 mt-1" />
                  <span>{selectedEvent.other}</span>
                </div>
              )}

              {selectedEvent.Purpose && (
                <div className="border-t pt-4">
                  <h4 className="font-medium mb-2">Purpose</h4>
                  <p className="text-gray-600">{selectedEvent.Purpose}</p>
                </div>
              )}

              <div className="flex justify-end gap-2 mt-6 pt-4 border-t">
                <button
                  onClick={() => handleDeleteEvent(selectedEvent.id)}
                  className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-md"
                >
                  Delete Event
                </button>
                <button
                  onClick={() => setShowEventDetailsModal(false)}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Notification */}
      {notification && (
        <div className="fixed bottom-4 right-4 z-50">
          <Alert>
            <AlertDescription>{notification}</AlertDescription>
          </Alert>
        </div>
      )}
    </div>
  );
};

export default AdvancedCalendar;