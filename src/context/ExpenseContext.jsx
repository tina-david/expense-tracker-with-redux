import React, { createContext, useEffect, useReducer } from "react";
import { Add, AppReducer, Delete,AddCategory } from "./AppReducer";

const defaultCategories=["غذا", "حمل و نقل", "قبوض", "درآمد", "تفریح", "سایر"]

const initialState = {
  transactions: JSON.parse(localStorage.getItem("transactions")) || [],
  categories: JSON.parse(localStorage.getItem("category"))|| defaultCategories
};
export const ExpenseContext = createContext(initialState);
export const ExpenseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state.transactions));
  }, [state.transactions]);
useEffect(()=>{
  localStorage.setItem("category",JSON.stringify(state.categories))
},[state.categories]);
  function addTransaction(transaction) {
    dispatch({
      type: Add,
      payload: transaction,
    });
  }
  function deleteTransaction(id) {
    dispatch({
      type: Delete,
      payload: id,
    });
  }
function addCategory(category){
  dispatch({
    type: AddCategory,
    payload:category
  })
}

  return (
    <ExpenseContext.Provider
      value={{
        transactions: state.transactions,
        categories:state.categories,
        addTransaction,
        deleteTransaction,
        addCategory
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
