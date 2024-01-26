import { useState } from "react";
import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import ComplexProjectCard from "examples/Cards/ProjectCards/ComplexProjectCard";

import Header from "layouts/cash/component/Header/index";

import { FaBowlRice } from "react-icons/fa6";
import { FaPizzaSlice, FaHamburger, FaCoffee, FaCookie, FaEgg } from "react-icons/fa";

import { Link } from "react-router-dom";




const cashProjects = [
  {
    icon: <FaEgg color="white" size="33px" />,
    title: "Breakfast",
    color: "info",
    description: "Start your day with a hearty breakfast. Fuel up for a productive day!",
    dateTime: "02.03.22",
  },
  {
    icon: <FaBowlRice color="white" size="33px" />,
    title: "Lunch",
    color: "info",
    description: "Enjoy a delicious lunch. Refuel and recharge for the afternoon.",
    dateTime: "22.11.21",
  },
  {
    icon: <FaPizzaSlice color="white" size="33px" />,
    title: "Dinner",
    color: "info",
    description: "Wrap up your day with a satisfying dinner. Reflect and relax.",
    dateTime: "06.03.20",
  },
  {
    icon: <FaCoffee color="white" size="33px" />,
    title: "Coffee break",
    color: "info",
    description: "Take a short coffee break. Recharge and socialize with your team.",
    dateTime: "Date for Coffee break",
  },
  {
    icon: <FaHamburger color="white" size="33px"/>,
    title: "Distribution",
    color: "info",
    description: "Engage in the distribution. Collaborate and distribute tasks effectively.",
    dateTime: "Date for Distribution",
  },
  {
    icon: <FaCookie color="white" size="33px"/>,
    title: "Coffee Break 2",
    color: "info",
    description: "Another coffee break. Take a moment to relax and connect with your team.",
    dateTime: "Date for Coffee break 2",
  },
];

function CashMain() {
  const [projectMenu, setProjectMenu] = useState(null);

  const openProjectMenu = (event) => setProjectMenu(event.currentTarget);
  const closeProjectMenu = () => setProjectMenu(null);


  const renderMenu = (state, close) => (
    <Menu
      anchorEl={state}
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={Boolean(state)}
      onClose={close}
      keepMounted
    >
      <MenuItem onClick={close}>View</MenuItem>
    </Menu>
  );

  return (
    <DashboardLayout>
      <Header />
      <VuiBox mt="30px" mb="24px">
        <Grid container>
          <Grid item xs={12}>
            <VuiBox mb={3} ml={60}>
              <VuiTypography variant="lg" color="white" fontWeight="bold">
                Choose Order Type
              </VuiTypography>
            </VuiBox>
            <VuiBox mb="40px">
              {/* <VuiTypography fontSize={16} color="text" fontWeight="regular">
                This is the paragraph where you can write more details about your cash projects. Keep your user engaged by providing meaningful information.
              </VuiTypography> */}
            </VuiBox>
          </Grid>
        </Grid>
        <VuiBox mb={1}>
          <Grid container spacing={3}>
            {cashProjects.map((project, index) => (
              <Grid key={index} item xs={12} md={6} lg={4}>
                <ComplexProjectCard
                  icon={project.icon}
                  title={
                  <Link to={`/cash/${project.title.toLowerCase()}`} style={{ color: 'white' }}>{project.title}</Link>
                }
                  color={project.color}
                  description={project.description}
                  // dateTime={project.dateTime}
                  dropdown={{
                    action: openProjectMenu,
                    menu: renderMenu(projectMenu, closeProjectMenu),
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </VuiBox>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default CashMain;
