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
        $admins = [];

        for ($i = 1; $i <= 500; $i++) {
            $admins[] = [
                'id' => Uuid::uuid4()->toString(),
                'slug' => 'admin-' . $i,
                'name' => 'Admin ' . $i,
                'email' => 'admin' . $i . '@example.com',
                'gender' => $i % 2 === 0 ? 'f' : 'm',
                'phone' => '123456789',
                'address' => $i % 2 === 0 ? '456 Oak Avenue' : '123 Main Street',
                'file' => 'admin' . $i . '.jpg',
                'password' => Hash::make('password' . $i),
            ];
        }

        DB::table('admins')->insert($admins);
    }
}
