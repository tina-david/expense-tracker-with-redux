import React from "react";
import { PieChart } from "@mui/x-charts/PieChart"; 
// import { UseGlobalState } from "../../hooks/UseGlobalState";
import { useSelector } from 'react-redux';

function ExpenseChart() {
  const { transactions } = useSelector((state)=>state.expense);

  const expenseTransactions = transactions.filter((t) => t.type === "expense");

  const categoryTotals = expenseTransactions.reduce((acc, transaction) => {
    const category = transaction.category;
    const amount = Math.abs(transaction.amount);

    if (acc[category]) {
      acc[category] += amount;
    } else {
      acc[category] = amount;
    }
    return acc;
  }, {});

  const chartData = Object.keys(categoryTotals).map((cat, index) => ({
    id: index,
    value: categoryTotals[cat],
    label: cat,
  }));

  if (expenseTransactions.length === 0) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md mt-6 text-center">
        <p className="text-gray-400">داده‌ای برای نمایش نمودار وجود ندارد.</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6 flex flex-col items-center justify-center">
      <h3 className="text-gray-700 font-bold mb-2 border-b pb-2 w-full text-center">
        آنالیز مخارج
      </h3>

      <PieChart
        series={[
          {
            data: chartData,
            innerRadius: 30, 
            outerRadius: 100, 
            paddingAngle: 5, 
            cornerRadius: 5, 
            highlightScope: { faded: 'global', highlighted: "item" }, 
            faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
          },
        ]}
        width={400} 
        height={275}

        slotProps={{
          legend: {
            direction: "row", 
            position: { vertical: "bottom", horizontal: "middle" },
            padding: 0,
          },
        }}
      />
    </div>
  );
}

export default ExpenseChart;
