import LoginForm from "@/components/auth/login-form";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center pt-32 pb-24 px-4 min-h-[75vh]">
      <LoginForm />
    </div>
  );
}
