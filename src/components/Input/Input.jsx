import React from 'react'

const Input = ({ type = "email", placeholder = "Email", className = "w-full h-9 rounded-md", name, value = "", onChange ,...props}) => {
    return (
        <input 
            className={`flex bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground border focus:border-2 focus:border-black dark:focus:border-white text-black  dark:border-[#383838] dark:border-2 dark:bg-[#1C1C1B] dark:text-white ${className}`} 
            value={value} 
            onChange={onChange} 
            placeholder={placeholder} 
            type={type}
            name={name}
            {...props}
        />
    )
}

export default Input
