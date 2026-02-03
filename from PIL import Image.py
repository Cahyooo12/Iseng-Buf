from PIL import Image
import os

def gabung_gambar_horizontal(daftar_file, nama_output='foto_grup_gabungan.jpg'):
    images = [Image.open(x) for x in daftar_file]
    
    # Cari tinggi terkecil agar seragam
    min_height = min(im.height for im in images)
    
    # Resize semua gambar ke tinggi yang sama dengan mempertahankan rasio
    resized_images = []
    for im in images:
        ratio = min_height / im.height
        new_size = (int(im.width * ratio), min_height)
        resized_images.append(im.resize(new_size))
    
    # Hitung total lebar
    total_width = sum(im.width for im in resized_images)
    
    # Buat kanvas baru
    new_im = Image.new('RGB', (total_width, min_height))
    
    # Tempel gambar satu per satu
    x_offset = 0
    for im in resized_images:
        new_im.paste(im, (x_offset, 0))
        x_offset += im.width
        
    new_im.save(nama_output)
    print(f"Gambar berhasil disimpan sebagai {nama_output}")

# Daftar file yang kamu upload (pastikan nama file sesuai dengan lokasi di komputermu)
files = [
    'ChatGPT Image Jan 31, 2026, 07_12_41 PM.jpg',
    'ChatGPT Image Jan 31, 2026, 07_12_38 PM.jpg',
    'ChatGPT Image Jan 31, 2026, 07_12_35 PM.jpg',
    'image (6).jpg',
    'image (5).jpg',
    'image (4).jpg',
    'image (3).jpg',
    'image (2).jpg',
    'image (1).jpg'
]

# Jalankan fungsi
# Pastikan file gambar ada di folder yang sama dengan script ini
# gabung_gambar_horizontal(files)