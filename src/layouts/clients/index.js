// import { useState } from "react";

// // @mui material components
// import Card from "@mui/material/Card";
// import Icon from "@mui/material/Icon";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import Divider from "@mui/material/Divider";

// // Vision UI Dashboard PRO React components
// import VuiBox from "components/VuiBox";
// import VuiTypography from "components/VuiTypography";
// import VuiButton from "components/VuiButton";

// // Vision UI Dashboard PRO React example components
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
// import DataTable from "examples/Tables/DataTable";
// import Header from "layouts/cash/component/Header/index";

// // Data
// import dataTableData from "layouts/clients/data/dataTableData";
// import { useHistory } from 'react-router-dom';

// function ClientsTable() {
//   const [menu, setMenu] = useState(null);

//   const openMenu = (event) => setMenu(event.currentTarget);
//   const closeMenu = () => setMenu(null);

//   const history = useHistory();

//   // Function to navigate to the specified path
//   const addDepartment = () => {
//     history.push('clients/add-department');
//   };

//   const renderMenu = (
//     <Menu
//       anchorEl={menu}
//       anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
//       transformOrigin={{ vertical: "top", horizontal: "left" }}
//       open={Boolean(menu)}
//       onClose={closeMenu}
//       keepMounted
//     >
//       <MenuItem onClick={closeMenu}>Status: Paid</MenuItem>
//       <MenuItem onClick={closeMenu}>Status: Refunded</MenuItem>
//       <MenuItem onClick={closeMenu}>Status: Canceled</MenuItem>
//       <Divider sx={{ margin: "0.5rem 0" }} />
//       <MenuItem onClick={closeMenu}>
//         <VuiTypography variant="button" color="error" fontWeight="regular">
//           Remove Filter
//         </VuiTypography>
//       </MenuItem>
//     </Menu>
//   );

//   return (
//     <DashboardLayout>
//       <DashboardNavbar />
//       <VuiBox my={3}>
//         <VuiBox
//           display="flex"
//           justifyContent="space-between"
//           alignItems="flex-start"
//           mb={2}
//           sx={({ breakpoints }) => ({
//             flexDirection: "column",
//             [breakpoints.up("md")]: {
//               flexDirection: "row",
//             },
//           })}
//         >
//           <VuiBox >
//             <VuiButton 
//               onClick={addDepartment}
//               color="info"
//               sx={({ breakpoints }) => ({
//                 mb: "10px",
    
//                 [breakpoints.up("md")]: {
//                   mb: "0px",
                  
//                 },
//               })}
//             >
//               add department
//             </VuiButton>
//           </VuiBox>

//           <VuiBox>
//             <VuiButton
//               color="info"
//               mb={2}
//               sx={({ breakpoints }) => ({
//                 mb: "10px",
//                 [breakpoints.up("md")]: {
//                   mb: "2px",
//                   ml: "-400px",
//                 },
//               })}
//               >
//                 change department
//             </VuiButton>
//           </VuiBox>

          
//           <VuiBox display="flex">
//             <VuiButton
//               variant={menu ? "contained" : "outlined"}
//               color="white"
//               onClick={openMenu}
//               sx={({ palette: { white }, borders: { borderWidth } }) => ({
//                 background: "transparent !important",
//                 border: `${borderWidth[1]} solid ${white.main} !important`,
//               })}
//             >
//               filters&nbsp;
//               <Icon>keyboard_arrow_down</Icon>
//             </VuiButton>
//             {renderMenu}
//             <VuiBox ml={1}>
//               <VuiButton variant="outlined" color="white">
//                 <Icon>description</Icon>
//                 &nbsp;export
//               </VuiButton>
//             </VuiBox>
//           </VuiBox>
//         </VuiBox>
//         <Card>
//           <DataTable table={dataTableData} entriesPerPage={true} canSearch />
//         </Card>
//       </VuiBox>
//       <Footer />
//     </DashboardLayout>
//   );
// }

// export default ClientsTable;

// ////////////////////////////////////////// Test API //////////////////////////////////////////

import React, { useState, useEffect } from 'react';

const ClientsPage = () => {
  const [clientData, setClientData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        console.log('Access Token:', accessToken);
        if (!accessToken) {
          throw new Error('Access token is missing. Please sign in.');
        }

        // Fetch all clients
        const clientId = 1;

        const apiResponse = await fetch(`http://localhost:8080/api/clients/${clientId}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        });
        console.log('API Response:', apiResponse);

        if (!apiResponse.ok) {
          console.error('Error fetching data:', apiResponse.status, apiResponse.statusText);
          throw new Error('Failed to fetch data');
        }

        const result = await apiResponse.json();
        console.log('Fetched Client Data:', result); // Log the fetched data
        setClientData(result);
        setError(null);
      } catch (error) {
        console.error('Fetch Data Error:', error);
        setError('Error fetching data. Please try again.');
        setClientData(null);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {error && <p>{error}</p>}
      {clientData && (
        <div>
          <h2>Client Information:</h2>
          <p style={{ color: 'white' }}>
            <strong>Name:</strong> {clientData.data.name}
          </p>
          <p style={{ color: 'white' }}>
            <strong>Email:</strong> {clientData.data.email}
          </p>
          <p style={{ color: 'white' }}>
            <strong>Age:</strong> {clientData.data.age}
          </p>
          <p style={{ color: 'white' }}>
            <strong>Gender:</strong> {clientData.data.gender}
          </p>
        </div>
      )}
      {!clientData && !error && <p>Loading...</p>}
    </div>
  );
};

export default ClientsPage;
