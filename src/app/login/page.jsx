// app/login/page.jsx

"use client";

import LoginForm from "@/components/LoginForm";
import { Mail } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#F3E3CC] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#FFF2DC] border border-[#C07152] shadow-md rounded-xl p-8">
        {/* Icon surat */}
        <div className="flex flex-col items-center mb-6">
          <Mail className="h-10 w-10 text-[#7C8661] mb-2" />
          <h1 className="text-lg font-semibold text-[#7C8661] text-center">
            Suratmu menunggu di dalam
          </h1>
        </div>

        {/* Form login */}
        <LoginForm />
      </div>
    </main>
  );
}
