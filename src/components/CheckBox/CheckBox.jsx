import React, { useState, useEffect } from 'react';
import { FaCheckSquare, FaRegSquare } from 'react-icons/fa'; // Import the icons from React Icons

const CheckBox = ({ onCheckedChange, checkBoxColor, label, description, isChecked }) => {
    // State to manage the checked state of the checkbox
    const [checked, setChecked] = useState(isChecked || false);

    // Function to toggle the checked state
    const toggleChecked = () => {
        const newValue = !checked;
        setChecked(newValue);
        if (onCheckedChange) {
            onCheckedChange(newValue);
        }
    };

    useEffect(() => {
        if (isChecked !== undefined && isChecked !== checked) {
            setChecked(isChecked);
        }
    }, [isChecked]);

    return (
        <div className='flex flex-row cursor-pointer items-center gap-2'>
            {checked ? (
                <FaCheckSquare color={checkBoxColor} className={`w-5 h-5 ${checkBoxColor}`} onClick={toggleChecked} />
            ) : (
                <FaRegSquare className='text-gray-400 w-5 h-5' onClick={toggleChecked} />
            )}
            {(label || description) && (
                <div className='flex flex-col'>
                    <label className='text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>{label}</label>
                    { description && <p className='text-sm text-gray-400'>{description}</p>}
                </div>
            )}
        </div>
    );
};

export default CheckBox;
