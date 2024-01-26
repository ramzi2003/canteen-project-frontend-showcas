// validation.js

import * as Yup from "yup";
import addDepartment from "layouts/reception/pages/addCard/schemas/form";

const {
  formField: { avatar, name, cardNumber, type },
} = addDepartment;

export default Yup.object().shape({
  [avatar.name]: Yup.mixed().required(avatar.errorMsg),
  [name.name]: Yup.string()
    .required(name.errorMsg)
    .matches(/^[a-zA-Z\s]*$/, "Invalid characters. Only letters and spaces are allowed."),
  [cardNumber.name]: Yup.string().required(cardNumber.errorMsg),
  [type.name]: Yup.string().required(type.errorMsg),
});
