<?php

namespace App\Http\Controllers;

use App\Http\Resources\ArticleItemResource;
use App\Models\Article;

class HomeController extends Controller
{
    public function __invoke()
    {
        $articles = Article::query()
            ->select('title','slug','user_id','teaser','created_at','id')
            ->with(['tags' => fn($tag) => $tag->select('name','slug')])
            ->limit(9)
            ->latest()
            ->get();

        return inertia('Home',[
            'articles' => ArticleItemResource::collection($articles)
        ]);
    }
}
