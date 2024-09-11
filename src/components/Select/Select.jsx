'use client'
import React, { useRef, createContext, useContext, useState, useEffect } from 'react';
import { IoCheckmarkOutline } from "react-icons/io5";

const SelectContext = createContext();

const Select = ({ children, value = "", onSelect, placeholder = "Select", enableSearch = false }) => {
    const [popoverOpen, setPopoverOpen] = useState(false);
    const [placeAbove, setPlaceAbove] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const popOverRef = useRef(null);

    const handlePopover = () => {
        setPopoverOpen(!popoverOpen);
    };

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleInputFocus = () => {
        if (!popoverOpen) {
            setPopoverOpen(true);
        }
    };

    const handleClickOutside = (event) => {
        if (popOverRef.current && !popOverRef.current.contains(event.target)) {
            setPopoverOpen(false);
        }
    };

    useEffect(() => {
        if (popoverOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [popoverOpen]);

    useEffect(()=>{
        if(searchQuery==""){
            onSelect("")
        }
    },[searchQuery])

    return (
        <SelectContext.Provider value={{ placeAbove, setPlaceAbove, popOverRef, value, onSelect, setPopoverOpen, placeholder, searchQuery, setSearchQuery }}>
            <div className='relative w-full' ref={popOverRef}>

                {
                    !enableSearch ?
                        <button
                            className="w-full max-w-full items-center whitespace-nowrap rounded-md text-sm min-w-[200px]
                    ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 
                    focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border dark:border-[#27272a] 
                    hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2  text-left font-normal dark:hover:bg-[#27272a] dark:hover:text-white dark:text-[#a1a1aa]
                    flex flex-row justify-between"
                            type="button"
                            onClick={handlePopover}
                        >
                            <span>{value || placeholder}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevrons-up-down ml-2 h-4 w-4 shrink-0 opacity-50"><path d="m7 15 5 5 5-5"></path><path d="m7 9 5-5 5 5"></path></svg>
                        </button>
                        :
                        <input
                            type="text"
                            className="inline-flex items-center whitespace-nowrap rounded-md text-sm min-w-[200px] max-w-[300px]
                                disabled:pointer-events-none disabled:opacity-50 border dark:border-[#27272a] 
                                h-10 px-4 py-2 justify-start text-left font-normal dark:hover:bg-[#27272a] dark:hover:text-white dark:text-[#a1a1aa]"
                            value={searchQuery=="" ? value : searchQuery}
                            onFocus={handleInputFocus}
                            onChange={handleInputChange}
                            placeholder={placeholder}
                        />
                }

                {popoverOpen && children}
            </div>
        </SelectContext.Provider>
    )
}

const usePopOver = () => useContext(SelectContext);

const Popover = ({ children , className="" }) => {
    const { placeAbove, setPlaceAbove, popOverRef } = usePopOver();

    const handleScroll = () => {
        if (popOverRef.current) {
            const rect = popOverRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;

            setPlaceAbove(rect.bottom + 300 > windowHeight && rect.top > 300); // Adjust the threshold as needed
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`absolute z-10 ${placeAbove ? 'bottom-full mb-2' : 'top-[45px]'}`}>
            <div className={`min-w-[200px] shadow-md w-full rounded-md border dark:border-[#27272a] dark:text-white hover:bg-accent hover:text-accent-foreground ${className}`}>
                {children}
            </div>
        </div>
    )
}

const SelectContent = ({ children }) => {
    return (
        <div className='p-1'>
            {children}
        </div>
    )
}

const SelectHeader = ({ children }) => {
    return (
        <div className='w-full text-left py-2 px-3 border-b-[2px] dark:border-b-[#d3d3d314] dark:border-b-2'>
            <h2 className="font-normal text-md dark:text-white pr-2">{children}</h2>
        </div>
    )
}

const SelectList = ({ children }) => {
    return (
        <div className='flex flex-col gap-1 max-h-60 overflow-y-auto custom-scrollbar'>
            {children}
        </div>
    )
}

const SelectItem = ({ value }) => {
    const { onSelect, setPopoverOpen, value: selectedValue, placeholder, searchQuery ,setSearchQuery} = usePopOver();

    const handleSelect = () => {
        if (searchQuery) {
            if (selectedValue === value) {
                onSelect("")
                setSearchQuery("")
            } else {
                onSelect(value)
                setSearchQuery(value)

            }
        }
        else {
            if (selectedValue === value) {
                onSelect(placeholder); // Deselect if already selected
            } else {
                onSelect(value); // Select the new value

            }
        }
        setPopoverOpen(false);// Close the popover on select
    };

    // Filter items based on search query
    if (searchQuery && !value.toLowerCase().includes(searchQuery.toLowerCase())) {
        return null;
    }


    return (
        <div
            onClick={handleSelect}
            className='w-full flex flex-row gap-1 px-2 py-1.5 items-center text-left rounded-md dark:hover:bg-[#27272a] dark:hover:text-white dark:text-[#a1a1aa] cursor-pointer'
        >
            <span className="flex items-center justify-center w-4 h-4">
                {selectedValue === value && <IoCheckmarkOutline />}
            </span>
            <span className="flex-grow relative flex cursor-default select-none items-center rounded-sm text-sm outline-none">
                {value}
            </span>
        </div>
    )
}

export { Select, Popover, SelectContent, SelectHeader, SelectList, SelectItem };
