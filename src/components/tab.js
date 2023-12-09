import React, { useState } from 'react';

const TagDivs = () => {
  const [showFixedDiv, setShowFixedDiv] = useState(true);

  const toggleDivs = () => {
    setShowFixedDiv(!showFixedDiv);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <button onClick={toggleDivs} className="p-4 bg-blue-500 text-white">
        Toggle Divs
      </button>

      <div className="flex flex-grow">
        {showFixedDiv && (
          <div className="w-48 bg-lightblue p-4">
            Fixed Width
          </div>
        )}

        <div className={`flex-grow ${!showFixedDiv && 'ml-0'} bg-lightgreen p-4`}>
          Flexible Width
        </div>
      </div>
    </div>
  );
};

export default TagDivs;
