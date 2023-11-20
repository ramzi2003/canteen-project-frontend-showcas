import * as Yup from "yup";
import addDepartment from "layouts/clients/pages/addClient/schemas/form";

const {
  formField: { departmentName, dateAdded, total, name, balance, gender, email },
} = addDepartment;

export default Yup.object().shape({
  [departmentName.name]: Yup.string().required(departmentName.errorMsg),
  [dateAdded.name]: Yup.date().required(dateAdded.errorMsg),
  [total.name]: Yup.number().required(total.errorMsg),
  [name.name]: Yup.string().required(name.errorMsg),
  [balance.name]: Yup.number().required(balance.errorMsg),
  [gender.name]: Yup.string().required(gender.errorMsg),
  [email.name]: Yup.string().email(email.invalidMsg).required(email.errorMsg),
});
