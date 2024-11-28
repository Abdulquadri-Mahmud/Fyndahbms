import SchedulingCalendar from '@/components/front-office-management/Shcdule_event/SchedulingCalendar';
import React, { useState } from 'react'
import 'react-big-calendar/lib/css/react-big-calendar.css';

export default function Scheduling() {
  
  return (
    <div className='p-4'>
      <SchedulingCalendar/>
    </div>
  )
}
