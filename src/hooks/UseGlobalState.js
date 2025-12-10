import React, { useContext } from 'react'
import { ExpenseContext } from '../context/ExpenseContext'

export const UseGlobalState=()=> {
    const context=useContext(ExpenseContext)
    if (context===undefined){
        throw new Error("useglobalstate must be used within an ExpenseProvider")
    }
 return context
}

 