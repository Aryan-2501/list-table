import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import CloseButton from "../../Components/Buttons/CloseButton";
import SubmitButton from "../../Components/Buttons/SubmitButton";
import "./stylenew.css";
import DropDownList from "../../Components/DropDown/DropDownList";
import { initialState, typeList } from "./constants";

function NewData() {
  const [values, setValues] = useState(initialState);
  const [selectedItems, setSelectedItems] = useState("null");

  useEffect(() => {
    handleMaxDate();
  }, []);

  function handleValidation() {
    const { transaction, email, date, type, items, amount } = values;
    if (transaction === "") {
      alert("Please enter transaction name");
      return false;
    } else if (email === "") {
      alert("Please enter email");
      return false;
    } else if (date === "") {
      alert("Please select a date");
      return false;
    } else if (type === "") {
      alert("Please enter type of transaction");
      return false;
    } else if (items.length === 0) {
      alert("Please select item (s)");
      return false;
    } else if (amount === "") {
      alert("Please enter a amount");
      return false;
    }
    return true;
  }

  function handleMaxDate() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //-3 for month!
    let yyyy = today.getFullYear();

    if (dd < 10) {
      dd = "0" + dd;
    }

    if (mm < 10) {
      mm = "0" + mm;
    }

    today = yyyy + "-" + mm + "-" + dd;
    document.getElementById("date").setAttribute("max", today);
  }

  function handleItemsList(data) {
    setValues({ ...values, items: data });
  }

  return (
    <>
      <Navbar />
      <div className="main">
        <div className="text">
          <span>Create new</span>
        </div>
        <div className="container">
          <div className="title">
            <h2>Add a new transaction</h2>
            <span>Please fill the below details to add new Transaction</span>
          </div>
          <form>
            <div className="trans-details">
              <div className="box-set">
                <div className="input-box">
                  <span className="input-details">Transaction name*</span>
                  <input
                    type="text"
                    name="transaction"
                    id="transaction"
                    onChange={(e) => {
                      setValues({ ...values, transaction: e.target.value });
                    }}
                    value={values.transaction}
                    required
                  />
                </div>

                <div className="input-box">
                  <span className="input-details">Email*</span>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={(e) => {
                      setValues({ ...values, email: e.target.value });
                    }}
                    value={values.email}
                    required
                  />
                </div>
              </div>

              <div className="box-set">
                <div className="input-box">
                  <span className="input-details">Date of transaction*</span>
                  <input
                    type="date"
                    // max="2022-09-30"
                    name="date"
                    id="date"
                    onChange={(e) => {
                      setValues({ ...values, date: e.target.value });
                    }}
                    value={values.date}
                    required
                  />
                </div>

                <div className="input-box">
                  <span className="input-details">Type*</span>
                  <select
                    onChange={(e) => {
                      setValues({ ...values, type: e.target.value });
                    }}
                  >
                    <option value="">Select Type</option>
                    <option value="credit">Credit</option>
                    <option value="debit">Debit</option>
                  </select>
                </div>
              </div>

              <div className="box-set">
                <div className="input-box">
                  <span className="input-details">Items*</span>

                  <DropDownList
                    Data={typeList}
                    onChange={handleItemsList}
                    setSelected={setSelectedItems}
                  />
                </div>

                <div className="input-box">
                  <span className="input-details">Transaction amount*</span>
                  <input
                    type="number"
                    name="amount"
                    id="amount"
                    onChange={(e) => {
                      setValues({ ...values, amount: e.target.value });
                    }}
                    value={values.amount}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="button">
              <CloseButton />
              <SubmitButton
                value={values}
                edit={false}
                validation={handleValidation}
              />
              {/* <input type="submit" value="Close" /> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default NewData;
