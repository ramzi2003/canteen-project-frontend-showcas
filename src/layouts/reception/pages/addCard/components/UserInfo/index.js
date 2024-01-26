// addCardInfo.js

import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import FormField from "layouts/reception/pages/addCard/components/FormField";

function AddCardInfo({ formData }) {
  const { formField, values, errors, touched } = formData;
  const { avatar, name, cardNumber, type } = formField;

  const {
    avatar: avatarV,
    name: nameV,
    cardNumber: cardNumberV,
    type: typeV,
  } = values;

  return (
    <VuiBox>
      <VuiBox lineHeight={0} display="flex" flexDirection="column">
        <VuiTypography variant="lg" color="white" fontWeight="bold">
          Add new card
        </VuiTypography>
        <VuiTypography variant="button" fontWeight="regular" color="text">
          Mandatory information
        </VuiTypography>
      </VuiBox>
      <VuiBox mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              label={avatar.label}
              name={avatar.name}
              type={avatar.type}
              value={avatarV}
              error={errors.avatar && touched.avatar}
              success={avatarV && !errors.avatar}
            />
          </Grid>
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
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              label={cardNumber.label}
              name={cardNumber.name}
              type={cardNumber.type}
              value={cardNumberV}
              placeholder={cardNumber.placeholder}
              error={errors.cardNumber && touched.cardNumber}
              success={cardNumberV && !errors.cardNumber}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              label={type.label}
              name={type.name}
              type={type.type}
              options={type.options} // Ensure this line is present
              value={typeV}
              error={errors.type && touched.type}
              success={typeV && !errors.type}
            />
          </Grid>
        </Grid>
      </VuiBox>
    </VuiBox>
  );
}

AddCardInfo.propTypes = {
  formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default AddCardInfo;
