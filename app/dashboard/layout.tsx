"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { insforgeClient } from "@/lib/insforge/client";
import { Bell, LayoutDashboard, Trello, User, LogOut, ChevronDown, PanelLeftClose, PanelLeftOpen, PanelRightClose, PanelRightOpen, ChevronUp, Mail, ClipboardCheck } from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLeftCollapsed, setIsLeftCollapsed] = useState(false);
  const [isRightCollapsed, setIsRightCollapsed] = useState(false);
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(false);
  
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const checkUser = async () => {
      const { data: user } = await insforgeClient.auth.getCurrentUser();
      if (!user) {
        router.push("/login");
      } else {
        setCurrentUser(user);
      }
    };
    checkUser();
  }, [router]);

  const handleSignOut = async () => {
    await insforgeClient.auth.signOut();
    router.push("/");
  };

  if (!currentUser) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-950 text-zinc-500">
        Cargando interfaz de administración...
      </div>
    );
  }

  return (
    <div className="flex bg-zinc-50 dark:bg-zinc-950 min-h-screen text-black dark:text-white overflow-hidden">
      {/* Sidebar Izquierdo */}
      <aside 
        className={`${isLeftCollapsed ? 'w-16' : 'w-64'} bg-white dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 flex flex-col justify-between transition-all duration-300 ease-in-out hidden md:flex`}
      >
        <div className="overflow-hidden">
          <div className="h-16 flex items-center justify-between px-4 border-b border-zinc-200 dark:border-zinc-800">
            {!isLeftCollapsed && <h1 className="text-xl font-bold tracking-tight text-blue-600 dark:text-blue-400 truncate">Reflecter Labs</h1>}
            <button 
              onClick={() => setIsLeftCollapsed(!isLeftCollapsed)}
              className="p-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 transition-colors mx-auto md:mx-0"
            >
              {isLeftCollapsed ? <PanelLeftOpen size={20} /> : <PanelLeftClose size={20} />}
            </button>
          </div>
          <nav className="p-3 space-y-1">
            <Link 
              href="/dashboard/boards" 
              title="Tableros"
              className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                pathname.startsWith("/dashboard/boards") 
                  ? "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300" 
                  : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              }`}
            >
              <Trello size={18} className="shrink-0" />
              {!isLeftCollapsed && <span>Tableros</span>}
            </Link>

            <Link 
              href="/dashboard/consultations" 
              title="Consultas"
              className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                pathname.startsWith("/dashboard/consultations") 
                  ? "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300" 
                  : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              }`}
            >
              <Mail size={18} className="shrink-0" />
              {!isLeftCollapsed && <span>Consultas</span>}
            </Link>

            <Link 
              href="/dashboard/audits" 
              title="Auditorías"
              className={`flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                pathname.startsWith("/dashboard/audits") 
                  ? "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300" 
                  : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              }`}
            >
              <ClipboardCheck size={18} className="shrink-0" />
              {!isLeftCollapsed && <span>Auditorías</span>}
            </Link>
          </nav>
        </div>
        <div className="p-4 border-t border-zinc-200 dark:border-zinc-800 text-xs text-center text-zinc-500 overflow-hidden whitespace-nowrap">
          {isLeftCollapsed ? 'v1.0' : 'Reflecter Labs TMS v1.0'}
        </div>
      </aside>

      {/* Main Area */}
      <main className="flex-1 flex flex-col min-w-0 transition-all duration-300 ease-in-out relative">
        {/* Topbar */}
        <header 
          className={`${isNavbarCollapsed ? 'h-0 -translate-y-full opacity-0' : 'h-16 opacity-100'} flex items-center justify-between md:justify-end px-6 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 transition-all duration-300 ease-in-out relative z-30`}
        >
          {/* Mobile info */}
          <div className="font-bold text-blue-600 md:hidden">Reflecter</div>
          
          <div className="flex items-center space-x-6">
            <button className="text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors relative">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white dark:border-zinc-900"></span>
            </button>

            {/* Profile Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 p-1 pr-2 rounded-full transition-colors border border-transparent"
              >
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-700 dark:text-blue-300 font-bold overflow-hidden border border-blue-200 dark:border-blue-800">
                   {currentUser?.email?.charAt(0).toUpperCase()}
                </div>
                {!isNavbarCollapsed && (
                  <div className="hidden sm:block text-sm font-medium text-left">
                    <div className="truncate max-w-[150px] font-semibold">{currentUser?.email}</div>
                  </div>
                )}
                <ChevronDown size={14} className="text-zinc-500" />
              </button>

              {isDropdownOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setIsDropdownOpen(false)}></div>
                  <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-xl py-1 z-50">
                    <div className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/50 rounded-t-md">
                      <p className="text-xs text-zinc-500 font-medium mb-1 uppercase tracking-wider text-center">Sesión activa</p>
                      <p className="text-sm font-semibold truncate text-zinc-900 dark:text-white text-center">{currentUser?.email}</p>
                    </div>
                    <div className="py-1">
                      <Link 
                        href="/dashboard/profile"
                        onClick={() => setIsDropdownOpen(false)}
                        className="flex items-center gap-3 px-4 py-2 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                      >
                        <User size={16} className="text-zinc-500" />
                        Perfil
                      </Link>
                    </div>
                    <div className="border-t border-zinc-200 dark:border-zinc-800 py-1">
                      <button 
                        onClick={handleSignOut}
                        className="w-full text-left flex items-center gap-3 px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20"
                      >
                        <LogOut size={16} className="text-red-500" />
                        Salir
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </header>

        {/* Toggle Navbar Button (Floating) */}
        <button 
          onClick={() => setIsNavbarCollapsed(!isNavbarCollapsed)}
          className={`absolute left-1/2 -translate-x-1/2 z-40 p-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-b-md shadow-sm text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-all ${isNavbarCollapsed ? 'top-0' : 'top-16'}`}
          title={isNavbarCollapsed ? "Mostrar barra superior" : "Ocultar barra superior"}
        >
          <ChevronUp size={14} className={`transition-transform duration-300 ${isNavbarCollapsed ? 'rotate-180' : ''}`} />
        </button>

        {/* Content Region */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 relative">
          {children}
        </div>
        
        {/* Lowbar */}
        <footer className="h-10 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between px-6 text-[10px] text-zinc-500 bg-white dark:bg-zinc-900 mt-auto z-20">
           <span className="font-medium tracking-wide">PANEL DE ADMINISTRACIÓN • REFLECTER LABS</span>
           <span className="flex items-center gap-2">
             <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
             CONECTADO
           </span>
        </footer>
      </main>

      {/* Sidebar Derecho (Row Bar) */}
      <aside 
        className={`${isRightCollapsed ? 'w-12' : 'w-72'} bg-white dark:bg-zinc-900 border-l border-zinc-200 dark:border-zinc-800 flex flex-col transition-all duration-300 ease-in-out hidden lg:flex`}
      >
        <div className="h-16 flex items-center justify-between px-3 border-b border-zinc-200 dark:border-zinc-800 shrink-0">
          <button 
            onClick={() => setIsRightCollapsed(!isRightCollapsed)}
            className="p-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-500 transition-colors mx-auto"
          >
            {isRightCollapsed ? <PanelRightOpen size={20} /> : <PanelRightClose size={20} />}
          </button>
          {!isRightCollapsed && <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-400 truncate pr-4">Nucleus Intelligence</h2>}
        </div>
        
        {!isRightCollapsed ? (
          <div className="flex-1 p-6 space-y-6 overflow-y-auto">
             <div className="p-4 rounded-xl bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30">
                <h3 className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-tight mb-2">MOLTX Engine</h3>
                <p className="text-xs text-blue-600/70 dark:text-blue-400/70 leading-relaxed italic">
                  "Orquestando agentes autónomos en tiempo real..."
                </p>
                <div className="mt-4 pt-4 border-t border-blue-100/50 dark:border-blue-900/30">
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest leading-relaxed">
                    Esta sección integrará el motor de ejecución de agentes para automatizar tareas del Kanban.
                  </p>
                </div>
             </div>
             
             <div className="space-y-4">
                <div className="h-24 w-full bg-zinc-100 dark:bg-zinc-800/50 rounded-lg border border-dashed border-zinc-300 dark:border-zinc-700 flex flex-col items-center justify-center text-[10px] text-zinc-400 text-center px-4 gap-2">
                   <div className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700 animate-pulse"></div>
                   <span>ANÁLISIS DE FLUJO ON-CHAIN</span>
                </div>
                <div className="h-24 w-full bg-zinc-100 dark:bg-zinc-800/50 rounded-lg border border-dashed border-zinc-300 dark:border-zinc-700 flex flex-col items-center justify-center text-[10px] text-zinc-400 text-center px-4 gap-2">
                   <div className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700 animate-pulse"></div>
                   <span>HISTORIAL DE ACTIVIDAD AGÉNTICA</span>
                </div>
             </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center pt-6 space-y-6">
             <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-400">
               <Bell size={14} />
             </div>
             <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-400">
               <User size={14} />
             </div>
          </div>
        )}
      </aside>
    </div>
  );
}
