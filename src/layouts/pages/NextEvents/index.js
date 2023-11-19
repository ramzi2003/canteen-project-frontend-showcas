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
import Card from "@mui/material/Card";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Vision UI Dashboard PRO React example components
import DefaultItem from "examples/Items/DefaultItem";

// React icons
import { FaWallet } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";

function NextEvents() {
  return (
    <Card sx={{ height: "100%" }}>
      <VuiBox pt={2} px={2} mb={6}>
        <VuiTypography variant="h6" fontWeight="medium" color="white">
          Orders Overview
        </VuiTypography>
      </VuiBox>
      <VuiBox p={2}>
        <DefaultItem
          icon={<IoNotifications size="16px" color="white" />}
          title="600 KGS, breakfast"
          description="September 2"
        />
        <VuiBox mt={4}>
          <DefaultItem
            icon={<IoNotifications size="18px" color="white" />}
            color="primary"
            title="400 KGS, Dinner"
            description="September 2"
          />
        </VuiBox>
        <VuiBox mt={4}>
          <DefaultItem
            icon={<IoNotifications size="16px" color="white" />}
            title="400 KGS, Dinner"
            description="September 2"
          />
        </VuiBox>
        <VuiBox mt={4}>
          <DefaultItem
            icon={<IoNotifications size="18px" color="white" />}
            color="primary"
            title="400 KGS, Dinner"
            description="September 2"
          />
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default NextEvents;
