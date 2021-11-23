<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Chapters;

class GetChapterWordCountController extends Controller
{
    public function __invoke(Request $request, $id) {
        return response()->json([
            'chapter' => Chapters::find($id)
        ]);
    }
}
