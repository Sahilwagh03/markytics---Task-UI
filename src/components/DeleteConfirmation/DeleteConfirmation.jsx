'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { Modal, ModalContent, ModalDescription, ModalFooter, ModalHeader, ModalTitle } from '../Modal/Modal'
import Button from '../Button/Button'

const DeleteConfirmation = ({ id, setIsDeleted }) => {
    const [modal, setModal] = useState(false);
    
    const handleConfirm = () => {
        setModal(true);  // Show the modal
    }

    const handleDelete = () => {
        // Retrieve the events from localStorage
        const storedEvents = JSON.parse(localStorage.getItem('eventData')) || [];

        // Filter out the event that matches the provided id
        const updatedEvents = storedEvents.filter(event => event._id !== id);

        // Update localStorage with the remaining events
        localStorage.setItem('eventData', JSON.stringify(updatedEvents));

        // Close the modal
        setModal(false);
        setIsDeleted(true)

    }

    return (
        <div className='cursor-pointer' >
            <Image src="/assets/icons/delete.svg" alt="delete" width={20} height={20} onClick={handleConfirm} />
            {
                modal &&
                <Modal Open={modal}>
                    <ModalContent>
                        <ModalHeader className='text-left'>
                            <ModalTitle className='text-lg font-bold'>Confirm Event Deletion</ModalTitle>
                            <ModalDescription className='text-sm text-gray-600'>
                                Are you sure you want to delete this event? This action <span className='font-bold'>cannot be undone</span>. Deleting this event will remove all its details permanently from your system.
                            </ModalDescription>
                        </ModalHeader>
                        <ModalFooter className='flex justify-end gap-4'>
                            <Button title='Cancel' onClick={() => setModal(false)} className='bg-gray-200 text-black hover:bg-gray-300'>
                                Cancel
                            </Button>
                            <Button onClick={handleDelete} className='bg-red-600 text-white hover:bg-red-700'>
                                Delete Event
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>

            }
        </div>
    )
}

export default DeleteConfirmation
