<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});

Route::prefix('/api')->group(function () {
    Route::get('/chapters', Api\ChaptersController::class)
        ->name('get-chapters');
    Route::get('/chapter/{id}', Api\GetChapterWordCountController::class)
        ->name('get-chapter-word-count');
    Route::put('/chapter/{id}/{wordCount}/save', Api\UpdateChapterController::class)
        ->name('update-chapter');
});