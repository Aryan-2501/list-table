import React from "react";

import NewdataBut from "../../Components/Buttons/NewdataBut";
import Navbar from "../../Components/Navbar/Navbar";
import Table from "../../Components/Table/Table";
import "./style.css";

function Home() {
  return (
    <>
      <Navbar />
      {/* <br /> */}
      <div className="home-container">
        <div className="table-header">
          <span>List of Transactions</span>
          <span>
            <NewdataBut />
          </span>
        </div>

        <div className="table">
          <Table />
        </div>
      </div>
    </>
  );
}

export default Home;
