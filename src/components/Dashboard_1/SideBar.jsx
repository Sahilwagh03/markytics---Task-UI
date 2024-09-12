'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { createContext, useContext, useState } from 'react';
import { LuArrowLeft, LuArrowRight } from 'react-icons/lu';

const SidebarContext = createContext();

export const useSidebar = () => useContext(SidebarContext);


const SideBar = ({ children, title = 'Company Name', logo = 'https://seeklogo.com/images/M/microsoft-365-copilot-logo-44BA459F18-seeklogo.com.png' }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <SidebarContext.Provider value={{ isExpanded, setIsExpanded }}>
      <div className={`flex flex-col items-center rounded-lg h-screen bg-white dark:bg-black/50 transition-all duration-300 ${isExpanded ? 'w-56' : 'w-16'}`}>
        <Link href='/'>
          <div className={`border-b-2 border-gray-200 dark:border-[#2E2E2E] pt-2 w-full flex gap-0 items-center ${isExpanded ? 'justify-start' : 'justify-center'}`}>
            <img src='/assets/images/logo_1.png' alt='logo' className='w-20' />
            {
              <h1 className={`flex-shrink-0 text-xl font-medium transition-all duration-300 text-black dark:text-white ${isExpanded ? 'block' : 'hidden'}`}>EventElite</h1>
            }
          </div>
        </Link>
        <div className='flex flex-col justify-between h-screen w-full'>
          {children}
        </div>
      </div>
    </SidebarContext.Provider>
  );
};

const SideBarBody = ({ children }) => {

  const { isExpanded, setIsExpanded } = useSidebar();
  const toggleSidebar = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className='px-2 py-6 flex flex-col items-center gap-6 w-full'>
      {children}
    </div>
  )
}

const SideBarItem = ({ icon, title, className = "", link }) => {
  const { isExpanded } = useSidebar();
  const router = useRouter();
  return (
    <>
      {!isExpanded ?
        <Tooltip title={title} position='right'>
          <div className={`flex items-center w-full px-1 py-1 hover:bg-gray-200 dark:hover:bg-[#2E2E2E] rounded-lg cursor-pointer ${isExpanded ? 'justify-start' : 'justify-center'} ${className}`} onClick={() => router.push(link)}>
            <div className='flex items-center justify-center min-w-10 min-h-10 text-gray-800 dark:text-gray-200'>
              {icon}
            </div>
            {isExpanded && <span className='text-lg text-gray-800 dark:text-gray-200'>{title}</span>}
          </div>
        </Tooltip>
        :
        <div className={`flex items-center w-full px-1 py-1 hover:bg-gray-200 dark:hover:bg-[#2E2E2E] rounded-lg cursor-pointer ${isExpanded ? 'justify-start' : 'justify-center'} ${className}`} onClick={() => router.push(link)}>
          <div className='flex items-center justify-center min-w-10 min-h-10 text-gray-800 dark:text-gray-200'>
            {icon}
          </div>
          {isExpanded && <span className='text-lg text-gray-800 dark:text-gray-200'>{title}</span>}
        </div>
      }
    </>
  );
};

const SideBarFooter = ({ children }) => {
  return (
    <div className='border-t-2 px-2 py-2 flex flex-col items-center gap-6 w-full border-gray-200 dark:border-[#2E2E2E]'>
      {children}
    </div>
  );
};

const Tooltip = ({ children, title, position = 'top' }) => {
  let tooltipPosition, arrowClasses;

  switch (position) {
    case 'top':
      tooltipPosition = 'bottom-full mb-2';
      arrowClasses = 'absolute left-1/2 transform -translate-x-1/2 -bottom-1 w-0 h-0 border-t-5 border-t-black border-r-5 border-r-transparent border-b-5 border-b-transparent';
      break;
    case 'bottom':
      tooltipPosition = 'top-full mt-2';
      arrowClasses = 'absolute left-1/2 transform -translate-x-1/2 top-[-5px] w-0 h-0 border-t-5 border-t-transparent border-r-5 border-r-transparent border-b-5 border-b-black';
      break;
    case 'left':
      tooltipPosition = 'right-full mr-2';
      arrowClasses = 'absolute right-[-10px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-5 border-t-transparent border-r-5 border-r-black border-b-5 border-b-transparent';
      break;
    case 'right':
    default:
      tooltipPosition = 'left-full ml-3';
      arrowClasses = 'absolute left-[-10px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-5 border-t-transparent border-r-5 border-r-black border-b-5 border-b-transparent';
      break;
  }

  return (
    <div className='relative flex items-center group'>
      {children}
      <div className={`absolute ${tooltipPosition} flex-col items-center hidden group-hover:flex`}>
        <div className='relative z-10 px-3 py-2 text-xs text-black bg-white dark:text-white dark:bg-black rounded-md shadow-xl'>
          <span className={arrowClasses}></span>
          {title}
        </div>
      </div>
    </div>
  );
};

export { SideBar, SideBarBody, SideBarItem, SideBarFooter };
