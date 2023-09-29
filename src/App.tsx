import { Route, Routes, Navigate } from "react-router-dom";
import Planets from "./Planets";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/mercury" />} />
        <Route path="/:planetId" element={<Planets />} />
      </Routes>
    </div>
  );
}

export default App;
