/* eslint-disable react/prop-types */
import VuiTypography from "components/VuiTypography/index";

// totalsList page components
import IdCell from "layouts/clients/components/IdCell";
import DefaultCell from "layouts/clients/components/DefaultCell";
import StatusCell from "layouts/clients/components/StatusCell";
import CustomerCell from "layouts/clients/components/CustomerCell";

// Images
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import team5 from "assets/images/team-5.jpg";
import ivana from "assets/images/ivana-squares.jpg";

export default {
  columns: [
    // { Header: "ID", accessor: "id", 
    
    //   Cell: ({ value }) => <IdCell id={value} /> 
    
    // },
    { Header: "DEPARTMENTS", accessor: "department",

    Cell: ({ value: [name, data] }) => (
      <CustomerCell image={data.image} color={data.color || "dark"} name={name} />
    ),
  },
    { Header: "DATE", accessor: "date", Cell: ({ value }) => <DefaultCell value={value} />},
    { Header: "STATUS", accessor: "status",

      Cell: ({ value }) => {
        let status;

        if (value === "paid") {
          status = <StatusCell icon="done" color="success" status="Paid" />;
        } else if (value === "refunded") {
          status = <StatusCell icon="replay" color="dark" status="Refunded" />;
        } else {
          status = <StatusCell icon="close" color="error" status="Canceled" />;
        }

        return status;
      },
    },
   
    { Header: "TOTAL", accessor: "total",
    
      Cell: ({ value }) => {
        const [name, data] = value;

        return (
          <DefaultCell
            value={typeof value === "string" ? value : name}
            suffix={data.suffix || false}
          />
        );
      },
    },
    { Header: "ACTION", accessor: "action", Cell: ({ value }) => <DefaultCell value={value} /> },
  ],

  rows: [
    {
      id: "#10421",
      date: "1 Nov, 10:20 AM",
      status: "paid",
      department: ["Orlando Imieto", { image: team2 }],
      total: "Nike Sport V2",
      action: "$140,20",
    },
    {
      id: "#10422",
      date: "1 Nov, 10:53 AM",
      status: "paid",
      department: ["Alice Murinho", { image: team1 }],
      total: "Valvet T-shirt",
      action: "$42,00",
    },
    {
      id: "#10423",
      date: "1 Nov, 11:13 AM",
      status: "refunded",
      department: ["Michael Mirra", { image: "M", color: "info" }],
      total: [
        "Leather Wallet",
        {
          suffix: (
            <VuiTypography variant="caption" color="text" fontWeight="medium">
              +1 more
            </VuiTypography>
          ),
        },
      ],
      action: "$25,50",
    },
    {
      id: "#10424",
      date: "1 Nov, 12:20 PM",
      status: "paid",
      department: ["Andrew Nichel", { image: team3 }],
      total: "Bracelet Onu-Lino",
      action: "$19,40",
    },
    {
      id: "#10425",
      date: "1 Nov, 1:40 PM",
      status: "canceled",
      department: ["Sebastian Koga", { image: team4 }],
      total: [
        "Phone Case Pink",
        {
          suffix: (
            <VuiTypography variant="caption" color="text" fontWeight="medium">
              X 2
            </VuiTypography>
          ),
        },
      ],
      action: "$44,90",
    },
    {
      id: "#10426",
      date: "1 Nov, 2:19 PM",
      status: "paid",
      department: ["Laur Gilbert", { image: "L", color: "info" }],
      total: "Backpack Niver",
      action: "$112,50",
    },
    {
      id: "#10427",
      date: "1 Nov, 3:42 AM",
      status: "paid",
      department: ["Iryna Innda", { image: "I", color: "info" }],
      total: "Adidas Vio",
      action: "$200,00",
    },
    {
      id: "#10428",
      date: "2 Nov, 9:32 AM",
      status: "paid",
      department: ["Arrias Liunda", { image: "A", color: "info" }],
      total: "Airpods 2 Gen",
      action: "$350,00",
    },
    {
      id: "#10429",
      date: "2 Nov, 10:14 AM",
      status: "paid",
      department: ["Rugna Ilpio", { image: team5 }],
      total: "Bracelet Warret",
      action: "$15,00",
    },
    {
      id: "#10430",
      date: "2 Nov, 10:14 AM",
      status: "refunded",
      department: ["Anna Landa", { image: ivana }],
      total: [
        "Watter Bottle India",
        {
          suffix: (
            <VuiTypography variant="caption" color="text" fontWeight="medium">
              X 3
            </VuiTypography>
          ),
        },
      ],
      action: "$25,00",
    },
    {
      id: "#10431",
      date: "2 Nov, 3:12 PM",
      status: "paid",
      department: ["Karl Innas", { image: "K", color: "info" }],
      total: "Kitchen Gadgets",
      action: "$164,90",
    },
    {
      id: "#10432",
      date: "2 Nov, 5:12 PM",
      status: "paid",
      department: ["Oana Kilas", { image: "O", color: "info" }],
      total: "Office Papers",
      action: "$23,90",
    },
  ],
};
