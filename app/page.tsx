"use client";
import { useState } from "react";
import ClimaCiudad from "./components/ClimaCiudad";

export default function Home() {
  const [city, setCity] = useState("");
  const [searchCity, setSearchCity] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchCity(city);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <form onSubmit={handleSubmit} className="mb-2 gap-2 flex">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Buscar por ciudad..."
          className="border border-gray-300 rounded-md px-4 py-2"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-teal-600 text-white rounded-md"
        >
          Buscar
        </button>
      </form>
      {searchCity && <ClimaCiudad city={searchCity} />}
    </main>
  );
}
