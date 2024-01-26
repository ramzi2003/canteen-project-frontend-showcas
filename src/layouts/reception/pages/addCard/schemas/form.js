// form.js

export default {
  formId: "add-department-form",
  formField: {
    avatar: {
      name: "avatar",
      label: "Avatar",
      type: "file", // Assuming it's an avatar image upload
      errorMsg: "Avatar is required.",
    },
    name: {
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "e.g. John Doe",
      errorMsg: "Name is required.",
    },
    cardNumber: {
      name: "cardNumber",
      label: "Card Number",
      type: "text",
      placeholder: "e.g. 1234-5678-9012-3456",
      errorMsg: "Card Number is required.",
    },
    type: {
      name: "type",
      label: "Type",
      type: "radio",
      options: ["Guest", "Corporate", "Ordinary"],
      errorMsg: "Type is required.",
    },
  },
};
