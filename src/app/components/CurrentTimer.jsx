"use client"
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
const CurrentTimer = ({ startHour }) => {
    const [currentTime, setCurrentTime] = useState(dayjs());
    console.log(currentTime);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(dayjs());
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    const top = (currentTime.hour() - startHour) * 64 + (currentTime.minute() * 64) / 60;

    return <div className="absolute left-0 right-0 border-t-2 border-red-500" style={{ top }} />;
}

export default CurrentTimer