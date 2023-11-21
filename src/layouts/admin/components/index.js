// @mui material components
import Card from "@mui/material/Card";

// Vision UI Dashboard PRO React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

import DataTable from "examples/Tables/DataTable";

// Data
import adminTableData from "./data/adminTableData";

function AdminTables() {
  return (

      <VuiBox pt={0} pb={0}>
        <VuiBox mb={3}>
          <Card>
            <VuiBox p={3} pl={0} lineHeight={1}>
              <VuiTypography variant="h5" fontWeight="medium" color="white">
                Admins
              </VuiTypography>
              <VuiTypography variant="text" fontWeight="regular">
                Total admins: 4
              </VuiTypography>
            </VuiBox>
            <DataTable table={adminTableData} canSearch />
          </Card>
        </VuiBox>
      </VuiBox>

  );
}

export default AdminTables;
