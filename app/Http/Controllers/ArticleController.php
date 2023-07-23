<?php

namespace App\Http\Controllers;

use App\Http\Resources\ArticleItemResource;
use App\Http\Resources\ArticleSingleResource;
use App\Models\Article;
use App\Models\Category;
use App\Models\Tag;

class ArticleController extends Controller
{
    public $tags;
    public $categories;

    public function __construct ()
    {
        $this->middleware('auth')->except(['index', 'show']);
        $this->tags = Tag::select('id', 'name')->get();
        $this->categories = Category::select('id', 'name')->get();
    }

    public function index ()
    {
        $articles = Article::query()
            ->select('title', 'slug', 'user_id', 'teaser', 'created_at', 'id')
            ->with(['tags' => fn ($tag) => $tag->select('name', 'slug')])
            ->latest()
            ->fastPaginate();
        return inertia('Articles/Index', [
            'articles' => ArticleItemResource::collection($articles)
        ]);
    }

    public function show (Article $article)
    {
        return inertia('Articles/Show', [
            'article' => new ArticleSingleResource($article)
        ]);
    }

    public function create ()
    {
        return inertia('Articles/Create', [
            'tags' => $this->tags,
            'categories' => $this->categories
        ]);
    }
}
