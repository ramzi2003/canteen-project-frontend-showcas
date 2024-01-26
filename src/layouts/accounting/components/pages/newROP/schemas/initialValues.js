import newROP from "layouts/accounting/components/pages/newROP/schemas/form";

const {
  formField: {
    owner,
    requestor,
    activeForm,
    ActiveUntil,
    Sum,
    NumberOfPersons,
    Comments,
  },
} = newROP;

export default {
  [owner.name]: "",
  [requestor.name]: "",
  [activeForm.name]: "",
  [ActiveUntil.name]: "",
  [Sum.name]: "",
  [NumberOfPersons.name]: "",
  [Comments.name]: "",
};
