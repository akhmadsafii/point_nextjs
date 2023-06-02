<?php

namespace App\Services;

use App\Models\Admin;
use Illuminate\Support\Facades\DB;
use Ramsey\Uuid\Uuid;

class AdminService
{
    public function admins($perPage, $search)
    {
        $query = DB::table('admins');
        if ($search) {
            $query->where('name', 'LIKE', '%' . $search . '%');
        }
        $admins = $query->paginate($perPage);
        return $admins;
    }

    public function create($request)
    {
        $adminData = $request->except(['file', 'confirm_password']);
        $adminData['id'] = Uuid::uuid4()->toString();
        if ($request->hasFile('file')) {
            $imagePath = $request->file('file')->store('public/uploads');
            $adminData['file'] = $imagePath;
        }

        $admin = Admin::create($adminData);

        return $admin;
    }
}
