<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\admin\User;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        // Nhận dữ liệu từ body JSON
        $email = $request->input('email');
        $password = $request->input('password');

        // Tìm user theo email
        $user = User::where('email', $email)->first();

        if (!$user) {
            return response()->json(['message' => 'Email không tồn tại'], 404);
        }

        // Kiểm tra mật khẩu (không mã hóa)
        if ($user->password_hash !== $password) {
            return response()->json(['message' => 'Sai mật khẩu'], 401);
        }

        // Nếu đúng
        return response()->json([
            'message' => 'Đăng nhập thành công',
            'user' => $user,
        ], 200);
    }
}
