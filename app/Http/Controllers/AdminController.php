<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function index(Request $request)
    {
        $perPage = $request->query('perPage', 10);
        $search = $request->query('search');

        $query = Admin::query();

        // Filter berdasarkan pencarian
        if ($search) {
            $query->where('name', 'LIKE', '%' . $search . '%');
        }

        $admins = $query->paginate($perPage);

        return response()->json($admins);
    }

    public function store(Request $request)
    {
        $Admin = Admin::create($request->all());
        return response()->json($Admin, 201);
    }

    public function update(Request $request, Admin $Admin)
    {
        $Admin->update($request->all());
        return response()->json($Admin, 200);
    }

    public function destroy(Admin $Admin)
    {
        $Admin->delete();
        return response()->json(null, 204);
    }
}
