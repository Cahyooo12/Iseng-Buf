<?php
$hostname = "localhost";
$username = "root";       // Default user XAMPP
$password = "";           // Default password XAMPP biasanya kosong
$database = "website_saya"; // Nama database yang kita buat tadi

$koneksi = mysqli_connect($hostname, $username, $password, $database);

// Cek koneksi, jika gagal tampilkan pesan error
if (!$koneksi) {
    http_response_code(500);
    echo json_encode(array("message" => "Database connection failed: " . mysqli_connect_error()));
    exit();
}
?>