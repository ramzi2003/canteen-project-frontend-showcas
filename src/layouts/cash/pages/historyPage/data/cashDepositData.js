/* eslint-disable react/prop-types */
import VuiTypography from "components/VuiTypography/index";
import { useState } from "react";

// totalsList page components
import IdCell from "layouts/clients/components/IdCell";
import DefaultCell from "layouts/clients/components/DefaultCell";
import VuiButton from "components/VuiButton";

import { Link } from "react-router-dom";


export default {
  columns: [
    { Header: "ID", accessor: "id", 
      Cell: ({ value }) => <IdCell id={value} />
    },
    { Header: "Time", accessor: "time", Cell: ({ value }) => <DefaultCell value={value} /> },
    { Header: "Full name", accessor: "fullName", Cell: ({ value }) => <DefaultCell value={value} /> },
    { Header: "Number", accessor: "number", Cell: ({ value }) => <DefaultCell value={value} />
    },
    { Header: "Department type", accessor: "departmentType", Cell: ({ value }) => <DefaultCell value={value} /> },
    { Header: "Cost", accessor: "cost", Cell: ({ value }) => <DefaultCell value={value} /> },
  ],

  rows: [
    {
      id: "#1",
      time: "25 Dec 8:00 AM",
      fullName: "John Doe",
      number: 12345,
      departmentType: "Student",
      cost: "$150.00",
    },
    {
      id: "#2",
      time: "25 Dec 1:00 PM",
      fullName: "Jane Smith",
      number: 67890,
      departmentType: "Student",
      cost: "$75.00",
    },
  ],
};
