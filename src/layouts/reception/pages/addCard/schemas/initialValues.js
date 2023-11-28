import addDepartment from "layouts/clients/pages/addClient/schemas/form";

const {
  formField: { name, balance, gender, email },
} = addDepartment;

export default {
  [name.name]: "",
  [balance.name]: "",
  [gender.name]: "", // Set default gender value if needed
  [email.name]: "",
};
