

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";

//  components
import VuiBox from "components/VuiBox";
import VuiSwitch from "components/VuiSwitch";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";

function DeleteAccount() {
  return (
    <Card id="delete-account">
      <VuiBox lineHeight={1} mb="40px">
        <VuiBox>
          <VuiTypography variant="lg" color="white" fontWeight="bold">
            Delete Account
          </VuiTypography>
        </VuiBox>
        <VuiTypography variant="button" color="text" fontWeight="regular">
          Once you delete your account, there is no going back. Please be certain.
        </VuiTypography>
      </VuiBox>
      <VuiBox
        display="flex"
        justifyContent="space-between"
        alignItems={{ sm: "flex-start", md: "center" }}
        flexDirection={{ sm: "column", md: "row" }}
      >
        <VuiBox display="flex" alignItems="center" mb={{ sm: 3, md: 0 }}>
          <VuiSwitch color="info" />
          <VuiBox ml={2} lineHeight={0}>
            <VuiTypography display="block" variant="button" color="white" fontWeight="medium">
              Confirm
            </VuiTypography>
            <VuiTypography variant="caption" color="text">
              I want to delete my account.
            </VuiTypography>
          </VuiBox>
        </VuiBox>
        <VuiBox display="flex" flexDirection={{ xs: "column", sm: "row" }}>
          <VuiButton variant="outlined" color="white">
            deactivate
          </VuiButton>
          <VuiBox ml={{ xs: 0, sm: 1 }} mt={{ xs: 1, sm: 0 }}>
            <VuiButton variant="contained" color="error" sx={{ height: "100%" }}>
              delete account
            </VuiButton>
          </VuiBox>
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default DeleteAccount;
