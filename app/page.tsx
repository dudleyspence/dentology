"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import usePatients, { list_order, sort_by_type } from "@/hooks/usePatients";
import { convertDateToReadable } from "@/utils/dateConversions";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";

export default function page() {
  const [sortBy, setSortBy] = useState<sort_by_type>("lastName");
  const [order, setOrder] = useState<list_order>("asc");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { patients, isPending } = usePatients(sortBy, order, searchTerm);

  const router = useRouter();

  console.log(isPending);

  return (
    <div className="p-10">
      <h1 className="text-center text-2xl">
        Dentology Patient Records <span className="text-2xl">🦷 </span>
      </h1>

      <div className="max-w-6xl mx-auto mt-10">
        <div>
          <Input
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </div>
        {isPending && <p>Loading</p>}
        <Table>
          <TableCaption>A list of dental patients.</TableCaption>

          <TableHeader>
            <TableRow>
              <TableHead className="w-[150px]">ID</TableHead>
              <TableHead
                className="hover:underline"
                onClick={() => {
                  if (sortBy === "firstName") {
                    setOrder(order === "asc" ? "desc" : "asc");
                  } else {
                    setSortBy("firstName");
                  }
                }}
              >
                <div className="flex flex-row gap-2 items-center">
                  <p>First Name</p>
                  {sortBy === "firstName" ? (
                    order === "desc" ? (
                      <MdKeyboardArrowUp />
                    ) : (
                      <MdKeyboardArrowDown />
                    )
                  ) : (
                    <span className="invisible">
                      <MdKeyboardArrowDown />
                    </span>
                  )}
                </div>
              </TableHead>
              <TableHead
                className="hover:underline"
                onClick={() => {
                  if (sortBy === "lastName") {
                    setOrder(order === "asc" ? "desc" : "asc");
                  } else {
                    setSortBy("lastName");
                  }
                }}
              >
                <div className="flex flex-row gap-2 items-center">
                  <p>Last Name</p>
                  {sortBy === "lastName" ? (
                    order === "desc" ? (
                      <MdKeyboardArrowUp />
                    ) : (
                      <MdKeyboardArrowDown />
                    )
                  ) : (
                    <span className="invisible">
                      <MdKeyboardArrowDown />
                    </span>
                  )}
                </div>
              </TableHead>
              <TableHead
                className="hover:underline text-right"
                onClick={() => {
                  if (sortBy === "dateOfBirth") {
                    setOrder(order === "asc" ? "desc" : "asc");
                  } else {
                    setSortBy("dateOfBirth");
                  }
                }}
              >
                <div className="flex flex-row gap-2 items-center justify-end">
                  <p>Date Of Birth</p>
                  {sortBy === "dateOfBirth" ? (
                    order === "desc" ? (
                      <MdKeyboardArrowUp />
                    ) : (
                      <MdKeyboardArrowDown />
                    )
                  ) : (
                    <span className="invisible">
                      <MdKeyboardArrowDown />
                    </span>
                  )}
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {patients.map((patient) => (
              <TableRow
                className="w-full"
                key={patient.id}
                onClick={() => router.push(`/${patient.id}`)}
              >
                <TableCell className="font-medium">{patient.id}</TableCell>
                <TableCell>{patient.firstName}</TableCell>
                <TableCell>{patient.lastName}</TableCell>
                <TableCell className="text-right">
                  {convertDateToReadable(patient.dateOfBirth)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
