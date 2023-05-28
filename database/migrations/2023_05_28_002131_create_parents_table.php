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
        Schema::create('parents', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('slug')->nullable();
            $table->string('nik')->nullable();
            $table->string('name');
            $table->string('password');
            $table->string('religion')->nullable();
            $table->enum('type', ['father', 'mother', 'guardian', 'other']);
            $table->string('phone')->nullable();
            $table->string('email')->nullable();
            $table->string('job')->nullable();
            $table->string('file')->nullable();
            $table->text('address')->nullable();
            $table->string('id_student');
            $table->dateTimeTz('last_login')->nullable();
            $table->tinyInteger('status')->default(1);
            $table->timestamps();
            $table->softDeletes();
        });

        Schema::table('parents', function (Blueprint $table) {
            $table->foreign('id_student')->references('id')->on('students')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('parents', function (Blueprint $table) {
            $table->dropForeign('parents_id_student_foreign');
        });
        Schema::dropIfExists('parents');
    }
};
