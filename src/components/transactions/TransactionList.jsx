import React from 'react';
import { UseGlobalState } from '../../hooks/UseGlobalState';
import { FiDelete } from "react-icons/fi";

function TransactionList() {
  const { transactions, deleteTransaction } = UseGlobalState();

  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">تاریخچه تراکنش‌ها</h3>
      
      {transactions.length === 0 ? (
        <p className="text-gray-500 text-center">هنوز تراکنشی ثبت نشده است.</p>
      ) : (
        <ul className="space-y-3">
          {transactions.map((transaction) => (
            <li 
              key={transaction.id} 
              className={`bg-white shadow-md p-3 rounded flex justify-between items-center border-r-4 ${
                transaction.type === 'income' ? 'border-green-500' : 'border-red-500'
              }`}
            >
              <div>
                <span className="font-bold text-gray-700 block">{transaction.title}</span>
                <span className="text-xs text-gray-400">{transaction.category} | {transaction.date}</span>
              </div>
              
              <div className="flex items-center gap-4">
                <span className={`font-bold ${transaction.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                  {Math.abs(transaction.amount).toLocaleString()} تومان
                </span>
                <button 
                  onClick={() => deleteTransaction(transaction.id)}
                  className="text-red-400 hover:text-red-600 transition-colors cursor-pointer"
                  title="حذف"
                >
                  <FiDelete />

                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TransactionList;