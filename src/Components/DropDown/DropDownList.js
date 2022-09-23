import React, { useState, useEffect } from "react";

import "./style.css";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

function DropDownList(props) {
  const { label, Data, setSelected, onChange } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedName, setSelectedName] = useState(null);
  const [isHeight, setIsHeight] = useState(160);
  const [isScrol, setIsScrol] = useState(false);

  useEffect(() => {
    if (Data) {
      if (Data.length < 7) {
        var Height = Data.length * 30 + 2;
        setIsHeight(Height);
        setIsScrol(false);
      } else {
        setIsHeight(160);
        setIsScrol(true);
      }
    }
  }, [Data]);

  const handleMultipleSelect = () => {
    const checkedValues = Array.from(
      document.querySelectorAll('input[type="checkbox"]')
    )
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => ({
        name: checkbox.name,
        value: parseInt(checkbox.value),
      }));

    if (checkedValues.length > 0) {
      onChange("");
      setSelected(checkedValues);

      let name = checkedValues.map((Items) => {
        return Items.name;
      });
      setSelectedName(name);
    }
  };

  return (
    <>
      <label>{label}</label>
      <br />
      <div
        className="dropdown-list"
        onClick={() => {
          setIsOpen(false);
          if (!isOpen) {
            setIsOpen(true);
          }
        }}
      >
        {selectedName ? selectedName.join(", ") : "Select item (s)"}
        <KeyboardArrowDownRoundedIcon className="arrow" />
      </div>
      {Data ? (
        <div
          className="dropdown-sublist"
          style={{
            display: isOpen ? "block" : "none",
            height: `${isHeight}px`,
            overflowY: isScrol ? "scroll" : "none",
          }}
        >
          {Data.map((item) => (
            <>
              <input
                className="dropdown-input"
                type="checkbox"
                name={item.name}
                checked={null}
                value={item.id}
                onChange={handleMultipleSelect}
              />
              <label className="dropdown-label">{item.name}</label>
              <br />
            </>
          ))}
        </div>
      ) : (
        <div
          className="dropdown-sublist2"
          onClick={() => {
            setIsOpen(false);
          }}
          style={{
            display: isOpen ? "flex" : "none",
          }}
        >
          No Record Found
        </div>
      )}
    </>
  );
}

export default DropDownList;
