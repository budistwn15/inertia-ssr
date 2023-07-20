<?php

namespace Database\Seeders;

use App\Models\Article;
use App\Models\Tag;
use App\Models\User;
use Illuminate\Database\Seeder;

class ArticleSeeder extends Seeder
{
    public function run(): void
    {
        User::factory(5)->hasArticles(15)->create();
        Article::get()->each(fn($article) => $article->tags()->attach(Tag::inRandomOrder()->first()));
    }
}
