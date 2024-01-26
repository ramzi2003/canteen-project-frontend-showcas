
// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

//  components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiAvatar from "components/VuiAvatar";

function CustomerCell({ image, name, color }) {
  return (
    <VuiBox display="flex" alignItems="center">
      <VuiBox mr={1}>
        <VuiAvatar bgColor={color} src={image} alt={name} size="xs" />
      </VuiBox>
      <VuiTypography variant="caption" fontWeight="medium" color="text" sx={{ lineHeight: 0 }}>
        {name}
      </VuiTypography>
    </VuiBox>
  );
}

// Setting default value for the props of CustomerCell
CustomerCell.defaultProps = {
  image: "",
  color: "dark",
};

// Typechecking props for the CustomerCell
CustomerCell.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  color: PropTypes.oneOf([
    "transparent",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
};

export default CustomerCell;
