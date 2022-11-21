<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Shop;

class ShopController extends Controller
{
    public function readshops()
    {
        $shops = Shop::latest()->get();
        return view('home')
            ->with(['shops' => $shops]);
    }
}
