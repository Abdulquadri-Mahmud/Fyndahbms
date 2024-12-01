import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, Plus, ChevronLeft, ChevronRight, Clock, MapPin, User, Calendar as CalendarIcon } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from '@/components/ui/dialog';
// import { Alert, AlertDescription } from '@/components/ui/alert';
// import { Card, CardContent } from '@/components/ui/card';
import _ from 'lodash';

const StaffCalendars = () => {
  const currentStaffId = 1; 
  // This would come from auth context in a real app

  // Sample staff data
  const staffMembers = [
    { id: 1, name: 'Godwin Jacob', role: 'Web Designer', email: 'godwin@example.com' },
    { id: 2, name: 'David Gabriel', role: 'Web Developer', email: 'david@example.com' }
  ];

  // Sample events data with more details
  const [events, setEvents] = useState([
    {
      id: 1,
      staffId: 1,
      title: 'Meeting with Client for new project on web design',
      description: 'Initial discussion about the new e-commerce website design project',
      date: '2024-12-11',
      startTime: '8:00am',
      endTime: '9:00am',
      location: 'Conference Room A',
      attendees: ['Client A', 'Project Manager']
    },
    {
      id: 2,
      staffId: 2,
      title: 'Meeting with Client for new project on web design',
      description: 'Follow-up meeting to discuss design revisions',
      date: '2024-15-11',
      startTime: '8:00am',
      endTime: '9:00am',
      location: 'Virtual Meeting',
      attendees: ['Client B', 'UX Designer']
    }
  ]);

  const [currentDate, setCurrentDate] = useState(new Date(2024, 11));
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStaff, setSelectedStaff] = useState(currentStaffId.toString());
  const [showEventModal, setShowEventModal] = useState(false);
  const [showEventDetails, setShowEventDetails] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [newEvent, setNewEvent] = useState({
    title: '',
    description: '',
    date: '',
    startTime: '',
    endTime: '',
    location: '',
    staffId: currentStaffId,
    attendees: []
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
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStaff = selectedStaff === 'all' || event.staffId === parseInt(selectedStaff);
    return matchesSearch && matchesStaff;
  });

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setShowEventDetails(true);
  };

  const addEvent = (staffId, date) => {
    setSelectedEvent(null);
    setNewEvent({
      title: '',
      description: '',
      date: date,
      startTime: '9:00am',
      endTime: '10:00am',
      location: '',
      staffId: staffId,
      attendees: []
    });
    setShowEventModal(true);
  };

  const handleSaveEvent = () => {
    if (selectedEvent) {
      setEvents(events.map(event =>
        event.id === selectedEvent.id ? { ...newEvent, id: event.id } : event
      ));
    } else {
      setEvents([...events, { ...newEvent, id: events.length + 1 }]);
    }
    setShowEventModal(false);
  };

  const handleDeleteEvent = () => {
    setEvents(events.filter(event => event.id !== selectedEvent.id));
    setShowEventDetails(false);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold text-gray-800">Calendar Booking</h1>
        <Button 
          onClick={''}
          className="bg-indigo-600 hover:bg-indigo-700">
          Schedule event
        </Button>
      </div>
      <div className="bg-white">
        <div className="flex justify-between items-center mb-4 bg-white">
          <h1 className="text-xl font-semibold">
            December 2024
          </h1>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            className="pl-10"
            placeholder="Search events by title or description"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="border rounded-lg">
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
                <div 
                  key={index} 
                  className="p-2 border-r relative min-h-24 cursor-pointer"
                  >

                    {
                      dateEvents.length === 0 && (
                        <button onClick={() => {
                          if (dateEvents.length === 0) {
                            addEvent(staff.id, date.toISOString().split('T')[0]);
                          }
                        }} className='absolute left-4 top-10 font-medium h-[60px] w-[45px] rounded-md border-2 border-gray-30 text-xl'>+</button>
                      )
                    }
                  
                  {dateEvents.map((event) => (
                    <div key={event.id} className="border-2 border-dashed border-green-300 rounded p-2 mb-2 bg-green-50 text-sm hover:bg-green-100 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEventClick(event);
                      }}
                    >
                      <div className="text-xs text-gray-500">
                        {event.startTime} - {event.endTime}
                      </div>
                      {event.title}
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

      {/* Add/Edit Event Modal */}
      <Dialog open={showEventModal} onOpenChange={setShowEventModal}>
        <DialogContent className="sm:max-w-[425px]">
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

            <div>
              <label className="block text-sm font-medium mb-1">Description</label>
              <Input
                value={newEvent.description}
                onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                placeholder="Enter event description"
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

            <div>
              <label className="block text-sm font-medium mb-1">Location</label>
              <Input
                value={newEvent.location}
                onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
                placeholder="Enter location"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Attendees</label>
              <Input
                value={newEvent.attendees.join(', ')}
                onChange={(e) => setNewEvent({ ...newEvent, attendees: e.target.value.split(',').map(s => s.trim()) })}
                placeholder="Enter attendees (comma-separated)"
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setShowEventModal(false)}>
              Cancel
            </Button>
            <Button onClick={handleSaveEvent}>
              {selectedEvent ? 'Update' : 'Create'} Event
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Event Details Modal */}
      <Dialog open={showEventDetails} onOpenChange={setShowEventDetails}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Event Details</DialogTitle>
          </DialogHeader>
          
          {selectedEvent && (
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">{selectedEvent.title}</h3>
                <p className="text-sm text-gray-500">{selectedEvent.description}</p>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4" />
                <span>{selectedEvent.startTime} - {selectedEvent.endTime}</span>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <CalendarIcon className="w-4 h-4" />
                <span>{selectedEvent.date}</span>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4" />
                <span>{selectedEvent.location}</span>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <User className="w-4 h-4" />
                <span>{selectedEvent.attendees.join(', ')}</span>
              </div>

              {selectedEvent.staffId === currentStaffId && (
                <div className="flex justify-between pt-4">
                  <Button
                    variant="destructive"
                    onClick={handleDeleteEvent}
                  >
                    Delete Event
                  </Button>
                  <Button
                    onClick={() => {
                      setNewEvent(selectedEvent);
                      setShowEventDetails(false);
                      setShowEventModal(true);
                    }}
                  >
                    Edit Event
                  </Button>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default StaffCalendars;