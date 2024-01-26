

import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import VuiSwitch from "components/VuiSwitch";

//  components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiAvatar from "components/VuiAvatar";

// Images


function Header() {
  const [visible, setVisible] = useState(true);

  const handleSetVisible = () => setVisible(!visible);

  return (
    <Card id="profile">
      <VuiBox>
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <VuiAvatar
              alt="profile-image"
              variant="rounded"
              size="xl"
              shadow="sm"
            />
          </Grid>
          <Grid item>
            <VuiBox height="100%" display="flex" flexDirection="column" mt={0.5} lineHeight={1}>
              <VuiTypography variant="lg" color="white" fontWeight="bold">
                Mark Johnson
              </VuiTypography>
              <VuiTypography variant="button" color="text" fontWeight="regular">
                mark@gmail.com
              </VuiTypography>
            </VuiBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3} sx={{ ml: "auto" }}>
            <VuiBox
              display="flex"
              justifyContent={{ md: "flex-end" }}
              alignItems="center"
              lineHeight={1}
            >
              <VuiTypography variant="caption" color="white" fontWeight="regular">
                Switch to {visible ? "invisible" : "visible"}
              </VuiTypography>
              <VuiBox mx={1}>
                <VuiSwitch color="info" checked={visible} onChange={handleSetVisible} />
              </VuiBox>
            </VuiBox>
          </Grid>
        </Grid>
      </VuiBox>
    </Card>
  );
}

export default Header;
