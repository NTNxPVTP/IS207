"use client"
import { useRef } from "react";
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
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (
      e: React.KeyboardEvent<HTMLInputElement>,
      nextRef?: React.RefObject<HTMLInputElement | null> | null) => {
    if (e.key === "Enter") {
    e.preventDefault();
      if (nextRef?.current) {
        nextRef.current.focus();
      } else {
        handleRegister();
      }
    }
  }; 
  const handleRegister = async () => {
    if (!name || !email || !password || !confirmPassword) {
    setError("Vui lòng điền đầy đủ thông tin.");
    return;
  }

  if (password !== confirmPassword) {
    setError("Mật khẩu không khớp.");
    return;
  }

  try {
    const response = await fetch("http://127.0.0.1:8000/customer/register", 
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.message || "Đăng ký thất bại");
      return;
    }

    console.log("Đăng ký thành công:");

    // Chuyển hướng sang trang login
    router.push("/login");
  } catch (error) {
    console.error("Lỗi đăng ký:", error);
    setError("Đã xảy ra lỗi khi đăng ký");
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
          <h1 className="text-2xl font-bold text-center text-black">Tạo tài khoản 3P1N</h1>
          <p className="text-sm text-center text-gray-600 mt-1">
            Tham gia để nhận ưu đãi và trải nghiệm mua sắm tốt nhất
          </p>
        </div>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <div className="space-y-4">
          <input
            ref={nameRef}
            type="text"
            placeholder="Họ và tên"
            value={name}
            onChange={e => setName(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e, emailRef)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            ref={emailRef}
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e, passwordRef)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            ref={passwordRef}
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e, confirmPasswordRef)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            ref={confirmPasswordRef}
            type="password"
            placeholder="Xác nhận mật khẩu"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e)} // Enter ở ô cuối không làm gì cả
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <Button className="w-full bg-black hover:bg-gray-900 text-white" onClick={() => handleRegister()}>
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
  );
}


