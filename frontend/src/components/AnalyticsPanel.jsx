import React from 'react';
import './AnalyticsPanel.css';

const data = [
  { label: 'Jan', value: 300 },
  { label: 'Feb', value: 500 },
  { label: 'Mar', value: 450 },
  { label: 'Apr', value: 600 },
  { label: 'May', value: 750 },
];

const AnalyticsPanel = () => {
  const maxVal = Math.max(...data.map(d => d.value));

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4 w-full max-w-lg">
    <h2 className="block text-gray-700 font-bold text-xl mb-6">
      Monthly Funds Added
    </h2>
    <div className="flex items-end space-x-4 h-48 relative">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col items-center w-1/6">
          <div
            className="bg-blue-400 hover:bg-blue-500 transition duration-300 ease-in-out rounded-t-md flex-grow"
            style={{ height: `${(item.value / maxVal) * 100}%` }}
            title={`₹${item.value}`}
          ></div>
          <div className="text-gray-600 text-xs mt-2">{item.label}</div>
        </div>
      ))}
      <div className="absolute inset-0 border-l border-b border-gray-200 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gray-300"></div>
      <div className="absolute left-0 bottom-0 text-gray-500 text-xs -mb-4">₹0</div>
      <div className="absolute right-0 bottom-0 text-right text-gray-500 text-xs -mb-4">₹{maxVal}</div>
    </div>
  </div>
  );
};

export default AnalyticsPanel;
