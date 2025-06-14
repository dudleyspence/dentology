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
      date: new Date("2025-06-01T10:00:00Z"),
      status: "Scheduled",
    },
    {
      id: "app_2",
      patient_id: "patient_1",
      type: "Check-up",
      date: new Date("2025-06-10T14:00:00Z"),
      status: "Attended",
    },

    {
      id: "app_3",
      patient_id: "patient_2",
      type: "procedure",
      date: new Date("2025-05-20T09:30:00Z"),
      status: "Cancelled",
    },
    {
      id: "app_4",
      patient_id: "patient_2",
      type: "consultation",
      date: new Date("2025-06-03T11:15:00Z"),
      status: "Attended",
    },
    {
      id: "app_5",
      patient_id: "patient_2",
      type: "Check-up",
      date: new Date("2025-06-12T15:45:00Z"),
      status: "Scheduled",
    },

    {
      id: "app_6",
      patient_id: "patient_3",
      type: "consultation",
      date: new Date("2025-06-02T13:00:00Z"),
      status: "Scheduled",
    },
    {
      id: "app_7",
      patient_id: "patient_3",
      type: "procedure",
      date: new Date("2025-06-18T08:30:00Z"),
      status: "Attended",
    },

    {
      id: "app_8",
      patient_id: "patient_4",
      type: "Check-up",
      date: new Date("2025-06-04T10:30:00Z"),
      status: "Attended",
    },
    {
      id: "app_9",
      patient_id: "patient_4",
      type: "procedure",
      date: new Date("2025-06-22T09:00:00Z"),
      status: "Scheduled",
    },
    {
      id: "app_10",
      patient_id: "patient_4",
      type: "consultation",
      date: new Date("2025-07-01T16:15:00Z"),
      status: "Scheduled",
    },

    {
      id: "app_11",
      patient_id: "patient_5",
      type: "procedure",
      date: new Date("2025-06-06T13:30:00Z"),
      status: "Attended",
    },
    {
      id: "app_12",
      patient_id: "patient_5",
      type: "Check-up",
      date: new Date("2025-06-15T14:30:00Z"),
      status: "Scheduled",
    },

    {
      id: "app_13",
      patient_id: "patient_6",
      type: "consultation",
      date: new Date("2025-06-08T09:45:00Z"),
      status: "Cancelled",
    },
    {
      id: "app_14",
      patient_id: "patient_6",
      type: "Check-up",
      date: new Date("2025-06-20T11:00:00Z"),
      status: "Attended",
    },
    {
      id: "app_15",
      patient_id: "patient_6",
      type: "procedure",
      date: new Date("2025-07-05T12:15:00Z"),
      status: "Scheduled",
    },

    {
      id: "app_16",
      patient_id: "patient_7",
      type: "consultation",
      date: new Date("2025-06-01T10:15:00Z"),
      status: "Attended",
    },
    {
      id: "app_17",
      patient_id: "patient_7",
      type: "Check-up",
      date: new Date("2025-06-17T15:00:00Z"),
      status: "Scheduled",
    },

    {
      id: "app_18",
      patient_id: "patient_8",
      type: "procedure",
      date: new Date("2025-06-09T13:45:00Z"),
      status: "Scheduled",
    },
    {
      id: "app_19",
      patient_id: "patient_8",
      type: "Check-up",
      date: new Date("2025-06-11T14:20:00Z"),
      status: "Attended",
    },
    {
      id: "app_20",
      patient_id: "patient_8",
      type: "consultation",
      date: new Date("2025-06-25T10:50:00Z"),
      status: "Scheduled",
    },

    {
      id: "app_21",
      patient_id: "patient_9",
      type: "Check-up",
      date: new Date("2025-06-13T08:30:00Z"),
      status: "Cancelled",
    },
    {
      id: "app_22",
      patient_id: "patient_9",
      type: "procedure",
      date: new Date("2025-06-19T09:00:00Z"),
      status: "Scheduled",
    },

    {
      id: "app_23",
      patient_id: "patient_10",
      type: "consultation",
      date: new Date("2025-06-05T10:00:00Z"),
      status: "Attended",
    },
    {
      id: "app_24",
      patient_id: "patient_10",
      type: "procedure",
      date: new Date("2025-06-27T14:00:00Z"),
      status: "Scheduled",
    },
    {
      id: "app_25",
      patient_id: "patient_10",
      type: "Check-up",
      date: new Date("2025-07-03T11:30:00Z"),
      status: "Scheduled",
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
