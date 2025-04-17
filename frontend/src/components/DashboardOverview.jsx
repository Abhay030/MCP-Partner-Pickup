// components/DashboardOverview.jsx
import React from 'react';
import './DashboardSection.css';

const DashboardOverview = ({ dashboard, orders }) => {
  const totalPartners = dashboard.pickupPartners.length;
  const totalOrders = orders.length;
  const completedOrders = orders.filter(o => o.status === 'Completed').length;
  const pendingOrders = totalOrders - completedOrders;
  const activePartners = dashboard.pickupPartners.filter(p => p.status === 'active').length;
  const inactivePartners = totalPartners - activePartners;
  const earnings = completedOrders * 100;

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-8 w-full max-w-4xl">
  <h2 className="block text-gray-800 font-bold text-2xl mb-8 text-center">
    📊 Dashboard Overview
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <div className="bg-gray-100 rounded-md shadow-sm p-4 hover:shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer">
      <div className="flex items-center space-x-3">
        <div className="p-2 rounded-full bg-green-200 text-green-700">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m-16.077-2.796a15.975 15.975 0 0110.142 10.142m-1.969-3.829v1.574c0 4 8.06 8.06 8.06 8.06l-3.413-3.413m-5.696-1.574v1.574c0 2.162 3.58 3.58 3.58 3.58l-1.724-1.724m-3.969-1.574v1.574c0 .865 1.39 1.39 1.39 1.39l-.714-.714m-1.724-1.574v1.574c0 .177.283.283.283.283l-.142-.142" />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Wallet Balance</h3>
          <p className="text-gray-600">₹{dashboard.walletBalance}</p>
        </div>
      </div>
    </div>

    <div className="bg-gray-100 rounded-md shadow-sm p-4 hover:shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer">
      <div className="flex items-center space-x-3">
        <div className="p-2 rounded-full bg-blue-200 text-blue-700">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372m-16.39-2.24a9.38 9.38 0 012.626-.372m4-3v6m4-10v6m-4-3.913a9.38 9.38 0 00-2.626-.372M19.375 9.36a9.375 9.375 0 012.626.372M3.375 13.64a9.375 9.375 0 002.626-.372m4-3V16M12 3.913a9.37 9.37 0 00-2.626-.372M19.375 17.64a9.375 9.375 0 012.626-.372M3.375 6.36a9.375 9.375 0 002.626.372m4-3v6m4 0v6" />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Total Partners</h3>
          <p className="text-gray-600">{totalPartners}</p>
        </div>
      </div>
    </div>

    <div className="bg-gray-100 rounded-md shadow-sm p-4 hover:shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer">
      <div className="flex items-center space-x-3">
        <div className="p-2 rounded-full bg-teal-200 text-teal-700">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Active Partners</h3>
          <p className="text-gray-600">{activePartners}</p>
        </div>
      </div>
    </div>

    <div className="bg-gray-100 rounded-md shadow-sm p-4 hover:shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer">
      <div className="flex items-center space-x-3">
        <div className="p-2 rounded-full bg-orange-200 text-orange-700">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.932 3.374h14.021c1.715 0 2.802-1.874 1.932-3.374a12.502 12.502 0 00-10.932-3.374z" />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Inactive Partners</h3>
          <p className="text-gray-600">{inactivePartners}</p>
        </div>
      </div>
    </div>

    <div className="bg-gray-100 rounded-md shadow-sm p-4 hover:shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer">
      <div className="flex items-center space-x-3">
        <div className="p-2 rounded-full bg-indigo-200 text-indigo-700">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Total Orders</h3>
          <p className="text-gray-600">{totalOrders}</p>
        </div>
      </div>
    </div>

    <div className="bg-gray-100 rounded-md shadow-sm p-4 hover:shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer">
      <div className="flex items-center space-x-3">
        <div className="p-2 rounded-full bg-lime-200 text-lime-700">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Completed Orders</h3>
          <p className="text-gray-600">{completedOrders}</p>
        </div>
      </div>
    </div>

    <div className="bg-gray-100 rounded-md shadow-sm p-4 hover:shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer">
      <div className="flex items-center space-x-3">
        <div className="p-2 rounded-full bg-yellow-200 text-yellow-700">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Pending Orders</h3>
          <p className="text-gray-600">{pendingOrders}</p>
        </div>
      </div>
    </div>

    <div className="bg-gray-100 rounded-md shadow-sm p-4 hover:shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer">
      <div className="flex items-center space-x-3">
        <div className="p-2 rounded-full bg-purple-200 text-purple-700">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m-16.077-2.796a15.975 15.975 0 0110.142 10.142m-1.969-3.829v1.574c0 4 8.06 8.06 8.06 8.06l-3.413-3.413m-5.696-1.574v1.574c0 2.162 3.58 3.58 3.58 3.58l-1.724-1.724m-3.969-1.574v1.574c0 .865 1.39 1.39 1.39 1.39l-.714-.714m-1.724-1.574v1.574c0 .177.283.283.283.283l-.142-.142" />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Total Earnings</h3>
          <p className="text-gray-600">₹{earnings}</p>
        </div>
      </div>
    </div>
  </div>
    </div>
  );
};

export default DashboardOverview;
