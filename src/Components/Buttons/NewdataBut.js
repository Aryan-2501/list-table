import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  height: 45px;
  width: 146px;
  padding: 6px;
  border-radius: 6px;
  background-color: #19174a;
  color: white;
  cursor: pointer;
`;

function NewdataBut() {
  const navigate = useNavigate();

  function clickMe() {
    navigate("/newdata", { replace: false });
  }

  return (
    <div>
      <Button onClick={clickMe}>Create new</Button>
    </div>
  );
}

export default NewdataBut;
