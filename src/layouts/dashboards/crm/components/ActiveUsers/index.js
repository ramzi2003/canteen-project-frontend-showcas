

import { Card, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
// Data
import colors from "assets/theme/base/colors";
import linearGradient from "assets/theme/functions/linearGradient";
//  React components
import VuiBox from "components/VuiBox";
import VuiProgress from "components/VuiProgress";
import VuiTypography from "components/VuiTypography";
import BarChart from "examples/Charts/BarCharts/BasicBarChart/index";
import { FaShoppingCart, FaWallet } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";
import { IoBuild } from "react-icons/io5";
import { barChartDataDashboard, barChartOptionsDashboard } from "../data/barChart";

const ActiveUsers = () => {
  const { gradients } = colors;
  const { cardContent } = gradients;

  return (
    <Card>
      <VuiBox>
        <VuiBox
          mb="24px"
          height="220px"
          sx={{
            background: linearGradient(cardContent.main, cardContent.state, cardContent.deg),
            borderRadius: "20px",
          }}
        >
          <BarChart
            barChartData={barChartDataDashboard}
            barChartOptions={barChartOptionsDashboard}
          />
        </VuiBox>
        <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
          Missed Meals
        </VuiTypography>
        <VuiBox display="flex" alignItems="center" mb="40px">
          <VuiTypography variant="button" color="success" fontWeight="bold">
            (+23){" "}
            <VuiTypography variant="button" color="text" fontWeight="regular">
              than last week
            </VuiTypography>
          </VuiTypography>
        </VuiBox>
        <Grid container spacing="50px">
          <Grid item xs={6} md={3} lg={3}>
            <Stack direction="row" spacing="10px" mb="6px">
              <VuiTypography color="text" variant="button" fontWeight="medium">
                Breakfast
              </VuiTypography>
            </Stack>
            <VuiTypography color="white" variant="lg" fontWeight="bold" mb="8px">
              10
            </VuiTypography>
            
          </Grid>
          <Grid item xs={6} md={3} lg={3}>
            <Stack direction="row" spacing="10px" mb="6px">
              <VuiTypography color="text" variant="button" fontWeight="medium">
                Lunch
              </VuiTypography>
            </Stack>
            <VuiTypography color="white" variant="lg" fontWeight="bold" mb="8px">
              3
            </VuiTypography>
        
          </Grid>
          <Grid item xs={6} md={3} lg={3}>
            <Stack direction="row" spacing="10px" mb="6px">
              <VuiTypography color="text" variant="button" fontWeight="medium">
                Dinner
              </VuiTypography>
            </Stack>
            <VuiTypography color="white" variant="lg" fontWeight="bold" mb="8px">
              2
            </VuiTypography>
        
          </Grid>
          <Grid item xs={6} md={3} lg={3}>
            <Stack direction="row" spacing="10px" mb="6px">
              <VuiTypography color="text" variant="button" fontWeight="medium">
                Total
              </VuiTypography>
            </Stack>
            <VuiTypography color="white" variant="lg" fontWeight="bold" mb="8px">
              15
            </VuiTypography>
        
          </Grid>
        </Grid>
      </VuiBox>
    </Card>
  );
};

export default ActiveUsers;
