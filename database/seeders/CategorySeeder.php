<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        collect([
            ['name' => $name = 'Blog', 'slug' => str($name)->slug()],
            ['name' => $name = 'Tutorials', 'slug' => str($name)->slug()],
            ['name' => $name = 'Packages', 'slug' => str($name)->slug()],
        ])->each(fn($category) => Category::create($category));
    }
}