import React from 'react'

const Button = ({
  title ,
  onClick,
  className="bg-black shadow-md text-white dark:text-black dark:bg-white",
  children
}) => {

  return (
    <button
      className={`h-auto rounded-md px-4 py-2 ${className}`}
      onClick={onClick}
    >
      {title || children}
    </button>
  )
}

export default Button