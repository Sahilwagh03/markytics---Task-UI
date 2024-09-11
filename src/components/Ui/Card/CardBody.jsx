import React from 'react';

const CardBody = ({ children ,className="" }) => {
  return <div className={`mb-4 flex flex-col gap-4 ${className}`}>{children}</div>;
};

export default CardBody;
