
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import AdminTables from "./components";
import VuiBox from "components/VuiBox";


const AdminLayout = () => {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox pt={6} pb={3}>
        <AdminTables />
      </VuiBox>
    </DashboardLayout>
  );
};

export default AdminLayout;