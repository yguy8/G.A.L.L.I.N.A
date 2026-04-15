"use client";

import { useUser } from "@clerk/nextjs";

export default function Dashboard() {
  const { user } = useUser();

  const alertas = [
    { id: 1, mensaje: "Día de inspección" }, //poner que hay que inspeccionar
    { id: 2, mensaje: "Revisar lote" }, //marcar lote que se hay que revisar 
  ];

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      {/* Saludo */}
      <h1 className="text-amber-900 font-bold text-2xl">
        Bienvenido,{" "}
        {user?.firstName ||
          user?.username ||
          user?.emailAddresses[0].emailAddress}
      </h1>

      {/* Sección de alertas */}
      <div className="mt-6">
        <h2 className="text-amber-700 font-semibold">Alertas</h2>
        {alertas.length > 0 ? (
          <ul className="mt-3 space-y-2">
            {alertas.map((alerta) => (
              <li
                key={alerta.id}
                className="bg-amber-50 border border-amber-200 p-3 rounded-lg text-amber-900"
              >
                {alerta.mensaje}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 mt-2">
            No tienes alertas pendientes 🎉
          </p>
        )}
      </div>
    </div>
  );
}
