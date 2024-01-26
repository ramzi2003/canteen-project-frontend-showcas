import adminSettings from "layouts/admin/pages/adminSettings/schemas/form";

const {
  formField: { discountSubsidized, admounOfDiscount, PercentageOfDiscounts },
} = adminSettings;

export default {
  [discountSubsidized.name]: "",
  [admounOfDiscount.name]: "",
  [PercentageOfDiscounts.name]: "",
};
