// FormField.js
import PropTypes from "prop-types";
import { ErrorMessage, Field } from "formik";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiInput from "components/VuiInput";

function FormField({ label, name, type, options, ...rest }) {
  return (
    <VuiBox mb={2}>
      <VuiTypography
        component="label"
        variant="caption"
        color="white"
        fontWeight="bold"
        textTransform="capitalize"
      >
        {label}
      </VuiTypography>
      {type === "radio" ? (
        <VuiBox mt={1} display="flex" flexDirection="row">
          {options.map((option) => (
            <VuiBox key={option} display="flex" alignItems="center" mr={2}>
              <Field
                {...rest}
                type="radio"
                id={`${name}-${option}`}
                name={name}
                value={option}
              />
              <VuiTypography
                component="label"
                variant="body1"
                htmlFor={`${name}-${option}`}
                ml={1}
                color="white"
                fontSize="14px"
                opacity={0.8}
              >
                {option}
              </VuiTypography>
            </VuiBox>
          ))}
        </VuiBox>
      ) : type === "date" ? (
        <Field {...rest} name={name} type="date" as={VuiInput} />
      ) : (
        <Field {...rest} name={name} as={VuiInput} />
      )}
      <VuiBox mt={1}>
        <VuiTypography component="div" variant="caption" color="error">
          <ErrorMessage name={name} />
        </VuiTypography>
      </VuiBox>
    </VuiBox>
  );
}

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
};

export default FormField;
