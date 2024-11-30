import React, { useContext, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import _ from 'lodash';
import { staffCalendarContext } from './SchedulingCalendars';

const StaffCalendar = () => {
  // Sample staff data
  const staffMembers = [
    { id: 1, name: 'Godwin Jacob', role: 'Web Designer' },
    { id: 2, name: 'David Gabriel', role: 'Web Developer' }
  ];

  // Sample events data
  const events = useContext(staffCalendarContext);
  console.log(events);
  
  // const [events, setEvents] = useState([
  //   {
  //     id: 1,
  //     staffId: 1,
  //     title: 'Meeting with Client for new project on web design',
  //     date: '2024-12-11',
  //     startTime: '8:00am',
  //     endTime: '9:00am'
  //   },
  //   {
  //     id: 2,
  //     staffId: 1,
  //     title: 'Meeting with Client for new project on web design',
  //     date: '2024-12-13',
  //     startTime: '8:00am',
  //     endTime: '9:00am'
  //   }
  // ]);

  const [currentDate, setCurrentDate] = useState(new Date(2024, 11));
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStaff, setSelectedStaff] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    startTime: '',
    endTime: '',
    staffId: ''
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

  const addEvent = (staffId, date) => {
    setSelectedEvent(null);
    setNewEvent({
      title: '',
      date: date,
      startTime: '9:00am',
      endTime: '10:00am',
      staffId: staffId
    });
    setShowModal(true);
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
    <div className="p-">
      <div className="">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            className="pl-10"
            placeholder="Search titles"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

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
          <div key={staff.id} className="grid grid-cols-6 border-b ">
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
                    </div>
                  ))}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute bottom-2 right-2"
                    onClick={() => addEvent(staff.id, date.toISOString().split('T')[0])}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
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
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {selectedEvent ? 'Edit Event' : 'Add New Event'}
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Event Title</label>
              <Input
                value={newEvent.title}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                placeholder="Enter event title"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Start Time</label>
                <Input
                  value={newEvent.startTime}
                  onChange={(e) => setNewEvent({ ...newEvent, startTime: e.target.value })}
                  placeholder="9:00am"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">End Time</label>
                <Input
                  value={newEvent.endTime}
                  onChange={(e) => setNewEvent({ ...newEvent, endTime: e.target.value })}
                  placeholder="10:00am"
                />
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button onClick={handleSaveEvent}>
              {selectedEvent ? 'Update' : 'Create'} Event
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default StaffCalendar;