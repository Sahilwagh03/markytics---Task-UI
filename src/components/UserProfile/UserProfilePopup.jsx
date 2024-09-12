import React, { useState } from 'react';
import Avatar from '../Avatar/Avatar';
import useLogout from '@/Hooks/Logout';

const UserProfilePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const logout = useLogout();

  return (
    <div className="relative inline-block">
      <button onClick={togglePopup}>
        <Avatar size="xs" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 bg-white rounded-lg shadow-lg p-4 z-10">
          <button
            onClick={logout}
            className="mt-3 w-full bg-red-500 text-white text-sm rounded py-2 hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserProfilePopup;
