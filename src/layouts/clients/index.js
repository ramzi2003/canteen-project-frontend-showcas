// @mui material components
import Grid from "@mui/material/Grid";
import kalVisualsSquare from "assets/images/message-card-image.png";
// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

import MessageCard from "examples/Cards/MessageCard";
import PlaceholderCard from "examples/Cards/PlaceholderCard";
import BasicLineChart from "examples/Charts/LineCharts/BasicLineChart";
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

const ClientsLayout = () => {
  return (
    <>
      <DashboardNavbar />
      <Grid item xs={12} lg={5} xl={4}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Welcome />
          </Grid>
          <Grid item xs={12} md={6} lg={12}>
            <InvoicesList title="invoices" invoices={invoicesListData} />
          </Grid>
          <Grid item xs={12} md={6} lg={12}>
            <MessageCard
              image={kalVisualsSquare}
              text={
                <>
                  Today is Arthur's birthday.
                  <br /> Wish her the best of luck!
                </>
              }
              button={{ color: "white", text: "send message" }}
              action={{
                type: "internal",
                route: "/dashboards/crm",
                color: "info",
                label: "send message",
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ClientsLayout;
