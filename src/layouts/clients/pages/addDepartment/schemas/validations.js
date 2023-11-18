import * as Yup from "yup";
import addDepartment from "layouts/clients/pages/addDepartment/schemas/form";

const {
  formField: { departmentName, dateAdded, total },
} = addDepartment;

export default Yup.object().shape({
  [departmentName.name]: Yup.string().required(departmentName.errorMsg),
  [dateAdded.name]: Yup.date().required(dateAdded.errorMsg),
  [total.name]: Yup.number().required(total.errorMsg),
});
