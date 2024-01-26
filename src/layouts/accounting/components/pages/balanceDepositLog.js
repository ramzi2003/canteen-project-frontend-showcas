import React from 'react'
import DataTable from "examples/Tables/DataTable";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import { Card } from '@mui/material';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';


import balanceDepositLogTable from '../data/balanceDepositLogTable';

function BalanceDepositLog() {
  return (
    <DashboardLayout>
       <DashboardNavbar/>
    <VuiBox pt={0} pb={0}>
      <VuiBox mb={3}>
        <Card>
          <VuiBox p={3} pl={0} lineHeight={1}>
            <VuiTypography variant="h5" fontWeight="medium" color="white">
              Balance Deposit Log
            </VuiTypography>
          </VuiBox>
          <DataTable table={balanceDepositLogTable} canSearch entriesPerPage={false} />
        </Card>
      </VuiBox>
    </VuiBox>
  </DashboardLayout>
  )
}

export default BalanceDepositLog
