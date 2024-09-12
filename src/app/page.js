'use client'
import Button from "@/components/Button/Button";
import EventCard from "@/components/Card/Card";
import Header from "@/components/Header/Header";
import NotFound from "@/components/NotFound/NotFound";
import SearchBar from "@/components/SearchBar/SearchBar";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {

  const [searchQuery, setSearchQuery] = useState('');
  const [eventDetails , setEventDetails] =useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('eventData')) || [];
    setEventDetails(storedData)
  }, []);


  // Filter events based on search query
  const filteredEvents = eventDetails.filter(event => {
    return searchQuery ? event.title.toLowerCase().includes(searchQuery.toLowerCase()) : true;
  });
  return (
    <>
    <Header/>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10 lg:px-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">Host, Connect, Celebrate: Your Events, Our Platform!</h1>
            <p className="p-regular-20 md:p-regular-24">Book and learn helpful tips from 3,168+ mentors in world-class companies with our global community.</p>
            <Button className="bg-primary text-white  button !rounded-xl w-full min-w-[150px] sm:w-fit">
              <Link href="#events">
                Explore Now
              </Link>
            </Button>
          </div>

          <Image
            src="/assets/images/hero.png"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh] md:flex"
          />
        </div>
      </section>

      <section id="events" className="wrapper-px wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold">Trust by <br /> Thousands of Events</h2>

        <div className="flex w-fit flex-col gap-5 md:flex-row">
          <SearchBar
            className='rounded-md md:!w-[400px] !border-2'
            onChange={setSearchQuery}
            placeholder="Search for events..."
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-y-10 md:gap-x-2">
          {
            filteredEvents.length > 0 && (
              filteredEvents.map(event => (
                <EventCard key={event._id} event={event} hasOrderLink={true} hidePrice={false} />
              ))
            )
          }
        </div>
        <div>
          {
            filteredEvents.length == 0 && (
              <NotFound className="h-[300px]" />
            )
          }
        </div>
      </section>
    </>
  );
}
