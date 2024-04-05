// /* eslint-disable react/prop-types */
// import VuiTypography from "components/VuiTypography/index";

// // totalsList page components
// import IdCell from "layouts/clients/components/IdCell";
// import DefaultCell from "layouts/clients/components/DefaultCell";
// import StatusCell from "layouts/clients/components/StatusCell";
// import CustomerCell from "layouts/clients/components/CustomerCell";

// // Images
// import team1 from "assets/images/team-1.jpg";
// import team2 from "assets/images/team-2.jpg";
// import team3 from "assets/images/team-3.jpg";
// import team4 from "assets/images/team-4.jpg";
// import VuiButton from "components/VuiButton";

// import { Link } from "react-router-dom";



// const AllClients = {

//   columns: [
//     // { Header: "ID", accessor: "id" },
//     { Header: "Name", accessor: "name",
    
//     Cell: ({ value: { name, image } }) => (
//       <CustomerCell image={image} color={"dark"} name={name} />
//     ),
  
//   },
//     { Header: "Email", accessor: "email" },
//     { Header: "Age", accessor: "age" },
//     { Header: "Gender", accessor: "gender" },
//     { Header: "Balance", accessor: "balance" },
//     { Header: "Client Category ID", accessor: "client_category_id" },
//     { Header: "Active", accessor: "is_active" }
//   ],

//   // Fetching data from the API and

//   rows: [
//     {
//       id: 0,
//       name: { name: "Test", image: team1 },
//       email: "test@gmail.com",
//       age: 0,
//       gender: "Male",
//       balance: 0,
//       client_category_id: 0,
//       is_active: true
//     }
//   ]
// };

// export default AllClients;


import React, { useState, useEffect } from 'react';
import DataTable from "examples/Tables/DataTable";



const ClientsPage = () => {
  const [clientData, setClientData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let accessToken = localStorage.getItem('accessToken');
        console.log('Access Token:', accessToken);
        if (!accessToken) {
          throw new Error('Access token is missing. Please sign in.');
        }

        const apiResponse = await fetch('http://localhost:8080/api/clients', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        });

        if (!apiResponse.ok) {
          throw new Error('Failed to fetch data.');
        }

        const result = await apiResponse.json();
        console.log('Fetched Client Data:', result);
        setClientData(result.data);
        setError(null);
      } catch (error) {
        console.error('Fetch Data Error:', error);
        setError('Error fetching data. Please try again.');
        setClientData([]);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      

      
        <DataTable
          table={{
            columns: [
              { Header: "Name", accessor: "name" },
              { Header: "Email", accessor: "email" },
              { Header: "Age", accessor: "age" },
              { Header: "Gender", accessor: "gender" },
              { Header: "Balance", accessor: "balance" },
              { Header: "Client Category ID", accessor: "client_category_id" },
              { Header: "Active", accessor: "is_active" }
            ],
            rows: clientData.map(client => ({
              name: client.name,
              email: client.email,
              age: client.age,
              gender: client.gender,
              balance: client.balance,
              client_category_id: client.client_category_id,
              is_active: client.is_active
            }))
          }}
          entriesPerPage={true}
          canSearch
        />
      
    </div>
  );
};

export default ClientsPage;
