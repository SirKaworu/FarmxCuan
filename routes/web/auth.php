<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;

Route::get('login', [AuthenticatedSessionController::class, 'create'])->name('login');
Route::get('register', [RegisteredUserController::class, 'create'])
    ->name('register');
