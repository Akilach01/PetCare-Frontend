import { useEffect, useState } from "react";
import api from "../services/api";

function Appointment() {
  const [appointments, setAppointments] = useState([]);
  const [petId, setPetId] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [reason, setReason] = useState("");
  const [status, setStatus] = useState("SCHEDULED");

  const loadAppointments = async () => {
    try {
      const response = await api.get("/appointments");
      setAppointments(response.data);
    } catch (error) {
      console.error("Error loading appointments:", error);
    }
  };

  useEffect(() => {
    loadAppointments();
  }, []);

  const addAppointment = async (e) => {
    e.preventDefault();

    try {
      await api.post("/appointments", {
        petId: Number(petId),
        appointmentDate,
        reason,
        status,
      });

      setPetId("");
      setAppointmentDate("");
      setReason("");
      setStatus("SCHEDULED");

      loadAppointments();
    } catch (error) {
      console.error("Error adding appointment:", error);
    }
  };

  return (
    <section className="card">
      <h2>Appointment Management</h2>

      <form onSubmit={addAppointment}>
        <input
          type="number"
          placeholder="Pet ID"
          value={petId}
          onChange={(e) => setPetId(e.target.value)}
          required
        />

        <input
          type="date"
          value={appointmentDate}
          onChange={(e) => setAppointmentDate(e.target.value)}
          required
        />

        <input
          placeholder="Reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          required
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="SCHEDULED">SCHEDULED</option>
          <option value="COMPLETED">COMPLETED</option>
          <option value="CANCELLED">CANCELLED</option>
        </select>

        <button type="submit">Book Appointment</button>
      </form>

      <h3>Appointments</h3>

      {appointments.map((appointment) => (
        <div className="list-item" key={appointment.id}>
          <strong>ID:</strong> {appointment.id} | Pet:{" "}
          {appointment.petId} | {appointment.appointmentDate} |{" "}
          {appointment.reason} | {appointment.status}
        </div>
      ))}
    </section>
  );
}

export default Appointment;