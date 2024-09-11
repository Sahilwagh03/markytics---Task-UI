import React, { useState } from 'react'
import Button from '../Button/Button'

const Modal = ({ Open, Close, children }) => {    
    return (
        <>
            {
                Open &&
                < div class="fixed inset-0 z-50 bg-black/80">
                    {children}
                </div >
            }
        </>
    )
}

const ModalContent = ({ children }) => {
    return (
        <div className='text-center fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg border-2 bg-white text-black dark:bg-[#09090b] dark:text-white dark:border-[#27272a] translate-x-[-50%] translate-y-[-50%] gap-4 p-6 shadow-lg duration-200 sm:rounded-lg flex flex-col gap-2'>
            {children}
        </div>
    )
}

const ModalHeader = ({ children }) => {
    return (
        <div className='flex flex-col gap-2'>
            {children}
        </div>
    )
}

const ModalTitle = ({ children }) => {
    return (
        <h1 className='text-3xl font-bold'>
            {children}
        </h1>
    )
}

const ModalDescription = ({children}) => {
    return (
        <p className='text-lg text-[#a1a1aa]'>
            {children}
        </p>
    )
}

const ModalFooter = ({ children }) => {
    return (
        <div className='flex flex-col md:flex-row gap-4 justify-end'>
            {children}
        </div>
    )
}

export { Modal, ModalContent, ModalTitle,ModalDescription, ModalFooter, ModalHeader } 
