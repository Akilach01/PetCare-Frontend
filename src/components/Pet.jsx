import { useEffect, useState } from "react";
import api from "../services/api";

function Pet() {
  const [pets, setPets] = useState([]);
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [ownerId, setOwnerId] = useState("");

  const loadPets = async () => {
    try {
      const response = await api.get("/pets");
      setPets(response.data);
    } catch (error) {
      console.error("Error loading pets:", error);
    }
  };

  useEffect(() => {
    loadPets();
  }, []);

  const addPet = async (e) => {
    e.preventDefault();

    try {
      await api.post("/pets", {
        name,
        species,
        breed,
        age: Number(age),
        ownerId: Number(ownerId),
      });

      setName("");
      setSpecies("");
      setBreed("");
      setAge("");
      setOwnerId("");

      loadPets();
    } catch (error) {
      console.error("Error adding pet:", error);
    }
  };

  return (
    <section className="card">
      <h2>Pet Management</h2>

      <form onSubmit={addPet}>
        <input
          placeholder="Pet Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          placeholder="Species"
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
          required
        />

        <input
          placeholder="Breed"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Owner ID"
          value={ownerId}
          onChange={(e) => setOwnerId(e.target.value)}
          required
        />

        <button type="submit">Add Pet</button>
      </form>

      <h3>Pets</h3>

      {pets.map((pet) => (
        <div className="list-item" key={pet.id}>
          <strong>ID:</strong> {pet.id} |{" "}
          <strong>{pet.name}</strong> | {pet.species} | {pet.breed} | Age:{" "}
          {pet.age} | Owner: {pet.ownerId}
        </div>
      ))}
    </section>
  );
}

export default Pet;