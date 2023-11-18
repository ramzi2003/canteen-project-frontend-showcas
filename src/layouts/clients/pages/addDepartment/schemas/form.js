export default {
  formId: "add-department-form",
  formField: {
    departmentName: {
      name: "departmentName",
      label: "Department Name",
      type: "text",
      placeholder: "e.g. Students",
      errorMsg: "Department Name is required.",
    },
    dateAdded: {
      name: "dateAdded",
      label: "Date Added",
      type: "date",
      errorMsg: "Date Added is required.",
    },
    total: {
      name: "total",
      label: "Total",
      type: "number",
      placeholder: "e.g. 10",
      errorMsg: "Total is required.",
      invalidMsg: "Total should be a valid number.",
    },
  },
};
