import { Card } from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React from "react";

import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import ReportParameters from "layouts/accounting/components/pages/reportParamteres";

function MonthlyReports() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox p={3} pl={0} lineHeight={1}>
        <VuiTypography variant="h5" fontWeight="medium" color="white">
          Canteen Report
        </VuiTypography>
      </VuiBox>
      <Card>
        <VuiBox p={3} pl={0} lineHeight={1}>
          <VuiTypography variant="h6" fontWeight="light" color="white">
            Report parameters
          </VuiTypography>
        </VuiBox>
        <ReportParameters />
      </Card>
      <VuiBox my={3}>
        <Card>
        <VuiBox p={3} pl={0} lineHeight={1}>
          <VuiTypography variant="h6" fontWeight="light" color="white">
            Results
          </VuiTypography>
        </VuiBox>
        </Card>
      </VuiBox>
    </DashboardLayout>
  );
}

export default MonthlyReports;
