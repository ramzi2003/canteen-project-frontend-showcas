export default {
  formId: "add-department-form",
  formField: {
    name: {
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "e.g. John Doe",
      errorMsg: "Name is required.",
    },
    balance: {
      name: "balance",
      label: "Balance",
      type: "number",
      placeholder: "e.g. 1000",
      errorMsg: "Balance is required.",
      invalidMsg: "Balance should be a valid number.",
    },
    gender: {
      name: "gender",
      label: "Gender",
      type: "select", // You may want to use a select input for gender
      options: ["Male", "Female", "Other"],
      errorMsg: "Gender is required.",
    },
    email: {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "e.g. john@example.com",
      errorMsg: "Email is required.",
      invalidMsg: "Please enter a valid email address.",
    },
  },
};
