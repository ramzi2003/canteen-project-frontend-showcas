export default {
  formId: "report-paramenters-form",
  formField: {
    department: {
      name: "department",
      label: "Department",
      type: "text",
      placeholder: "Department name",
      errorMsg: "Department is required.",
    },
    StartDate: {
      name: "StartDate",
      label: "Start Date",
      type: "date",
      errorMsg: "Start date is required.",
    },
    EndDate: {
      name: "EndDate",
      label: "End Date",
      type: "date",
      errorMsg: "End date is required.",
    },
  },
};
