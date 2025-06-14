import React, { useEffect, useState } from "react";

type sort_by_type = "date" | "type";

type appointment_types = "consultation" | "Check-up" | "procedure";

type appointment_status_types = "Scheduled" | "Attended" | "Cancelled";

interface appointment {
  id: string;
  patient_id: string;
  type: appointment_types;
  date: Date;
  status: appointment_status_types;
}

export default function useAppointments(
  patient_id: string,
  sort_by?: sort_by_type
) {
  const [appointments, setAppointments] = useState<appointment[]>([]);

  const appointmentsData: appointment[] = [
    {
      id: "app_1",
      patient_id: "patient_1",
      type: "consultation",
      date: new Date("2025-06-14T12:24:37.512Z"),
      status: "Attended",
    },
  ];

  useEffect(() => {
    const updatedAppointments = appointmentsData.filter(
      (appointment) => appointment.patient_id === patient_id
    );

    setAppointments(updatedAppointments);
  }, [patient_id, sort_by]);

  return { appointments };
}
