import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import _ from 'lodash';
import DatePicker from 'react-datepicker';
import { IoMdSearch } from 'react-icons/io';

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

const StaffCalendar = () => {
  // Sample staff data
  const staffMembers = [
    { id: 1, name: 'Godwin Jacob', role: 'Web Designer' },
    { id: 2, name: 'David Gabriel', role: 'Web Developer' },
    { id: 3, name: 'David Gabriel', role: 'Web Developer' }
  ];

  // Sample events data
  const [events, setEvents] = useState([
    {
      id: 1,
      staffId: 1,
      title: 'Meeting with Client for new project on web designerd',
      date: '2024-12-11',
      startTime: '8:00am',
      endTime: '9:00am'
    },
    {
      id: 2,
      staffId: 2,
      title: 'Meeting with Client for new project on web design',
      date: '2024-12-13',
      startTime: '9:00am',
      endTime: '10:00am'
    },
    {
      id: 3,
      staffId: 3,
      title: 'Meeting with Client for new project on web design',
      date: '2024-12-13',
      startTime: '8:00am',
      endTime: '9:00am'
    }
  ]);

  const [currentDate, setCurrentDate] = useState(new Date(2024, 11));
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStaff, setSelectedStaff] = useState('all');
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

  // Get dates for the current week view
  const getDatesForWeek = (date) => {
    const start = date;
    const dates = [];
    for (let i = 0; i < 5; i++) {
      const currentDate = new Date(start);
      currentDate.setDate(start.getDate() + i);
      dates.push(currentDate);
    }
    return dates;
  };

  const weekDates = getDatesForWeek(currentDate);

  const formatDate = (date) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[date.getDay()] + ' ' + date.getDate();
  };

  const handlePreviousWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - 7);
    setCurrentDate(newDate);
  };

  const handleNextWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + 7);
    setCurrentDate(newDate);
  };

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStaff = selectedStaff === 'all' || event.staffId === parseInt(selectedStaff);
    return matchesSearch && matchesStaff;
  });

  const addEvent = (staffId) => {
    setSelectedEvent(null);
    setNewEvent({
      title: '',
      guest: '',
      email: '',
      time: '30',
      minute: '',
      start: new Date(),
      end: new Date(),
      category: 'Other',
      staffId: staffId
    });
    setShowModal(true);
    
  console.log(events);
  
  };

  const handleSaveEvent = () => {
    if (selectedEvent) {
      setEvents(events.map(event =>
        event.id === selectedEvent.id ? { ...newEvent, id: event.id } : event
      ));
    } else {
      setEvents([...events, { ...newEvent, id: events.length + 1 }]);
    }
    setShowModal(false);
  };

  

  return (
    <div className="p-6">
      <div className="border rounded-lg w-full">
        <div className="grid grid-cols-6 border-b">
          <div className="p-4 font-medium text-gray-600 border-r">Staff name</div>
          {weekDates.map((date, index) => (
            <div key={index} className="p-4 font-medium text-gray-600 border-r">
              {formatDate(date)}
            </div>
          ))}
        </div>

        {staffMembers.map((staff) => (
          <div key={staff.id} className="grid grid-cols-6 border-b">
            <div className="p-4 border-r">
              <div className="font-medium">{staff.name}</div>
              <div className="text-sm text-gray-500">{staff.role}</div>
            </div>
            {weekDates.map((date, index) => {
              const dateEvents = filteredEvents.filter(
                event => event.staffId === staff.id && event.date === date.toISOString().split('T')[0]
              );

              return (
                <div key={index} className="p-2 border-r relative min-h-24">
                  {dateEvents.map((event) => (
                    <div
                      key={event.id}
                      className="border border-green-200 rounded p-2 mb-2 bg-green-50 text-sm"
                    >
                      <div className="text-xs text-gray-500">
                        {event.startTime} - {event.endTime}
                      </div>
                      {event.title}
                      {
                        event.title === '' ? (
                          <button variant="ghost" size="sm"
                            className="absolute bottom-2 right-2"
                            onClick={() => addEvent(staff.id, date.toISOString().split('T')[0])}>
                            <Plus className="w-4 h-4" />
                          </button>
                        ) : ''
                      }
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-4">
        <Button variant="ghost" onClick={handlePreviousWeek}>
          <ChevronLeft className="w-4 h-4 mr-1" />
          Previous
        </Button>
        <div className="flex gap-2">
          {[1, 2, 3, '...', 8, 9, 10].map((page, index) => (
            <Button
              key={index}
              variant={page === 1 ? 'default' : 'ghost'}
              size="sm"
              className="w-8 h-8 p-0"
            >
              {page}
            </Button>
          ))}
        </div>
        <Button variant="ghost" onClick={handleNextWeek}>
          Next
          <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </div>

      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className='h-[90vh] md:max-w-[450px] rounded-md dialog max-w-[95%] overflow-x-auto'>
          <DialogHeader>
            <DialogTitle className={'text-start mb-5'}>
              {selectedEvent ? 'Edit Event' : 'Add title'}
              {/* {events.title} */}
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
                <SelectContent z>
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
            <div className={`w-full flex justify-between mt-2`}>
              <Button onClick={() => setShowModal(false)} className='bg-red-600'>
                Cancel appointment
              </Button>
              <Button onClick={handleSaveEvent} disabled={!newEvent.title}
              className={'bg-blue-900 text-white px-3 py-2'}>
                Edit appointment
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default StaffCalendar;