// AddMoney.js
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import FormField from "layouts/clients/pages/addMoney/components/FormField";
import form from "../../schemas/form";

function AddMoney({ formData }) {
  const { formField, values, errors, touched } = formData;
  const { amount, reason, date, paymentMethod } = formField;

  const {
    amount: amountV,
    reason: reasonV,
    date: dateV,
    paymentMethod: paymentMethodV,
  } = values;

  return (
    <VuiBox>
      <VuiBox lineHeight={0} display="flex" flexDirection="column">
        <VuiTypography variant="lg" color="white" fontWeight="bold">
          Expense Information
        </VuiTypography>
        <VuiTypography variant="button" fontWeight="regular" color="text">
          Mandatory information
        </VuiTypography>
      </VuiBox>
      <VuiBox mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              label={amount.label}
              name={amount.name}
              type={amount.type}
              value={amountV}
              placeholder={amount.placeholder}
              error={errors.amount && touched.amount}
              success={amountV && !errors.amount}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              label={reason.label}
              name={reason.name}
              type={reason.type}
              value={reasonV}
              placeholder={reason.placeholder}
              error={errors.reason && touched.reason}
              success={reasonV && !errors.reason}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              label={date.label}
              name={date.name}
              type={date.type}
              value={dateV}
              error={errors.date && touched.date}
              success={dateV && !errors.date}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              label={paymentMethod.label}
              name={paymentMethod.name}
              type={paymentMethod.type}
              options={paymentMethod.options}
              value={paymentMethodV}
              error={errors.paymentMethod && touched.paymentMethod}
              success={paymentMethodV && !errors.paymentMethod}
            />
          </Grid>
        </Grid>
      </VuiBox>
    </VuiBox>
  );
}

AddMoney.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default AddMoney;
