import reportParamrters from "layouts/accounting/components/pages/reportParamteres/schemas/form";

const {
  formField: {
    department,
    StartDate,
    EndDate,
  },
} = reportParamrters;

export default {
  [department.name]: "",
  [StartDate.name]: "",
  [EndDate.name]: ""
};
