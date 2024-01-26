
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import VuiBox from "components/VuiBox";
import Card from "@mui/material/Card";
import VuiTypography from "components/VuiTypography";
import DataTable from "examples/Tables/DataTable";
import adminPageTableData from "layouts/admin/components/data/adminPageTableData";


const AdminPage = () => {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox pt={0} pb={0}>
        <VuiBox mb={3}>
          <Card>
            <DataTable table={adminPageTableData} canSearch />
          </Card>
        </VuiBox>
      </VuiBox>
    </DashboardLayout>
  );
};

export default AdminPage;