<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Kriteria;
use Illuminate\Http\Request;

class KriteriaController extends Controller
{
    public function store(Request $request)
    {
        $kriteria = Kriteria::all();
        if (count($kriteria) > 0) {
            $_kriteria = Kriteria::first();
            $_kriteria->nama_kriteria = $request->nama_kriteria;
            $_kriteria->kode_kriteria = $request->kode_kriteria;
            $_kriteria->bobot = $request->bobot;
            $_kriteria->tipe_kriteria = $request->tipe_kriteria;
            $_kriteria->update();
            return response()->json([
                'status' => 200,
                'message' => 'Update!',
            ]);
        }
        $_kriteria = new Kriteria();
        $_kriteria->nama_kriteria = $request->nama_kriteria;
        $_kriteria->kode_kriteria = $request->kode_kriteria;
        $_kriteria->bobot = $request->bobot;
        $_kriteria->tipe_kriteria = $request->tipe_kriteria;
        $_kriteria->save();
        return response()->json([
            'status' => 200,
            'message' => 'Added!',
        ]);
    }
}
