// app/page.jsx
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  // ⛔ Kalau belum login, redirect ke /login
  if (!session) {
    redirect("/login");
  }

  // ✅ Kalau udah login, redirect ke /dashboard
  redirect("/dashboard");
}
