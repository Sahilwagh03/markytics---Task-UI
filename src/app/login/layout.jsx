import Header from '@/components/Header/Header'
import React from 'react'

const layoutLogin = ({children}) => {
  return (
    <div>
        <Header/>
        {children}
    </div>
  )
}

export default layoutLogin