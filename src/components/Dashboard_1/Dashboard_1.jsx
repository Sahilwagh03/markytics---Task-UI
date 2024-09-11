'use client'
import React, { useEffect, useState } from 'react'
import { SideBar, SideBarBody, SideBarFooter, SideBarItem } from './SideBar'
import { LuHome, LuBell, LuSettings, LuPieChart, LuMessageCircle, LuMenu, LuUsers, LuActivity, LuDollarSign, LuBarChart2, LuPanelRightOpen } from 'react-icons/lu';
import Avatar from '@/components/Avatar/Avatar'
import SearchBar from '@/components/SearchBar/SearchBar';
import { Card, CardBody, CardDescription, CardTitle, CardHeader } from '../Ui/Card/CardComponets'
import EventCard from '../Card/Card';
import { Sheet, SheetContent, SheetTrigger } from '@/components/Sheet/Sheet'

const dashaboard_data = [
  {
    title: "Total Revenue",
    icon: <LuDollarSign className='text-black dark:text-white' />,
    value: "$45,231.89",
    description: "+20.1% from last month"
  },
  {
    title: "Subscriptions",
    icon: <LuUsers className='text-black dark:text-white' />,
    value: "+2350",
    description: "+180.1% from last month"
  },
  {
    title: "Sales",
    icon: <LuMenu className='text-black dark:text-white' />,
    value: "+12,234",
    description: "+19% from last month"
  },
  {
    title: "Active Now",
    icon: <LuActivity className='text-black dark:text-white' />,
    value: "+573",
    description: "+201 since last hour"
  }
]

const sales = [
  {
    name: "Sofia Davis",
    email: "sofia.davis@example.com",
    income: "-$100",
    profit: false,
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Jackson Lee",
    email: "jackson.lee@example.com",
    income: "+$1500",
    profit: true,
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Olivia Brown",
    email: "olivia.brown@example.com",
    income: "+$2000",
    profit: true,
    avatar: "https://randomuser.me/api/portraits/women/55.jpg",
  },
  {
    name: "Liam Smith",
    email: "liam.smith@example.com",
    income: "-$500",
    profit: false,
    avatar: "https://randomuser.me/api/portraits/men/60.jpg",
  },
  {
    name: "Emma Wilson",
    email: "emma.wilson@example.com",
    income: "+$1700",
    profit: true,
    avatar: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    name: "Noah Johnson",
    email: "noah.johnson@example.com",
    income: "+$1800",
    profit: true,
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Ava Martinez",
    email: "ava.martinez@example.com",
    income: "-$300",
    profit: false,
    avatar: "https://randomuser.me/api/portraits/women/56.jpg",
  },
  {
    name: "William Garcia",
    email: "william.garcia@example.com",
    income: "+$1100",
    profit: true,
    avatar: "https://randomuser.me/api/portraits/men/66.jpg",
  },
];


const SideBarItemsData = [
  {
    icon: <LuHome className='w-6 h-6 text-black dark:text-white' />,
    title: 'Home',
    link:'/'
  },
  {
    icon: <LuBarChart2 className='w-6 h-6 text-black dark:text-white' />,
    title: 'Analytics'
  },
  {
    icon: <LuBell className='w-6 h-6 text-black dark:text-white' />,
    title: 'Notifications'
  },
]
const Dashboard_1 = () => {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem('eventData');
    if (storedData) {
      setEvents(JSON.parse(storedData));
    }
  }, []);
  return (
    <div className='flex flex-row rounded-lg relative'>
      <div className='hidden md:block'>
        <SideBar title='TechPro'>
          <SideBarBody>
            {
              SideBarItemsData.map(({ icon, title ,link}, index) => (
                <SideBarItem icon={icon} title={title} link={link} key={index} />
              ))
            }
          </SideBarBody>
        </SideBar>
      </div>
      <div className='flex-2 bg-white dark:dark:bg-[#27272a] h-screen w-full rounded-xl md:rounded-tl-none md:rounded-bl-none overflow-auto'>
        <div className='p-0 md:p-4'>
          <div className='flex  flex-row z-10 items-center justify-between p-2 px-3 bg-white dark:bg-black md:dark:bg-transparent top-0 sticky md:relative md:bg-transparent md:justify-end'>
            <div className='rounded-lg md:hidden p-2 border-2 border-gray-200 dark:border-[#383838] dark:border-2'>
              <Sheet side='left'>
                <SheetTrigger>
                  <LuPanelRightOpen className='w-7 h-7' />
                </SheetTrigger>
                <SheetContent positionClassName='absolute h-screen'>
                  <div className='my-10 flex flex-col gap-4'>
                    {
                      SideBarItemsData.map(({ icon, title }, index) => (
                        <div className={`flex items-center w-full px-1 py-1 hover:bg-gray-200 dark:hover:bg-[#2E2E2E] rounded-lg cursor-pointer justify-start`} key={index}>
                          <div className='flex items-center justify-center min-w-10 min-h-10 text-gray-800 dark:text-gray-200'>
                            {icon}
                          </div>
                          <span className='text-lg text-gray-800 dark:text-gray-200'>{title}</span>
                        </div>
                      ))
                    }
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            <div className='relative'>
              <SearchBar
                onChange={(value) => console.log(value)}
                animated={true}
                IconColor="grey"
                className='rounded-xl w-full md:w-[20rem] dark:bg-black/50' />
            </div>
          </div>
          <div className='md:mt-4 p-4 md:p-0 min-w-full h-[200vh] md:h-screen rounded-xl grid grid-rows-[auto_2fr] gap-4'>
            <div>
              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4 min-w-full h-fit">
                {dashaboard_data.map((item, index) => (
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
            <div className='grid  md:grid-cols-1 lg:grid-cols-[2fr_auto] pb-4 gap-2 h-fit'>
              {events.map((event) => (
                <EventCard key={event._id} event={event} hidePrice={false} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Dashboard_1