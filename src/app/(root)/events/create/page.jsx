import EventForm from '@/components/EventForm/EventForm'
import React from 'react'

const CreateEvent = () => {
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center">
        <h3 className="wrapper-px wrapper h3-bold text-center sm:text-left">Create Event</h3>
      </section>

      <div className="wrapper-px wrapper my-8">
        <EventForm />
      </div>
    </>
  )
}

export default CreateEvent