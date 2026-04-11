"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { insforgeClient } from "@/lib/insforge/client";
import { Button } from "@/components/ui/button"; // Asumimos shadcn/ui o similar para buttons

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { data, error } = await insforgeClient.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      if (
        error.message.toLowerCase().includes("email not confirmed") ||
        error.message.toLowerCase().includes("email verification required") ||
        error.message.toLowerCase().includes("verification")
      ) {
        setIsVerifying(true);
        setError("");
      } else {
        setError(error.message);
      }
      setLoading(false);
      return;
    }

    if (data?.user) {
      router.push("/dashboard");
    }
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { data, error } = await insforgeClient.auth.verifyEmail({
      email,
      otp,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    if (data?.user) {
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex flex-col space-y-4 w-full max-w-sm mx-auto p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-lg border border-zinc-200 dark:border-zinc-800">
      <div className="text-center">
        <h2 className="text-2xl font-bold tracking-tight">Iniciar Sesión</h2>
        <p className="text-sm text-zinc-500 mt-2">Accede a tus tableros Kanban</p>
      </div>

      {isVerifying ? (
        <form onSubmit={handleVerify} className="space-y-4 mt-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-center block text-zinc-500 mb-4">
              Por seguridad, enviamos un nuevo código a {email}
            </label>
            <label className="text-sm font-medium">Código de Verificación</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-md dark:bg-zinc-800 dark:border-zinc-700 bg-white/50 dark:bg-zinc-900/50 focus:outline-none focus:ring-2 focus:ring-blue-500 text-center tracking-widest text-lg"
              placeholder="123456"
              maxLength={6}
            />
          </div>

          {error && <p className="text-red-500 text-sm font-medium text-center">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 px-4 bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 rounded-md font-medium transition-colors disabled:opacity-50"
          >
            {loading ? "Verificando..." : "Confirmar Código"}
          </button>
        </form>
      ) : (
        <form onSubmit={handleLogin} className="space-y-4 mt-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              className="w-full px-3 py-2 border rounded-md dark:bg-zinc-800 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="tu@email.com"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              className="w-full px-3 py-2 border rounded-md dark:bg-zinc-800 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
            />
          </div>

          {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 px-4 bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 rounded-md font-medium transition-colors disabled:opacity-50"
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>
      )}
    </div>
  );
}
