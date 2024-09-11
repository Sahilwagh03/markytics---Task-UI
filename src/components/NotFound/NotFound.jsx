import React from 'react'

const NotFound = ({className=''}) => {
  return (
    <div className={`flex justify-center items-center h-full ${className}`}>
    <h1 className='text-4xl font-bold text-gray-400'>Event not found</h1>
</div>
  )
}

export default NotFound