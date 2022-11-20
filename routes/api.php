<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ItemController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::patch('/action', [App\Http\Controllers\PostController::class, 'update']);

Route::patch('/update', [ItemController::class, 'updateItem']);

Route::patch('/', [ItemController::class, 'updateItem']);




