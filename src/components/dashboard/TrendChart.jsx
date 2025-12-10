import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { UseGlobalState } from '../../hooks/UseGlobalState';

function TrendChart() {
  const { transactions } = UseGlobalState();

  const groupedData = transactions.reduce((acc, curr) => {
    const date = curr.date;
    
    if (!acc[date]) {
      acc[date] = { income: 0, expense: 0 };
    }

    if (curr.type === 'income') {
      acc[date].income += Number(curr.amount);
    } else {
      acc[date].expense += Math.abs(Number(curr.amount));
    }

    return acc;
  }, {});

  const sortedDates = Object.keys(groupedData).sort();

  const incomeData = sortedDates.map(date => groupedData[date].income);
  const expenseData = sortedDates.map(date => groupedData[date].expense);

  if (transactions.length === 0) {
    return null; 
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6 col-span-1 md:col-span-2">
      <h3 className="text-gray-700 font-bold mb-4 border-b pb-2 text-center">
        روند درآمد و هزینه در طول زمان
      </h3>
      
      <div className="w-full h-[300px]">
        <LineChart
          xAxis={[{ 
            data: sortedDates, 
            scaleType: 'point', 
            label: 'تاریخ' 
          }]}
          series={[
            {
              data: incomeData,
              label: 'درآمد',
              color: '#4ade80',
              showMark: true,
              area: true, 
            },
            {
              data: expenseData,
              label: 'هزینه',
              color: '#f87171', 
              showMark: true,
            },
          ]}
          grid={{ vertical: true, horizontal: true }}
          margin={{ left: 50, right: 30, top: 30, bottom: 30 }}
        />
      </div>
    </div>
  );
}

export default TrendChart;