import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Planets from "./Planets";
import Header from "./components/Header";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Header />
      <AnimatePresence>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, clipPath: "circle(0%)", }}
          animate={{
            opacity: 1,
            clipPath: ["circle(0%)", "circle(50%)", "circle(100%)"],
            transition: {
              duration: 1.5, // Animation duration in seconds
              ease: [0.5, 0.0, 0.2, 1], // Custom easing function
              times: [0, 1], // Keyframe times
            },
          }}
          exit={{
            opacity: 0,
            clipPath: "circle(0%)",
            transition: {
              duration: 0.1, // Animation duration in seconds
              ease: [0.0, 0.0, 0, 0], // Custom easing function
              times: [0, 1], // Keyframe times
            },
          }}
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Navigate to="/mercury" />} />
            <Route path="/:planetId" element={<Planets />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
