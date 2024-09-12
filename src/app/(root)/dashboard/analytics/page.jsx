'use client'
import BarChartComponent from '@/components/Graphs/BarChartComponent'
import LineChartComponent from '@/components/Graphs/LIneChartComponent'
import React from 'react'

const AnalyticsPage = () => {
  return (
    <div className='h-full p-4 pt-10 w-full'>
      <div className='grid gap-3 md:grid-cols-2 lg:grid-cols-2  min-w-full h-fit'>
        <BarChartComponent />
        <LineChartComponent />
      </div>
    </div>
  )
}

export default AnalyticsPage