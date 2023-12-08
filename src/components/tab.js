import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div>
      <div className="flex space-x-4">
        <button
          onClick={() => handleTabClick(1)}
          className={`px-4 py-2 rounded ${
            activeTab === 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
          }`}
        >
          Tab 1
        </button>
        <button
          onClick={() => handleTabClick(2)}
          className={`px-4 py-2 rounded ${
            activeTab === 2 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
          }`}
        >
          Tab 2
        </button>
        <button
          onClick={() => handleTabClick(3)}
          className={`px-4 py-2 rounded ${
            activeTab === 3 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
          }`}
        >
          Tab 3
        </button>
      </div>

      <div className="mt-4">
        {activeTab === 1 && <div>Content for Tab 1</div>}
        {activeTab === 2 && <div>Content for Tab 2</div>}
        {activeTab === 3 && <div>Content for Tab 3</div>}
      </div>
    </div>
  );
};

export default Tabs;
