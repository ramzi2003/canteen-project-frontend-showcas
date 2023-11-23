// Import necessary components and libraries
import PropTypes from "prop-types";
import { ErrorMessage, Field } from "formik";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiInput from "components/VuiInput";
import VuiSelect from "components/VuiSelect";

// Modify the FormField component
function FormField({ label, name, type, options, ...rest }) {
  return (
    <VuiBox mb={1.5}>
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
      {type === "select" ? (
        <Field {...rest} name={name} as={VuiSelect}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Field>
      ) : (
        // Use the type prop to determine the input type
        <Field {...rest} name={name} as={VuiInput} type={type}/>
      )}
      <VuiBox mt={0.75}>
        <VuiTypography component="div" variant="caption" color="error">
          <ErrorMessage name={name} />
        </VuiTypography>
      </VuiBox>
    </VuiBox>
  );
}

// Typechecking props for FormField
FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
};

export default FormField;
