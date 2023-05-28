<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use App\Models\Student;
use App\Models\Supervisor;
use App\Models\Teacher;
use App\Models\UserParent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'username' => 'required',
            'password' => 'required',
        ]);

        $username = $credentials['username'];
        $password = $credentials['password'];

        $user = null;
        $token = null;

        // Cek pengguna dalam tabel Teacher berdasarkan email atau telepon
        $teacher = Teacher::where('email', $username)
            ->orWhere('phone', $username)
            ->first();

        if ($teacher && Hash::check($password, $teacher->password)) {
            $token = JWTAuth::fromUser($teacher);
            $user = $teacher;
        }

        // Cek pengguna dalam tabel Supervisor berdasarkan email atau telepon
        $supervisor = Supervisor::where('email', $username)
            ->orWhere('phone', $username)
            ->first();

        if ($supervisor && Hash::check($password, $supervisor->password)) {
            $token = JWTAuth::fromUser($supervisor);
            $user = $supervisor;
        }

        // Cek pengguna dalam tabel Student berdasarkan email atau telepon
        $student = Student::where('email', $username)
            ->orWhere('phone', $username)
            ->first();

        if ($student && Hash::check($password, $student->password)) {
            $token = JWTAuth::fromUser($student);
            $user = $student;
        }

        // Cek pengguna dalam tabel Admin berdasarkan email atau telepon
        $admin = Admin::where('email', $username)
            ->orWhere('phone', $username)
            ->first();

        if ($admin && Hash::check($password, $admin->password)) {
            $token = JWTAuth::fromUser($admin);
            $user = $admin;
        }

        // Cek pengguna dalam tabel Parent berdasarkan email atau telepon
        $parent = UserParent::where('email', $username)
            ->orWhere('phone', $username)
            ->first();

        if ($parent && Hash::check($password, $parent->password)) {
            $token = JWTAuth::fromUser($parent);
            $user = $parent;
        }

        if (!$user) {
            return response()->json(['error' => 'Invalid credentials'], 401);
        }

        return response()->json(['token' => $token]);
    }
}
