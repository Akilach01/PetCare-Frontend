import { useEffect, useState } from "react";
import api from "../services/api";

function Owner() {
  const [owners, setOwners] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const loadOwners = async () => {
    try {
      const response = await api.get("/owners");
      setOwners(response.data);
    } catch (error) {
      console.error("Error loading owners:", error);
    }
  };

  useEffect(() => {
    loadOwners();
  }, []);

  const addOwner = async (e) => {
    e.preventDefault();

    try {
      await api.post("/owners", {
        name,
        email,
        phone,
      });

      setName("");
      setEmail("");
      setPhone("");

      loadOwners();
    } catch (error) {
      console.error("Error adding owner:", error);
    }
  };

  return (
    <section className="card">
      <h2>Owner Management</h2>

      <form onSubmit={addOwner}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <button type="submit">Add Owner</button>
      </form>

      <h3>Owners</h3>

      {owners.map((owner) => (
        <div className="list-item" key={owner.id}>
          <strong>ID:</strong> {owner.id} |{" "}
          <strong>{owner.name}</strong> | {owner.email} | {owner.phone}
        </div>
      ))}
    </section>
  );
}

export default Owner;