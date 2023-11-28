/* eslint-disable react/prop-types */
import VuiTypography from "components/VuiTypography/index";

// totalsList page components
import IdCell from "layouts/clients/components/IdCell";
import DefaultCell from "layouts/reception/components/DefaultCell";
import StatusCell from "layouts/clients/components/StatusCell";
import CustomerCell from "layouts/reception/components/CustomerCell";

// Images
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import VuiButton from "components/VuiButton";

import { Link } from "react-router-dom";
import { IoDesktop } from "react-icons/io5";
import { IoCard } from "react-icons/io5";



export default {
  
  columns: [
    // { Header: "ID", accessor: "id", 
    
    //   Cell: ({ value }) => <IdCell id={value} /> 
    
    // },
    { Header: "NAME", accessor: "name",

    Cell: ({ value: [name, data] }) => (
      <CustomerCell image={data.image} color={data.color || "dark"} name={name} />
    ),
  },
    { Header: "DATE", accessor: "date", Cell: ({ value }) => <DefaultCell value={value} />},
    // { Header: "STATUS", accessor: "status",

    //   Cell: ({ value }) => {
    //     let status;

    //     if (value === "paid") {
    //       status = <StatusCell icon="done" color="success" status="Paid" />;
    //     } else if (value === "refunded") {
    //       status = <StatusCell icon="replay" color="dark" status="Refunded" />;
    //     } else {
    //       status = <StatusCell icon="close" color="error" status="Canceled" />;
    //     }

    //     return status;
    //   },
    // },
   
    // { Header: "TOTAL", accessor: "total",
    
    // Cell: ({ value }) => {
    //   const numericValue = parseInt(value);
    
    //   return (
    //     <DefaultCell
    //       value={numericValue}
    //     />
    //   );
    // },
    
    
    // },
    { Header: "ACTION", accessor: "action", Cell: ({ value }) => <DefaultCell value={value} /> },
  ],

  rows: [
    {
      id: "#10421",
      date: "20 Feb, 2023",
      status: "paid",
      name: ["Carson Neil", { image: team2 }],
      total: "4",
      action:  (
        <Link to="">
          <VuiButton color="primary" variant="contained" size="small"> <IoCard style={{ marginRight: '8px' }} /> Issue Card</VuiButton>
        </Link>
      ),
    },
    {
      id: "#10422",
      date: "10 Jan, 2023",
      status: "paid",
      name: ["Sadyrov Maksat", { image: team1 }],
      total: "5",
      action:  (
        <Link to="">
          <VuiButton color="primary" variant="contained" size="small"> <IoCard style={{ marginRight: '8px' }} /> Issue Card</VuiButton>
        </Link>
      ),
    },
    {
      id: "#10423",
      date: "12 Nov, 2023",
      status: "refunded",
      name: ["Ibraev Temirbek", { image: "M", color: "info" }],
      total: "7",
      action:  (
        <Link to="">
          <VuiButton color="primary" variant="contained" size="small"> <IoCard style={{ marginRight: '8px' }} /> Issue Card</VuiButton>
        </Link>
      ),
    },
    {
      id: "#10424",
      date: "1 Dec, 2023",
      status: "paid",
      name: ["Kemirkulov Kurban", { image: team3 }],
      total: "29",
      action:  (
        <Link to="">
          <VuiButton color="primary" variant="contained" size="small"> <IoCard style={{ marginRight: '8px' }} /> Issue Card</VuiButton>
        </Link>
      ),
    },
    
  ],
};

