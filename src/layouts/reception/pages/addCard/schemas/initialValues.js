// initialValues.js

import addDepartment from "layouts/reception/pages/addCard/schemas/form";

const {
  formField: { avatar, name, cardNumber, type },
} = addDepartment;

export default {
  [avatar.name]: "",
  [name.name]: "",
  [cardNumber.name]: "",
  [type.name]: "",
};
