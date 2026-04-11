import Link from "next/link";
import { AlertCircle } from "lucide-react";

export default function RegisterPage() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center pt-32 pb-24 px-4 min-h-[75vh]">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl text-center">
        <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="w-8 h-8 text-blue-500" />
        </div>
        <h2 className="text-2xl font-bold mb-4 uppercase tracking-tight">Acceso Restringido</h2>
        <p className="text-muted-foreground font-mono text-sm leading-relaxed mb-8">
          El registro de nuevos nodos de laboratorio está temporalmente desactivado por mantenimiento de infraestructura MOLTX.
        </p>
        <Link 
          href="/login" 
          className="inline-flex items-center justify-center w-full bg-primary text-primary-foreground font-mono font-bold uppercase tracking-widest px-8 py-4 rounded-xl hover:opacity-90 transition-all"
        >
          Ir al Login
        </Link>
      </div>
    </div>
  );
}
