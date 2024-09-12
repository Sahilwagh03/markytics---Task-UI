'use client'
import React, { useEffect, useState } from 'react'
import SearchBar from '@/components/SearchBar/SearchBar';
import { Card, CardBody, CardDescription, CardTitle, CardHeader } from '../Ui/Card/CardComponets'
import EventCard from '../Card/Card';
import Button from '../Button/Button';
import Link from 'next/link';
import { LuActivity, LuCalendar, LuDollarSign, LuUsers } from 'react-icons/lu';
import UserProfilePopup from '../UserProfile/UserProfilePopup';
import { useRouter } from 'next/navigation';

const dashboard_data = [
  {
    title: "Total Events",
    icon: <LuCalendar className='text-black dark:text-white' />,
    value: "32",
    description: "+5 events from last month"
  },
  {
    title: "Registrations",
    icon: <LuUsers className='text-black dark:text-white' />,
    value: "+4500",
    description: "+12.3% increase from last month"
  },
  {
    title: "Revenue",
    icon: <LuDollarSign className='text-black dark:text-white' />,
    value: "₹2,34,500",
    description: "+15% growth compared to last event"
  },
  {
    title: "Active Participants",
    icon: <LuActivity className='text-black dark:text-white' />,
    value: "725",
    description: "+50 since last event"
  }
];


const Dashboard_1 = () => {

  const [events, setEvents] = useState([]);
  
  const router = useRouter();

  useEffect(() => {
    // Check if the user is logged in by checking for userData in localStorage
    const userData = localStorage.getItem('userData');
    if (!userData) {
      // If no user data, redirect to the login page
      router.push('/login');
    } else {
      // If user is logged in, fetch events
      const storedData = localStorage.getItem('eventData');
      if (storedData) {
        setEvents(JSON.parse(storedData));
      }
    }
  }, [router]);

  return (
    <div className='w-full'>
      <div className='w-full flex-2 bg-white dark:dark:bg-[#27272a] h-screen w-full rounded-xl md:rounded-tl-none md:rounded-bl-none overflow-auto'>
        <div className='p-0 md:p-4'>
          <div className='flex  flex-row z-10 items-center justify-between p-2 px-3 bg-white dark:bg-black md:dark:bg-transparent top-0 sticky md:relative md:bg-transparent md:justify-end'>
            <div className='flex flex-row gap-4 items-center'>
              <div className='relative'>
                <SearchBar
                  onChange={(value) => console.log(value)}
                  animated={true}
                  IconColor="grey"
                  className='rounded-xl w-full md:w-[20rem] dark:bg-black/50' />
              </div>
              <div>
                <Button className='bg-primary text-white'>
                  <Link href='/events/create'>
                    Create Event
                  </Link>
                </Button>
              </div>
              <div className='hidden md:flex'>
                <UserProfilePopup/>
              </div>
            </div>
          </div>
          <div className='md:mt-4 p-4 md:p-0 min-w-full h-[200vh] md:h-screen rounded-xl grid grid-rows-[auto_2fr] gap-4'>
            <div>
              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4 min-w-full h-fit">
                {dashboard_data.map((item, index) => (
                  <Card key={index} className="w-full h-fit bg-white dark:bg-black/50">
                    <CardHeader className='!mb-1'>
                      <div className="flex flex-row items-center justify-between">
                        <CardTitle className="!mb-0 tracking-tight text-black dark:text-white text-sm font-medium">{item.title}</CardTitle>
                        {item.icon}
                      </div>
                    </CardHeader>
                    <CardBody className='!mb-0 !gap-[0px]'>
                      <div className="text-2xl text-black dark:text-white font-bold">{item.value}</div>
                      <CardDescription className="!mb-0 text-xs text-gray-600">{item.description}</CardDescription>
                    </CardBody>
                  </Card>
                ))}
              </div>
            </div>
            <div>
              <h2 className='text-2xl font-bold pb-5'>Event List</h2>
              
              <div className='grid  md:grid-cols-1 lg:grid-cols-3 pb-4 gap-2 h-fit'>
                {events.map((event) => (
                  <EventCard key={event._id} event={event} hidePrice={false} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Dashboard_1