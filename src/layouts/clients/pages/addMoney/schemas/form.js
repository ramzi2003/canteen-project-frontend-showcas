export default {
  formId: "add-department-form",
  formField: {
    amount: {
      name: "amount",
      label: "Amount of Money",
      type: "number",
      placeholder: "e.g. 1000",
      errorMsg: "Amount is required.",
      invalidMsg: "Amount should be a valid number.",
    },
    reason: {
      name: "reason",
      label: "Reason",
      type: "text",
      placeholder: "e.g. Guest Lecturer",
      errorMsg: "Reason is required.",
    },
    date: {
      name: "date",
      label: "Date",
      type: "date",
      errorMsg: "Date is required.",
    },
    paymentMethod: {
      name: "paymentMethod",
      label: "Payment Method",
      type: "radio", 
      options: ["Cash", "Online"],
      errorMsg: "Payment Method is required.",
    },

  },
};
