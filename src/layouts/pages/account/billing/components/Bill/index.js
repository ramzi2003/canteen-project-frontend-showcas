

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

//  React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";
import linearGradient from "assets/theme/functions/linearGradient";
import colors from "assets/theme/base/colors";

function Bill({ name, date, time, message, noGutter }) {
  const { gradients } = colors;
  const { bill } = gradients;

  return (
    <VuiBox
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="flex-start"
      sx={{ background: linearGradient(bill.main, bill.state, bill.deg) }}
      borderRadius="lg"
      p="24px"
      mb={noGutter ? "0px" : "2px"}
      mt="20px"
    >
      <VuiBox width="100%" display="flex" flexDirection="column">
        <VuiBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
          mb="5px"
        >
          <VuiTypography
            variant="button"
            color="white"
            fontWeight="medium"
            textTransform="capitalize"
          >
            {name}
          </VuiTypography>

          <VuiBox
            display="flex"
            alignItems="center"
            mt={{ xs: 2, sm: 0 }}
            ml={{ xs: -1.5, sm: 0 }}
            sx={({ breakpoints }) => ({
              [breakpoints.only("sm")]: {
                flexDirection: "column",
              },
            })}
          >
            
          </VuiBox>
        </VuiBox>
        <VuiBox mb={1} lineHeight={0}>
          <VuiTypography variant="caption" color="text">
            Date:&nbsp;&nbsp;&nbsp;
            <VuiTypography
              variant="caption"
              color="text"
              fontWeight="regular"
              textTransform="capitalize"
            >
              {date}
            </VuiTypography>
          </VuiTypography>
        </VuiBox>
        <VuiBox mb={1} lineHeight={0}>
          <VuiTypography variant="caption" color="text">
            Time:&nbsp;&nbsp;&nbsp;
            <VuiTypography variant="caption" fontWeight="regular" color="text">
              {time}
            </VuiTypography>
          </VuiTypography>
        </VuiBox>
        <VuiTypography variant="caption" color="text">
          Message:&nbsp;&nbsp;&nbsp;
          <VuiTypography variant="caption" fontWeight="regular" color="text">
            {message}
          </VuiTypography>
        </VuiTypography>
      </VuiBox>
    </VuiBox>
  );
}

// Setting default values for the props of Bill
Bill.defaultProps = {
  noGutter: false,
};

// Typechecking props for the Bill
Bill.propTypes = {
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  vat: PropTypes.string.isRequired,
  noGutter: PropTypes.bool,
};

export default Bill;
