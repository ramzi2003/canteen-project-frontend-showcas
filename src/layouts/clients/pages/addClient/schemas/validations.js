import * as Yup from "yup";
import addDepartment from "layouts/clients/pages/addClient/schemas/form";

const {
  formField: { name, balance, gender, email },
} = addDepartment;

export default Yup.object().shape({
  [name.name]: Yup.string()
    .required(name.errorMsg)
    .matches(/^[a-zA-Z\s]*$/, "Invalid characters. Only letters and spaces are allowed."),
  [balance.name]: Yup.number()
    .required(balance.errorMsg)
    .positive("Balance must be a positive number")
    .integer("Balance must be an integer"),
  [gender.name]: Yup.string().required(gender.errorMsg),
  [email.name]: Yup.string().email(email.invalidMsg).required(email.errorMsg),
});
