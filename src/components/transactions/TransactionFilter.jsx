import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../ui/input";
import { FaFilter,FaSearch } from "react-icons/fa";

import {
  setFilterCategory,
  setSearchQuery,
} from "../../redux/slices/ExpenseSlices";
function TransactionFilter() {
  const dispatch = useDispatch();
  const { searchQuery, filterCategory, categories } = useSelector(
    (state) => state.expense
  );
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <h3 className="flex items-center text-gray-700 font-bold mb-3 text-sm gap-0.5">               <FaSearch        
 /> جستجو و فیلتر     </h3>
    <div className="flex  flex-col md:flex-row gap-4">

  <div className="flex-1">
        <Input
          type="text"
          placeholder="جستجو عنوان یا مبلغ..."
          value={searchQuery}
          onChange={(e) => {
            dispatch(setSearchQuery(e.target.value));
  
          }}
        />
</div>
      <div className="md:w-1/3 flex items-center">
      <FaFilter           className="block text-sm font-medium text-gray-700"
 />

        <select
          value={filterCategory}
          onChange={(e) => dispatch(setFilterCategory(e.target.value))}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
        >
          <option value="All">همه دسته بندی ها</option>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
    </div>
    </div>
  );
}

export default TransactionFilter;
