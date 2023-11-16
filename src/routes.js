// Canteen System React layouts
import CRM from "layouts/dashboards/crm";
import Settings from "layouts/pages/account/settings";
import SignInBasic from "layouts/authentication/sign-in/basic";


// React icons
import { IoDocument } from "react-icons/io5";
import { IoDocuments } from "react-icons/io5";
import { IoHome } from "react-icons/io5";

const routes = [
  {
    type: "collapse",
    name: "Dashboards",
    key: "dashboards",
    icon: <IoHome size="15px" color="inherit" />,
    route: "/dashboards/crm",
    component: CRM,
    collapse: [{ name: "CRM", key: "crm", route: "/dashboards/crm", component: CRM }],
  },
  {
    type: "collapse",
    name: "Payment",
    key: "payment",
    icon: <IoDocument size="15px" color="inherit" />,
    collapse: [{ name: "Payments", key: "payments", route: "#" }],
  },
  { type: "title", title: "ACCOUNT PAGES", key: "account-pages" },
  {
    type: "collapse",
    name: "Account",
    key: "account",
    icon: <IoDocument size="15px" color="inherit" />,
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
    icon: <IoDocument size="15px" color="inherit" />,
    collapse: [{ name: "Clients", key: "clients", route: "#" }],
  },
  {
    type: "collapse",
    name: "Canteen",
    key: "canteen",
    icon: <IoDocument size="15px" color="inherit" />,
    collapse: [{ name: "Canteen", key: "canteen", route: "#" }],
  },
  {
    type: "collapse",
    name: "Accounting",
    key: "accounting",
    icon: <IoDocument size="15px" color="inherit" />,
    collapse: [{ name: "Accounting", key: "accounting", route: "#" }],
  },
  {
    type: "collapse",
    name: "Reception",
    key: "reception",
    icon: <IoDocument size="15px" color="inherit" />,
    collapse: [{ name: "Reception", key: "reception", route: "#" }],
  },
  {
    type: "collapse",
    name: "Admin",
    key: "admin",
    icon: <IoDocument size="15px" color="inherit" />,
    collapse: [{ name: "Admin", key: "admin", route: "#" }],
  },
  {
    type: "collapse",
    name: "Cashier",
    key: "cashier",
    icon: <IoDocument size="15px" color="inherit" />,
    collapse: [{ name: "Cashier", key: "cashier", route: "#" }],
  },
];

export default routes;
