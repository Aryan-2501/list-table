import EditdataBut from "../Buttons/EditdataBut";

export const columns = (editData) => [
  { field: "id", headerName: "Transaction ID", width: 130 },
  {
    field: "transaction",
    headerName: "Transaction name",
    headerClassName: "super-app-theme--header",
    width: 150,
  },
  { field: "email", headerName: "Email", type: "email", width: 170 },
  {
    field: "type",
    headerName: "Type",
    width: 90,
  },
  {
    field: "date",
    headerName: "Date",
    type: "date",
    width: 120,
  },
  {
    field: "items",
    headerName: "Items",
    width: 180,
    renderCell: (props) => <ItemsList row={props.row} />,
  },
  {
    field: "amount",
    headerName: "Amount",
    type: "number",
    width: 90,
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 90,
    renderCell: () => <EditdataBut rowData={editData} />,
  },
];

// export const rows = [
//   {
//     id: 1,
//     name: "A",
//     email: "a@example.com",
//     type: "Credit",
//     date: "06-01-21",
//     items: "dinner",
//     amount: "1,000",
//   },
//   {
//     id: 2,
//     name: "A",
//     email: "a@example.com",
//     type: "Credit",
//     date: "06-01-21",
//     items: "dinner",
//     amount: "1,000",
//   },
//   {
//     id: 3,
//     name: "A",
//     email: "a@example.com",
//     type: "Credit",
//     date: "06-01-21",
//     items: "dinner",
//     amount: "1,000",
//   },
//   {
//     id: 4,
//     name: "A",
//     email: "a@example.com",
//     type: "Credit",
//     date: "06-01-21",
//     items: "dinner",
//     amount: "1,000",
//   },
//   {
//     id: 5,
//     name: "A",
//     email: "a@example.com",
//     type: "Credit",
//     date: "06-01-21",
//     items: "dinner",
//     amount: "1,000",
//   },
//   {
//     id: 6,
//     name: "A",
//     email: "a@example.com",
//     type: "Credit",
//     date: "06-01-21",
//     items: "dinner",
//     amount: "1,000",
//   },
//   {
//     id: 7,
//     name: "A",
//     email: "a@example.com",
//     type: "Credit",
//     date: "06-01-21",
//     items: "dinner",
//     amount: "1,000",
//   },
//   {
//     id: 8,
//     name: "A",
//     email: "a@example.com",
//     type: "Credit",
//     date: "06-01-21",
//     items: "dinner",
//     amount: "1,000",
//   },
//   {
//     id: 9,
//     name: "A",
//     email: "a@example.com",
//     type: "Credit",
//     date: "06-01-21",
//     items: "dinner",
//     amount: "1,000",
//   },
// ];

export const ItemsList = ({ row }) => {
  let itemList = row.items;
  // console.log(row);
  return (
    <>
      {itemList.map(
        (label) => (
          <label>{label.name + " ,"}</label>
        )
        // console.log(label)
      )}
    </>
  );
};

// export const options = () => ({
//   headerStyles: { size: "40px", backgroundColor: "blue" },
// });
