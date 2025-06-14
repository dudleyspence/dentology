import React, { useEffect, useState } from "react";

type sort_by_type = "firstName" | "lastName" | "dateOfBirth";
type list_order = "asc" | "desc";

interface patient {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
}

export default function usePatients(
  sort_by: sort_by_type = "lastName",
  order: list_order = "desc"
) {
  const [patients, setPatients] = useState<patient[]>([]);

  const patientData: patient[] = [
    {
      id: "app_1",
      firstName: "Joe",
      lastName: "Bloggs",
      dateOfBirth: new Date("1998-06-08T12:24:37.512Z"),
    },
  ];

  useEffect(() => {
    const sortedPatients = [...patientData];

    if (sort_by === "dateOfBirth") {
      // sort by date of birth
    } else if (sort_by === "firstName") {
      // sort by first name
    } else {
      // defailt to sort by last name (alphabetically)
      sortedPatients.sort((a, b) => a.firstName.localeCompare(b.firstName));
    }

    if (order === "desc") {
      sortedPatients.reverse();
    }

    setPatients(sortedPatients);
  }, [sort_by, order]);

  return { patients };
}
