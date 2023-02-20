<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\SubKriteria;
use Illuminate\Http\Request;

class SubKriteriaController extends Controller
{
    public function store(Request $request)
    {
        $items = $request->input('items');
        foreach ($items as $item) {
            $_kriteria = new SubKriteria();
            $_kriteria->kriteria_id = $item["kriteria_id"];
            $_kriteria->nama_sub_kriteria = $item["nama_sub_kriteria"];
            $_kriteria->nilai = $item["nilai"];
            $_kriteria->save();
        }
        return response()->json([
            'status' => 200,
            'message' => 'Added!',
        ]);
    }
}
