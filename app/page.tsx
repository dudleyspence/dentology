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
import Link from "next/link";

export default function page() {
  const { patients } = usePatients();

  return (
    <div className="p-10">
      <h1 className="text-center text-2xl">Dentology Patient Records</h1>

      <div className="max-w-7xl mx-auto mt-10">
        <Table>
          <TableCaption>A list of dental patients.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>First Name</TableHead>
              <TableHead>Last Name</TableHead>
              <TableHead className="text-right">Date Of Birth</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {patients.map((patient) => (
              <Link href={`/${patient.id}`}>
                <TableRow>
                  <TableCell className="font-medium">{patient.id}</TableCell>

                  <TableCell>{patient.firstName}</TableCell>
                  <TableCell>{patient.lastName}</TableCell>
                  <TableCell className="text-right">
                    {convertDateToReadable(patient.dateOfBirth)}
                  </TableCell>
                </TableRow>
              </Link>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
