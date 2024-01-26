import * as Yup from "yup";
import adminSettings from "layouts/admin/pages/adminSettings/schemas/form";

const {
  formField: { discountSubsidized, admounOfDiscount, PercentageOfDiscounts },
} = adminSettings;

export default Yup.object().shape({
  [discountSubsidized.name]: Yup.string().required(discountSubsidized.errorMsg),
  [admounOfDiscount.name]: Yup.number().required(admounOfDiscount.errorMsg),
  [PercentageOfDiscounts.name]: Yup.number().required(PercentageOfDiscounts.errorMsg),
});
