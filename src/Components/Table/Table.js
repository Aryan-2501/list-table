import React, { useEffect, useState } from "react";
// import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { columns } from "./constants";
import SearchBar from "../SearchBar";

function Table() {
  const [data, setData] = useState([]);
  const [editData, setEditData] = useState();

  useEffect(() => {
    const local = localStorage;

    for (var key in local) {
      if (key !== "id" && key !== "editData") {
        let retrievedData = localStorage.getItem(key);

        if (retrievedData) {
          let filterData = JSON.parse(retrievedData);

          setData((preData) => [...preData, filterData]);
        }
      }
    }
  }, []);

  const onRowsSelectionHandler = (ids) => {
    const selectedRowsData = ids.map((id) => data.find((row) => row.id === id));
    setEditData(selectedRowsData);
  };

  return (
    <div
      style={{
        height: "400px",
        width: "100%",
        boxShadow: "0px 3px 3px 3px #c3bebe6b",
        borderRadius: "15px",
        background: "white",
      }}
    >
      {/* <Box
        sx={{
          height: 300,
          width: "100%",
          "& .super-app-theme--header": {
            backgroundColor: "rgba(255, 7, 0, 0.55)",
          },
        }}
      > */}
      <SearchBar />
      <DataGrid
        onSelectionModelChange={(ids) => onRowsSelectionHandler(ids)}
        // options={options}
        style={{ borderRadius: "0px" }}
        rows={data}
        columns={columns(editData)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
      {/* </Box> */}
    </div>
  );
}

export default Table;
