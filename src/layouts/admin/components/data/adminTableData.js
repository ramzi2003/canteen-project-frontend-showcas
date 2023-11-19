/** 

=========================================================
* Vision UI PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Visionware.

*/
import VuiButton from "components/VuiButton";

export default {
    columns: [
      { Header: "#", accessor: "number", width: "5%" },
      { Header: "CATEGORIES", accessor: "categories", width: "35%" },
      { Header: "TOTAL", accessor: "total", width: "20%" },
      { Header: "TOTAL BALANCE", accessor: "totalBalance", width: "20%" },
      { Header: "ACTIONS", accessor: "actions", width: "20%" },
    ],
  
    rows: [
      {
        number: "1",
        categories: "Admins",
        total: 5,
        totalBalance: 1200,
        actions: <VuiButton color="white" variant="outlined">
        EDIT
      </VuiButton>,
      },
      {
        number: "2",
        categories: "Cashiers",
        total: 2,
        totalBalance: 20000,
        actions: <VuiButton color="white" variant="outlined">
        EDIT
      </VuiButton>,
      },
      {
        number: "3",
        categories: "Bookers",
        total: 15,
        totalBalance: 1234,
        actions: <VuiButton color="white" variant="outlined">
        EDIT
      </VuiButton>,
      },
      {
        number: "4  ",
        categories: "Bookers",
        total: 15,
        totalBalance: 1234,
        actions: <VuiButton color="white" variant="outlined">
        EDIT
      </VuiButton>,
      }
    ],
  };
  