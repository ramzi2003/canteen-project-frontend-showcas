import addDepartment from "layouts/clients/pages/addClient/schemas/form";

const {
  formField: { departmentName, dateAdded, total, name, balance, gender, email },
} = addDepartment;

export default {
  [departmentName.name]: "",
  [dateAdded.name]: "",
  [total.name]: "",
  [name.name]: "",
  [balance.name]: "",
  [gender.name]: "", // Set default gender value if needed
  [email.name]: "",
};
