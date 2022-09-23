import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  height: 45px;
  width: 146px;
  padding: 6px;
  border-radius: 6px;
  background-color: #16c1f3;
  border: 0;
  color: white;
  cursor: pointer;
`;

function Closebut() {
  const navigate = useNavigate();

  function clickMe() {
    navigate("/", { replace: false });
  }

  return <Button onClick={clickMe}>Close</Button>;
}

export default Closebut;
