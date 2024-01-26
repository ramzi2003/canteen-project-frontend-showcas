import VuiButton from "components/VuiButton";
import { Link } from "react-router-dom";

import StatusCell from "../StatusCell";


export default {
  columns: [
    { Header: "WHOM", accessor: "whom", width: "5%" },
    {
      Header: "STATUS",
      accessor: "status",
      width: "5%",
      Cell: ({ value }) => {
        let status;

        if (value === "paid") {
          status = "Ongoing";
        } else {
          status = <StatusCell icon="done" color="success" status="Closed" />;
        }

        return status;
      },
    },
    { Header: "REQUESTER", accessor: "requester", width: "5%" },
    { Header: "ACTIVE FORM", accessor: "activeForm", width: "5%" },
    { Header: "ACTIVE UNTIL", accessor: "activeUntil", width: "5%" },
    { Header: "BALANCE / SUM", accessor: "balanceSum", width: "5%" },
    { Header: "NUMBER OF PERSONS", accessor: "numberOfPersons", width: "5%" },
    { Header: "ACTIONS", accessor: "actions", width: "15%" },
  ],

  rows: [
    {
      whom: "Operations",
      requester: "Jibek Abdylkasymova",
      activeForm: "12.10.2023",
      activeUntil: "25.10.2023",
      balanceSum: "10120/10120",
      numberOfPersons: "4",
      actions: (
        <div>
          <Link to="">
            <VuiButton
              style={{ backgroundColor: "#05CD99", color: "white"}}
              variant="text"
              size="small"
            >
              View
            </VuiButton>
          </Link>
          <span style={{ margin: "0 4px" }}></span>
            <VuiButton
              style={{ backgroundColor: "orange", color: "white" }}
              variant="text"
              size="small"
              onClick={() => alert("Closed")}
            >
              Close
            </VuiButton>
          <span style={{ margin: "0 4px" }}></span>
          <Link to="">
            <VuiButton
              style={{ backgroundColor: "blue", color: "white" }}
              variant="text"
              size="small"
            >
              Edit
            </VuiButton>
          </Link>
          <span style={{ margin: "0 4px" }}></span>
          <Link to="">
            <VuiButton
              style={{ backgroundColor: "red", color: "white" }}
              variant="text"
              size="small"
            >
              Delete
            </VuiButton>
          </Link>
        </div>
      ),
    },
    {
      whom: "Restification eorks employees",
      requester: "Jibek Abdylkasymova",
      activeForm: "12.10.2023",
      activeUntil: "25.10.2023",
      balanceSum: "11132/14168",
      numberOfPersons: "4",
      actions: (
        <div>
          <Link to="">
            <VuiButton
              style={{ backgroundColor: "#05CD99", color: "white" }}
              variant="text"
              size="small"
            >
              View
            </VuiButton>
          </Link>
          <span style={{ margin: "0 4px" }}></span>

            <VuiButton
              style={{ backgroundColor: "orange", color: "white" }}
              variant="text"
              size="small"
            >
              Close
            </VuiButton>

          <span style={{ margin: "0 4px" }}></span>
          <Link to="">
            <VuiButton
              style={{ backgroundColor: "blue", color: "white" }}
              variant="text"
              size="small"
            >
              Edit
            </VuiButton>
          </Link>
          <span style={{ margin: "0 4px" }}></span>
          <Link to="">
            <VuiButton
              style={{ backgroundColor: "red", color: "white" }}
              variant="text"
              size="small"
            >
              Delete
            </VuiButton>
          </Link>
        </div>
      ),
    },
    {
        whom: "Operations",
        requester: "Sulaimanov Narynbek",
        activeForm: "18.09.2023",
        activeUntil: "18.09.2023",
        balanceSum: "0/4554",
        numberOfPersons: "18",
        actions: (
          <div>
            <Link to="">
              <VuiButton
                style={{ backgroundColor: "#05CD99", color: "white" }}
                variant="text"
                size="small"
              >
                View
              </VuiButton>
            </Link>
            <span style={{ margin: "0 4px" }}></span>
            <Link to="">
              <VuiButton
                style={{ backgroundColor: "blue", color: "white" }}
                variant="text"
                size="small"
              >
                Edit
              </VuiButton>
            </Link>
            <span style={{ margin: "0 4px" }}></span>
            <Link to="">
              <VuiButton
                style={{ backgroundColor: "red", color: "white" }}
                variant="text"
                size="small"
              >
                Delete
              </VuiButton>
            </Link>
          </div>
        ),
      },
  ],
};
