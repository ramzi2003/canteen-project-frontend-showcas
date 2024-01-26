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
import UserInfo from "layouts/accounting/components/pages/newROP/components/UserInfo";

// NewUser layout schemas for form and form fields
import validations from "layouts/accounting/components/pages/newROP/schemas/validations";
import form from "layouts/accounting/components/pages/newROP/schemas/form";
import initialValues from "layouts/accounting/components/pages/newROP/schemas/initialValues"

// NewUser layout components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

function getSteps() {
  return ["Add New ROP"];
}

function NewROP() {
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
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={3} mb={20}>
        <Grid container justifyContent="center" sx={{ height: "100%" }}>
          <Grid item xs={12} lg={8}>
            <Formik
              initialValues={initialValues}
              validationSchema={currentValidation}
              onSubmit={handleSubmit}
            >
              {({ values, errors, touched, isSubmitting }) => (
                <Form id={formId} autoComplete="off">
                  <Card>
                    <VuiBox >
                      {getSteps().map((label, index) =>
                        index === activeStep ? (
                          <UserInfo key={label} formData={{ values, touched, formField, errors }} />
                        ) : null
                      )}
                      <VuiBox mt={4} width="100%" display="flex" justifyContent="space-between">
                        
                        <VuiButton
                          style={{ marginLeft: "70vh" }}
                          disabled={isSubmitting}
                          type="submit"
                          sx={{ minWidth: "100px" }}
                          color="info"

                        >
                          Save
                        </VuiButton>
                      </VuiBox>
                    </VuiBox>
                  </Card>
                </Form>
              )}
            </Formik>
          </Grid>
        </Grid>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default NewROP;
