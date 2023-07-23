<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

Route::get('/', HomeController::class)->name('home');
Route::get('categories/{category:slug}', [CategoryController::class, 'show'])->name('categories.show');
Route::get('/dashboard', DashboardController::class)->middleware(['auth'])->name('dashboard');

Route::controller(ArticleController::class)->group(function () {
    Route::get('articles/', 'index')->name('articles.index');
    Route::get('articles/create', 'create')->name('articles.create');
    Route::get('articles/{article:slug}', 'show')->name('articles.show');
});

require __DIR__ . '/auth.php';
