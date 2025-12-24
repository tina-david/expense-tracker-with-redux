import React, { useState } from "react";
// import { UseGlobalState } from "../../hooks/UseGlobalState";
import Input from "../ui/input";
import Button from "../ui/button";
import { useDispatch,useSelector } from "react-redux";
import { addCategory,addTransaction } from "../../redux/slices/ExpenseSlices";
function AddTransaction() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("غذا");
  const [type, setType] = useState("expense");
  // const { addTransaction, addCategory, categories } = UseGlobalState();
   const categories=useSelector((state)=>state.expense.categories)
   const dispatch=useDispatch();
  const [addingCategory, setAddingCategory] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  
  const generateId = () => {
    return Math.floor(Math.random() * 1000000) + Date.now();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount) {
      alert("تمام موارد را کامل پر کنید!");
      return;
    }
    const signedAmount =
      type === "expense" ? -Math.abs(Number(amount)) : Math.abs(Number(amount));
    const newTransaction = {
      id: generateId(),
      title,
      amount: signedAmount, 
      category,
      date: new Date().toISOString().split("T")[0], 
      type,
    };

    dispatch(addTransaction(newTransaction));

    setTitle("");
    setAmount("");
    setType("expense");
  };
  const handleSaveCategory = () => {
    if (newCategoryName.trim()) {
      dispatch(addCategory(newCategoryName.trim()));
      setCategory(newCategoryName.trim()); 
      setNewCategoryName("");
      setAddingCategory(false); 
    }
  };
  return (
    <div className="flex-1 ">
      <form onSubmit={handleSubmit} className="space-y-4 ">
        <div className="grid grid-cols-2 gap-6 mb-6">
          <Button
            type="button"
            onClick={() => setType("expense")}
            className={` rounded-lg font-bold transition-all duration-200 ${
              type === "expense"
                ? "bg-red-500 text-white shadow-lg scale-105"
                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
            }`}
          >
            هزینه 📉
          </Button>
          <Button
            type="button"
            onClick={() => setType("income")}
            className={` rounded-lg font-bold transition-all duration-200 ${
              type === "income"
                ? "bg-green-500 text-white shadow-lg scale-105"
                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
            }`}
          >
            درآمد📈
          </Button>
        </div>

        <div className="mb-4">
          <Input
            label="عنوان"
            id={"input-title"}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="توضیحات تراکنش..."
          />
        </div>

        <div className="mb-4">
          <Input
            label="مبلغ"
            value={amount}
            id={"input-amount"}
            type="number"
            onChange={(e) => setAmount(e.target.value)}
            placeholder="مبلغ به تومان..."
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="select"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            دسته‌بندی
          </label>

          {addingCategory ? (
            <div className="flex gap-2">
              <input
                id="select"
                type="text"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
                placeholder="نام دسته‌بندی جدید..."
                className="flex-1 border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:outline-none"
                autoFocus
              />
              <Button
                type="button"
                onClick={handleSaveCategory}
                className="bg-green-500 text-white rounded-md hover:bg-green-600"
              >
                ثبت
              </Button>
              <Button
                type="button"
                onClick={() => setAddingCategory(false)}
                className="bg-gray-400 text-white px-3 rounded-md hover:bg-gray-500"
              >
                لغو
              </Button>
            </div>
          ) : (
            <div className="flex gap-2">
              <select
                id="select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="flex-1 shadow border rounded py-2 px-3 text-gray-700  focus:outline-none focus:border-blue-500"
              >
                {categories.map((cat, index) => (
                  <option key={index} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>

              <button
                type="button"
                onClick={() => setAddingCategory(true)}
                className="bg-indigo-100 text-indigo-700 px-3 rounded-md hover:bg-indigo-200 text-xl font-bold cursor-pointer"
                title="افزودن دسته‌بندی جدید"
              >
                +
              </button>
            </div>
          )}
        </div>

        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold   "
        >
          افزودن تراکنش
        </Button>
      </form>
    </div>
  );
}

export default AddTransaction;
