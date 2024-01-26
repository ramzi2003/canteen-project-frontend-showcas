
import VuiButton from "components/VuiButton";
import { Link } from "react-router-dom";

export default {
  columns: [
    { Header: "#", accessor: "number", width: "5%" },
    { Header: "CATEGORIES", accessor: "categories", width: "35%" },
    { Header: "TOTAL", accessor: "total", width: "20%" },
    { Header: "TOTAL BALANCE", accessor: "totalBalance", width: "20%" },
    { Header: "ACTIONS", accessor: "actions", width: "20%" },
  ],

  rows: [
    {
      number: "1",
      categories: "Admins",
      total: 5,
      totalBalance: 1200,
      actions: (
        <Link to="/admin/Admins">
          <VuiButton color="primary" variant="contained" size="small">
            View
          </VuiButton>
        </Link>
      ),
    },
    {
      number: "2",
      categories: "Cashiers",
      total: 2,
      totalBalance: 20000,
      actions: (
        <Link to="/admin/Cashiers">
          <VuiButton color="primary" variant="contained" size="small">
            View
          </VuiButton>
        </Link>
      ),
    },
    {
      number: "3",
      categories: "Bookers",
      total: 15,
      totalBalance: 1234,
      actions: (
        <Link to="/admin/Bookers">
        <VuiButton color="primary" variant="contained" size="small">
          View
        </VuiButton>
      </Link>
      ),
    },
    {
      number: "4",
      categories: "Guests",
      total: 15,
      totalBalance: 1234,
      actions: (
        <Link to="/admin/Guests">
        <VuiButton color="primary" variant="contained" size="small">
          View
        </VuiButton>
      </Link>
      ),
    },
    {
      number: "5",
      categories: "Reception",
      total: 15,
      totalBalance: 1234,
      actions: (
        <Link to="/admin/Reception">
        <VuiButton color="primary" variant="contained" size="small">
          View
        </VuiButton>
      </Link>
      ),
    }
  ],
};
