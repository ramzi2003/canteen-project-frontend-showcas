import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import SignInScreen from "./pages/SignInScreen";
import ChangeDepartmentClientsPag from "./pages/ChangeDepartmentClientsPag";
import AddClientClientsPage from "./pages/AddClientClientsPage";
import DashboardScreen from "./pages/DashboardScreen";
import ClientsPage from "./pages/ClientsPage";
import SignUpScreen from "./pages/SignUpScreen";
import AdminPageGuests from "./pages/AdminPageGuests";
import AdminPageReception from "./pages/AdminPageReception";
import AdminPageCashiers from "./pages/AdminPageCashiers";
import AdminPageBookers from "./pages/AdminPageBookers";
import AdminPageAdmins from "./pages/AdminPageAdmins";
import AdminPage from "./pages/AdminPage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/change-department-clients-page":
        title = "";
        metaDescription = "";
        break;
      case "/add-client-clients-page":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard-screen":
        title = "";
        metaDescription = "";
        break;
      case "/clients-page":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up-screen":
        title = "";
        metaDescription = "";
        break;
      case "/admin-page-guests":
        title = "";
        metaDescription = "";
        break;
      case "/admin-page-reception":
        title = "";
        metaDescription = "";
        break;
      case "/admin-page-cashiers":
        title = "";
        metaDescription = "";
        break;
      case "/admin-page-bookers":
        title = "";
        metaDescription = "";
        break;
      case "/admin-page-admins":
        title = "";
        metaDescription = "";
        break;
      case "/admin-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<SignInScreen />} />
      <Route
        path="/change-department-clients-page"
        element={<ChangeDepartmentClientsPag />}
      />
      <Route
        path="/add-client-clients-page"
        element={<AddClientClientsPage />}
      />
      <Route path="/dashboard-screen" element={<DashboardScreen />} />
      <Route path="/clients-page" element={<ClientsPage />} />
      <Route path="/sign-up-screen" element={<SignUpScreen />} />
      <Route path="/admin-page-guests" element={<AdminPageGuests />} />
      <Route path="/admin-page-reception" element={<AdminPageReception />} />
      <Route path="/admin-page-cashiers" element={<AdminPageCashiers />} />
      <Route path="/admin-page-bookers" element={<AdminPageBookers />} />
      <Route path="/admin-page-admins" element={<AdminPageAdmins />} />
      <Route path="/admin-page" element={<AdminPage />} />
    </Routes>
  );
}
export default App;
