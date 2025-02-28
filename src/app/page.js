"use client";
import TimeColumn from "./components/TimeColumn";
import ResourceColumn from "./components/ResourseColumn";
import CurrentTimer from "./components/CurrentTimer";
import { appointments, resources } from "./common/data";
import AddAppointment from "./components/AddAppointment";
import { useState } from "react";

export default function Home() {
  const [refresh, setRefresh] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const handleAppointmentAdded = () => {
    setRefresh(!refresh);
    setShowForm(false);
  };
  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">Appointments</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-3xl"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Close" : "Add Appointment"}
        </button>
      </div>

      {showForm && (
        <AddAppointment onAppointmentAdded={handleAppointmentAdded} />
      )}
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden border">
        <TimeColumn />
        <div className="flex-1 flex relative">
          {resources.map((resource) => (
            <ResourceColumn
              key={resource.id}
              resource={resource}
              appointments={appointments.filter(
                (a) => a.resourceId === resource.id
              )}
            />
          ))}
          <CurrentTimer startHour={9} />
        </div>
      </div>
    </div>
  );
}
