
import VuiButton from "components/VuiButton";
import { Link } from "react-router-dom";

export default {
  columns: [
    { Header: "USERNAME", accessor: "username", width: "10%" },
    { Header: "NAME", accessor: "name", width: "15%" },
    { Header: "STATUS", accessor: "status", width: "13%" },
    { Header: "ACTIONS", accessor: "actions", width: "20%" },
  ],

  rows: [
    {
      username: "Diloro",
      name: "Diloro Odinaeva",
      status:
          <Link to="">
            <VuiButton style={{  backgroundColor: 'transparent', color: 'white', border: '1px solid white'  }} variant="outline" size="small">
              Active
            </VuiButton>
          </Link>
        ,
      actions: (
        <div>
          <Link to="">
            <VuiButton style={{ backgroundColor: 'red', color: 'white' }} variant="outline" size="small">
              Deactivate
            </VuiButton>
          </Link>
          <span style={{ margin: '0 8px' }}></span>
          <Link to="">
            <VuiButton style={{ backgroundColor: '#05CD99', color: 'white' }}  variant="outline" size="small">
              Delete
            </VuiButton>
          </Link>
          <span style={{ margin: '0 8px' }}></span>
          <Link to="">
            <VuiButton style={{  backgroundColor: 'transparent', color: 'white', border: '1px solid white'  }}  variant="outline" size="small">
              Edit
            </VuiButton>
          </Link>
          
        </div>
        
      ),
    },
    {
      username: "Sabzina",
      name: "Sabzina Azorabekova",
      status:
          <Link to="">
            <VuiButton style={{  backgroundColor: 'transparent', color: 'white', border: '1px solid white'  }} variant="outline" size="small">
              Active
            </VuiButton>
          </Link>
      ,
      actions: (
        <div>
          <Link to="">
            <VuiButton style={{ backgroundColor: 'red', color: 'white' }} variant="outline" size="small">
              Deactivate
            </VuiButton>
          </Link>
          <span style={{ margin: '0 8px' }}></span>
          <Link to="">
            <VuiButton style={{ backgroundColor: '#05CD99', color: 'white' }}  variant="outline" size="small">
              Delete
            </VuiButton>
          </Link>
          <span style={{ margin: '0 8px' }}></span>
          <Link to="">
            <VuiButton style={{  backgroundColor: 'transparent', color: 'white', border: '1px solid white'  }}  variant="outline" size="small">
              Edit
            </VuiButton>
          </Link>       
        </div>
        
      ),
    },
  ],
};
