import * as Yup from "yup";
import reportParamrters from "layouts/accounting/components/pages/reportParamteres/schemas/form"

const {
  formField: {
    department,
    StartDate,
    EndDate
  },
} = reportParamrters;

export default Yup.object().shape({
  [department.name]: Yup.string().required(department.errorMsg),
  [StartDate.name]: Yup.date().required(StartDate.errorMsg),
  [EndDate.name]: Yup.date().required(EndDate.errorMsg)
});
