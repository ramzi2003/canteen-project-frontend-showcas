// Canteen System React layouts
import CRM from "layouts/dashboards/crm";
import Settings from "layouts/pages/account/settings";
import SignInBasic from "layouts/authentication/sign-in/basic";

import AccountingLayout from "layouts/accounting";
import AdminLayout from "layouts/admin";
import CanteenLayout from "layouts/canteen";
import CashLayout from "layouts/cash";
import ClientsLayout from "layouts/clients";

import ReceptionLayout from "layouts/reception";
import AddDepartment from "layouts/clients/pages/addDepartment";




// React icons
import { IoDocument } from "react-icons/io5";
import { IoDocuments } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { IoWallet } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { IoFastFoodSharp } from "react-icons/io5";
import { IoPersonCircleSharp } from "react-icons/io5";
import { IoDocumentText } from "react-icons/io5";
import ContractorTable from "layouts/clients/pages/Contractors";
import FacultyTable from "layouts/clients/pages/Faculty";
import GuestTable from "layouts/clients/pages/Guests";
import StudentTable from "layouts/clients/pages/Students";
import addClient from "layouts/clients/pages/addClient";
import addMoney from "layouts/clients/pages/addMoney";
import changeDepartment from "layouts/clients/pages/changeDepartment";
import withdrawMoney from "layouts/clients/pages/withdrawMoney";
import CorporateCard from "layouts/reception/pages/CorporateCard";
import GuesrCard from "layouts/reception/pages/GuestCard";
import OrdinaryCard from "layouts/reception/pages/OrdinaryCard";
import addCard from "layouts/reception/pages/addCard";

const routes = [
  {
    type: "collapse",
    name: "Dashboards",
    key: "dashboards",
    icon: <IoHome size="15px" color="inherit" />,
    route: "/dashboards/main-page",
    component: CRM,
    collapse: [{ name: "CRM", key: "crm", route: "/dashboards/main-page", component: CRM }],
  },
  {
    type: "collapse",
    name: "Payment",
    key: "payment",
    icon: <IoWallet size="15px" color="inherit" />,
    collapse: [{ name: "Payments", key: "payments", route: "#" }],
  },
  { type: "title", title: "ACCOUNT PAGES", key: "account-pages" },
  {
    type: "collapse",
    name: "Account",
    key: "account",
    icon: <IoPersonSharp size="15px" color="inherit" />,
    collapse: [
      {
        name: "Settings",
        key: "settings",
        route: "/pages/account/settings",
        component: Settings,
      },
    ],
  },
  {
    type: "collapse",
    name: "Log Out",
    key: "log-out",
    icon: <IoDocuments size="15px" color="inherit" />,
    collapse: [
      {
          name: "Log-out",
          key: "log-out",
          route: "/authentication/sign-in/basic",
          component: SignInBasic,
      },
    ],
  },
  { type: "title", title: "ADMIN PAGES", key: "admin-pages" },
  {
    type: "collapse",
    name: "Clients",
    key: "clients",
    route: "/clients",
    component: ClientsLayout,
    icon: <IoDocument size="15px" color="inherit" />,
    collapse: [
      { name: "Clients", key: "clients", route: "/clients", component: ClientsLayout },
      { name: "Contractors", key: "contractor-table", route: "/clients/contractor-table", component: ContractorTable },
      { name: "Faculty", key: "faculty-table", route: "/clients/faculty-table", component: FacultyTable },
      { name: "Guests", key: "guest-table", route: "/clients/guest-table", component: GuestTable },
      { name: "Students", key: "student-table", route: "/clients/student-table", component: StudentTable },
      { name: "Add Department", key: "add-department", route: "/clients/add-department", component: AddDepartment },
      { name: "Add Client", key: "add-client", route: "/clients/add-client", component: addClient },
      { name: "Add Money", key: "add-money", route: "/clients/add-money", component: addMoney},
      { name: "Change Department", key: "change-department", route: "/clients/change-department", component: changeDepartment},
      { name: "Withdraw Money", key: "withdraw-money", route: "/clients/withdraw-money", component: withdrawMoney},



    ],
    
  },
  {
    type: "collapse",
    name: "Canteen",
    key: "canteen",
    route: "/canteen",
    icon: <IoFastFoodSharp size="15px" color="inherit" />,
    collapse: [{ name: "Canteen", key: "canteen", route: "/canteen", component: CanteenLayout }],
  },
  {
    type: "collapse",
    name: "Accounting",
    key: "accounting",
    route: "/accounting",
    icon: <IoDocument size="15px" color="inherit" />,
    collapse: [{ name: "Accounting", key: "accounting", route: "/accounting", component: AccountingLayout }],
  },
  {
    type: "collapse",
    name: "Reception",
    key: "reception",
    route: "/reception",
    icon: <IoDocumentText size="15px" color="inherit" />,
    collapse: [
      { name: "Reception", key: "reception", route: "/reception", component: ReceptionLayout },
      { name: "Corporate Card", key: "corporate-card", route: "/reception/corporate-card", component: CorporateCard },
      { name: "Guest Card", key: "guest-card", route: "/reception/guest-card", component: GuesrCard },
      { name: "Ordinary Card", key: "ordinary-card", route: "/reception/ordinary-card", component: OrdinaryCard },
      { name: "Add Card", key: "add-card", route: "/reception/add-card", component: addCard },
    ],
  },
  {
    type: "collapse",
    name: "Admin",
    key: "admin",
    route: "/admin",
    icon: <IoPersonCircleSharp size="15px" color="inherit" />,
    collapse: [{ name: "Admin", key: "admin", route: "/admin", component: AdminLayout }],
  },
  {
    type: "collapse",
    name: "Cashier",
    key: "cashier",
    route: "/cashier",
    icon: <IoWallet size="15px" color="inherit" />,
    collapse: [{ name: "Cashier", key: "cashier", route: "/cashier", component: CashLayout }],
  },
  
];

export default routes;
