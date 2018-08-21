<?php

use Illuminate\Database\Seeder;
use App\Proyecto;

class ProyectosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Proyecto::class, 35)->create();
    }
}
