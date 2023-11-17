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
import kalVisualsSquare from "assets/images/message-card-image.png";
// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import Calendar from "examples/Calendar";
import MessageCard from "examples/Cards/MessageCard";
import PlaceholderCard from "examples/Cards/PlaceholderCard";
import MiniGradientLineChart from "examples/Charts/LineCharts/MiniGradientLineChart";
import Footer from "examples/Footer";
// Vision UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import InvoicesList from "examples/Lists/InvoicesList";
import RankingsList from "examples/Lists/RankingsList";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Welcome from "layouts/dashboards/crm/components/Welcome";
import calendarEventsData from "layouts/dashboards/crm/data/calendarEventsData";
// Data
import invoicesListData from "layouts/dashboards/crm/data/invoicesListData";
import rankingsListData from "layouts/dashboards/crm/data/rankingsListData";
import CommunicationCenter from "layouts/pages/account/billing/components/CommunicationCenter";
import ActiveUsers from "./components/ActiveUsers";
import NextEvents from "layouts/pages/NextEvents";
import DataTables from "layouts/pages/data-tables";
import { useMemo } from "react";
import {
  lineChartDataCRM1,
  lineChartDataCRM2,
  lineChartOptionsCRM1,
  lineChartOptionsCRM2,
} from "./data/lineChart";

function CRM() {
  const { transactionsData, revenueData } = rankingsListData;

  
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
        <Grid item xs={12} lg={5} xl={4}>
          <Grid item xs={12}>
            <DataTables />
          </Grid>
          <Grid item xs={12} md={6} lg={12}>
           <NextEvents />
          </Grid>
        </Grid>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default CRM;
