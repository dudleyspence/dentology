"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import usePatients from "@/hooks/usePatients";
import { convertDateToReadable } from "@/utils/dateConversions";
import useAppointments from "@/hooks/useAppointments";
import { useParams } from "next/navigation";

export default function page() {
  // gets the dynamic params - client side so using useParams
  const params = useParams();
  const patient_id = params.patient_id as string;

  const { appointments } = useAppointments(patient_id);
  const { fetchSinglePatient } = usePatients();

  console.log(patient_id);
  const patient = fetchSinglePatient(patient_id);

  console.log(patient);

  return (
    <div className="p-10">
      <h1 className="text-center text-2xl">Dentology Patient Records</h1>

      <div className="max-w-7xl mx-auto mt-10">
        <Table>
          <TableCaption>
            A list of {patient?.firstName} {patient?.lastName}'s appointments
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Appointment Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {appointments.map((appointment) => (
              <TableRow>
                <TableCell className="font-medium">{appointment.id}</TableCell>
                <TableCell>{appointment.type}</TableCell>
                <TableCell>{appointment.status}</TableCell>

                <TableCell className="text-right">
                  {convertDateToReadable(appointment.date)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
