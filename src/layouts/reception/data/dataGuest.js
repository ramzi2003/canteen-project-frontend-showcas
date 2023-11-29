/* eslint-disable react/prop-types */
import React from "react";
import VuiTypography from "components/VuiTypography/index";
import IdCell from "layouts/clients/components/IdCell";
import DefaultCell from "layouts/reception/components/DefaultCell";
import StatusCell from "layouts/clients/components/StatusCell";
import CustomerCell from "layouts/reception/components/CustomerCell";
import VuiButton from "components/VuiButton";
import { IoDesktop, IoCard } from "react-icons/io5";

// Images
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";

export default {
  columns: [
    { Header: "Name", accessor: "name",
      Cell: ({ value: [name, data] }) => (
        <CustomerCell image={data.image} color={data.color || "dark"} name={name} />
      ),
    },
    { Header: "Card Number", accessor: "cardNumber", Cell: ({ value }) => <DefaultCell value={value} /> },
    { Header: "Type", accessor: "type", Cell: ({ value }) => <DefaultCell value={value} /> },
    { Header: "Actions", accessor: "actions", Cell: ({ row }) => (
        <div>
          <VuiButton color="info" variant="contained" size="small" style={{ marginRight: '8px' }} onClick={() => handleEdit(row)}>
            <IoDesktop style={{ marginRight: '8px' }} /> Edit
          </VuiButton>
          <VuiButton color="error" variant="contained" size="small" style={{ marginRight: '8px' }} onClick={() => handleDelete(row)}>
            <IoDesktop style={{ marginRight: '8px' }} /> Delete
          </VuiButton>
          <VuiButton color="warning" variant="contained" size="small" onClick={() => handleUnbind(row)}>
            <IoDesktop style={{ marginRight: '8px' }} /> Unbind
          </VuiButton>
        </div>
      ),
    },
  ],

  rows: [
    {
      name: ["Carson Neil", { image: team2 }],
      cardNumber: "1234 5678 9012 3456",
      type: "Guest",
    },
    {
      name: ["Sadyrov Maksat", { image: team1 }],
      cardNumber: "9876 5432 1098 7654",
      type: "Guest",
    },
    {
      name: ["Ibraev Temirbek", { image: "M", color: "info" }],
      cardNumber: "1111 2222 3333 4444",
      type: "Guest",
    },
    {
      name: ["Kemirkulov Kurban", { image: team3 }],
      cardNumber: "5555 6666 7777 8888",
      type: "Guest",
    },
    {
      name: ["Abdul Malik", { image: team1 }],
      cardNumber: "9999 8888 7777 6666",
      type: "Guest",
    },
  ],
};

const handleEdit = (row) => {
  // Create a new paragraph element
  var editParagraph = document.createElement('p');
  // Set the content of the paragraph
  editParagraph.textContent = `Edit action for row with ID ${row.id}`;
  editParagraph.style.color = 'red';
  // Append the paragraph to the document body (you can change this to another element if needed)
  document.body.appendChild(editParagraph);
};

const handleDelete = (row) => {
  // Create a new paragraph element
  var deleteParagraph = document.createElement('p');
  // Set the content of the paragraph
  deleteParagraph.textContent = `Delete action for row with ID ${row.id}`;
  deleteParagraph.style.color = 'red';
  // Append the paragraph to the document body
  document.body.appendChild(deleteParagraph);
};

const handleUnbind = (row) => {
  // Create a new paragraph element
  var unbindParagraph = document.createElement('p');
  // Set the content of the paragraph
  unbindParagraph.textContent = `Unbind action for row with ID ${row.id}`;
  unbindParagraph.style.color = 'red';
  // Append the paragraph to the navbar 
  document.body.appendChild(unbindParagraph);
};
