import React from 'react'
import AvatarImage from './AvatarImage'
const Avatar = ({ src , alt, className , size }) => {
    return (
        <div className='w-auto h-auto rounded-full'>
            <AvatarImage src={src} size={size} className={className} alt={alt} />
        </div>
    )
}

export default Avatar