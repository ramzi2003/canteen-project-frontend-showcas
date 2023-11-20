// prop-type is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// NewUser page components
import FormField from "layouts/clients/pages/addClient/components/FormField";

function UserInfo({ formData }) {
  const { formField, values, errors, touched } = formData;
  const { name, balance, gender, email } = formField;

  const {
    name: nameV,
    balance: balanceV,
    gender: genderV,
    email: emailV,
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
              label={name.label}
              name={name.name}
              type={name.type}
              value={nameV}
              placeholder={name.placeholder}
              error={errors.name && touched.name}
              success={nameV.length > 0 && !errors.name}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              label={balance.label}
              name={balance.name}
              type={balance.type}
              value={balanceV}
              placeholder={balance.placeholder}
              error={errors.balance && touched.balance}
              success={balanceV && !errors.balance}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              label={gender.label}
              name={gender.name}
              type={gender.type}
              options={gender.options} // Ensure this line is present
              value={genderV}
              error={errors.gender && touched.gender}
              success={genderV && !errors.gender}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              label={email.label}
              name={email.name}
              type={email.type}
              value={emailV}
              placeholder={email.placeholder}
              error={errors.email && touched.email}
              success={emailV && !errors.email}
            />
          </Grid>
        </Grid>
      </VuiBox>
    </VuiBox>
  );
}

// typechecking props for UserInfo
UserInfo.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default UserInfo;
