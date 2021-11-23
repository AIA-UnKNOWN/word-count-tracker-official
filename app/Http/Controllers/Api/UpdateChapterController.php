<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Chapters;

class UpdateChapterController extends Controller
{
    public function __invoke(Request $request, $id, $wordCount) {
        Chapters::updateOrCreate(
            ['id' => $id],
            ['word_count' => $wordCount]
        );

        return response()->json([
            'message' => 'Word count has been saved'
        ]);
    }
}
