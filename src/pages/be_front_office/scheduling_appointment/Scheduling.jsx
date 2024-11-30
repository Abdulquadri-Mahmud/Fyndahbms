import SchedulingCalendars from '@/components/front-office-management/Shcdule_event/SchedulingCalendars';
import React, { useState } from 'react'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Link } from 'react-router-dom';

export default function Scheduling() {
  
  return (
    <div className='p-4'>
      <h1 className='text-2xl font-medium'>Scheduling</h1>
      <div className="nav mt-6 w-full rounded-md bg-white py-3 font-medium px-3 flex items-center gap-4">
          <Link to={'/scheduling'} className='pl-3 text-red-500'>Calendar Booking</Link>
          <Link to={'/checkin'} className='hover:text-red-500'>Check-in</Link>
      </div>

      <SchedulingCalendars/>
    </div>
  )
}
