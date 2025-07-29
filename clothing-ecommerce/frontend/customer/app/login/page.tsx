"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = async () => {
    if (!email || !password) {
    setError("Vui lòng nhập đầy đủ thông tin");
    return;
  }

  try {
    const response = await fetch("http://127.0.0.1:8000/customer/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.message || "Đăng nhập thất bại");
      return;
    }

    console.log("Đăng nhập thành công:");


    // Điều hướng
    router.push("/");
  } catch (error) {
    console.error("Lỗi đăng nhập:", error);
    setError("Đã xảy ra lỗi khi đăng nhập");
  }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      {/* Logo */}
      <div className="mb-6">
        <Image src="/3P1N_logo.png" alt="Nike Logo" width={60} height={60} />
      </div>

      <div className="max-w-sm w-full space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-center text-black">Đăng nhập vào 3P1N</h1>
          <p className="text-sm text-center text-gray-600 mt-1">
            Truy cập tài khoản của bạn và bắt đầu mua sắm
          </p>
        </div>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <Button className="w-full bg-black hover:bg-gray-900 text-white" onClick={handleLogin}>
          Đăng nhập
        </Button>

        <div className="text-center text-sm text-gray-500">
          <span>Bạn chưa có tài khoản? </span>
          <button
            className="text-black hover:underline font-medium"
            onClick={() => router.push("/register")}
          >
            Đăng ký
          </button>
        </div>
      </div>
    </div>
  )
}
