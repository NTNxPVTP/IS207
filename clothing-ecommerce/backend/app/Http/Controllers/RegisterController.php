<?php
namespace App\Http\Controllers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use App\Models\admin\User;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;

class RegisterController extends Controller
{
    public function register(Request $request)
    {
        $id = Str::uuid()->toString();
        $name = $request->input('name');
        $email = $request->input('email');
        $password = Hash::make($request->input('password'));

        DB::insert('INSERT INTO user (id_user, name, email, password_hash) VALUES (?, ?, ?, ?)', [
            $id,
            $name,
            $email,
            $password
        ]);

        return response()->json([
            'message' => 'Đăng ký thành công',
        ], 200);
    }
}