import React, { createContext, useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
// import { Alert, AlertDescription } from '@/components/ui/alert';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

import { enUS } from 'date-fns/locale';
import { Filter, Search } from 'lucide-react';
import { IoMdSearch } from 'react-icons/io';
import StaffCalendar from './StaffCalendar';
import { Link } from 'react-router-dom';

const locales = {
  'en-US': enUS
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const eventCategories = [
  { name: 'Godwing Jacob', color: 'bg-green-500' },
  { name: 'Godwing Jacob1', color: 'bg-orange-500' },
  { name: 'Godwing Jacob2', color: 'bg-blue-500' }
];

const otherGuest = [
  { name: 'David Jhon', color: 'bg-green-500' },
  { name: 'David Jhon2', color: 'bg-orange-500' },
  { name: 'David Jhon3', color: 'bg-blue-500' }
];

export const staffCalendarContext = createContext();

const SchedulingCalendars = () => {
  const [events, setEvents] = useState([
    {
      title: 'Meeting with Client for new project',
      start: new Date(2024, 11, 1, 10, 0),
      end: new Date(2024, 11, 1, 11, 0),
      category: 'Meeting'
    },
    {
      title: 'Product development team meeting',
      start: new Date(2024, 11, 8, 14, 0),
      end: new Date(2024, 11, 8, 15, 30),
      category: 'Product Development'
    }
  ]);

  const [showModal, setShowModal] = useState(false);

  const [selectedEvent, setSelectedEvent] = useState(null);

  const [newEvent, setNewEvent] = useState({
    title: '',
    guest: '',
    email: '',
    time: '30',
    minute: '',
    start: new Date(),
    end: new Date(),
    category: 'Other'
  });

  const [filters, setFilters] = useState({
    title: events,
    search: '',
  });

  const handleSelectSlot = ({ start }) => {
    setSelectedEvent(null);
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

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setNewEvent({
      title: event.title,
      guest: event.guest,
      email: 'Email',
      time: '30',
      minute: 'Minute',
      start: event.start,
      end: event.end,
      category: event.category
    });
    setShowModal(true);
  };

  const handleSaveEvent = () => {
    if (selectedEvent) {
      setEvents(events.map(event => 
        event === selectedEvent ? newEvent : event
      ));
    } else {
      setEvents([...events, newEvent]);
    }
    setShowModal(false);
    setSelectedEvent(null);
  };
  
  // delete event
  const handleDeleteEvent = () => {
    setEvents(events.filter(event => event !== selectedEvent));
    setShowModal(false);
    setSelectedEvent(null);
  };

  const eventStyleGetter = (event) => {
    const category = eventCategories.find(cat => cat.name === event.category);
    return {
      className: `${category?.color || 'bg-blue-500'} text-white rounded-md p-1 overflow-hidden hover:opacity-90 transition-opacity`
    };
  };

  const today = new Date();
    const formattedDate = new Intl.DateTimeFormat("en-US", {
        month: "long",
        year: "numeric",
    }).format(today);
    
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);
    
  return (
    <div className="mt-5 bg- rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold text-gray-800">Calendar Booking</h1>
        <Button 
          onClick={() => handleSelectSlot({ start: new Date() })}
          className="bg-indigo-600 hover:bg-indigo-700"
        >
          Schedule event
        </Button>
      </div>

      <div className="bg-white px-3 py-4 rounded-md flex items-center justify-between flex-wrap gap-2 mb-4">
          <div className="">
            <h1 className='font-medium text-xl'>{formattedDate}</h1>
          </div>
          
          <div className="flex items-center gap-2 flex-wrap">
            <div className="relative">
              <button className="px-4 py-2 border rounded-md flex items-center gap-2">
                <Filter className="h-4 w-4" />
                <span>Filter</span>
              </button>
              {/* Category filters dropdown would go here */}
            </div>
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                <input type="text" placeholder="Search events..."
                    className="pl-10 pr-4 py-2 outline-none border rounded-md w-64"
                    value={filters.search} onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}/>
              </div>
              {/* dropdown menu */}
              <div className='relative'>
                <button type="button" className="text-black font-medium border p-2 rounded-md" onClick={toggleDropdown}>
                  Calendar view
                </button>

                {isOpen && (
                  <div className="absolute md:right-0 font-medium z-10 mt-2 w-48 bg-white rounded-md shadow-lg">
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
            <div className="h-[80vh] w-full">
              <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                onSelectSlot={handleSelectSlot}
                onSelectEvent={handleSelectEvent}
                selectable
                eventPropGetter={eventStyleGetter}
                tooltipAccessor={event => event.title}
                className="rounded-lg shadow-sm"
              />
            </div>
        </div>


      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className='h-[90vh] md:max-w-[450px] rounded-md dialog max-w-[95%] overflow-x-auto'>
          <DialogHeader>
            <DialogTitle className={'text-start mb-5'}>
              {selectedEvent ? 'Edit Event' : 'Add title'}
            </DialogTitle>
          </DialogHeader>
          
          <div className="">
            <div className="">
              <p className="font-medium">Time</p>

              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                    <DatePicker
                      selected={newEvent.start}
                      onChange={(date) => setNewEvent({ ...newEvent, start: date })}
                      // showTimeSelect
                      dateFormat="MMMM d"
                      className="border rounded-lg px-2 text-sm font-medium py-2 outline-none w-full"
                      calendarClassName="bg-white absolute left-0 border border-gray-300 rounded-lg shadow-lg p-4"
                      dayClassName={(date) =>
                        "text-center p-2 rounded-full hover:bg-indigo-100 transition ease-in-out"
                      }
                      popperClassName="shadow-lg border border-gray-200 rounded-lg"
                    />
                    <DatePicker
                      selected={newEvent.start}
                      onChange={(date) => setNewEvent({ ...newEvent, start: date })}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={15} // Set the interval between times (e.g., every 15 minutes)
                      timeCaption="Time"
                      dateFormat="h:mm aa"
                      className="border rounded-lg px-2 text-sm font-medium py-2 outline-none w-[80px]"
                      calendarClassName="bg-white absolute left-0 border border-gray-300 rounded-lg shadow-lg p-4"
                      dayClassName={(date) =>
                        "text-center p-2 rounded-full hover:bg-indigo-100 transition ease-in-out"
                      }
                      popperClassName="shadow-lg border border-gray-200 rounded-lg"
                    />
                </div>
                <p className="">to</p>
                <div className="flex items-center gap-2">
                    <DatePicker selected={newEvent.end} onChange={(date) => setNewEvent({ ...newEvent, end: date })}
                      // showTimeSelect
                      dateFormat="MMMM d"
                      className="border rounded-lg px-2 py-2 text-sm font-medium outline-none w-full"
                      calendarClassName="bg-white absolute right-0 border border-gray-300 rounded-lg shadow-lg p-4"
                      dayClassName={(date) =>
                        "text-center p-2 rounded-full hover:bg-indigo-100 transition ease-in-out"
                      }
                      popperClassName="shadow-lg border border-gray-200 rounded-lg"
                    />
                    <DatePicker
                      selected={newEvent.end}
                      onChange={(date) => setNewEvent({ ...newEvent, end: date })}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={15} // Set the interval between times (e.g., every 15 minutes)
                      timeCaption="Time"
                      dateFormat="h:mm aa"
                      className="border rounded-lg px-2 text-sm font-medium py-2 outline-none w-[80px]"
                      calendarClassName="bg-white absolute right-0 border border-gray-300 rounded-lg shadow-lg p-4"
                      dayClassName={(date) =>
                        "text-center p-2 rounded-full hover:bg-indigo-100 transition ease-in-out"
                      }
                      popperClassName="shadow-lg border border-gray-200 rounded-lg"
                    />
                </div>
              </div>
              <div className="flex justify-end mt-3">
                <button className="py-2 rounded-md px-3 font-medium border border-blue-900">Confirm date</button>
              </div>
            </div>
          </div>
          <div className='relative'>
              <label className="block text-sm font-medium mb-1">Assign</label>
              <Select value={newEvent.category} onValueChange={(value) => setNewEvent({ ...newEvent, category: value })}>
                <SelectTrigger className='pl-8 font-medium'>
                  <SelectValue placeholder="Select staff to assign" />
                </SelectTrigger>
                <SelectContent>
                  {eventCategories.map(category => (
                    <SelectItem key={category.name} value={category.name}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <IoMdSearch className='absolute top-9 left-2 text-gray-500 text-xl'/>
            </div>

            <div className="mt-4">
              <h2 className="font-medium text-sm">Notification</h2>
              <div className="flex gap-2 mt-2 items-center">
                  {/* nottification */}
                  <select value={newEvent.email} onChange={(value) => setNewEvent({...newEvent, email: value})} className='w-[90px] outline-none font-medium text-sm px-3 py-2 border rounded-md'>
                      <option value="email">Email</option>
                  </select>
                  <input value={newEvent.time} onChange={(e) => setNewEvent({...newEvent, time: e.target.value})} type="text" className='w-[40px] text-center outline-none border rounded-md py-2'/>
                  <select value={newEvent.minute} onChange={(value) => setNewEvent({...newEvent, minute: value})} className='w-[100px] outline-none font-medium text-sm px-3 py-2 border rounded-md'>
                      <option value="minutes">Minutes</option>
                  </select>
                  <p className="text-blue-900 font-medium text-sm pl-3">Add notification</p>
              </div>
            </div>

            <div className='relative'>
              <label className="block text-sm font-medium mb-1">Other guest</label>
              <Select
                value={newEvent.guest}
                onValueChange={(value) => setNewEvent({ ...newEvent, guest: value })}
              >
                <SelectTrigger className='pl-8 font-medium'>
                  <SelectValue placeholder="Add other guest"/>
                </SelectTrigger>
                <SelectContent>
                  {otherGuest.map(oter => (
                    <SelectItem key={oter.name} value={oter.name}>
                      {oter.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <IoMdSearch className='absolute top-9 left-2 text-gray-500 text-xl'/>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Purpose</label>
              <textarea className='w-full rounded-md border h-[100px] p-3'
                type="text"
                value={newEvent.title}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                placeholder="Enter event title"
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
          <DialogFooter>
            <div className={`flex ${selectedEvent ? 'justify-between' : 'justify-end'} `}>
              {
                selectedEvent ? (
                  <Button onClick={() => setShowModal(false)} className='bg-red-600'>
                    Cancel appointment
                  </Button>
                ) : ''
              }
              <Button onClick={handleSaveEvent} disabled={!newEvent.title}>
                {selectedEvent ? 'Edit appointment' : 'Create event'}
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SchedulingCalendars;