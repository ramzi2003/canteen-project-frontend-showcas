import React from 'react'
import { Link } from 'react-router-dom'

import VuiBox from 'components/VuiBox'
import VuiTypography from 'components/VuiTypography'
import Card from '@mui/material/Card'



function FixedProps() {
  return (
    <div>
      <VuiBox mb={3} ml={2}>
            <Card>
              <VuiBox p={3} pl={0} lineHeight={1}>
                <VuiTypography variant="h5" fontWeight="medium" color="white">
                  ROP
                </VuiTypography>
              </VuiBox>
              <Link to="/accounting/ROPs">
                <VuiTypography variant="h6" fontWeight="regular" color="success">
                  ROPs
                </VuiTypography>
              </Link>
              <Link to="/accounting/balance-deposit-log">
                <VuiTypography variant="h6" fontWeight="regular" color="success">
                  Balance deposit log
                </VuiTypography>
              </Link>
              <Link to="/accounting/withhold-from-salary">
                <VuiTypography variant="h6" fontWeight="regular" color="success">
                  Withhold from salary
                </VuiTypography>
              </Link>
            </Card>
          </VuiBox>
          <VuiBox mb={3} ml={2}>
            <Card>
              <VuiBox p={3} pl={0} lineHeight={1}>
                <VuiTypography variant="h5" fontWeight="medium" color="white">
                  Reports
                </VuiTypography>
              </VuiBox>
              <Link to="/accounting/monthly-reports">
                <VuiTypography variant="h6" fontWeight="regular" color="success">
                  Monthly reports
                </VuiTypography>
              </Link>
            </Card>
          </VuiBox>
    </div>
  )
}

export default FixedProps
