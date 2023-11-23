import addDepartment from "layouts/clients/pages/addDepartment/schemas/form";

const {
  formField: { departmentName, dateAdded, total },
} = addDepartment;

export default {
  [departmentName.name]: "",
  [dateAdded.name]: "",
  [total.name]: "",
};
