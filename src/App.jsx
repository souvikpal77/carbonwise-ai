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
if (transport === "walking") total += 0;

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
> <h1>🌍 CarbonWise AI</h1>

  <p>
    Track, Understand and Reduce Your Carbon Footprint
  </p>

  <label htmlFor="transport">
    <h3>Transport Method</h3>
  </label>

  <select
    id="transport"
    aria-label="Transport Method"
    value={transport}
    onChange={(e) => setTransport(e.target.value)}
  >
    <option value="">Select</option>
    <option value="car">Car</option>
    <option value="bus">Bus</option>
    <option value="bike">Bike</option>
    <option value="walking">Walking</option>
  </select>

  <label htmlFor="electricity">
    <h3>Monthly Electricity Usage</h3>
  </label>

  <input
    id="electricity"
    type="number"
    placeholder="Enter monthly electricity usage (kWh)"
    aria-label="Monthly Electricity Usage"
    value={electricity}
    onChange={(e) => setElectricity(e.target.value)}
  />

  <label htmlFor="diet">
    <h3>Diet Type</h3>
  </label>

  <select
    id="diet"
    aria-label="Diet Type"
    value={diet}
    onChange={(e) => setDiet(e.target.value)}
  >
    <option value="">Select</option>
    <option value="veg">Vegetarian</option>
    <option value="mixed">Mixed</option>
    <option value="nonveg">Non-Vegetarian</option>
  </select>

  <br />
  <br />

  <button
    aria-label="Calculate Carbon Footprint Score"
    onClick={calculateScore}
  >
    Calculate Score
  </button>

  {score !== null && (
    <div style={{ marginTop: "20px" }}>
      <h2>Your Carbon Score: {score}</h2>

      <h3>Carbon Impact Category</h3>

      {score > 100 ? (
        <div>
          <p>🌍 High Impact</p>

          <p><strong>AI Recommendations:</strong></p>

          <ul>
            <li>Use public transport 2–3 days per week.</li>
            <li>Reduce electricity usage by at least 15%.</li>
            <li>Consider more plant-based meals.</li>
            <li>Switch to energy-efficient appliances.</li>
          </ul>
        </div>
      ) : score > 60 ? (
        <div>
          <p>🌱 Moderate Impact</p>

          <p><strong>AI Recommendations:</strong></p>

          <ul>
            <li>Monitor electricity consumption regularly.</li>
            <li>Use sustainable transportation whenever possible.</li>
            <li>Reduce unnecessary energy usage.</li>
          </ul>
        </div>
      ) : (
        <div>
          <p>✅ Low Impact</p>

          <p><strong>AI Recommendations:</strong></p>

          <ul>
            <li>Excellent sustainability habits.</li>
            <li>Continue your eco-friendly lifestyle.</li>
            <li>Encourage others to adopt green practices.</li>
          </ul>
        </div>
      )}

      <hr style={{ marginTop: "20px" }} />

      <h3>Environmental Impact Summary</h3>

      <p>
        This score estimates the environmental impact of your
        transportation choices, electricity consumption, and dietary
        habits. CarbonWise AI analyzes these factors and provides
        sustainability recommendations to help reduce carbon emissions,
        promote eco-friendly living, and encourage climate-conscious
        decision making.
      </p>
    </div>
  )}
</div>
);
}

export default App;