// components/AddPartner.jsx
import React, { useState } from 'react';
import './DashboardSection.css';

const AddPartner = ({ onAddPartner }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: 'Collector',
    commission: 100,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPartner(form);
    setForm({ name: '', email: '', password: '', role: 'Collector', commission: 100 });
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4 w-full max-w-md">
  <h3 className="block text-gray-700 text-center font-bold text-xl mb-4">
    ➕ Add Pickup Partner
  </h3>
  <form onSubmit={handleSubmit} className="space-y-4">
    <div>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="name"
      >
        Name
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
        type="text"
        id="name"
        name="name"
        placeholder="Partner's Full Name"
        value={form.name}
        onChange={handleChange}
        required
      />
    </div>
    <div>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="email"
      >
        Email Address
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
        type="email"
        id="email"
        name="email"
        placeholder="partner@example.com"
        value={form.email}
        onChange={handleChange}
        required
      />
    </div>
    <div>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="password"
      >
        Password
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
        type="password"
        id="password"
        name="password"
        placeholder="********"
        value={form.password}
        onChange={handleChange}
        required
      />
    </div>
    <div>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="role"
      >
        Role
      </label>
      <div className="relative">
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500 block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          id="role"
          name="role"
          value={form.role}
          onChange={handleChange}
        >
          <option value="Collector">Collector</option>
          <option value="Supervisor">Supervisor</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="commission"
      >
        Commission per order (₹)
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
        type="number"
        id="commission"
        name="commission"
        placeholder="e.g., 10"
        value={form.commission}
        onChange={handleChange}
        required
      />
    </div>
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out w-full"
      type="submit"
    >
      Add Partner
    </button>
  </form>
</div>
  );
};

export default AddPartner;
