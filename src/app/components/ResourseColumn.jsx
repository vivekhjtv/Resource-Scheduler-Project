import React from 'react'
import AppintmentCard from './AppintmentCard'

const ResourseColumn = ({ resource, appointments, startHour = 9 }) => {
    return (
        <div className="flex-1 border-r border-gray-300 relative">
            <div className="text-center py-2 border-b font-semibold">{resource.name}</div>
            {appointments.map((appt) => (
                <AppintmentCard key={appt.id} appointment={appt} startHour={startHour} />
            ))}
        </div>
    )
}

export default ResourseColumn;