import addDepartment from "layouts/clients/pages/withdrawMoney/schemas/form";

const {
  formField: { amount, reason, date, paymentMethod },
} = addDepartment;

export default {
  [amount.name]: "",
  [reason.name]: "",
  [date.name]: "",
  [paymentMethod.name]: "",
};
