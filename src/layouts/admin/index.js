import { useState } from "react";

import { useHistory } from 'react-router-dom';

import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import VuiBox from "components/VuiBox";
import adminTableData from "./components/data/adminTableData";
import Card from "@mui/material/Card";
import VuiTypography from "components/VuiTypography";
import DataTable from "examples/Tables/DataTable";
import VuiButton from "components/VuiButton";


function AdminLayout() {
    
  const history = useHistory();

  const settings = () => {
    history.push('admin/Settings');
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox my={3}>
        <VuiBox
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
          mb={2}
          sx={({ breakpoints }) => ({
            flexDirection: "column",
            [breakpoints.up("md")]: {
              flexDirection: "row",
            },
          })}
        >
          <VuiBox>
            <VuiButton
              onClick={settings}
              color="info"
              sx={({ breakpoints }) => ({
                mb: "10px",

                [breakpoints.up("md")]: {
                  mb: "0px",
                },
              })}
            >
              Settings
            </VuiButton>
          </VuiBox>

          <VuiBox>
            <VuiButton
              style={{ backgroundColor: "red", color: "white" }}
              mb={2}
              sx={({ breakpoints }) => ({
                mb: "10px",
                [breakpoints.up("md")]: {
                  mb: "2px",
                },
              })}
            >
              Delete Data
            </VuiButton>
          </VuiBox>
        </VuiBox>
      </VuiBox>
      <VuiBox pt={0} pb={0}>
        <VuiBox mb={3}>
          <Card>
            <VuiBox p={3} pl={0} lineHeight={1}>
              <VuiTypography variant="h5" fontWeight="medium" color="white">
                Admins
              </VuiTypography>
              <VuiTypography variant="text" fontWeight="regular">
                Total admins: 4
              </VuiTypography>
            </VuiBox>
            <DataTable table={adminTableData} canSearch />
          </Card>
        </VuiBox>
      </VuiBox>
    </DashboardLayout>
  );
}

export default AdminLayout;
