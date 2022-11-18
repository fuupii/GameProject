<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{

    public function home()
    {
        $posts = Post::latest()->get();
        return view('home')
            ->with(['posts' => $posts]);
    }

    public function battle()
    {
        $posts = Post::latest()->get();
        return view('battle')
            ->with(['posts' => $posts]);
    }

   public function update(Request $request)
   {
    $post = Post::find($request->id);
    $post->place = $request->newPrice;
    $post->save();
   }
}
