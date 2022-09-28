import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  height: 45px;
  width: 146px;
  padding: 6px;
  border-radius: 6px;
  background-color: #19174a;
  border: 0;
  color: white;
  cursor: pointer;
`;

function Submitbut(props) {
  const navigate = useNavigate();
  const { value, edit, validation } = props;

  function handleSubmit(e) {
    e.preventDefault();

    try {
      if (edit) {
        localStorage.setItem(`${value.id}`, JSON.stringify(value));
        // console.log(value);
        navigate("/", { replace: true });
      } else {
        if (validation()) {
          let newId = localStorage.getItem("id");
          if (newId) {
            let id = parseInt(newId) + 1;

            localStorage.setItem("id", id);
          }

          localStorage.setItem(`${value.id}`, JSON.stringify(value));
          navigate("/", { replace: true });
        }
      }
    } catch (error) {
      console.log(error);
      alert(error.msg);
    }

    // console.log(value);
    // navigate("/", { replace: false });
  }

  return (
    <Button onClick={handleSubmit} type="submit">
      Submit
    </Button>
  );
}

export default Submitbut;
