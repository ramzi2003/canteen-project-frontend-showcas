import React from "react";

import { Card } from "@mui/material";
import { useHistory } from "react-router-dom";

import DataTable from "examples/Tables/DataTable";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import VuiButton from "components/VuiButton";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import ropsTable from "../data/ropsTable";


function ROPs() {

  const history = useHistory();

  const newROP = () => {
    history.push('/accounting/new-rop');
  };

  return (
    <DashboardLayout>
       <DashboardNavbar/>
      <VuiBox pt={0} pb={0}>
        <VuiBox mb={3}>
          <Card>
            <VuiBox p={3} pl={0} lineHeight={1}>
              <VuiTypography variant="h5" fontWeight="medium" color="white">
                ROPs
              </VuiTypography>
            </VuiBox>
            <VuiBox >
            <VuiButton 
              onClick={newROP}
              color="info"
              sx={({ breakpoints }) => ({
                mb: "10px",
    
                [breakpoints.up("md")]: {
                  mb: "0px",
                  
                },
              })}
            >
              New ROP
            </VuiButton>
          </VuiBox>
            <DataTable table={ropsTable} canSearch entriesPerPage={false} />
          </Card>
        </VuiBox>
      </VuiBox>
    </DashboardLayout>
  );
}

export default ROPs;
