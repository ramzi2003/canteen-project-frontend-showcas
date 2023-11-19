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

// @mui material components
import Grid from "@mui/material/Grid";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import MiniGradientLineChart from "examples/Charts/LineCharts/MiniGradientLineChart";
import Footer from "examples/Footer";
// Vision UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Welcome from "layouts/dashboards/crm/components/Welcome";
// Data
import CommunicationCenter from "layouts/pages/account/billing/components/CommunicationCenter";
import ActiveUsers from "./components/ActiveUsers";

function CRM() {
  
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={3}>
        <VuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={7} xl={8}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <MiniGradientLineChart
                    title="Current Balance"
                    description={
                      <VuiTypography variant="lg" color="white" fontWeight="bold">
                        1500 KGS{" "}
                        <VuiTypography variant="button" color="success" fontWeight="bold">
                          +55%
                        </VuiTypography>
                      </VuiTypography>
                    }
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <MiniGradientLineChart
                    title="Total expenses"
                    description={
                      <VuiTypography variant="lg" color="white" fontWeight="bold">
                        173,000 KGS{" "}
                        <VuiTypography variant="button" color="success" fontWeight="bold">
                          +8%
                        </VuiTypography>
                      </VuiTypography>
                    }

                  />
                </Grid>
                <Grid item xs={12} md={4}>
                <MiniGradientLineChart
                    title="Last Login"
                    description={
                      <VuiTypography variant="lg" color="white" fontWeight="bold">
                        10 September, 2023{" "}
                      </VuiTypography>
                    }
                    />
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <VuiBox mt={3}>
                  <CommunicationCenter />
                </VuiBox>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={5} xl={4}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Welcome />
                </Grid>
                <Grid item xs={12} md={6} lg={12}>
                  <ActiveUsers />
                </Grid>
                
              </Grid>
            </Grid>
          </Grid>
        </VuiBox>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default CRM;
