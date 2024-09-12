import React from 'react';

const ChartsTooltipContent = ({
    payload,
    label,
    active,
    hideLabel,
    hideIndicator = false,
    indicator = 'dot'
}) => {
    if (active && payload && payload.length) {
        const renderIndicator = (entry) => {
            const indicatorStyles = {
                dot: 'w-2.5 h-2.5 rounded-[2px] border-[--color-border] bg-[--color-bg]',
                line: 'shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg] w-1 h-2.5',
                dashed: 'shrink-0 rounded-[2px] border-[--color-border] w-0 border-[1.5px] border-dashed bg-transparent',
            };

            return (
                <div
                    className={`${indicatorStyles[indicator]} shrink-0`}
                    style={{
                        '--color-bg': entry.color || entry?.payload.fill || entry.payload.color,
                        '--color-border': entry.color || entry?.payload.fill || entry.payload.color
                    }}
                />
            );
        };

        return (
            <div className="grid min-w-[8rem] items-start gap-1.5 rounded-lg bg-white dark:bg-black border border-gray-200 dark:border-gray-700 px-2.5 py-1.5 text-xs shadow-xl">
                <div className="grid gap-1.5">
                    {label && !hideLabel && (
                        <p className="text-sm font-medium">
                            {label}
                        </p>
                    )}
                    {payload.map((entry, index) => (
                        <div key={index} className={`flex w-full flex-wrap items-center ${!(indicator==='line') ? 'gap-2' : 'gap-1'}`}>
                            {!hideIndicator && renderIndicator(entry)}
                            <div className="flex flex-1 justify-between gap-1 leading-none items-center">
                                <div className="grid gap-1.5">
                                    <span className="text-gray-600 dark:text-gray-400">{entry.name}</span>
                                </div>
                                <span className="font-mono font-medium tabular-nums text-foreground">{entry.value}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return null;
};

export { ChartsTooltipContent };
