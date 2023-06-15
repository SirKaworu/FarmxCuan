<?php
namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller {
    public function create(): Response
    {
        return Inertia::render('Dashboard/Dashboard');
    }
}
