import dayjs from 'dayjs';
import React from 'react'

const AppintmentCard = ({ appointment, startHour }) => {
    const totalMinutes = dayjs(appointment.end).diff(dayjs(appointment.start), "minute");
    const top = (dayjs(appointment.start).hour() - startHour) * 64 + (dayjs(appointment.start).minute() * 64) / 60;
    const height = (totalMinutes * 64) / 60;
    const formatTime = (dateTime) => {
        return new Date(dateTime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false });
    };
    return (
        <div
            className={`absolute left-2 right-2 p-2 text-white rounded-lg shadow-md text-xs transition-all duration-300 ${appointment.type === "unavailable" ? `bg-gray-300 text-gray-700` : "bg-purple-500"}`}
            style={{ top, minHeight: height, height: "auto", overflow: "visible" }}
        >

            <div className='font-bold'>
                {appointment.title}
            </div>
            {formatTime(appointment.start)} - {formatTime(appointment.end)}
        </div>
    );
}

export default AppintmentCard