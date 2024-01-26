// Canteen System React layouts
import CRM from "layouts/dashboards/crm";
import Settings from "layouts/pages/account/settings";
import SignInBasic from "layouts/authentication/sign-in/basic";
import SignUpBasic from "layouts/authentication/sign-up/basic";

import AccountingLayout from "layouts/accounting";
import AdminLayout from "layouts/admin";
import CanteenLayout from "layouts/canteen";
import CashLayout from "layouts/cash";
import ClientsLayout from "layouts/clients";

import ReceptionLayout from "layouts/reception";
import AddDepartment from "layouts/clients/pages/addDepartment";
import NewROP from "layouts/accounting/components/pages/newROP/index";

import NewSettings from "layouts/admin/pages/adminSettings";
import AdminPage from "layouts/admin/pages/Admins";
import BookerPage from "layouts/admin/pages/Bookers";
import CashierPage from "layouts/admin/pages/Cashiers";
import ReceptionPage from "layouts/admin/pages/Reception";

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
import ROPs from "layouts/accounting/components/pages/rops";
import BalanceDepositLog from "layouts/accounting/components/pages/balanceDepositLog";
import WithholdFromSalary from "layouts/accounting/components/pages/withholdFromSalary";
import MonthlyReports from "layouts/accounting/components/pages/monthlyReports";
import Breakfast from "layouts/cash/pages/breakfast";
import Lunch from "layouts/cash/pages/lunch";
import Dinner from "layouts/cash/pages/dinner";
import CoffeeBreak from "layouts/cash/pages/coffeeBreak";
import Distribution from "layouts/cash/pages/distribution";
import CoffeeBreak2 from "layouts/cash/pages/coffeeBreak2";
import History from "layouts/cash/pages/historyPage";

const routes = [
  {
    type: "link",
    name: "Dashboards",
    key: "dashboards",
    icon: <IoHome size="15px" color="inherit" />,
    route: "/dashboards/main-page",
    component: CRM,
    collapse: [{ name: "CRM", key: "crm", route: "/dashboards/main-page", component: CRM }],
  },
  // {
  //   type: "collapse",
  //   name: "Payment",
  //   key: "payment",
  //   icon: <IoWallet size="15px" color="inherit" />,
  //   collapse: [{ name: "Payments", key: "payments", route: "#" }],
  // },
  { type: "title", title: "ACCOUNT PAGES", key: "account-pages" },
  {
    type: "link",
    name: "Account",
    key: "account",
    route: "/pages/account/settings",
    component: Settings,
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
    type: "link",
    name: "Log Out",
    key: "log-out",
    route: "/authentication/sign-in/basic",
    component: SignInBasic,
    icon: <IoDocuments size="15px" color="inherit" />,
    collapse: [
      {
        name: "Log-out",
        key: "log-out",
        route: "/authentication/sign-in/basic",
        component: SignInBasic,
      },
      {
        name: "Sign-up",
        key: "sign-up",
        route: "/authentication/sign-up/basic",
        component: SignUpBasic,
      }
    ],
  },
  { type: "title", title: "ADMIN PAGES", key: "admin-pages" },
  {
    type: "link",
    name: "Clients",
    key: "clients",
    route: "/clients",
    component: ClientsLayout,
    icon: <IoDocument size="15px" color="inherit" />,
    collapse: [
      { name: "Clients", key: "clients", route: "/clients", component: ClientsLayout },
      {
        name: "Contractors",
        key: "contractor-table",
        route: "/clients/contractor-table",
        component: ContractorTable,
      },
      {
        name: "Faculty",
        key: "faculty-table",
        route: "/clients/faculty-table",
        component: FacultyTable,
      },
      { name: "Guests", key: "guest-table", route: "/clients/guest-table", component: GuestTable },
      {
        name: "Students",
        key: "student-table",
        route: "/clients/student-table",
        component: StudentTable,
      },
      {
        name: "Add Department",
        key: "add-department",
        route: "/clients/add-department",
        component: AddDepartment,
      },
      { name: "Add Client", key: "add-client", route: "/clients/add-client", component: addClient },
      { name: "Add Money", key: "add-money", route: "/clients/add-money", component: addMoney },
      {
        name: "Change Department",
        key: "change-department",
        route: "/clients/change-department",
        component: changeDepartment,
      },
      {
        name: "Withdraw Money",
        key: "withdraw-money",
        route: "/clients/withdraw-money",
        component: withdrawMoney,
      },
    ],
  },
  {
    type: "link",
    name: "Canteen",
    key: "canteen",
    route: "/canteen",
    component: CanteenLayout,
    icon: <IoFastFoodSharp size="15px" color="inherit" />,
    collapse: [{ name: "Canteen", key: "canteen", route: "/canteen", component: CanteenLayout }],
  },
  {
    type: "link",
    name: "Accounting",
    key: "accounting",
    route: "/accounting",
    icon: <IoDocument size="15px" color="inherit" />,
    component: AccountingLayout,
    collapse: [
      { name: "Accounting", key: "accounting", route: "/accounting", component: AccountingLayout },
      { name: "ROPs", key: "rops", route: "/accounting/ROPs", component: ROPs },
      {
        name: "Balance Deposit Log",
        key: "balance-deposit-log",
        route: "/accounting/balance-deposit-log",
        component: BalanceDepositLog,
      },
      {
        name: "Withhold from Salary",
        key: "withhold-from-salary",
        route: "/accounting/withhold-from-salary",
        component: WithholdFromSalary,
      },
      {
        name: "Monthly Reports",
        key: "monthly-reports",
        route: "/accounting/monthly-reports",
        component: MonthlyReports,
      },
      {
        name: "New ROP",
        key: "new-rop",
        route: "/accounting/new-rop",
        component: NewROP,
      },
    ],
  },
  {
    type: "link",
    name: "Reception",
    key: "reception",
    route: "/reception",
    icon: <IoDocumentText size="15px" color="inherit" />,
    component: ReceptionLayout,
    collapse: [
      { name: "Reception", key: "reception", route: "/reception", component: ReceptionLayout },
      {
        name: "Corporate Card",
        key: "corporate-card",
        route: "/reception/corporate-card",
        component: CorporateCard,
      },
      {
        name: "Guest Card",
        key: "guest-card",
        route: "/reception/guest-card",
        component: GuesrCard,
      },
      {
        name: "Ordinary Card",
        key: "ordinary-card",
        route: "/reception/ordinary-card",
        component: OrdinaryCard,
      },
      { name: "Add Card", key: "add-card", route: "/reception/add-card", component: addCard },
    ],
  },
  {
    type: "link",
    name: "Admin",
    key: "admin",
    route: "/admin",
    icon: <IoDocument size="15px" color="inherit" />,
    component: AdminLayout,
    collapse: [
      { name: "Admin", key: "admin", route: "/admin", component: AdminLayout },
      { name: "Admins", key: "admins", route: "/admin/Admins", component: AdminPage },
      { name: "Cashiers", key: "cashiers", route: "/admin/Cashiers", component: CashierPage },
      { name: "Bookers", key: "bookers", route: "/admin/Bookers", component: BookerPage },
      { name: "Guests", key: "guests", route: "/admin/Guests", component: "#" },
      { name: "Reception", key: "reception", route: "/admin/Reception", component: ReceptionPage },
      { name: "Settings", key: "settings", route: "/admin/Settings", component: NewSettings },
    ],
  },
  {
    type: "link",
    name: "Cash",
    key: "cash",
    route: "/cash",
    component: CashLayout,
    icon: <IoWallet size="15px" color="inherit" />,
    collapse: [
      { name: "Cash", key: "cash", route: "/cash", component: CashLayout },
      { name: "Breakfast", key: "breakfast", route: "/cash/breakfast", component: Breakfast },
      { name: "Lunch", key: "lunch", route: "/cash/lunch", component: Lunch },
      { name: "Dinner", key: "dinner", route: "/cash/dinner", component: Dinner },
      {
        name: "Coffee Break",
        key: "coffee-break",
        route: "/cash/coffee Break",
        component: CoffeeBreak,
      },
      {
        name: "Coffee Break 2",
        key: "coffee-break-2",
        route: "/cash/coffee Break 2",
        component: CoffeeBreak2,
      },
      { name: "History", key: "history", route: "/cash/history", component: History },
      {
        name: "Distribution",
        key: "distribution",
        route: "/cash/distribution",
        component: Distribution,
      },
    ],
  },
];

export default routes;
