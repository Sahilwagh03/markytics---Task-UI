import React from 'react';

const Card = ({ children , className="" }) => {
  return (
    <div className={`shadow-md rounded-lg p-4 border-2 border-gray-200 dark:border-[#2E2E2E] dark:border-2 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
