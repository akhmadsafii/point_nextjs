<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Services\AdminService;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    protected $adminService;

    public function __construct(AdminService $adminService)
    {
        $this->adminService = $adminService;
    }

    public function index(Request $request)
    {
        $perPage = $request->query('perPage', 10);
        $search = $request->query('search');

        $admins = $this->adminService->admins($perPage, $search);
        return response()->json($admins);
    }

    public function store(Request $request)
    {
        $admin = $this->adminService->create($request);
        return response()->json($admin, 201);
    }

    public function show(Admin $admin)
    {
        return response()->json($admin, 200);
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
