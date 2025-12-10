import React from 'react'
import AddTransaction from '../components/transactions/AddTransaction'
import TransactionList from '../components/transactions/TransactionList'
const Transactions = () => {
  return (
    <div><h1 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">مدیریت تراکنش ها</h1>
{    <AddTransaction />
}
<TransactionList />
    </div>
  )
}

export default Transactions