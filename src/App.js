import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Volunteers from "./pages/Volunteers/Volunteers";
import Chat from "./pages/Chat/Chat";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            sessionStorage.authToken ? <Navigate to="/dashboard" /> : <Home />
          }
        />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/volunteers" element={<Volunteers />} />
        <Route path="/conversations" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
