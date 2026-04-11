"use client";

import { useEffect, useState } from "react";
import { insforgeClient } from "@/lib/insforge/client";

export default function DashboardIndex() {
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await insforgeClient.auth.getCurrentUser();
      setCurrentUser(data);
    };
    fetchUser();
  }, []);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Bienvenido al Panel Principal
        </h1>
        <p className="text-zinc-500 mt-2 text-lg">
          Hola {currentUser?.email?.split('@')[0] || ''}, aquí tienes un resumen de tu espacio de trabajo en Reflecter Labs.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm flex flex-col justify-between">
          <div>
            <div className="text-indigo-500 mb-4 bg-indigo-50 dark:bg-indigo-900/30 w-10 h-10 flex items-center justify-center rounded-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
            </div>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-1">Actividad</h2>
            <p className="text-zinc-500 text-sm">Resumen general del estado y tareas en curso.</p>
          </div>
          <div className="mt-6 text-sm text-blue-600 font-medium">Próximamente disponible &rarr;</div>
        </div>
        
        <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm flex flex-col justify-between">
          <div>
            <div className="text-green-500 mb-4 bg-green-50 dark:bg-green-900/30 w-10 h-10 flex items-center justify-center rounded-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
            </div>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-1">Ajustes Globales</h2>
            <p className="text-zinc-500 text-sm">Configuraciones vinculadas a Reflecter Labs.</p>
          </div>
          <div className="mt-6 text-sm text-blue-600 font-medium">Próximamente disponible &rarr;</div>
        </div>

        <div className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm flex flex-col justify-between">
            <div>
              <div className="text-orange-500 mb-4 bg-orange-50 dark:bg-orange-900/30 w-10 h-10 flex items-center justify-center rounded-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              </div>
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-1">Equipo Compartido</h2>
              <p className="text-zinc-500 text-sm">Invita colaboradores a visualizar y gestionar tableros.</p>
            </div>
            <div className="mt-6 text-sm text-blue-600 font-medium">Nueva Función en Desarrollo &rarr;</div>
          </div>
      </div>
    </div>
  );
}
