import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Navbar from "./Navbar.jsx";
import TournamentCreation from "./TournamentCreation.jsx";
import Tournaments from "./Tournaments.jsx";
import Login from "./Login.jsx";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tournaments" element={<Tournaments/>} />
        <Route path="/tournaments/create" element={<TournamentCreation />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
