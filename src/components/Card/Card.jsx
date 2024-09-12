'use client'
import { formatDateTime } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'
import DeleteConfirmation from '../DeleteConfirmation/DeleteConfirmation'
import { useRouter } from 'next/navigation'

const EventCard = ({ event, hidePrice }) => {
  const [isDeleted , setIsDeleted]=useState(false)
  const router = useRouter()

  useEffect(()=>{
    if(isDeleted){
      window.location.reload();
    }
  },[isDeleted])

  let date = ''
  if (event) {
    if (event.startDate) {
      date = `${event.startDate} - ${event.endDate}`
    }
    else {
      date = formatDateTime(event.startDateTime).dateTime
    }
  }
  return (
    <div className="group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[438px]">
      <Link
        href={`/events/${event._id || event.id}`}
        style={{ backgroundImage: `url(${event.imageUrl})` }}
        className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500"
      />
      {/* IS EVENT CREATOR ... */}

      {!hidePrice && (
        <div className="absolute right-2 top-2 flex flex-col gap-4 rounded-xl bg-white p-3 shadow-sm transition-all">
          <Link href={`/events/${event._id}/update`}>
            <Image src="/assets/icons/edit.svg" alt="edit" width={20} height={20} />
          </Link>
          <DeleteConfirmation id={event._id} setIsDeleted={setIsDeleted}/>
        </div>
      )}

      <div
        className="flex min-h-[200px] flex-col gap-3 p-5 md:gap-4"
      >
        {!hidePrice && <div className="flex gap-2">
          <span className="p-semibold-14 w-min rounded-full bg-green-100 px-4 py-1 text-green-60">
            {event.isFree ? 'FREE' : `$${event.price}`}
          </span>
          <p className="p-semibold-14 w-min rounded-full bg-grey-500/10 px-4 py-1 text-grey-500 line-clamp-1">
            {event.selectedCategory}
          </p>
        </div>}

        <p className="p-medium-16 p-medium-18 text-grey-500">
          {date}
        </p>

        <p className="p-medium-16 p-medium-18 text-black">
          Location : <span className='p-medium-16 p-medium-18 text-grey-500'>{event.location}</span>
        </p>

        <Link href={`/events/${event._id}`}>
          <p className="p-medium-16 md:p-medium-20 line-clamp-2 flex-1 text-black">{event.title}</p>
        </Link>

        <div className="flex-between w-full">
          <p className="p-medium-14 md:p-medium-16 text-grey-600">
            {event.organizer?.firstName} {event.organizer?.lastName}
          </p>
        </div>
      </div>
    </div>
  )
}

export default EventCard