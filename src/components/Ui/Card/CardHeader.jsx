import React from 'react';

const CardHeader = ({ children ,className=""}) => {
  return <div className={`mb-4 flex flex-col ${className}`}>{children}</div>;
};

export default CardHeader;
