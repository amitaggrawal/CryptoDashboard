import React from 'react';

const ChartCard: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="bg-white rounded-xl shadow-md p-6 mb-8 w-1/2 mx-auto">
    <h2 className="text-lg font-semibold mb-4">Asset performance chart</h2>
    {children}
  </div>
);

export default ChartCard; 