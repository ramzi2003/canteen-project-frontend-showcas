import { useState } from "react";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Menu from "@mui/material/Menu";
// import Grid from "@mui/material/Grid";

//  components
import VuiBox from "components/VuiBox";

//  example components
import DefaultNavbarLink from "examples/Navbars/DefaultNavbar/DefaultNavbarLink";

//  base styles
import colors from "assets/theme/base/colors";

// DefaultNavbar dropdown menus
import PagesMenu from "examples/Navbars/DefaultNavbar/Menus/PagesMenu";
import AuthenticationMenu from "examples/Navbars/DefaultNavbar/Menus/AuthenticationMenu";
import ApplicationsMenu from "examples/Navbars/DefaultNavbar/Menus/ApplicationsMenu";
import EcommerceMenu from "examples/Navbars/DefaultNavbar/Menus/EcommerceMenu";

function DefaultNavbarMobile({ routes, open, close }) {
  const { white } = colors;
  const { width } = open && open.getBoundingClientRect();
  const [openCollapse, setOpenCollapse] = useState(false);

  const handleSepOpenCollapse = (name) =>
    openCollapse === name ? setOpenCollapse(false) : setOpenCollapse(name);

  return (
    <Menu
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      anchorEl={open}
      open={Boolean(open)}
      onClose={close}
      MenuListProps={{ style: { width: `calc(${width}px - 4rem)` } }}
    >
      <VuiBox px={0.5}>
        <DefaultNavbarLink
          name="pages"
          collapseStatus={openCollapse === "pages"}
          onClick={() => handleSepOpenCollapse("pages")}
        >
          <VuiBox maxHeight="16rem" overflow="auto">
            <PagesMenu routes={routes} mobileMenu />
          </VuiBox>
        </DefaultNavbarLink>
        <DefaultNavbarLink
          name="authentication"
          collapseStatus={openCollapse === "authentication"}
          onClick={() => handleSepOpenCollapse("authentication")}
        >
          <VuiBox maxHeight="16rem" overflow="auto">
            <AuthenticationMenu routes={routes} mobileMenu />
          </VuiBox>
        </DefaultNavbarLink>
        <DefaultNavbarLink
          name="applications"
          collapseStatus={openCollapse === "applications"}
          onClick={() => handleSepOpenCollapse("applications")}
        >
          <VuiBox maxHeight="16rem" overflow="auto">
            <ApplicationsMenu routes={routes} mobileMenu />
          </VuiBox>
        </DefaultNavbarLink>
        <DefaultNavbarLink
          name="ecommerce"
          collapseStatus={openCollapse === "ecommerce"}
          onClick={() => handleSepOpenCollapse("ecommerce")}
        >
          <VuiBox maxHeight="16rem" overflow="auto">
            <EcommerceMenu routes={routes} mobileMenu />
          </VuiBox>
        </DefaultNavbarLink>
      </VuiBox>
    </Menu>
  );
}

// Typechecking props for the DefaultNavbarMenu
DefaultNavbarMobile.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  open: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
  close: PropTypes.oneOfType([PropTypes.func, PropTypes.bool, PropTypes.object]).isRequired,
};

export default DefaultNavbarMobile;
