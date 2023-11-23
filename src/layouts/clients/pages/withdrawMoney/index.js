import { useState } from "react";
import { Formik, Form } from "formik";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import VuiBox from "components/VuiBox";
import VuiButton from "components/VuiButton";
import UserInfo from "layouts/clients/pages/withdrawMoney/components/UserInfo";
import validations from "layouts/clients/pages/withdrawMoney/schemas/validations";
import form from "layouts/clients/pages/withdrawMoney/schemas/form";
import initialValues from "layouts/clients/pages/withdrawMoney/schemas/initialValues";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

function getSteps() {
  return ["Withdraw Money"];
}

function NewUser() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const { formId, formField } = form;
  const currentValidation = validations[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const handleBack = () => setActiveStep(activeStep - 1);

  const submitForm = async (values, actions) => {
    await sleep(1000);

    // eslint-disable-next-line no-alert
    alert(JSON.stringify(values, null, 2));

    actions.setSubmitting(false);
    actions.resetForm();

    setActiveStep(0);
  };

  const handleSubmit = (values, actions) => {
    if (isLastStep) {
      submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={3} mb={20}>
        <Grid container justifyContent="center" sx={{ height: "100%" }}>
          <Grid item xs={12} lg={8}>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <Formik
              initialValues={initialValues}
              validationSchema={currentValidation}
              onSubmit={handleSubmit}
            >
              {({ values, errors, touched, isSubmitting }) => (
                <Form id={formId} autoComplete="off">
                  <Card>
                    <VuiBox>
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
                          {isLastStep ? "add" : "next"}
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

export default NewUser;
