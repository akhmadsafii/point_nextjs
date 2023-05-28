<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('teachers', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('slug')->nullable();
            $table->string('nip')->nullable();
            $table->string('nik')->nullable();
            $table->string('nuptk')->nullable();
            $table->string('name');
            $table->enum('gender', ['m', 'f']);
            $table->string('religion')->nullable();
            $table->string('file')->nullable();
            $table->string('phone')->nullable();
            $table->string('email')->nullable();
            $table->string('pob')->nullable();
            $table->date('dob')->nullable();
            $table->text('address')->nullable();
            $table->enum('type', ['teacher', 'bk']);
            $table->unsignedInteger('id_class')->nullable();
            $table->string('password');
            $table->dateTimeTz('last_login')->nullable();
            $table->tinyInteger('status')->default(1);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('teachers');
    }
};
