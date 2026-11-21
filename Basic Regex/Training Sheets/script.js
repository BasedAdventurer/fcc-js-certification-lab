// Level 1: Mudah (Karakter Dasar, Quantifier +, *, ?, dan Anchor ^, $)
// Soal 1 - Mencari Kode Pos
// Tugas: Tangkap semua angka 5 digit beruntun di dalam teks (tanpa peduli kata lain).
// Teks Uji: "Alamat kantor di 45321 Banding dan cabang di 10290 Jakarta, kode 123 tidak valid."
// Target Match: 45321, 10290
// Petunjuk Kotak: [angka] + [berapa banyak?] (Gunakan \d dan {5}).

// Jawab:
const regex = /\d{5}/g;
console.log("Alamat kantor di 45321 Bandung dan cabang di 10290 Jakarta, kode 123 tidak valid.".match(regex));


// Soal 2 - Warna "color" vs "colour"
// Tugas: Buat satu regex yang bisa menangkap ejaan Amerika "color" maupun inggris "colour".
// Teks Uji: "I like the colour blue, but my friend prefers the colour red."
// Target Match: color, colour
// Petunjuk Kotak: colo + [huruf u yang opsional] + r (Ingat tanda tanya ?).

// Jawab:
const colorRegex = /colo(?:u)r/gi;
console.log("I like the colour blue, but my friend prefers the colour red.".match(colorRegex));

// Soal 3 - Validasi Awal & Akhir String
// Tugas: Cocokkan string hanya jika seluruh isinya dimulai dengan kata "Halo" dan diakhiri dengan tanda seru "!" (di tengahnya boleh karakter apa saja).
// Teks Uji:
// "Halo dunia!" -> Cocok
// "Halo Rifki, apa kabar!" -> Cocok
// "Hai, Halo dunia!" -> Tidak cocok
// "Halo dunia" -> Tidak cocok
// Petunjuk Kotak: [awal string] + Halo + [karakter apa saja, 0 atau lebih] + ! + [akhir string].

// Jawab:
const stringRegex = /^Halo.*!$/i;

console.log(stringRegex.test("Hai, Halo dunia!"));

// Level 2: Menengah (Character Class [...] & Negasi [^...])
// Soal 4 - Filter Kode Barang
// Tugas: Tangkap kode barang yang formatnya: 1 huruf besar (A sampai Z) diikuti tanda strip - diikuti 3 angka.
// Teks Uji: "Stok tersisa: A-102, B-994, c-301 (huruf kecil salah), Z-12 (kurang angka)."
// Target Match: A-102, B-994

// Jawab:
const fourthRegex = /[A-Z]-[0-9]{3}/g;

console.log("Stok tersisa: A-102, B-994, c-301 (huruf kecil salah), Z-12 (kurang angka).".match(fourthRegex))

// Soal 5 - Sensor Angka & Simbol (Sisakan Huruf & Spasi)
// Tugas: Buat regex untuk .replace() yang menghapus semua karakter selain huruf (a-z, A-Z) dan spasi (\s).
// Teks Uji: "Harga kopi ini Rp25.000,-!! Murah banget #mantap".
// Hasil Setelah: .replace(regex, ""): "Harga kopi ini Rp Murah banget mantap"
// Petunjuk Kotak: Pakai kurung siku negasi [^...] + flag g.

const fifthRegex = /[^a-zA-Z\s]/g;

console.log("Harga kopi ini Rp25.000,-!! Murah banget #mantap".replace(fifthRegex, ""));

// Soal 6 - Menangkap Ekstensi File Gambar
// Tugas: Tangkap nama file yang berakhiran .jpg atau .png (huruf sebelum titik boleh kombinasi huruf/angka/underscore \w+).
// Teks Uji: "File: foto_profil.jpg, laporan.pdf, banner01.png, catatan.txt".
// Target Match: foto_profil.jpg, banner01.png.
// Petunjuk Kotak: [nama file] + [titik literal \. ] + [pilihan jpg atau png pakai | ] (Jangan lupa pakai \ sebelum titik karena titik biasa artinya "semua karakter").

const sixthRegex = /\w+\.(?:jpg|png)/g;

console.log("File: foto_profil.jpg, laporan.pdf, banner01.png, catatan.txt".match(sixthRegex))

// Level 3: Sulit (Capturing Groups (...) & Tukar posisi $1, $2)
// Soal 7 - Ubah Format Tanggal (YYYY-MM-DD -> DD/MM/YYYY)
// Tugas: Buat regex dan string penggantinya di .replace() untuk mengubah format tanggal tahun-bulan-hari menjadi hari/bulan/tahun.
// Teks Uji: "Deadline proyek jatuh pada 2026-11-25".
// Hasil Akhir: "Deadline proyek jatuh pada 25/11/2026".
// Petunjuk Kotak: Bagi jadi 3 capturing group: ([4 digit]) - ([2 digit]) - ([2 digit]), lalu susun ulang pakai $3/$2/$1.

const seventhRegex = /(\d{4})-(\d{2})-(\d{2})/g;

console.log("Deadline proyek jatuh pada 2026-11-25".replace(seventhRegex, "$3/$2/$1"));

// Soal 8 - Mengambil Username dari Tag @mention
// Tugas: Di dalam kalimat, ubah setiap @username menjadi teks "User: username" (simbol @-nya dibuang, nama user-nya dipertahankan).
// Teks Uji: "Halo @rifki_dev dan @budi99, tolong cek kode ini!"
// Hasil Akhir: "Halo User: rifki_dev dan User: budi99, tolong cek kode ini!"
// Petunjuk Kotak: @ di luar kurung (supaya ikut terhapus saat di-replace), lalu bungkus nama user-nya di dalam (...) supaya jadi $1.

const eighthRegex = /@(\w+)/g;

console.log("Halo @rifki_dev dan @budi99, tolong cek kode ini!".replace(eighthRegex, "User: $1"));
