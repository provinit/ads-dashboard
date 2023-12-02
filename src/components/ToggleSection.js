import React, { useState } from 'react';

const ToggleSections = () => {
  const [showSection1, setShowSection1] = useState(true);

  const toggleSections = () => {
    setShowSection1((prevShowSection1) => !prevShowSection1);
  };

  return (
    <div>
      <button onClick={toggleSections}>Toggle Sections</button>

      {showSection1 ? (
        <div>
          <h2>Section 1</h2>
          <p>This is the content of Section 1.</p>
        </div>
      ) : (
        <div>
          <h2>Section 2</h2>
          <p>This is the content of Section 2.</p>
        </div>
      )}
    </div>
  );
};

export default ToggleSections;
