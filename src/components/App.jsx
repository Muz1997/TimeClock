import React, { useState } from "react";

function App() {
  let now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);

  function updateTime() {
    now = new Date().toLocaleTimeString();
    setTime(now);
  }
  setInterval(updateTime, 1000);
  return (
    <div className="container">
      <h1>{time}</h1>
    </div>
  );
}

export default App;
