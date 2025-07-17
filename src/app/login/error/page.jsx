"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function ErrorPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  const getErrorMessage = (code) => {
    switch (code) {
      case "CredentialsSignin":
        return "Username atau password salah.";
      case "AccessDenied":
        return "Akses ditolak.";
      default:
        return "Terjadi kesalahan saat login.";
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center">
      <h1 className="text-3xl font-bold mb-2 text-red-600">Login Gagal</h1>
      <p className="text-gray-600 mb-4">{getErrorMessage(error)}</p>
      <Link
        href="/"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Kembali ke Login
      </Link>
    </div>
  );
}
