import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import CloseButton from "../../Components/Buttons/CloseButton";
import SubmitButton from "../../Components/Buttons/SubmitButton";
import "../NewData/stylenew.css";
import { initialState, typeList } from "../NewData/constants";
import DropDownList from "../../Components/DropDown/DropDownList";

function EditData(props) {
  const [values, setValues] = useState(initialState);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    // handleItemsList();
    let oldData = localStorage.getItem("editData");
    if (oldData) {
      let filterData = JSON.parse(oldData);

      setValues(...filterData);
    }
  }, []);

  function handleItemsList(data) {
    setValues({ ...values, items: data });
  }

  return (
    <>
      <Navbar />
      <div className="main">
        <div className="text">
          <span>Edit</span>
        </div>
        <div className="container">
          <div className="title">
            <h2>Edit transaction</h2>
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
                    checkItems={values.items}
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
              <SubmitButton value={values} edit={true} />
              {/* <input type="submit" value="Close" /> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditData;
