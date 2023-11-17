// @mui material components
import Grid from "@mui/material/Grid";
import kalVisualsSquare from "assets/images/message-card-image.png";

import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

import MessageCard from "examples/Cards/MessageCard";
import PlaceholderCard from "examples/Cards/PlaceholderCard";
import BasicLineChart from "examples/Charts/LineCharts/BasicLineChart";
import MiniGradientLineChart from "examples/Charts/LineCharts/MiniGradientLineChart";
import Footer from "examples/Footer";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import InvoicesList from "examples/Lists/InvoicesList";
import RankingsList from "examples/Lists/RankingsList";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Welcome from "layouts/dashboards/crm/components/Welcome";
import calendarEventsData from "layouts/dashboards/crm/data/calendarEventsData";
// Data
import invoicesListData from "layouts/dashboards/crm/data/invoicesListData";
import DataTable from "examples/Tables/DataTable";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

import React from 'react';

import Table from "examples/Tables/Table";
import VuiButton from "components/VuiButton";

const ClientsLayout = () => {
  // Assuming you have some data for the table columns and rows
  const tableColumns = [
    { name: 'name', align: 'left', width: 'auto' },
    { name: 'function', align: 'right', width: 'auto' },
    { name: 'balance', align: 'right', width: 'auto' },
    { name: 'employed', align: 'right', width: 'auto' },
    { name: 'expireddate', align: 'right', width: 'auto' },
    { name: 'actions', align: 'right', width: 'auto' },
  ];

  const tableRows = [
    { name: 'John Doe', function: 'Developer', balance: 5000, employed: '2022-05-15', expireddate: '2023-12-31',
    actions: (
      <>

        <VuiBox p={1} display="flex">
        <VuiButton variant="contained" color="primary" onClick={() => handleButtonClick(tableRows[1])}>
          Add
        </VuiButton>

        <VuiBox ml={1}>
          <VuiButton variant="contained" color="primary" onClick={() => handleButtonClick(tableRows[1])}>
            Edit
          </VuiButton>
        </VuiBox>

      </VuiBox>
        
      </>
    ),
    },
    { name: 'Jane Doe', function: 'Designer', balance: 7000, employed: '2021-11-10', expireddate: '2022-11-30',

    actions: (
      <>

        <VuiBox p={1} display="flex">
        <VuiButton variant="contained" color="primary" onClick={() => handleButtonClick(tableRows[1])}>
          Add
        </VuiButton>

        <VuiBox ml={1}>
          <VuiButton variant="contained" color="primary" onClick={() => handleButtonClick(tableRows[1])}>
            Edit
          </VuiButton>
        </VuiBox>

      </VuiBox>
        
      </>
    ),
  
    },
    { name: 'Bob Smith', function: 'Manager', balance: 10000, employed: '2022-02-28', expireddate: '2023-09-15',

    actions: (
      <>

        <VuiBox p={1} display="flex">
        <VuiButton variant="contained" color="primary" onClick={() => handleButtonClick(tableRows[1])}>
          Add
        </VuiButton>

        <VuiBox ml={1}>
          <VuiButton variant="contained" color="primary" onClick={() => handleButtonClick(tableRows[1])}>
            Edit
          </VuiButton>
        </VuiBox>

      </VuiBox>
        
      </>
    ),

    },
    { name: 'Alice Johnson', function: 'Data Scientist', balance: 8000, employed: '2021-08-20', expireddate: '2022-10-20',

    actions: (
      <>

        <VuiBox p={1} display="flex">
        <VuiButton variant="contained" color="primary" onClick={() => handleButtonClick(tableRows[1])}>
          Add
        </VuiButton>

        <VuiBox ml={1}>
          <VuiButton variant="contained" color="primary"  onClick={() => handleButtonClick(tableRows[1])}>
            Edit
          </VuiButton>
        </VuiBox>

      </VuiBox>
        
      </>
    ),
  
    },
    { name: 'Charlie Brown', function: 'Marketing Specialist', balance: 6000, employed: '2022-04-05', expireddate: '2023-08-05',

    actions: (
      <>

        <VuiBox p={1} display="flex">
        <VuiButton variant="contained" color="primary" onClick={() => handleButtonClick(tableRows[1])}>
          Add
        </VuiButton>

        <VuiBox ml={1}>
          <VuiButton variant="contained" color="primary" onClick={() => handleButtonClick(tableRows[1])}>
            Edit
          </VuiButton>
        </VuiBox>

      </VuiBox>
        
      </>
    ),
  
    },
    { name: 'Eva Davis', function: 'Customer Support', balance: 7500, employed: '2021-12-01', expireddate: '2022-12-15',
    actions: (
      <>

        <VuiBox p={1} display="flex">
        <VuiButton variant="contained" color="primary" onClick={() => handleButtonClick(tableRows[1])}>
          Add
        </VuiButton>

        <VuiBox ml={1}>
          <VuiButton variant="contained" color="primary" onClick={() => handleButtonClick(tableRows[1])}>
            Edit
          </VuiButton>
        </VuiBox>

      </VuiBox>
        
      </>
    ),
    
    },
    { name: 'Frank White', function: 'Product Manager', balance: 9000, employed: '2022-10-15', expireddate: '2023-11-10',

    actions: (
      <>

        <VuiBox p={1} display="flex">
        <VuiButton variant="contained" color="primary" onClick={() => handleButtonClick(tableRows[1])}>
          Add
        </VuiButton>

        <VuiBox ml={1}>
          <VuiButton variant="contained" color="primary" onClick={() => handleButtonClick(tableRows[1])}>
            Edit
          </VuiButton>
        </VuiBox>

      </VuiBox>
        
      </>
    ),
    },
    { name: 'Grace Miller', function: 'Sales Representative', balance: 8500, employed: '2021-09-15', expireddate: '2022-09-30',

    actions: (
      <>

        <VuiBox p={1} display="flex">
        <VuiButton variant="contained" color="primary" onClick={() => handleButtonClick(tableRows[1])}>
          Add
        </VuiButton>

        <VuiBox ml={1}>
          <VuiButton variant="contained" color="primary" onClick={() => handleButtonClick(tableRows[1])}>
            Edit
          </VuiButton>
        </VuiBox>

      </VuiBox>
        
      </>
    ),
    },
    { name: 'Harry Wilson', function: 'HR Specialist', balance: 9500, employed: '2022-07-10', expireddate: '2023-07-25',

    actions: (
      <>

        <VuiBox p={1} display="flex">
        <VuiButton variant="contained" color="primary" onClick={() => handleButtonClick(tableRows[1])}>
          Add
        </VuiButton>

        <VuiBox ml={1}>
          <VuiButton variant="contained" color="primary" onClick={() => handleButtonClick(tableRows[1])}>
            Edit
          </VuiButton>
        </VuiBox>

      </VuiBox>
        
      </>
    ),
  
    },
    { name: 'Ivy Lee', function: 'Financial Analyst', balance: 8200, employed: '2021-10-01', expireddate: '2022-08-12',

    actions: (
      <>

        <VuiBox p={1} display="flex">
        <VuiButton variant="contained" color="primary" onClick={() => handleButtonClick(tableRows[1])}>
          Add
        </VuiButton>

        <VuiBox ml={1}>
          <VuiButton variant="contained" color="primary" onClick={() => handleButtonClick(tableRows[1])}>
            Edit
          </VuiButton>
        </VuiBox>

      </VuiBox>
        
      </>
    ),
  
    },

  ];

 
  

  const handleButtonClick = () => {
    // Add your button click logic here
    console.log('Button clicked!');
  };


  const handleAddClick = () => {
    // Add your logic for adding a new client here
    console.log('Add button clicked!');
  };

  const handleEditClick = (rowData) => {
    // Add your logic for editing the client here, using the rowData to identify the client
    console.log('Edit button clicked for:', rowData.name);
  };



  return (
    <>
      <DashboardNavbar />

      <VuiBox p={3} display="flex">
        <VuiButton variant="contained" color="primary" onClick={handleAddClick}>
          Add Client
        </VuiButton>

        <VuiBox ml={2}>
          <VuiButton variant="contained" color="primary" onClick={handleButtonClick}>
            Delete Client
          </VuiButton>
        </VuiBox>

        <VuiBox ml={2}>
          <VuiButton variant="contained" color="primary" onClick={handleButtonClick}>
            Edit Client
          </VuiButton>
        </VuiBox>

        <VuiBox ml={2}>
          <VuiButton variant="contained" color="primary" onClick={handleButtonClick}>
            View Client
          </VuiButton>
        </VuiBox>
      </VuiBox>


      <Table columns={tableColumns} rows={tableRows} />

      <Footer />
    </>
  );
};


export default ClientsLayout;
