// prop-type is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

//  components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// NewUser page components
import FormField from "layouts/accounting/components/pages/newROP/components/FormField";

// ... (existing imports)

function UserInfo({ formData }) {
  const { formField, values, errors, touched } = formData;
  const {
    owner: ownerV,
    requestor: requestorV,
    activeForm: activeFormV,
    ActiveUntil: ActiveUntilV,
    Sum: SumV,
    NumberOfPersons: NumberOfPersonsV,
    Comments: CommentsV,
  } = values;

  return (
    <VuiBox>
      <VuiBox lineHeight={0} display="flex" flexDirection="column">
        <VuiTypography variant="lg" color="white" fontWeight="bold">
          New ROP
        </VuiTypography>
      </VuiBox>
      <VuiBox mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              label={formField.owner.label}
              name={formField.owner.name}
              type={formField.owner.type}
              value={ownerV}
              placeholder={formField.owner.placeholder}
              error={errors.owner && touched.owner}
              success={ownerV.length > 0 && !errors.owner}
            />
          </Grid>

          {/* Requestor Field */}
          <Grid item xs={12} sm={6}>
            <FormField
              label={formField.requestor.label}
              name={formField.requestor.name}
              type={formField.requestor.type}
              value={requestorV}
              placeholder={formField.requestor.placeholder}
              error={errors.requestor && touched.requestor}
              success={requestorV.length > 0 && !errors.requestor}
            />
          </Grid>

          {/* Active Form Field */}
          <Grid item xs={12} sm={6}>
            <FormField
              label={formField.activeForm.label}
              name={formField.activeForm.name}
              type={formField.activeForm.type}
              value={activeFormV}
              placeholder={formField.activeForm.placeholder}
              error={errors.activeForm && touched.activeForm}
              success={activeFormV.length > 0 && !errors.activeForm}
            />
          </Grid>

          {/* Active Until Field */}
          <Grid item xs={12} sm={6}>
            <FormField
              label={formField.ActiveUntil.label}
              name={formField.ActiveUntil.name}
              type={formField.ActiveUntil.type}
              value={ActiveUntilV}
              placeholder={formField.ActiveUntil.placeholder}
              error={errors.ActiveUntil && touched.ActiveUntil}
              success={ActiveUntilV.length > 0 && !errors.ActiveUntil}
            />
          </Grid>

          {/* Sum Field */}
          <Grid item xs={12} sm={6}>
            <FormField
              label={formField.Sum.label}
              name={formField.Sum.name}
              type={formField.Sum.type}
              value={SumV}
              placeholder={formField.Sum.placeholder}
              error={errors.Sum && touched.Sum}
              success={SumV.length > 0 && !errors.Sum}
            />
          </Grid>

          {/* Number of Persons Field */}
          <Grid item xs={12} sm={6}>
            <FormField
              label={formField.NumberOfPersons.label}
              name={formField.NumberOfPersons.name}
              type={formField.NumberOfPersons.type}
              value={NumberOfPersonsV}
              placeholder={formField.NumberOfPersons.placeholder}
              error={errors.NumberOfPersons && touched.NumberOfPersons}
              success={NumberOfPersonsV.length > 0 && !errors.NumberOfPersons}
            />
          </Grid>

          {/* Comments Field */}
          <Grid item xs={12}>
            <FormField
              label={formField.Comments.label}
              name={formField.Comments.name}
              type={formField.Comments.type}
              value={CommentsV}
              placeholder={formField.Comments.placeholder}
              error={errors.Comments && touched.Comments}
              success={CommentsV.length > 0 && !errors.Comments}
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
