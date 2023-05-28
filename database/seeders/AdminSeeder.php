<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Ramsey\Uuid\Uuid;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admins = [
            [
                'id' => Uuid::uuid4()->toString(),
                'slug' => 'admin-1',
                'name' => 'Admin 1',
                'email' => 'admin1@example.com',
                'gender' => 'm',
                'phone' => '123456789',
                'address' => '123 Main Street',
                'file' => 'admin1.jpg',
                'password' => Hash::make('password1'),
            ],
            [
                'id' => Uuid::uuid4()->toString(),
                'slug' => 'admin-2',
                'name' => 'Admin 2',
                'email' => 'admin2@example.com',
                'gender' => 'f',
                'phone' => '987654321',
                'address' => '456 Oak Avenue',
                'file' => 'admin2.jpg',
                'password' => Hash::make('password2'),
            ],
            // Tambahkan data admin lainnya di sini
        ];

        foreach ($admins as $admin) {
            DB::table('admins')->insert($admin);
        }
    }
}
