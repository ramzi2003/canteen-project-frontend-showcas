import { useState } from "react";
import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import ComplexProjectCard from "examples/Cards/ProjectCards/ComplexProjectCard";
import PlaceholderCard from "examples/Cards/PlaceholderCard";
import Header from "layouts/cash/profile-overview/components/Header/index";


import { BsSlack, BsSpotify } from "react-icons/bs";
import { SiAdobexd, SiAtlassian } from "react-icons/si";


const PlaceholderIcon = () => <span>Icon Placeholder</span>;

const cashProjects = [
  {
    icon: <BsSlack color="white" size="33px" />,
    title: "Breakfast",
    color: "info",
    description: "Start your day with a hearty breakfast project. Fuel up for a productive day!",
    dateTime: "02.03.22",
  },
  {
    icon: <BsSpotify color="white" size="33px" />,
    title: "Lunch",
    color: "info",
    description: "Enjoy a delicious lunch project. Refuel and recharge for the afternoon.",
    dateTime: "22.11.21",
  },
  {
    icon: <SiAdobexd color="white" size="33px" />,
    title: "Dinner",
    color: "info",
    description: "Wrap up your day with a satisfying dinner project. Reflect and relax.",
    dateTime: "06.03.20",
  },
  {
    icon: <PlaceholderIcon />,
    title: "Coffee break",
    color: "info",
    description: "Take a short coffee break project. Recharge and socialize with your team.",
    dateTime: "Date for Coffee break",
  },
  {
    icon: <PlaceholderIcon />,
    title: "Distribution",
    color: "info",
    description: "Engage in the distribution project. Collaborate and distribute tasks effectively.",
    dateTime: "Date for Distribution",
  },
  {
    icon: <PlaceholderIcon />,
    title: "Coffee break 2",
    color: "info",
    description: "Another coffee break project. Take a moment to relax and connect with your team.",
    dateTime: "Date for Coffee break 2",
  },
];

function AllProjects() {
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
      <MenuItem onClick={close}>Action</MenuItem>
      <MenuItem onClick={close}>Another action</MenuItem>
      <MenuItem onClick={close}>Something else here</MenuItem>
    </Menu>
  );

  return (
    <DashboardLayout>
      <Header />
      <VuiBox mt="30px" mb="24px">
        <Grid container>
          <Grid item xs={12}>
            <VuiBox mb={1}>
              <VuiTypography variant="lg" color="white" fontWeight="bold">
                Some of Our Cash Projects
              </VuiTypography>
            </VuiBox>
            <VuiBox mb="40px">
              <VuiTypography fontSize={16} color="text" fontWeight="regular">
                This is the paragraph where you can write more details about your cash projects. Keep your user engaged by providing meaningful information.
              </VuiTypography>
            </VuiBox>
          </Grid>
        </Grid>
        <VuiBox mb={1}>
          <Grid container spacing={3}>
            {cashProjects.map((project, index) => (
              <Grid key={index} item xs={12} md={6} lg={4}>
                <ComplexProjectCard
                  icon={project.icon}
                  title={project.title}
                  color={project.color}
                  description={project.description}
                  dateTime={project.dateTime}
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

export default AllProjects;
