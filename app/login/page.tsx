import LoginForm from "@/components/auth/login-form";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center pt-32 pb-24 px-4 min-h-[75vh]">
      <LoginForm />
      <p className="mt-6 text-sm text-zinc-600 dark:text-zinc-400 bg-white/50 dark:bg-zinc-950/50 p-2 rounded-md backdrop-blur-sm">
        ¿No tienes una cuenta?{" "}
        <Link href="/register" className="font-semibold text-blue-600 hover:text-blue-500 hover:underline">
          Regístrate aquí
        </Link>
      </p>
    </div>
  );
}
