import React from "react";
import AddTransaction from "../components/transactions/AddTransaction";
import TransactionList from "../components/transactions/TransactionList";
import TransactionFilter from "../components/transactions/TransactionFilter";
const Transactions = () => {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">
        مدیریت تراکنش ها
      </h1>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6">
     
      <AddTransaction />
<div>
      <TransactionFilter />
      <TransactionList />
      </div>
      </div>
    </div>
  );
};

export default Transactions;
