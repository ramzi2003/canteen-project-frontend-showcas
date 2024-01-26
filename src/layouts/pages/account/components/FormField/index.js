

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

//  components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiInput from "components/VuiInput";

function FormField({ label, ...rest }) {
  return (
    <VuiBox display="flex" flexDirection="column" justifyContent="flex-end" height="100%">
      <VuiBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
        <VuiTypography
          component="label"
          variant="caption"
          color="white"
          fontWeight="bold"
          textTransform="capitalize"
        >
          {label}
        </VuiTypography>
      </VuiBox>
      <VuiInput {...rest} />
    </VuiBox>
  );
}

// Setting default values for the props of FormField
FormField.defaultProps = {
  label: " ",
};

// Typechecking props for FormField
FormField.propTypes = {
  label: PropTypes.string,
};

export default FormField;
