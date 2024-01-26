// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";

//  components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

//  base styles
import typography from "assets/theme/base/typography";

function Footer({ links }) {
  const { size } = typography;

  const renderLinks = () =>
    links.map((link) => (
      <VuiBox key={link.name} component="li" px={2} lineHeight={1}>
        <Link href={link.href} target="_blank">
          <VuiTypography variant="button" fontWeight="medium" color="white">
            {link.name}
          </VuiTypography>
        </Link>
      </VuiBox>
    ));

  return (
    <VuiBox
      width="100%"
      display="flex"
      flexDirection={{ xs: "column", lg: "row" }}
      justifyContent="space-between"
      alignItems="center"
      px={1.5}
    >
      <VuiBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        color="white"
        fontSize={size.sm}
        px={1.5}
      >
        &copy; {new Date().getFullYear()}, 
        <Link href={"https://ucentralasia.org/home"} target="_blank">
          <VuiTypography variant="button" fontWeight="medium" color="white">
            &nbsp;University of Central Asia&nbsp;
          </VuiTypography>
        </Link>
      </VuiBox>
    </VuiBox>
  );
}


export default Footer;
