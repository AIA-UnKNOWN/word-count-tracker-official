<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Chapters;

class ChaptersController extends Controller
{
    public function __invoke(Request $request) {
        return response()->json([
            'chapters' => Chapters::all()
        ]);
    }
}
