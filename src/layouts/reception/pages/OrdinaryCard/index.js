import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";

// Vision UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import dataOrdinary from "layouts/reception/data/dataOrdinary";
import { useHistory } from 'react-router-dom';

function OrdinaryCardTable() {
  const [menu, setMenu] = useState(null);

  const openMenu = (event) => setMenu(event.currentTarget);
  const closeMenu = () => setMenu(null);

  const history = useHistory();

  // Function to navigate to the specified path
  const addCard = () => {
    history.push('/reception/add-card');
  };

  const navigateToGuestCard = () => {
    history.push('/reception/guest-card');
  };

  const navigateToCorporateCard = () => {
    history.push('/reception/corporate-card');
  };

  const navigateToOrdinaryCard = () => {
    history.push('/reception/ordinary-card');
  };

  const renderMenu = (
    <Menu
      anchorEl={menu}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      transformOrigin={{ vertical: "top", horizontal: "left" }}
      open={Boolean(menu)}
      onClose={closeMenu}
      keepMounted
    >
      <MenuItem onClick={navigateToGuestCard}>Guest</MenuItem>
      <MenuItem onClick={navigateToCorporateCard}>Corporate</MenuItem>
      <MenuItem onClick={navigateToOrdinaryCard}>Ordinary</MenuItem>
      <Divider sx={{ margin: "0.5rem 0" }} />
      {/* <MenuItem onClick={closeMenu}>
        <VuiTypography variant="button" color="error" fontWeight="regular">
          Remove Filter
        </VuiTypography>
      </MenuItem> */}
    </Menu>
  );

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox my={3}>
        <VuiBox
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
          mb={2}
          sx={({ breakpoints }) => ({
            flexDirection: "column",
            [breakpoints.up("md")]: {
              flexDirection: "row",
            },
          })}
        >
          <VuiBox >
            <VuiButton 
              onClick={addCard}
              color="info"
              sx={({ breakpoints }) => ({
                mb: "10px",
    
                [breakpoints.up("md")]: {
                  mb: "0px",
                  
                },
              })}
            >
              add card
            </VuiButton>
          </VuiBox>

          {/* <VuiBox>
            <VuiButton
              color="info"
              mb={2}
              sx={({ breakpoints }) => ({
                mb: "10px",
                [breakpoints.up("md")]: {
                  mb: "2px",
                  ml: "-400px",
                },
              })}
              >
                change department
            </VuiButton>
          </VuiBox> */}

          
          <VuiBox display="flex">
            <VuiButton
              variant={menu ? "contained" : "outlined"}
              color="white"
              onClick={openMenu}
              sx={({ palette: { white }, borders: { borderWidth } }) => ({
                background: "transparent !important",
                border: `${borderWidth[1]} solid ${white.main} !important`,
              })}
            >
              cards&nbsp;
              <Icon>keyboard_arrow_down</Icon>
            </VuiButton>
            {renderMenu}
            <VuiBox ml={1}>
              <VuiButton variant="outlined" color="white">
                <Icon>description</Icon>
                &nbsp;export
              </VuiButton>
            </VuiBox>
          </VuiBox>
        </VuiBox>
        <Card>
          <DataTable table={dataOrdinary} entriesPerPage={false} canSearch />
        </Card>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default OrdinaryCardTable;
