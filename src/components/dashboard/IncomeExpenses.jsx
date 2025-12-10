import React from 'react';
import { UseGlobalState } from '../../hooks/UseGlobalState';

function IncomeExpenses() {
  const { transactions } = UseGlobalState();

  const amounts = transactions.map(transaction => transaction.amount);
console.log(amounts);
  const total = amounts.reduce((acc, item) => (acc += item), 0);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1
  );

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6 flex justify-between items-center text-center ">
      
      <div className="flex-1">
        <h4 className="text-gray-500 text-sm font-bold uppercase">درآمد</h4>
        <p className="text-green-500 text-xl font-bold mt-1">
            {income.toLocaleString()} تومان
        </p>
      </div>

      <div className="flex-1 border-r border-l border-gray-200"> 
        <h4 className="text-gray-800 text-md font-bold uppercase">موجودی شما</h4>
        <h1 className={`text-2xl font-extrabold mt-1 ${total < 0 ? 'text-red-600' : 'text-gray-800'}`}>
           {total.toLocaleString()} تومان
        </h1>
      </div>

      <div className="flex-1">
        <h4 className="text-gray-500 text-sm font-bold uppercase">هزینه</h4>
        <p className="text-red-500 text-xl font-bold mt-1">
            {expense.toLocaleString()} تومان
        </p>
      </div>

    </div>
  );
}

export default IncomeExpenses;