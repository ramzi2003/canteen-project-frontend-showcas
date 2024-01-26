import React from "react";
import DataTable from "examples/Tables/DataTable";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import { Card } from "@mui/material";

import withholdFromSalaryTable from "../data/withholdFromSalaryTable";
import VuiButton from "components/VuiButton";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function WithholdFromSalary() {
  return (
    <DashboardLayout>
      <DashboardNavbar/>
      <VuiBox pt={0} pb={0}>
        <VuiBox mb={3}>
          <Card>
            <VuiBox p={3} pl={0} lineHeight={1}>
              <VuiTypography variant="h5" fontWeight="medium" color="white">
                Clients with payment type "Withhold from salary"
              </VuiTypography>
            </VuiBox>
            <VuiBox p={3} pl={0}>
              <VuiTypography color="light" fontWeight="light">
                <span style={{ color: "red", marginRight: "1vw" }}>ATTENTION!</span> By clicking
                "Withhold from salary", all chosen clients will have their existing debt reduced to
                zero.
              </VuiTypography>
              <VuiBox my={2}>
                <VuiButton color="info">Withhold from salary</VuiButton>
              </VuiBox>
            </VuiBox>
            <DataTable table={withholdFromSalaryTable} entriesPerPage={false} canSearch />
          </Card>
        </VuiBox>
      </VuiBox>
    </DashboardLayout>
  );
}

export default WithholdFromSalary;
