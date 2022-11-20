<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;

class ItemController extends Controller
{
    public function updateItem(Request $request)
    {
        if(Item::find($request->item_id)->exists()) {
            $updateItem = item::find($request->item_id);
            $updateItem->quantity = $updateItem->quantity + $request->quantity;
            $updateItem->save();
        } else {
            $insertItem = new Item();
            $insertItem->item_id = $request->item_id;
            $insertItem->quantity = $request->quantity;
            $insertItem->name = $request->name;
            $insertItem->save();

        }
    }
}
