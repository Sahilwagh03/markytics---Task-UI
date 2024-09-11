import React from 'react';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip as ChartsToolTip, ResponsiveContainer } from 'recharts';
import { ChartsTooltipContent } from './ChartToopTipContent';
import Card from '../Ui/Card/Card';
import { CardBody, CardHeader, CardTitle } from '../Ui/Card/CardComponets';


const eventData = [
    { month: "January", events: 12 },
    { month: "February", events: 8 },
    { month: "March", events: 15 },
    { month: "April", events: 5 },
    { month: "May", events: 10 },
    { month: "June", events: 7 },
];

const LineChartComponent = () => (
    <Card className="w-full h-fit bg-white dark:bg-black/50">
        <CardHeader className='!mb-1'>
            <CardTitle className="!mb-2 tracking-tight text-black dark:text-white text-sm font-medium">Revenue Line Chart</CardTitle>
        </CardHeader>
        <CardBody className='!mb-0 !gap-[0px]'>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={eventData}
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
                    <ChartsToolTip content={<ChartsTooltipContent indicator='line' />} />
                    <Line
                        type="natural"
                        dataKey="events"
                        strokeWidth={3}
                        activeDot={{
                            r: 6,
                        }}
                        stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </CardBody>
    </Card>
);

export default LineChartComponent;
