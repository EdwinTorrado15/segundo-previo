import { Routes, Route } from "react-router-dom";
import { Home, Estudiante, Menu } from "./pages";
import { DataProvider } from "./context/DataGlobal";

function App() {
  return (
    <div className="app-container">
      <DataProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/estudiante" element={<Estudiante />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
