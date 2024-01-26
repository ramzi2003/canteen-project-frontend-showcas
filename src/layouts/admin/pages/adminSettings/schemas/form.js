export default {
    formId: "settings-form",
    formField: {
      discountSubsidized: {
        name: "discountSubsidized",
        label: "discount for subsidized",
        type: "text",
        errorMsg: "Discount is required.",
      },
      admounOfDiscount: {
        name: "admounOfDiscount",
        label: "Amount of dicount",
        type: "number",
        errorMsg: "Number is required.",
      },
      PercentageOfDiscounts: {
        name: "PercentageOfDiscounts",
        label: "Percentage of discount",
        type: "number",
        errorMsg: "Number is required.",
        invalidMsg: "Number be a valid number.",
      },
    },
  };
  