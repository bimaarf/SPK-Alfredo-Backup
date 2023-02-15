<?php

namespace Database\Seeders;

use App\Models\Permission;
use App\Models\Role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = Role::create([
            'name' => 'administrator',
            'display_name' => 'Administrator', // optional
            'description' => 'Administrator Sistem', // optional
        ]);
        $decisionMaker = Role::create([
            'name' => 'decision-maker',
            'display_name' => 'Decision Maker', // optional
            'description' => 'Decision Maker', // optional
        ]);
        $assistant = Role::create([
            'name' => 'assistant',
            'display_name' => 'Assistant', // optional
            'description' => 'Assistant Decision Maker', // optional
        ]);
        $aktif      = Permission::create([
            'name'          => 'aktif',
        ]);
        $tidakAktif      = Permission::create([
            'name'          => 'tidak-aktif',
        ]);
        $admin->attachPermissions([$aktif]);
        $decisionMaker->attachPermissions([$aktif]);
        $assistant->attachPermissions([$aktif]);
    }
}
