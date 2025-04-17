// components/AddFunds.jsx
import React, { useState } from 'react';
import './DashboardSection.css';

const AddFunds = ({ onAddFunds }) => {
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || isNaN(amount) || Number(amount) <= 0) return;
    onAddFunds(Number(amount));
    setAmount('');
  };

  return (
   <div className="bg-white shadow-md rounded-lg p-6 mb-4 w-full max-w-md">
  <h3 className="block text-gray-700 text-center font-bold text-xl mb-4">
    💰 Add Funds to MCP Wallet
  </h3>
  <form onSubmit={handleSubmit} className="space-y-4">
    <div>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="amount"
      >
        Amount (₹)
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
        type="number"
        id="amount"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
    </div>
    <button
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out w-full"
      type="submit"
    >
      Add Funds
    </button>
  </form>
</div>
  );
};

export default AddFunds;
