import React, { createContext, useContext, useState } from 'react';
import { LuArrowLeft, LuArrowRight } from 'react-icons/lu';

const SidebarContext = createContext();

export const useSidebar = () => useContext(SidebarContext);

const SideBar = ({ children, title = 'Company Name', logo = 'https://seeklogo.com/images/M/microsoft-365-copilot-logo-44BA459F18-seeklogo.com.png' }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleSidebar = () => {
    setIsExpanded((prev) => !prev);
  };
  return (
    <SidebarContext.Provider value={{ isExpanded, setIsExpanded }}>
      <div className={`flex flex-col items-center rounded-lg h-screen bg-white dark:bg-[#09090b] transition-all duration-300 ${isExpanded ? 'w-56' : 'w-16'}`}>
        <div className={`border-b-2 border-gray-200 dark:border-[#2E2E2E] p-4 w-full flex gap-2 items-center ${isExpanded ? 'justify-start' : 'justify-center'}`}>
          <img src={logo} alt='logo' className='w-8' />
          {
            <h1 className={`flex-shrink-0 text-xl font-medium transition-all duration-300 ${isExpanded ? 'block' : 'hidden'}`}>{title}</h1>
          }
        </div>
        <div className=' pt-4 px-2 '>
          <button onClick={toggleSidebar} className='w-10 h-10 px-1 py-1 flex justify-center items-center'>
            {isExpanded ? <LuArrowLeft className='w-6 h-6' /> : <LuArrowRight className='w-6 h-6' />}
          </button>
        </div>
        <div className='flex flex-col justify-between h-full w-full overflow-hidden'>
          {children}
        </div>
      </div>
    </SidebarContext.Provider>
  );
};

const SideBarBody = ({ children }) => {

  return (
    <div className='flex flex-col items-center gap-6 w-full py-4 px-2 overflow-auto flex-1 no-scrollbar'>
      {children}
    </div>
  )
}

const SideBarItem = ({ icon, title }) => {
  const { isExpanded } = useSidebar();

  return (
    <>
      {!isExpanded ?
        <Tooltip title={title} position='right'>
          <div className={`flex items-center w-full px-1 py-1 hover:bg-gray-200 dark:hover:bg-[#2E2E2E] rounded-lg cursor-pointer ${isExpanded ? 'justify-start' : 'justify-center'}`}>
            <div className='flex items-center justify-center w-10 h-10 text-gray-800 dark:text-gray-200'>
              {icon}
            </div>
            {isExpanded && <span className='text-lg text-gray-800 dark:text-gray-200'>{title}</span>}
          </div>
        </Tooltip>
        :
        <div className={`flex items-center w-full px-1 py-1 hover:bg-gray-200 dark:hover:bg-[#2E2E2E] rounded-lg cursor-pointer ${isExpanded ? 'justify-start' : 'justify-center'}`}>
          <div className='flex items-center justify-center w-10 h-10 text-gray-800 dark:text-gray-200'>
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
        <div className='relative z-50 px-3 py-2 text-xs text-black bg-white dark:text-white dark:bg-black rounded-md shadow-xl'>
          <span className={arrowClasses}></span>
          {title}
        </div>
      </div>
    </div>
  );
};

export { SideBar, SideBarBody, SideBarItem, SideBarFooter };

