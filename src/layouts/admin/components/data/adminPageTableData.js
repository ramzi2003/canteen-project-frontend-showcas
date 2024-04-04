import VuiButton from "components/VuiButton";
import { Link } from "react-router-dom";

const getAdminData = () => {

  const columns = [
    { Header: "FIRSTNAME", accessor: "firstname", width: "15%" },
    { Header: "LASTNAME", accessor: "lastname", width: "15%" },
    { Header: "STATUS", accessor: "status", width: "30%" },
    { Header: "ACTIONS", accessor: "actions", width: "20%" },
  ];

  const rows = [
    {
      firstname: "Alisher",
      lastname: "Alikulov",
      status: (
        <div>
          <Link to="">
            <VuiButton style={{ backgroundColor: 'transparent', color: 'white', border: '1px solid white' }} variant="outline" size="small">
              Active
            </VuiButton>
          </Link>
          <span style={{ margin: '0 8px' }}></span>
          <Link to="">
            <VuiButton style={{ backgroundColor: 'red', color: 'white' }} variant="outline" size="small">
              Superuser
            </VuiButton>
          </Link>
        </div>
      ),
      actions: (
        <div>
          <Link to="">
            <VuiButton style={{ backgroundColor: 'red', color: 'white' }} variant="outline" size="small">
              Delete
            </VuiButton>
          </Link>
          <span style={{ margin: '0 8px' }}></span>
          <Link to="">
            <VuiButton style={{ backgroundColor: '#05CD99', color: 'white' }} variant="outline" size="small">
              Add
            </VuiButton>
          </Link>
          <span style={{ margin: '0 8px' }}></span>
          <Link to="">
            <VuiButton style={{ backgroundColor: 'transparent', color: 'white', border: '1px solid white' }} variant="outline" size="small">
              Edit
            </VuiButton>
          </Link>
        </div>
      ),
    },
    {
      firstname: "Shavkat",
      lastname: "Mazabshoev",
      status: (
        <div>
          <Link to="">
            <VuiButton style={{ backgroundColor: 'transparent', color: 'white', border: '1px solid white' }} variant="outline" size="small">
              Active
            </VuiButton>
          </Link>
          <span style={{ margin: '0 8px' }}></span>
          <Link to="">
            <VuiButton style={{ backgroundColor: 'red', color: 'white' }} variant="outline" size="small">
              Superuser
            </VuiButton>
          </Link>
        </div>
      ),
      actions: (
        <div>
          <Link to="">
            <VuiButton style={{ backgroundColor: 'red', color: 'white' }} variant="outline" size="small">
              Delete
            </VuiButton>
          </Link>
          <span style={{ margin: '0 8px' }}></span>
          <Link to="">
            <VuiButton style={{ backgroundColor: '#05CD99', color: 'white' }} variant="outline" size="small">
              Add
            </VuiButton>
          </Link>
          <span style={{ margin: '0 8px' }}></span>
          <Link to="">
            <VuiButton style={{ backgroundColor: 'transparent', color: 'white', border: '1px solid white' }} variant="outline" size="small">
              Edit
            </VuiButton>
          </Link>
        </div>
      ),
    }
  ];

  return { columns, rows };
};

export default getAdminData;
