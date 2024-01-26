// prop-type is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

//  components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// NewUser page components
import FormField from "layouts/clients/pages/addDepartment/components/FormField";

function UserInfo({ formData }) {
  const { formField, values, errors, touched } = formData;
  const { departmentName, dateAdded, total } = formField;
  const {
    departmentName: departmentNameV,
    dateAdded: dateAddedV,
    total: totalV,
  } = values;

  return (
    <VuiBox>
      <VuiBox lineHeight={0} display="flex" flexDirection="column">
        <VuiTypography variant="lg" color="white" fontWeight="bold">
          Department Information
        </VuiTypography>
        <VuiTypography variant="button" fontWeight="regular" color="text">
          Mandatory information
        </VuiTypography>
      </VuiBox>
      <VuiBox mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              label={departmentName.label}
              name={departmentName.name}
              type={departmentName.type}
              value={departmentNameV}
              placeholder={departmentName.placeholder}
              error={errors.departmentName && touched.departmentName}
              success={departmentNameV.length > 0 && !errors.departmentName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              label={dateAdded.label}
              name={dateAdded.name}
              type={dateAdded.type}
              value={dateAddedV}
              error={errors.dateAdded && touched.dateAdded}
              success={dateAddedV && !errors.dateAdded}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              label={total.label}
              name={total.name}
              type={total.type}
              value={totalV}
              placeholder={total.placeholder}
              error={errors.total && touched.total}
              success={totalV && !errors.total}
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
