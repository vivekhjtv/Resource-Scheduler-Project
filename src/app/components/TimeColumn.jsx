import React from 'react'

const TimeColumn = ({ startHour = 9, endHour = 18 }) => {
    const hours = Array.from({ length: endHour - startHour + 1 }, (_, i) => startHour + i);
    return (
        <div className="w-24 border-r border-gray-300 text-right pr-2">
            {hours.map((hour) => (
                <div key={hour} className="h-16 flex items-center justify-end border-b border-gray-200 text-gray-600">
                    {hour}:00
                </div>
            ))}
        </div>
    )
}

export default TimeColumn