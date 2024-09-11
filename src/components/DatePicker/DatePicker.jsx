import React, { useEffect, useState } from 'react';
import { FiCalendar } from 'react-icons/fi';
import Calendar from '../Calendar/Calendar';
import dayjs from 'dayjs';

const DatePicker = ({ onSelect, selected, mode = 'single', timer = false, time, setTime ,...props}) => {
    const [calendarOpen, setCalendarOpen] = useState(false);

    const toggleCalendar = () => {
        setCalendarOpen(!calendarOpen);
    };


    const getDisplayDate = () => {
        if (mode === 'single') {
            if(timer){
                return selected ? `${selected} - ${time}` : "Pick a date"
            }
            return selected ? selected : "Pick a date";
        } else if (mode === 'range') {
            if (selected && selected.startDate && !selected.endDate) {
                return `${selected.startDate} - `;
            } else if (selected && !selected.startDate && selected.endDate) {
                return ` - ${selected.endDate}`;
            } else if (selected && selected.startDate && selected.endDate) {
                return `${selected.startDate} - ${selected.endDate}`;
            } else {
                return "Pick a date";
            }
        }
    };

    const rangeDefault =
    {
        startDate: selected == '' ? null : dayjs(selected?.startDate),
        endDate: selected == '' ? null : dayjs(selected?.endDate)
    }

    return (
        <div className="relative">
            <button
                className=
                {
                    `inline-flex items-center whitespace-nowrap rounded-md text-sm 
                    ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 
                    focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none 
                    disabled:opacity-50 border dark:border-[#27272a] 
                    ${calendarOpen ? "dark:bg-[#27272a]" : ""} 
                    hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 
                    ${mode == 'range' ? 'w-[300px]' : 'w-[260px]'} justify-start text-left font-normal 
                  dark:hover:bg-[#27272a] dark:hover:text-white dark:text-[#a1a1aa] 
                   ${selected ? '!text-black dark:!text-white' : ''}`
                }
                type="button"
                onClick={toggleCalendar}
            >
                <FiCalendar className="mr-2 h-4 w-4" />
                <span>{getDisplayDate()}</span>
            </button>
            {calendarOpen && (
                <div className="absolute z-10 top-[45px]">
                    <Calendar
                        onSelect={onSelect}
                        selected={
                            mode == 'range' ?
                                rangeDefault
                                :
                                selected == '' ? selected : dayjs(selected)
                        }
                        mode={mode}
                        datePicker
                        timer={timer}
                        dateTime={time}
                        handleSetTime={setTime}
                        {...props}
                        
                    />
                </div>
            )}
        </div>
    );
};

export default DatePicker;
