/* eslint-disable react/prop-types */
import VuiTypography from "components/VuiTypography/index";

// functionsList page components
import IdCell from "layouts/clients/components/IdCell";
import DefaultCell from "layouts/clients/components/DefaultCell";
import StatusCell from "layouts/clients/components/StatusCell";
import CustomerCell from "layouts/clients/components/CustomerCell";

// Images
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";

import VuiButton from "components/VuiButton";


import { Link } from "react-router-dom";



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

    { Header: "FUNCTION", accessor: "function",
    
      Cell: ({ value }) => {
        // const numericValue = parseInt(value);
        const string = value.toString();
        return (
          <DefaultCell
            value={string}
          />
        );
      },
    },

    { Header: "DATE", accessor: "date", Cell: ({ value }) => <DefaultCell value={value} />},
    { Header: "EXPIRE DATE", accessor: "expireDate", Cell: ({ value }) => <DefaultCell value={value} />},
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
   
    
    { Header: "ACTION", accessor: "action", Cell: ({ value }) => <DefaultCell value={value} /> },
  ],

  rows: [
    {
      id: "#10421",
      date: "20 Feb, 2023",
      status: "paid",
      name: ["Company Panj", { image: team2 }],
      function: "Water provider",
      expireDate: "20 Feb, 2023",
      action: (
        <div>
          <Link to="/clients/withdraw-money">
            <VuiButton style={{ backgroundColor: 'red', color: 'white' }} variant="contained" size="small">
              Withdraw
            </VuiButton>
          </Link>
          <span style={{ margin: '0 8px' }}></span>
          <Link to="">
            <VuiButton style={{ backgroundColor: '#05CD99', color: 'white' }}  variant="contained" size="small">
              Add
            </VuiButton>
          </Link>
          <span style={{ margin: '0 8px' }}></span>
          <Link to="">
            <VuiButton color="primary" variant="contained" size="small">
              Edit
            </VuiButton>
          </Link>
          
        </div>
      ),
    },
    {
      id: "#10422",
      date: "10 Jan, 2023",
      status: "paid",
      name: ["Khudoyorbek LLC", { image: team1 }],
      function: "Construction",
      expireDate: "26 Jan, 2023",
      action: (
        <div>
          <Link to="/clients/withdraw-money">
            <VuiButton style={{ backgroundColor: 'red', color: 'white' }} variant="contained" size="small">
              Withdraw
            </VuiButton>
          </Link>
          <span style={{ margin: '0 8px' }}></span>
          <Link to="">
            <VuiButton style={{ backgroundColor: '#05CD99', color: 'white' }}  variant="contained" size="small">
              Add
            </VuiButton>
          </Link>
          <span style={{ margin: '0 8px' }}></span>
          <Link to="">
            <VuiButton color="primary" variant="contained" size="small">
              Edit
            </VuiButton>
          </Link>
          
        </div>
      ),
    },
    {
      id: "#10423",
      date: "12 Nov, 2023",
      status: "refunded",
      name: ["Pamir energy", { image: "M", color: "info" }],
      function: "Electricity provider",
      expireDate: "12 Sep, 2023",
      action: (
        <div>
          <Link to="/clients/withdraw-money">
            <VuiButton style={{ backgroundColor: 'red', color: 'white' }} variant="contained" size="small">
              Withdraw
            </VuiButton>
          </Link>
          <span style={{ margin: '0 8px' }}></span>
          <Link to="">
            <VuiButton style={{ backgroundColor: '#05CD99', color: 'white' }}  variant="contained" size="small">
              Add
            </VuiButton>
          </Link>
          <span style={{ margin: '0 8px' }}></span>
          <Link to="">
            <VuiButton color="primary" variant="contained" size="small">
              Edit
            </VuiButton>
          </Link>
          
        </div>
      ),
    },
    {
      id: "#10424",
      date: "1 Dec, 2023",
      status: "paid",
      name: ["Bishkek patrol", { image: team3 }],
      function: "Fuel provider",
      expireDate: "4 Oct, 2023",
      action: (
        <div>
          <Link to="/clients/withdraw-money">
            <VuiButton style={{ backgroundColor: 'red', color: 'white' }} variant="contained" size="small">
              Withdraw
            </VuiButton>
          </Link>
          <span style={{ margin: '0 8px' }}></span>
          <Link to="">
            <VuiButton style={{ backgroundColor: '#05CD99', color: 'white' }}  variant="contained" size="small">
              Add
            </VuiButton>
          </Link>
          <span style={{ margin: '0 8px' }}></span>
          <Link to="">
            <VuiButton color="primary" variant="contained" size="small">
              Edit
            </VuiButton>
          </Link>
          
        </div>
      ),
    },
    
  ],
};

