/* eslint-disable react/prop-types */
import VuiTypography from "components/VuiTypography/index";
import { useState } from "react";

// totalsList page components
import IdCell from "layouts/clients/components/IdCell";
import DefaultCell from "layouts/clients/components/DefaultCell";
import VuiButton from "components/VuiButton";

import { Link } from "react-router-dom";

const inputStyle = {
  width: "45px",
  padding: "5px",
  borderRadius: "3px",
  border: "none",
  boxSizing: "border-box",
  textAlign: "center",
  backgroundColor: "transparent",
  color: "white",
};

export default {
  columns: [
    { Header: "ID", accessor: "id", 
      Cell: ({ value }) => <IdCell id={value} />
    },
    { Header: "NAME", accessor: "name", Cell: ({ value }) => <DefaultCell value={value} /> },
    { Header: "COUNT", accessor: "count", 
      Cell: ({ row, value }) => {
        const [count, setCount] = useState(value);

        const handleChange = (event) => {
          setCount(event.target.value);
        };

        return <input type="number" value={count} onChange={handleChange} onBlur={() => row.setValue("count", count)} style={inputStyle} />;
      }
    },
    { Header: "PRICE", accessor: "price", Cell: ({ value }) => <DefaultCell value={value} /> },
    { Header: "COST", accessor: "cost", Cell: ({ value }) => <DefaultCell value={value} /> },
  ],

  rows: [
    {
      id: "#1",
      name: "Product A",
      count: 10,
      price: "$20.00",
      cost: "$150.00",
    },
    {
      id: "#2",
      name: "Product B",
      count: 5,
      price: "$15.00",
      cost: "$75.00",
    },
  ],
};
