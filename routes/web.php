<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FoodController;
use App\Models\Food;

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

Auth::routes();

//Route::view('/{path?}', 'index');

Route::get('/createFood', function () {
    return view('foodAdd');
});
Route::get('/showFood', function () {
    return view('foodList');
});

Route::get('/userdata', function () {
    $user = DB::table('users')->get();
    return $user;
});

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
//Route::resource('foods', 'FoodController');
Route::get('/index', [FoodController::class, 'index']);
//Route::get('/index/id', [FoodController::class, 'index']);
Route::post('/foods', [FoodController::class, 'store']);

Route::get('/token', function () {
    return csrf_token();
});
