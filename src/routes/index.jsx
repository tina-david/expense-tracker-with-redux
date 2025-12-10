import React from "react";
import Transactions from "../pages/Transactions";
import Dashboard from "../pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "../components/common/Sidebar";
import Header from "../components/common/Header";
// import Footer from '../components/common/Footer'
function AppRouter() {
  return (
    <BrowserRouter>
   <div className="flex bg-gray-100 min-h-screen font-sans">
          
          <Sidebar />

          <div className="flex-1 flex flex-col overflow-hidden">
            
            <Header />

            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
              <div className="container mx-auto px-6 py-8">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  
                  <Route path="/transactions" element={<Transactions />} />
                </Routes>
              </div>
            </main>
          
          </div>
        </div>
    </BrowserRouter>
  );
}

export default AppRouter;
