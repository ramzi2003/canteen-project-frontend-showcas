import { useState } from "react";

// formik components
import { Formik, Form } from "formik";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";


//  components
import VuiBox from "components/VuiBox";
import VuiButton from "components/VuiButton";

// NewUser page components
import UserInfo from "layouts/accounting/components/pages/reportParamteres/components/UserInfo";

// NewUser layout schemas for form and form fields
import validations from "layouts/accounting/components/pages/reportParamteres/schemas/validations";
import form from "layouts/accounting/components/pages/reportParamteres/schemas/form";
import initialValues from "layouts/accounting/components/pages/reportParamteres/schemas/initialValues"


function getSteps() {
  return ["Add New ROP"];
}

function ReportParameters() {
  const [activeStep] = useState(0);
  const { formId, formField } = form;
  const currentValidation = validations[activeStep];


  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
 

  const submitForm = async (values, actions) => {
    await sleep(1000);

    alert(JSON.stringify(values, null, 2));

    actions.setSubmitting(false);
    actions.resetForm();
  };

  const handleSubmit = (values, actions) => {
      submitForm(values, actions);
    
  };

  return (
    <>
      <VuiBox>
        
          <Grid item xs={12} lg={8}>
            <Formik
              initialValues={initialValues}
              validationSchema={currentValidation}
              onSubmit={handleSubmit}
            >
              {({ values, errors, touched, isSubmitting }) => (
                <Form id={formId} autoComplete="off">
                    <VuiBox >
                      {getSteps().map((label, index) =>
                        index === activeStep ? (
                          <UserInfo key={label} formData={{ values, touched, formField, errors }} />
                        ) : null
                      )}
      
                        <VuiButton
                          
                          disabled={isSubmitting}
                          type="submit"
                          sx={{ minWidth: "100px" }}
                          color="info"

                        >
                          Show
                        </VuiButton>
                    </VuiBox>
                </Form>
              )}
            </Formik>
          </Grid>
      </VuiBox>
    </>
  );
}

export default ReportParameters;
