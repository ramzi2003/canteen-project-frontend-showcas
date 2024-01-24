import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Avatar from "assets/images/avatar7.png";
import VuiAvatar from "components/VuiAvatar";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import { IoDocument } from "react-icons/io5";
import { IoMdCube } from "react-icons/io";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function Header() {
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(0);
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    function handleTabsOrientation() {
      return window.innerWidth < 1280
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    }

    function updateCurrentDateTime() {
      const now = new Date();
      const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
      const formattedDate = now.toLocaleDateString(undefined, options);
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const formattedTime = `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
      const dateTimeString = `${formattedDate} ${formattedTime}`;
      setCurrentDateTime(dateTimeString);
    }

    window.addEventListener("resize", handleTabsOrientation);
    handleTabsOrientation();
    updateCurrentDateTime();

    const intervalId = setInterval(updateCurrentDateTime, 60000); // Update time every minute

    return () => {
      window.removeEventListener("resize", handleTabsOrientation);
      clearInterval(intervalId);
    };
  }, [tabsOrientation]);

  const handleSetTabValue = (event, newValue) => setTabValue(newValue);

  return (
    <VuiBox position="relative">
      <DashboardNavbar light />
      <Card sx={{ px: 3, mt: 5 }}>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          sx={({ breakpoints }) => ({
            [breakpoints.up("xs")]: {
              gap: "16px",
            },
            [breakpoints.up("sm")]: {
              gap: "0px",
            },
          })}
        >
          <Grid
            item
            xs={12}
            md={1.7}
            lg={1.5}
            xl={1.2}
            xxl={0.8}
            display="flex"
            sx={({ breakpoints }) => ({
              [breakpoints.only("sm")]: {
                justifyContent: "center",
                alignItems: "center",
              },
            })}
          >
            <VuiAvatar
              src={Avatar}
              alt="profile-image"
              variant="rounded"
              size="xl"
              shadow="sm"
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={4.3}
            lg={4}
            xl={3.8}
            xxl={7}
            sx={({ breakpoints }) => ({
              [breakpoints.only("sm")]: {
                textAlign: "center",
              },
            })}
          >
            <VuiBox
              height="100%"
              mt={0.5}
              lineHeight={1}
              display="flex"
              flexDirection="column"
              sx={({ breakpoints }) => ({
                [breakpoints.only("sm")]: {
                  justifyContent: "center",
                  alignItems: "center",
                  my: "12px",
                },
              })}
            >
              <VuiTypography variant="lg" color="white" fontWeight="bold">
                Ivan Ivanov
              </VuiTypography>
              <VuiTypography variant="button" color="text" fontWeight="regular">
                ivanivanov@gmail.com
              </VuiTypography>
            </VuiBox>
          </Grid>
          <Grid item xs={12} md={6} lg={6.5} xl={6} xxl={4} sx={{ ml: "auto" }}>
            <AppBar position="static">
              <Tabs
                orientation={tabsOrientation}
                value={tabValue}
                onChange={handleSetTabValue}
                sx={{ background: "transparent", display: "flex", justifyContent: "flex-end" }}
              >
                <Tab
                  label="ORDER TYPE"
                  icon={<IoMdCube size="16px" color="white" fontWeight="bold" />}
                />
                <Tab
                  label="PAYMENT"
                  icon={<IoDocument size="16px" color="white" fontWeight="bold" />}
                  onClick={() => {
                    window.location.href = "/#/cash";
                  }}
                />
                <VuiBox display="flex" alignItems="center" justifyContent="center" sx={{ ml: "auto" }}>
                  <VuiTypography variant="button" color="white" fontWeight="bold">
                    {currentDateTime}
                  </VuiTypography>
                </VuiBox>
              </Tabs>
            </AppBar>
          </Grid>
        </Grid>
      </Card>
    </VuiBox>
  );
}

export default Header;
