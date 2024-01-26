

import React from "react";

import { Card, Icon } from "@mui/material";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

import cardimgfree from "assets/images/cardimgfree.png";

const WelcomeMark = () => {
  return (
    <Card
      sx={{
        backgroundImage: `url(${cardimgfree})`,
        backgroundSize: "cover",
        backgroundPosition: "50%",
      }}
    >
      <VuiBox height="100%" display="flex" flexDirection="column" justifyContent="space-between">
        <VuiBox mb="59px">
          <VuiTypography color="text" variant="button" fontWeight="regular" mb="12px">
            Welcome back,
          </VuiTypography>
          <VuiTypography color="white" variant="h3" fontWeight="bold" mb="18px">
            Ivan Ivanov
          </VuiTypography>
          <VuiTypography color="text" variant="h6" fontWeight="regular" mb="auto">
            Glad to see you again!
      
          </VuiTypography>
        </VuiBox>
      </VuiBox>
    </Card>
  );
};

export default WelcomeMark;
