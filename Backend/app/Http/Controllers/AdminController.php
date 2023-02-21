<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Kriteria;
use App\Models\SubKriteria;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function view()
    {
        $_kriteria      = Kriteria::all();
        $_sub_kriteria  = SubKriteria::all();
        return array($_kriteria, $_sub_kriteria);
    }
}
