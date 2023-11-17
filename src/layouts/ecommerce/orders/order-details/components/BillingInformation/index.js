// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

function BillingInformation() {
  return (
    <>
      <VuiTypography variant="h6" fontWeight="medium" color="white">
        Billing Information
      </VuiTypography>
      <VuiBox
        component="li"
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
        sx={({ functions: { linearGradient }, palette: { gradients } }) => ({
          background: linearGradient(gradients.box.main, gradients.box.state, gradients.box.deg),
        })}
        borderRadius="lg"
        p={3}
        mt={2}
      >
        <VuiBox width="100%" display="flex" flexDirection="column" lineHeight={1}>
          <VuiBox mb={2}>
            <VuiTypography
              variant="button"
              fontWeight="medium"
              textTransform="capitalize"
              color="white"
            >
              Oliver Liam
            </VuiTypography>
          </VuiBox>
          <VuiBox mb={1} lineHeight={0}>
            <VuiTypography variant="caption" color="text">
              Company Name:&nbsp;
              <VuiTypography
                variant="caption"
                fontWeight="medium"
                textTransform="capitalize"
                color="text"
              >
                Viking Burrito
              </VuiTypography>
            </VuiTypography>
          </VuiBox>
          <VuiBox mb={1} lineHeight={0}>
            <VuiTypography variant="caption" color="text">
              Email Address:&nbsp;
              <VuiTypography variant="caption" fontWeight="medium" color="text">
                oliver@burrito.com
              </VuiTypography>
            </VuiTypography>
          </VuiBox>
          <VuiTypography variant="caption" color="text">
            VAT Number:&nbsp;
            <VuiTypography variant="caption" fontWeight="medium" color="text">
              FRB1235476
            </VuiTypography>
          </VuiTypography>
        </VuiBox>
      </VuiBox>
    </>
  );
}

export default BillingInformation;
