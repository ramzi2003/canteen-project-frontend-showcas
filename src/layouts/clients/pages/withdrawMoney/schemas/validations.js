import * as Yup from "yup";
import addDepartment from "layouts/clients/pages/withdrawMoney/schemas/form";

const {
  formField: { amount, reason, date, paymentMethod },
} = addDepartment;

export default Yup.object().shape({
  [amount.name]: Yup.number()
    .required(amount.errorMsg)
    .positive("Amount must be a positive number")
    .integer("Amount must be an integer"),
  [reason.name]: Yup.string().required(reason.errorMsg),
  [date.name]: Yup.date().required(date.errorMsg),
  [paymentMethod.name]: Yup.string().required(paymentMethod.errorMsg),
});
