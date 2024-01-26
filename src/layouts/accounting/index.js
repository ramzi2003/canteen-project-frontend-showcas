// @mui material components
import Grid from "@mui/material/Grid";

import { Card } from "@mui/material";

import DataTable from "examples/Tables/DataTable";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import RecentRegisteredGuests from "./components/data/recentRegisteredGuests";
import Deptors from "./components/data/deptors";
import FixedProps from "./components/fixedProps";

const AccountingLayout = () => {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Grid container px={1}>
        <Grid item xs={12} sm={9.5} lg={9.5}>
          <VuiBox pt={0} pb={0}>
            <VuiBox mb={3}>
              <Card>
                <VuiBox p={3} pl={0} lineHeight={1}>
                  <VuiTypography variant="h5" fontWeight="medium" color="white">
                    Recently Registered Guests
                  </VuiTypography>
                </VuiBox>
                <DataTable table={RecentRegisteredGuests} canSearch />
              </Card>
            </VuiBox>
            <VuiBox mb={3}>
              <Card>
                <VuiBox p={3} pl={0} lineHeight={1}>
                  <VuiTypography variant="h5" fontWeight="medium" color="white">
                    Deptors
                  </VuiTypography>
                </VuiBox>
                <DataTable table={Deptors} canSearch />
              </Card>
            </VuiBox>
          </VuiBox>
        </Grid>
        <Grid item xs={12} sm={12} md={2.5} lg={2.5} style={{ position: 'sticky', top: "110px", height: '100%' }}>
          <FixedProps />
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

export default AccountingLayout;
