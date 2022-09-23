const handleId = () => {
  let newId = localStorage.getItem("id");
  if (!newId) {
    localStorage.setItem("id", 1);
    return 1;
  } else {
    return newId;
  }
};

export const initialState = {
  id: handleId(),
  transaction: "",
  email: "",
  date: "",
  type: "",
  items: [],
  amount: "",
};

export const typeList = [
  { id: "1", name: "Dinner" },
  { id: "2", name: "Fruits" },
  { id: "3", name: "Milk" },
];
