export const initialValue = (...data) => {
  return {
    id: data.id,
    transaction: data.transaction,
    email: data.email,
    date: data.date,
    type: data.type,
    items: data.items,
    amount: data.amount,
  };
};
