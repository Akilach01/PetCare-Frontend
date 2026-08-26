import Owner from "./components/Owner";
import Pet from "./components/Pet";
import Appointment from "./components/Appointment";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>🐾 PetCare Management System</h1>

      <Owner />

      <Pet />

      <Appointment />
    </div>
  );
}

export default App;