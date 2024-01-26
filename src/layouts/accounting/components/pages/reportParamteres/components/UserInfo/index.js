// prop-type is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

//  components
import VuiBox from "components/VuiBox";

// NewUser page components
import FormField from "layouts/accounting/components/pages/reportParamteres/components/FormField";

// ... (existing imports)

function UserInfo({ formData }) {
  const { formField, values, errors, touched } = formData;
  const {
    department: departmentV,  // Use department value
    StartDate: StartDateV,
    EndDate: EndDateV
  } = values;

  return (
    <VuiBox>
      <VuiBox>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <FormField
              label={formField.department.label}  // Use department label
              name={formField.department.name}    // Use department name
              type={formField.department.type}    // Use department type
              value={departmentV}                 // Use department value
              placeholder={formField.department.placeholder}  // Use department placeholder
              error={errors.department && touched.department}  // Use department error and touched
              success={departmentV.length > 0 && !errors.department}
            />
          </Grid>

          

          {/* Active Until Field */}
          <Grid item xs={12} sm={3}>
            <FormField
              label={formField.StartDate.label}
              name={formField.StartDate.name}
              type={formField.StartDate.type}
              value={StartDateV}
              placeholder={formField.StartDate.placeholder}
              error={errors.StartDate && touched.StartDate}
              success={StartDateV.length > 0 && !errors.StartDate}
            />
          </Grid>

          <Grid item xs={12} sm={3}>
            <FormField
              label={formField.EndDate.label}
              name={formField.EndDate.name}
              type={formField.EndDate.type}
              value={EndDateV}
              placeholder={formField.EndDate.placeholder}
              error={errors.EndDate && touched.EndDate}
              success={EndDateV.length > 0 && !errors.EndDate}
            />
          </Grid>

        </Grid>
      </VuiBox>
    </VuiBox>
  );
}

// ... (remaining code)

// typechecking props for UserInfo
UserInfo.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default UserInfo;
