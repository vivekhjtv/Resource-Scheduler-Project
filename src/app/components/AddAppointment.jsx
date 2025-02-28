import React, { useState } from "react";
import dayjs from "dayjs"
import { addAppointment, resources } from "../common/data";
const AddAppointment = ({ onAppointmentAdded }) => {
    const [title, setTitle] = useState("");
    const [resourceId, setResourceId] = useState(resources[0].id);
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newAppointment = {
            id: `a${Date.now()}`,
            resourceId,
            title,
            start: dayjs(start).toISOString(),
            end: dayjs(end).toISOString(),
            type: "appointment",
        };
        addAppointment(newAppointment);
        onAppointmentAdded();
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4 p-4 bg-gray-100 rounded">
            <div className="mb-2">
                <label className="block text-sm font-medium">Title:</label>
                <input className="w-full p-2 border rounded" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div className="mb-2">
                <label className="block text-sm font-medium">Resource:</label>
                <select className="w-full p-2 border rounded" value={resourceId} onChange={(e) => setResourceId(e.target.value)}>
                    {resources.map((res) => (
                        <option key={res.id} value={res.id}>{res.name}</option>
                    ))}
                </select>
            </div>
            <div className="mb-2">
                <label className="block text-sm font-medium">Start Time:</label>
                <input className="w-full p-2 border rounded" type="datetime-local" value={start} onChange={(e) => setStart(e.target.value)} required />
            </div>
            <div className="mb-2">
                <label className="block text-sm font-medium">End Time:</label>
                <input className="w-full p-2 border rounded" type="datetime-local" value={end} onChange={(e) => setEnd(e.target.value)} required />
            </div>
            <button type="submit" className="bg-purple-500 text-white px-4 py-2 rounded">Add Appointment</button>
        </form>
    )
}

export default AddAppointment