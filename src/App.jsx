import { useState } from "react";

function App() {
  const [transport, setTransport] = useState("");
  const [electricity, setElectricity] = useState("");
  const [diet, setDiet] = useState("");
  const [score, setScore] = useState(null);

  const calculateScore = () => {
    let total = 0;

    if (transport === "car") total += 40;
    if (transport === "bus") total += 20;
    if (transport === "bike") total += 10;

    total += Number(electricity) || 0;

    if (diet === "nonveg") total += 30;
    if (diet === "mixed") total += 20;
    if (diet === "veg") total += 10;

    setScore(total);
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "15px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h1>🌍 CarbonWise AI</h1>
      <p>Track, Understand and Reduce Your Carbon Footprint</p>

      <h3>Transport</h3>
      <select
        value={transport}
        onChange={(e) => setTransport(e.target.value)}
      >
        <option value="">Select</option>
        <option value="car">Car</option>
        <option value="bus">Bus</option>
        <option value="bike">Bike</option>
        <option value="walking">Walking</option>
      </select>

      <h3>Monthly Electricity Usage</h3>
      <input
        type="number"
        value={electricity}
        onChange={(e) => setElectricity(e.target.value)}
      />

      <h3>Diet Type</h3>
      <select value={diet} onChange={(e) => setDiet(e.target.value)}>
        <option value="">Select</option>
        <option value="veg">Vegetarian</option>
        <option value="mixed">Mixed</option>
        <option value="nonveg">Non-Vegetarian</option>
      </select>

      <br />
      <br />

      <button onClick={calculateScore}>Calculate Score</button>

      {score !== null && (
        <div style={{ marginTop: "20px" }}>
          <h2>Your Carbon Score: {score}</h2>

          {score > 100 ? (
            <p>
              🌍 High Impact <br />
              Consider public transport and reducing energy use.
            </p>
          ) : score > 60 ? (
            <p>
              🌱 Moderate Impact <br />
              You're doing okay, but there is room for improvement.
            </p>
          ) : (
            <p>
              ✅ Low Impact <br />
              Great job maintaining eco-friendly habits.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;