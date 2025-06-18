import React, { useEffect, useMemo, useState, useTransition } from "react";

export type sort_by_type = "firstName" | "lastName" | "dateOfBirth";
export type list_order = "asc" | "desc";

export interface patient {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
}

export default function usePatients(
  sort_by: sort_by_type = "lastName",
  order: list_order = "asc",
  searchTerm: string = ""
) {
  const [allPatients, setAllPatients] = useState<patient[]>([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    async function fetchAllPatients() {
      const allPatientsData = await fetch("/api/patients");
      const data = await allPatientsData.json();
      console.log(data);

      setAllPatients(data.patientData);
    }
    startTransition(async () => {
      await fetchAllPatients();
    });
  }, []);

  console.log(allPatients);

  const patients = useMemo(() => {
    let sortedPatients = [...allPatients];

    if (searchTerm) {
      sortedPatients = sortedPatients.filter((patient) => {
        const fullname = patient.firstName + " " + patient.lastName;
        return fullname.includes(searchTerm);
      });
    }
    console.log(sortedPatients);

    if (sort_by === "dateOfBirth") {
      // sort by date of birth (converted into ms since same date in the past)
      sortedPatients.sort(
        (a, b) => a.dateOfBirth.getTime() - b.dateOfBirth.getTime()
      );
    } else if (sort_by === "firstName") {
      // sort by first name
      sortedPatients.sort((a, b) => a.firstName.localeCompare(b.firstName));
    } else {
      // defailt to sort by last name (alphabetically)
      sortedPatients.sort((a, b) => a.lastName.localeCompare(b.lastName));
    }

    if (order === "desc") {
      sortedPatients.reverse();
    }

    return sortedPatients;
  }, [sort_by, order, searchTerm, allPatients]);

  function fetchSinglePatient(patient_id: string) {
    const patient = allPatients.find((patient) => patient.id === patient_id);
    return patient;
  }

  return { patients, fetchSinglePatient, isPending };
}
