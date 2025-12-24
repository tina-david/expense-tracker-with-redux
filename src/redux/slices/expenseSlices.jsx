import { createSlice } from "@reduxjs/toolkit";
const defaultCategories = [
  "غذا",
  "حمل و نقل",
  "قبوض",
  "درآمد",
  "تفریح",
  "سایر",
];

const initialTransaction =
  JSON.parse(localStorage.getItem("transactions")) || [];
const initialCategories =
  JSON.parse(localStorage.getItem("categories")) || defaultCategories;
const initialState = {
  transactions: initialTransaction,
  categories: initialCategories,
  searchQuery: "",
  filterCategory: "All",
};

const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.transactions.push(action.payload);
      localStorage.setItem("transactions", JSON.stringify(state.transactions));
    },
    deleteTransaction: (state, action) => {
      state.transactions = state.transactions.filter(
        (t) => t.id !== action.payload

      );
            localStorage.setItem("transactions", JSON.stringify(state.transactions));

    },
    addCategory: (state, action) => {
      state.categories.push(action.payload);
      localStorage.setItem("categories", JSON.stringify(state.categories));
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setFilterCategory: (state, action) => {
      state.filterCategory = action.payload;
    },
  },
});
export const {
  addTransaction,
  addCategory,
  deleteTransaction,
  setSearchQuery,
  setFilterCategory,
} = expenseSlice.actions


export default expenseSlice.reducer;
