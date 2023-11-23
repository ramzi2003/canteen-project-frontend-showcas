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
import team4 from "assets/images/team-4.jpg";
import VuiButton from "components/VuiButton";
import VuiBox from "components/VuiBox";

import { Link } from "react-router-dom";

const BalanceCell = ({ value }) => {
  const balanceValue = parseFloat(value);
  const balanceStyle = {
    color: balanceValue >= -2000 ? "green" : "red",
    fontSize: "13px", 
  };

  return <div style={balanceStyle}>{value}</div>;
};

export default {
  columns: [
    { Header: "Name", accessor: "name",
      Cell: ({ value: [name, data] }) => (
        <CustomerCell image={data.image} color={data.color || "dark"} name={name} />
      ),
    },
    { Header: "Balance", accessor: "balance",
      Cell: ({ value }) => (
        <BalanceCell value={value} />
      ),
    },
    { Header: "Gender", accessor: "gender",
      Cell: ({ value }) => (
        <DefaultCell value={value} />
      ),
    },
    { Header: "Email", accessor: "email",
      Cell: ({ value }) => (
        <DefaultCell value={value} />
      ),
    },
    { Header: "Action", accessor: "action", Cell: ({ value }) => <DefaultCell value={value} /> },
  ],

  rows: [
    {
      name: ["John Doe", { image: team2 }],
      balance: "-9500",
      gender: "Male",
      email: "john.doe@example.com",
      action: (
        <div>
          <Link to="">
            <VuiButton style={{ backgroundColor: 'red', color: 'white' }} variant="contained" size="small">
              Withdraw
            </VuiButton>
          </Link>
          <span style={{ margin: '0 8px' }}></span>
          <Link to="/clients/add-money">
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
      name: ["John Doe", { image: team2 }],
      balance: "6500",
      gender: "Male",
      email: "john.doe@example.com",
      action: (
        <div>
          <Link to="">
            <VuiButton style={{ backgroundColor: 'red', color: 'white' }} variant="contained" size="small">
              Withdraw
            </VuiButton>
          </Link>
          <span style={{ margin: '0 8px' }}></span>
          <Link to="/clients/add-money">
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
      name: ["Jane Smith", { image: team1 }],
      balance: "-8700",
      gender: "Female",
      email: "jane.smith@example.com",
      action: (
        <div>
          <Link to="">
            <VuiButton style={{ backgroundColor: 'red', color: 'white' }} variant="contained" size="small">
              Withdraw
            </VuiButton>
          </Link>
          <span style={{ margin: '0 8px' }}></span>
          <Link to="/clients/add-money">
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
      name: ["John Doe", { image: team2 }],
      balance: "500",
      gender: "Male",
      email: "john.doe@example.com",
      action: (
        <div>
          <Link to="">
            <VuiButton style={{ backgroundColor: 'red', color: 'white' }} variant="contained" size="small">
              Withdraw
            </VuiButton>
          </Link>
          <span style={{ margin: '0 8px' }}></span>
          <Link to="/clients/add-money">
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
      name: ["Jane Smith", { image: team1 }],
      balance: "-6700",
      gender: "Female",
      email: "jane.smith@example.com",
      action: (
        <div>
          <Link to="">
            <VuiButton style={{ backgroundColor: 'red', color: 'white' }} variant="contained" size="small">
              Withdraw
            </VuiButton>
          </Link>
          <span style={{ margin: '0 8px' }}></span>
          <Link to="/clients/add-money">
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
      name: ["Alex Johnson", { image: team3 }],
      balance: "600",
      gender: "Male",
      email: "alex.johnson@example.com",
      action: (
        <div>
          <Link to="">
            <VuiButton style={{ backgroundColor: 'red', color: 'white' }} variant="contained" size="small">
              Withdraw
            </VuiButton>
          </Link>
          <span style={{ margin: '0 8px' }}></span>
          <Link to="/clients/add-money">
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
      name: ["Emily Davis", { image: team4 }],
      balance: "800",
      gender: "Female",
      email: "emily.davis@example.com",
      action: (
        <div>
          <Link to="">
            <VuiButton style={{ backgroundColor: 'red', color: 'white' }} variant="contained" size="small">
              Withdraw
            </VuiButton>
          </Link>
          <span style={{ margin: '0 8px' }}></span>
          <Link to="/clients/add-money">
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
      name: ["Samuel Williams", { image: team2 }],
      balance: "9550",
      gender: "Male",
      email: "samuel.williams@example.com",
      action: (
        <div>
          <Link to="">
            <VuiButton style={{ backgroundColor: 'red', color: 'white' }} variant="contained" size="small">
              Withdraw
            </VuiButton>
          </Link>
          <span style={{ margin: '0 8px' }}></span>
          <Link to="/clients/add-money">
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
      name: ["Olivia Brown", { image: team1 }],
      balance: "720",
      gender: "Female",
      email: "olivia.brown@example.com",
      action: (
        <div>
          <Link to="">
            <VuiButton style={{ backgroundColor: 'red', color: 'white' }} variant="contained" size="small">
              Withdraw
            </VuiButton>
          </Link>
          <span style={{ margin: '0 8px' }}></span>
          <Link to="/clients/add-money">
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
      name: ["Daniel Miller", { image: team3 }],
      balance: "630",
      gender: "Male",
      email: "daniel.miller@example.com",
      action: (
        <div>
          <Link to="">
            <VuiButton style={{ backgroundColor: 'red', color: 'white' }} variant="contained" size="small">
              Withdraw
            </VuiButton>
          </Link>
          <span style={{ margin: '0 8px' }}></span>
          <Link to="/clients/add-money">
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
      name: ["Sophia Wilson", { image: team4 }],
      balance: "900",
      gender: "Female",
      email: "sophia.wilson@example.com",
      action: (
        <div>
          <Link to="">
            <VuiButton style={{ backgroundColor: 'red', color: 'white' }} variant="contained" size="small">
              Withdraw
            </VuiButton>
          </Link>
          <span style={{ margin: '0 8px' }}></span>
          <Link to="/clients/add-money">
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
      name: ["Michael Taylor", { image: team2 }],
      balance: "480",
      gender: "Male",
      email: "michael.taylor@example.com",
      action: (
        <div>
          <Link to="">
            <VuiButton style={{ backgroundColor: 'red', color: 'white' }} variant="contained" size="small">
              Withdraw
            </VuiButton>
          </Link>
          <span style={{ margin: '0 8px' }}></span>
          <Link to="/clients/add-money">
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
      name: ["Ava Martinez", { image: team1 }],
      balance: "670",
      gender: "Female",
      email: "ava.martinez@example.com",
      action: (
        <div>
          <Link to="">
            <VuiButton style={{ backgroundColor: 'red', color: 'white' }} variant="contained" size="small">
              Withdraw
            </VuiButton>
          </Link>
          <span style={{ margin: '0 8px' }}></span>
          <Link to="/clients/add-money">
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