-- Buat database jika belum ada
CREATE DATABASE IF NOT EXISTS website_saya;
USE website_saya;

-- Buat tabel kesan_pesan
CREATE TABLE IF NOT EXISTS kesan_pesan (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    pesan TEXT NOT NULL,
    tanggal TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
