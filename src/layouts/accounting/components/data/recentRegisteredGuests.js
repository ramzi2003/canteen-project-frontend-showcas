import VuiButton from "components/VuiButton";
import { Link } from "react-router-dom";
import { GrSubtractCircle } from "react-icons/gr";
import { IoIosAddCircleOutline } from "react-icons/io";
import { AiOutlineHistory } from "react-icons/ai";


export default {
  columns: [
    { Header: "№", accessor: "number", width: "1%"},
    { Header: "NAME", accessor: "name", width: "10%" },
    { Header: "DEPARTMENT", accessor: "department", width: "13%" },
    { Header: "REGISTERED DATE", accessor: "registeredDate", width: "13%" },
    { Header: "BALANCE", accessor: "balance", width: "10%"},
    { Header: "ACTIONS", accessor: "actions", width: "15%" },
  ],

  rows: [
    {
      number: "1",
      name: "Alexandra Filatova",
      department: "Popular Culture Grand",
      registeredDate: "17.10.2023",
      balance: "0",
      actions: (
        <div>
          <Link to="">
            <VuiButton style={{ backgroundColor: 'red', color: 'white' }} variant="outline" size="small">
            <GrSubtractCircle size="15px" style={{ marginRight: '2px' }} />BALANCE
            </VuiButton>
          </Link>
          <span style={{ margin: '0 4px' }}></span>
          <Link to="">
            <VuiButton style={{ backgroundColor: '#05CD99', color: 'white' }}  variant="outline" size="small">
            <IoIosAddCircleOutline  size="15px" style={{ marginRight: '2px' }}  />BALANCE
            </VuiButton>
          </Link>
        </div>
        
      ),
    },
    {
      number: "2",
      name: "Ariza Karasaeva",
      department: "Guest",
      registeredDate: "12.10.2023",
      balance: "-578",
      actions: (
        <div>
           <Link to="">
            <VuiButton style={{ backgroundColor: 'red', color: 'white' }} variant="outline" size="small">
            <GrSubtractCircle size="15px" style={{ marginRight: '1px' }} />BALANCE
            </VuiButton>
          </Link>
          <span style={{ margin: '0 2px' }}></span>
          <Link to="">
            <VuiButton style={{ backgroundColor: '#05CD99', color: 'white' }}  variant="outline" size="small">
            <IoIosAddCircleOutline  size="15px" style={{ marginRight: '2px' }}  />BALANCE
            </VuiButton>
          </Link>
          <span style={{ margin: '0 2px' }}></span>
          <Link to="">
            <VuiButton style={{  backgroundColor: 'transparent', color: 'white', border: '2px solid white'  }}  variant="outline" size="small">
            <AiOutlineHistory size="15px" style={{ marginRight: '2px' }} /> History
            </VuiButton>
          </Link>
          
        </div>
        
      ),
      }
  ],
};
