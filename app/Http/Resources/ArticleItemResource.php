<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/** @mixin \App\Models\Article */
class ArticleItemResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'title' => $this->title,
            'slug' => $this->slug,
            'teaser' => $this->teaser,
            'created_at' => $this->created_at->format('Y') == now()->format('Y') ? $this->created_at->format('d M') : $this->created_at->format('d M, Y'),
            'tags' => $this->tags->map(fn ($tag) => [
                'name' => $tag->name,
                'slug' => $tag->slug,
            ]),
            'author' => [
                'name' => $this->author->name,
            ],
        ];
    }
}
