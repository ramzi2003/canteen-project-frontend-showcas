// prop-type is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

//  components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// NewUser page components
import FormField from "layouts/admin/pages/adminSettings/components/FormField";

// ... (existing imports)

function UserInfo({ formData }) {
  const { formField, values, errors, touched } = formData;
  const { discountSubsidized, admounOfDiscount, PercentageOfDiscounts } = formField;
  const {
    discountSubsidized: discountSubsidizedV,
    admounOfDiscount: admounOfDiscountV,
    PercentageOfDiscounts: PercentageOfDiscountsV,
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
              label={discountSubsidized.label}
              name={discountSubsidized.name}
              type={discountSubsidized.type}
              value={discountSubsidizedV}
              error={errors.discountSubsidized && touched.discountSubsidized}
              success={discountSubsidizedV.length > 0 && !errors.discountSubsidized}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              label={admounOfDiscount.label}
              name={admounOfDiscount.name}
              type={admounOfDiscount.type}
              value={admounOfDiscountV}
              error={errors.admounOfDiscount && touched.admounOfDiscount}
              success={admounOfDiscountV && !errors.admounOfDiscount}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              label={PercentageOfDiscounts.label}
              name={PercentageOfDiscounts.name}
              type={PercentageOfDiscounts.type}
              value={PercentageOfDiscountsV}
              error={errors.PercentageOfDiscounts && touched.PercentageOfDiscounts}
              success={PercentageOfDiscountsV && !errors.PercentageOfDiscounts}
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
