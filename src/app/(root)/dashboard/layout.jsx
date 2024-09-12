import Header from '@/components/Header/Header'
import React from 'react'
import { SideBar, SideBarBody, SideBarItem } from '../../../components/Dashboard_1/SideBar'
import { SideBarItemsData } from '@/constant'

const DashboardLayout = ({ children }) => {
    return (
        <section>
            <div className='block md:hidden'>
                <Header />
            </div>
            <div className='flex flex-row rounded-lg relative'>
                <div className='hidden md:block'>
                    <SideBar title='TechPro'>
                        <SideBarBody>
                            {
                                SideBarItemsData.map(({ icon, title, link }, index) => (
                                    <SideBarItem icon={icon} title={title} link={link} key={index} />
                                ))
                            }
                        </SideBarBody>
                    </SideBar>
                </div>
                {children}
            </div>
        </section>
    )
}

export default DashboardLayout