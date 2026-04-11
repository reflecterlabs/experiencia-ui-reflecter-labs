"use client";

import { useEffect, useState } from "react";
import { insforgeClient } from "@/lib/insforge/client";
import { User, Mail, Shield, Calendar, Key } from "lucide-react";

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await insforgeClient.auth.getCurrentUser();
      setUser(data);
      setLoading(false);
    };
    fetchUser();
  }, []);

  if (loading) return <div className="text-zinc-500 max-w-4xl mx-auto p-4">Cargando la información del perfil...</div>;
  if (!user) return <div className="text-red-500 max-w-4xl mx-auto p-4">No hay información de sesión disponible.</div>;

  const formatDate = (dateString: string) => {
    if (!dateString) return "Desconocido";
    return new Date(dateString).toLocaleString('es-ES', {
      dateStyle: 'long',
      timeStyle: 'medium'
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="mb-4">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">Perfil Privado</h1>
        <p className="text-zinc-500 mt-2">Detalles informativos de tu cuenta. Datos solo de lectura protegidos por base de datos.</p>
      </div>

      {/* Profile Header Box */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
        <div className="w-24 h-24 bg-blue-100 dark:bg-blue-900 flex items-center justify-center rounded-full flex-shrink-0 border-4 border-white dark:border-zinc-950 shadow-md">
          <span className="text-4xl font-bold text-blue-600 dark:text-blue-300">
            {user.email?.charAt(0).toUpperCase() || <User size={40} />}
          </span>
        </div>
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-1">{user.email}</h2>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
            Cuenta Verificada
          </span>
        </div>
      </div>

      {/* Details Grid */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm overflow-hidden">
        <div className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 px-6 py-4">
          <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200 flex items-center gap-2">
            <Shield size={18} className="text-indigo-500" />
            Información de Seguridad
          </h3>
        </div>
        
        <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
          <div className="px-6 py-5 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-sm font-medium text-zinc-500 flex items-center gap-2">
              <Key size={16} /> Identificador Único (ID)
            </div>
            <div className="md:col-span-2 text-sm text-zinc-900 dark:text-zinc-100 font-mono bg-zinc-50 dark:bg-zinc-950 px-3 py-1.5 rounded-md inline-block border border-zinc-200 dark:border-zinc-800">
              {user.id}
            </div>
          </div>
          
          <div className="px-6 py-5 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-sm font-medium text-zinc-500 flex items-center gap-2">
              <Mail size={16} /> Correo Electrónico Principal
            </div>
            <div className="md:col-span-2 text-sm text-zinc-900 dark:text-zinc-100 font-medium">
              {user.email}
            </div>
          </div>

          <div className="px-6 py-5 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-sm font-medium text-zinc-500 flex items-center gap-2">
              <Calendar size={16} /> Fecha de Creación
            </div>
            <div className="md:col-span-2 text-sm text-zinc-900 dark:text-zinc-100">
              {formatDate(user.created_at)}
            </div>
          </div>

          <div className="px-6 py-5 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-sm font-medium text-zinc-500 flex items-center gap-2">
              <Calendar size={16} /> Último Inicio de Sesión
            </div>
            <div className="md:col-span-2 text-sm text-zinc-900 dark:text-zinc-100">
              {formatDate(user.last_sign_in_at)}
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center text-xs text-zinc-500 py-4">
        Los datos de sesión son gestionados automáticamente mediante el SDK de seguridad.
      </div>
    </div>
  );
}
