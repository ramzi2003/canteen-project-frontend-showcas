

// @mui material components
import Card from "@mui/material/Card";

//  React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Billing page components
import Bill from "layouts/pages/account/billing/components/Bill";

function CommunicationCenter() {
  return (
    <Card id="delete-account">
      <VuiBox>
        <VuiTypography variant="lg" color="white" fontWeight="bold">
          Communication Center
        </VuiTypography><br/>
        <VuiTypography variant="button" color="success" fontWeight="bold">
          Last update: 10 September, 2023
        </VuiTypography>
      </VuiBox>
      <VuiBox>
        <VuiBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Bill
            name="Independence Day"
            date="5 September, 2023"
            time="15:00 - 16:00"
            message="Due to Independence day canteen will not be working"
          />
          <Bill
            name="Faculty and Staff Party"
            date="20 September, 2023"
            time="15:00 - 16:00"
            message="Dear students, please find your food in a containers put on the first refrigerator "
          />
          <Bill
            name="Faculty and Staff Party"
            date="20 September, 2023"
            time="15:00 - 16:00"
            message="Dear students, please find your food in a containers put on the first refrigerator "
          />
        </VuiBox>
      </VuiBox>
    </Card>
  );
}

export default CommunicationCenter;
