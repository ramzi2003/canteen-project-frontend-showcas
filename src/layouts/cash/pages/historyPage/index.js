import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";

// Vision UI Dashboard PRO React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import Header from "layouts/cash/component/Header/index";

// Data
import breakfastData from "layouts/cash/pages/historyPage/data/breakfastData.js";
import lunchData from "layouts/cash/pages/historyPage/data/lunchData.js";
import dinnerData from "layouts/cash/pages/historyPage/data/dinnerData.js";
import coffeeBreakData from "layouts/cash/pages/historyPage/data/coffeeBreakData.js";
import coffeeBreak2Data from "layouts/cash/pages/historyPage/data/coffeeBreak2Data.js";
import distributionData from "layouts/cash/pages/historyPage/data/distributionData.js";
import dayTotalData from "layouts/cash/pages/historyPage/data/dayTotalData.js";
import cashDepositData from "layouts/cash/pages/historyPage/data/cashDepositData.js";

import { useHistory } from 'react-router-dom';
import { FaTrash, FaEraser, FaSave, FaHistory, FaFileAlt, FaUserCog, FaCog, FaUtensils } from 'react-icons/fa';

function historyPage() {
  const [menu, setMenu] = useState(null);
  const [currentTable, setCurrentTable] = useState("default"); // State to track the current table

  const openMenu = (event) => setMenu(event.currentTarget);
  const closeMenu = () => setMenu(null);

  const history = useHistory();

  // function to handle breakfast table click
  const breakfastTable = () => {
    setCurrentTable("default");
    closeMenu();
  };
 

  // Function to handle the Lunch button click
  const lunchTable = () => {
    setCurrentTable("lunch");
    closeMenu(); 
  };

  // function to handle dinner table click
  const dinnerTable = () => {
    setCurrentTable("dinner");
    closeMenu();
  }

  // function to handle coffee break table click
  const coffeeBreakTable = () => {
    setCurrentTable("coffeeBreak");
    closeMenu();
  }

  // function to handle coffee break 2 table click
  const coffeeBreak2Table = () => {
    setCurrentTable("coffeeBreak2");
    closeMenu();
  }

  // function to handle distribution table click
  const distributionTable = () => {
    setCurrentTable("distribution");
    closeMenu();
  }

  // function to handle dayTotal table click
  const dayTotalTable = () => {
    setCurrentTable("dayTotal");
    closeMenu();
  }

  // function to handle cash deposit table click
  const cashDepositTable = () => {
    setCurrentTable("cashDeposit");
    closeMenu();
  }



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
        <MenuItem onClick={breakfastTable}><FaHistory style={{ marginRight: '8px' }} /> Breakfast</MenuItem>
        <MenuItem onClick={lunchTable}><FaHistory style={{ marginRight: '8px' }} /> Lunch</MenuItem>
        <MenuItem onClick={dinnerTable}><FaFileAlt style={{ marginRight: '8px' }} /> Dinner</MenuItem>
        <MenuItem onClick={coffeeBreakTable}><FaUserCog style={{ marginRight: '8px' }} /> Coffee Break </MenuItem>
        <MenuItem onClick={coffeeBreak2Table}><FaCog style={{ marginRight: '8px' }} /> Coffee Break 2</MenuItem>
        <MenuItem onClick={distributionTable}><FaUtensils style={{ marginRight: '8px' }} /> Distribution</MenuItem>
        <MenuItem onClick={dayTotalTable}>Day Total</MenuItem>
        <MenuItem onClick={cashDepositTable}>Cash Deposit</MenuItem>
        
        
      </VuiBox>
    </Menu>
  );

  return (
    <DashboardLayout>
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
            <VuiBox ml={1}>
              <VuiButton variant="outlined" color="white">
                <Icon>description</Icon>
                &nbsp;export
              </VuiButton>
            </VuiBox>
          </VuiBox>
        </VuiBox>
        <Card>
          <VuiBox pb={0}>
            <VuiTypography variant="h4" color="white" mb={2}>
              {currentTable === "default" && "Breakfast"}
              {currentTable === "lunch" && "Lunch"}
              {currentTable === "dinner" && "Dinner"}
              {currentTable === "coffeeBreak" && "Coffee Break"}
              {currentTable === "coffeeBreak2" && "Coffee Break 2"}
              {currentTable === "distribution" && "Distribution"}
              {currentTable === "dayTotal" && "Day Total"}
              {currentTable === "cashDeposit" && "Cash Deposit"}
            </VuiTypography>
          </VuiBox>
          {currentTable === "default" && <DataTable table={breakfastData} entriesPerPage={true} canSearch />}
          {currentTable === "lunch" && <DataTable table={lunchData} entriesPerPage={true} canSearch />} 
          {currentTable === "dinner" && <DataTable table={dinnerData} entriesPerPage={true} canSearch />}
          {currentTable === "coffeeBreak" && <DataTable table={coffeeBreakData} entriesPerPage={true} canSearch />}
          {currentTable === "coffeeBreak2" && <DataTable table={coffeeBreak2Data} entriesPerPage={true} canSearch />}
          {currentTable === "distribution" && <DataTable table={distributionData} entriesPerPage={true} canSearch />}
          {currentTable === "dayTotal" && <DataTable table={dayTotalData} entriesPerPage={true} canSearch />}
          {currentTable === "cashDeposit" && <DataTable table={cashDepositData} entriesPerPage={true} canSearch />}
          <VuiBox pb={0}>
            <VuiTypography variant="h6" color="white" mb={3} ml={120}>
              TOTAL ORDERED: {"00.00"}
            </VuiTypography>
          </VuiBox>
        </Card>

      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default historyPage;
