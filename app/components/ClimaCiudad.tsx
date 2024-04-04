"use client";
import { useState, useEffect } from "react";

interface City {
  city: string;
}
const API_KEY = "28db87f072b587e48f1e0b04d2c70767";

const ClimaCiudad = ({ city }: City) => {
  const [temperatura, setTemperatura] = useState(null);
  const [mensaje, setMensaje] = useState("");

  const obtenerTemperatura = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      const data = await res.json();
      if (data.main && data.main.temp) {
        setTemperatura(data.main.temp);
        if (data.main.temp > 30) {
          setMensaje("Hace mucho calor");
        } else if (data.main.temp < 10) {
          setMensaje("Hace mucho frío");
        } else {
          setMensaje("Está entre 10° y 30°");
        }
      } else {
        setMensaje("No se pudo obtener la temperatura");
      }
    } catch (error) {
      console.error("Error al obtener la temperatura:", error);
      setMensaje("Error al obtener la temperatura");
    }
  };

  useEffect(() => {
    obtenerTemperatura();
  });

  return (
    <div className="max-w-md mx-auto  rounded-xl shadow-lg border-2 md:max-w-2xl bg-slate-100">
      {temperatura !== null && (
        <>
          <div className="m-8">
            <p className="text-center text-2xl font-bold mb-4">
              En {city} hay {temperatura}°C
            </p>
            <p className="text-center text-lg text-green-900">{mensaje}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default ClimaCiudad;
