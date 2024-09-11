import EventForm from '@/components/EventForm/EventForm'
import React from 'react'

const UpdatePage = ({ params }) => {
    const userId = params.id
    return (
        <>
            <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center">
                <h3 className="wrapper-px wrapper h3-bold text-center sm:text-left">Update Event</h3>
            </section>
            <div className="wrapper-px wrapper my-8">
                <EventForm userId={userId} type='update' />
            </div>
        </>
    )
}

export default UpdatePage