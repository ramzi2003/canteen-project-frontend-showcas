
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import VuiBox from "components/VuiBox";
import Card from "@mui/material/Card";
import VuiTypography from "components/VuiTypography";
import DataTable from "examples/Tables/DataTable";
import bookerPageTableData from "layouts/admin/components/data/bookerPageTableData";


const BookerPage = () => {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox pt={0} pb={0}>
        <VuiBox mb={3}>
          <Card>
            <VuiBox p={3} pl={0} lineHeight={1}>
              <VuiTypography variant="h5" fontWeight="medium" color="white">
                Bookers
              </VuiTypography>
              <VuiTypography variant="text" fontWeight="regular">
                Total: 2
              </VuiTypography>
            </VuiBox>
            <DataTable table={bookerPageTableData} canSearch />
          </Card>
        </VuiBox>
      </VuiBox>
    </DashboardLayout>
  );
};

export default BookerPage;