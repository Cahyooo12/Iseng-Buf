<?php
// Set header untuk mengizinkan Cross-Origin Resource Sharing (CORS)
// dan untuk memberitahu klien bahwa response-nya adalah JSON.
header("Access-Control-Allow-Origin: *"); // Mengizinkan akses dari origin manapun. Untuk produksi, sebaiknya ganti '*' dengan domain frontend Anda.
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once 'koneksi.php';

// Cek apakah metode request adalah POST
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    // Ambil data JSON yang dikirim dari frontend
    $data = json_decode(file_get_contents("php://input"));

    // Pastikan data tidak kosong
    if (!empty($data->nama) && !empty($data->email) && !empty($data->pesan)) {
        
        // Ambil data dan escape untuk keamanan
        $nama  = mysqli_real_escape_string($koneksi, $data->nama);
        $email = mysqli_real_escape_string($koneksi, $data->email);
        $pesan = mysqli_real_escape_string($koneksi, $data->pesan);

        // Query untuk memasukkan data
        $query = "INSERT INTO kesan_pesan (nama, email, pesan) VALUES ('$nama', '$email', '$pesan')";

        // Jalankan query
        if (mysqli_query($koneksi, $query)) {
            // Jika berhasil, kirim response 201 Created
            http_response_code(201);
            echo json_encode(array("message" => "Pesan berhasil dikirim."));
        } else {
            // Jika gagal, kirim response 503 Service Unavailable
            http_response_code(503);
            echo json_encode(array("message" => "Gagal mengirim pesan: " . mysqli_error($koneksi)));
        }
    } else {
        // Jika data tidak lengkap, kirim response 400 Bad Request
        http_response_code(400);
        echo json_encode(array("message" => "Gagal mengirim pesan. Data tidak lengkap."));
    }
} else {
    // Jika metode bukan POST, kirim response 405 Method Not Allowed
    http_response_code(405);
    echo json_encode(array("message" => "Metode tidak diizinkan."));
}

// Tutup koneksi
mysqli_close($koneksi);
?>