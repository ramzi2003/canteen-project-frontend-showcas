import * as Yup from "yup";
import newROP from "layouts/accounting/components/pages/newROP/schemas/form"

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

export default Yup.object().shape({
  [owner.name]: Yup.string().required(owner.errorMsg),
  [requestor.name]: Yup.string().required(requestor.errorMsg),
  [activeForm.name]: Yup.string().required(activeForm.errorMsg),
  [ActiveUntil.name]: Yup.date().required(ActiveUntil.errorMsg),
  [Sum.name]: Yup.number().required(Sum.errorMsg),
  [NumberOfPersons.name]: Yup.number().required(NumberOfPersons.errorMsg),
  [Comments.name]: Yup.string().required(Comments.errorMsg),
});
