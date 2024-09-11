import React from 'react';

const AvatarInitialsFallback = ({ initials , size }) => {
  return (
    <div className={`rounded-full bg-gray-300 flex items-center justify-center p-3 ${size}`}>
      <span className="text-gray-600 text-sm font-semibold">{initials}</span>
    </div>
  );
}

export default AvatarInitialsFallback;
