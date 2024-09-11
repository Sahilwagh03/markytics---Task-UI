import React from 'react';
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip as ChartsToolTip, Legend, ResponsiveContainer } from 'recharts';
import { ChartsTooltipContent } from './ChartToopTipContent';
import Card from '../Ui/Card/Card';
import { CardBody, CardHeader, CardTitle } from '../Ui/Card/CardComponets';

const barChartData = [
    { month: 'January', events: 12 },
    { month: 'February', events: 18 },
    { month: 'March', events: 15 },
    { month: 'April', events: 20 },
    { month: 'May', events: 22 },
    { month: 'June', events: 30 },
    { month: 'July', events: 25 },
];
const BarChartComponent = () => {
    return (
        <Card className="w-full h-fit bg-white dark:bg-black/50">
            <CardHeader className='!mb-1'>
                <CardTitle className="!mb-2tracking-tight text-black dark:text-white text-sm font-medium">Sales Bar Chart</CardTitle>
            </CardHeader>
            <CardBody className='!mb-0 !gap-[0px]'>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={barChartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} stroke="var(--color-grid)" />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartsToolTip cursor={false} content={<ChartsTooltipContent hideLabel />} />

                        <Bar
                            dataKey="events"
                            fill="#8884d8"
                            radius={10}
                            isAnimationActive={true}
                            animationDuration={1000}
                            animationEasing="ease-out"
                        />
                    </BarChart>
                </ResponsiveContainer>
            </CardBody>
        </Card>
    )
}

export default BarChartComponent