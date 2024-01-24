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
import Header from "layouts/canteen/component/Header/index";

// Data
import dataTableData from "layouts/canteen/pages/drinks/data/drinksData.js";
import { useHistory } from 'react-router-dom';
import { FaTrash, FaEraser, FaSave, FaHistory, FaFileAlt, FaUserCog, FaCog, FaUtensils, FaClipboardList } from 'react-icons/fa';

function DrinksPage() {
  const [menu, setMenu] = useState(null);

  const openMenu = (event) => setMenu(event.currentTarget);
  const closeMenu = () => setMenu(null);

  const history = useHistory();

  // Function to navigate to the specified path
  const historyPage = () => {
    history.push('/cash/history');
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
      <VuiBox py={2}>
        <MenuItem onClick={historyPage}><FaHistory style={{ marginRight: '8px' }} /> History</MenuItem>
        <MenuItem onClick={closeMenu}><FaFileAlt style={{ marginRight: '8px' }} /> Report</MenuItem>
        <MenuItem onClick={closeMenu}><FaUserCog style={{ marginRight: '8px' }} /> Admin </MenuItem>
        <MenuItem onClick={closeMenu}><FaCog style={{ marginRight: '8px' }} /> Settings</MenuItem>
        <MenuItem onClick={closeMenu}><FaUtensils style={{ marginRight: '8px' }} /> Portions</MenuItem>
        <MenuItem onClick={closeMenu}><FaClipboardList style={{ marginRight: '8px' }} /> Open Order</MenuItem>
        {/* <Divider sx={{ margin: "0.5rem 0" }} /> */}
      </VuiBox>
    </Menu>
  );

  return (
    <DashboardLayout>
      {/* <DashboardNavbar /> */}
      <Header />
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
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <VuiBox>
              <VuiButton 
                color="info"
                sx={({ breakpoints }) => ({
                  mb: "10px",

                  [breakpoints.up("md")]: {
                    mb: "0px",
                  },
                })}
              >
                <FaTrash style={{ marginRight: '5px' }} /> Delete
              </VuiButton>
            </VuiBox>

            <VuiBox>
              <VuiButton
                color="info"
                mb={2}
                sx={({ breakpoints }) => ({
                  mb: "10px",
                  [breakpoints.up("md")]: {
                    mb: "2px",
                    ml: "15px",
                  },
                })}
              >
                <FaEraser style={{ marginRight: '5px' }} /> Clear
              </VuiButton>
            </VuiBox>

            <VuiBox>
              <VuiButton
                color="info"
                mb={2}
                sx={({ breakpoints }) => ({
                  mb: "10px",
                  [breakpoints.up("md")]: {
                    mb: "2px",
                    ml: "15px",
                  },
                })}
              >
                <FaSave style={{ marginRight: '5px' }} /> Make order
              </VuiButton>
            </VuiBox>
          </div>


          
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
              More&nbsp;
              <Icon>keyboard_arrow_down</Icon>
            </VuiButton>
            {renderMenu}
            {/* <VuiBox ml={1}>
              <VuiButton variant="outlined" color="white">
                <Icon>description</Icon>
                &nbsp;export
              </VuiButton>
            </VuiBox> */}
          </VuiBox>
          
        </VuiBox>
        <Card>
          <VuiBox pb={0}>
            <VuiTypography variant="h6" color="white" mb={-6}>
              TOTAL: {"00.00"}
            </VuiTypography>
          </VuiBox>
          <DataTable table={dataTableData} entriesPerPage={false} canSearch />
        </Card>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default DrinksPage;
