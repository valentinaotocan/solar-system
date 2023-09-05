import { Route, Routes, Navigate } from "react-router-dom";
import Planets from "./Planets";
import Navbar from "./components/Navbar";
import data from '../data.json'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/mercury" />} />
        {data.map((planet) => (
          <Route
            key={planet.name}
            path={`/${planet.name}`}
            element={<Planets />}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
