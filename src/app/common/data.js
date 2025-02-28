export const resources = [
  { id: "1", name: "Ram" },
  { id: "2", name: "Shayam" },
  { id: "3", name: "Chagan" },
  { id: "4", name: "Magan" },
];

export let appointments = [
  {
    id: "a1",
    resourceId: "1",
    title: "Unavailable",
    start: "2025-02-28T15:00:00",
    end: "2025-02-28T16:00:00",
    type: "unavailable",
  },
  {
    id: "a2",
    resourceId: "2",
    title: "Hair Cut",
    start: "2025-02-28T16:15:00",
    end: "2025-02-28T17:15:00",
    type: "appointment",
  },
];
export const addAppointment = (newAppointment) => {
  appointments = [...appointments, newAppointment];
};
