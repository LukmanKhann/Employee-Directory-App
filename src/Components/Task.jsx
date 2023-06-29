import React, { useState } from 'react';

function App() {
  const [isDataAdded, setIsDataAdded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you can add your logic to save the data or perform any other actions

    // Set the state to indicate that data was added successfully
    setIsDataAdded(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Your form fields go here */}
        <button type="submit">Submit</button>
      </form>
      {isDataAdded && <p>Data added successfully!</p>}
    </div>
  );
}

export default App;