<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\KriteriaController;
use App\Http\Controllers\SubKriteriaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);
Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('kriteria/store', [KriteriaController::class, 'store']);
    Route::post('kriteria/edit/{id}', [KriteriaController::class, 'edit']);
    Route::post('kriteria/delete/{id}', [KriteriaController::class, 'delete']);
    Route::post('sub-kriteria/store', [SubKriteriaController::class, 'store']);
    Route::post('sub-kriteria/update/{id}', [SubKriteriaController::class, 'update']);
});
Route::get('data-dashboard/view', [AdminController::class, 'view']);
