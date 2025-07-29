"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function RegisterPage() {
  const router = useRouter()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  const handleRegister = async () => {
    if (!name || !email || !password || !confirmPassword) {
      setError("Vui lòng điền đầy đủ thông tin.")
      return
    }

    if (password !== confirmPassword) {
      setError("Mật khẩu không khớp.")
      return
    }

    // Gọi API đăng ký ở đây nếu có
    console.log({ name, email, password })

    router.push("/login") // chuyển hướng sau khi đăng ký
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      {/* Logo */}
      <div className="mb-6">
        <Image src="/3P1N_logo.png" alt="Nike Logo" width={60} height={60} />
      </div>

      <div className="max-w-sm w-full space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-center text-black">Tạo tài khoản 3P1N</h1>
          <p className="text-sm text-center text-gray-600 mt-1">
            Tham gia để nhận ưu đãi và trải nghiệm mua sắm tốt nhất
          </p>
        </div>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Họ và tên"
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
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
          <input
            type="password"
            placeholder="Xác nhận mật khẩu"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <Button className="w-full bg-black hover:bg-gray-900 text-white" onClick={handleRegister}>
          Tạo tài khoản
        </Button>

        <div className="text-center text-sm text-gray-500">
          <span>Đã có tài khoản? </span>
          <button
            className="text-black hover:underline font-medium"
            onClick={() => router.push("/login")}
          >
            Đăng nhập
          </button>
        </div>
      </div>
    </div>
  )
}
