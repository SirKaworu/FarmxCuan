<?php

use App\Http\Controllers\Dashboard\DashboardController;
use App\Http\Controllers\Dashboard\PortfolioController;
use App\Http\Controllers\Dashboard\MarketController;
use App\Http\Controllers\Dashboard\NewsController;
use App\Http\Controllers\Dashboard\TransactionController;
use App\Http\Controllers\Dashboard\ProductsController;
use App\Http\Controllers\Dashboard\MonitoringController;
use Illuminate\Support\Facades\Route;

Route::get('dashboard', [DashboardController::class, 'create'])->name('dashboard');
Route::get('portfolio', [PortfolioController::class, 'create'])->name('portfolio');
Route::get('market', [MarketController::class, 'create'])->name('market');
Route::get('news', [NewsController::class, 'create'])->name('news');
Route::get('transaction', [TransactionController::class, 'create'])->name('transaction');
Route::get('products', [ProductsController::class, 'create'])->name('product');
Route::get('monitoring', [MonitoringController::class, 'create'])->name('monitor');
