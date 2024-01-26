

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

//  components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";

function StatusCell({ icon, color, status }) {
  return (
    <VuiBox display="flex" alignItems="center">
      <VuiBox mr={1}>
        <VuiButton variant="outlined" color={color} size="small" iconOnly circular>
          <Icon sx={{ fontWeight: "bold" }}>{icon}</Icon>
        </VuiButton>
      </VuiBox>
      <VuiTypography variant="caption" fontWeight="medium" color="text" sx={{ lineHeight: 0 }}>
        {status}
      </VuiTypography>
    </VuiBox>
  );
}

// Typechecking props for the StatusCell
StatusCell.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default StatusCell;
