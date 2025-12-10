import React from "react";
import IncomeExpenses from "../components/dashboard/IncomeExpenses";
import ExpenseChart from "../components/dashboard/ExpenseChart";
import TrendChart from "../components/dashboard/TrendChart";

function Dashboard() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">داشبورد مدیریتی</h2>

      <IncomeExpenses />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 "> 
         
         <div className="w-full h-full"> 
             <ExpenseChart />
         </div>
         
         <div className="w-full h-full ">
            <TrendChart />
         </div>

      </div>
    </div>
  );
}

export default Dashboard;
