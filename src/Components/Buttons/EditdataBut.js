import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BorderColorIcon from "@mui/icons-material/BorderColor";

const Div = styled.div`
  color: dodgerBlue;
  cursor: pointer;
  display: flex;
  justify-content: center;
  alight-item: center;
`;
function EditdataBut(props) {
  const navigate = useNavigate();

  function handleEdit() {
    // console.log(props.rowData);
    if (props.rowData) {
      navigate("/editdata", { replace: false });
      localStorage.setItem("editData", JSON.stringify(props.rowData));
    }
  }

  return (
    <div>
      <Div onClick={handleEdit}>
        <BorderColorIcon />
      </Div>
    </div>
  );
}

export default EditdataBut;
