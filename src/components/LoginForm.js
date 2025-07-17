"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [userInfo, setUserInfo] = useState({ username: "", password: "" });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      username: userInfo.username,
      password: userInfo.password,
    });

    if (res.ok) router.push("/dashboard");
    else alert("YAHAHHAHAHA GABISA LOGIN DASAR NOOB");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-[#7C8661] text-sm mb-1">Username</label>
        <input
          type="text"
          className="w-full px-4 py-2 rounded-xl bg-[#EED1BD] focus:outline-none"
          value={userInfo.username}
          onChange={(e) =>
            setUserInfo({ ...userInfo, username: e.target.value })
          }
        />
      </div>

      <div>
        <label className="block text-[#7C8661] text-sm mb-1">Password</label>
        <input
          type="password"
          className="w-full px-4 py-2 rounded-xl bg-[#EED1BD] focus:outline-none"
          value={userInfo.password}
          onChange={(e) =>
            setUserInfo({ ...userInfo, password: e.target.value })
          }
        />
      </div>

      <p className="text-sm text-[#D4583B] underline cursor-pointer hover:text-red-600">
        Belum punya akun?
      </p>

      <button
        type="submit"
        className="bg-[#7C8661] text-[#EED1BD] px-6 py-2 rounded-xl w-full hover:opacity-90"
      >
        Masuk
      </button>
    </form>
  );
}
