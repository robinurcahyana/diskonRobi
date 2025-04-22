// bagian tampilan pertama aplikasi dijadikan
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("fbarang").style.display = 'block'; //munculkan
    document.getElementById("tampil_data").style.display = 'none'; //sembunyi
})

//bagian fungsi hitung diskon
function hitungDiskon() {
     let namaBarang = document.getElementById('namaBarang').value;
    let KategoriBarang = document.getElementById('KategoriBarang').value;
    let Harga = document.getElementById('Harga').value;
    let diskon = document.getElementById('diskon').value;

    let nilaiDiskon, totalHarga;

    //buat kondisi kesalahan
    if (!namaBarang.trim() || !KategoriBarang.trim() || isNaN(Harga) || isNaN(diskon) 
        || Harga<=0 || diskon < 0 || diskon > 100) {
        alert('Masukan data yang valid, termasuk harga yang valid dan diskon antara 0-100');
        return;
    }

    //rumus hitung diskon
    nilaiDiskon = Harga * (diskon/100)
    totalHarga = Harga - nilaiDiskon

    //tampilkan data
    document.getElementById('hasil_nama_barang').textContent = namaBarang;
    document.getElementById('hasil_kategori_barang').textContent = KategoriBarang;
    document.getElementById('hasil_diskon').textContent = nilaiDiskon.toFixed(2);
    document.getElementById('hasil_total_harga').textContent = totalHarga.toFixed(2);

    document.getElementById("fbarang").style.display = 'none'; //sembunyi
    document.getElementById("tampil_data").style.display = 'block'; //muncul
}

//bagian fungsi tombol kembali
function kembali() {
    document.getElementById("fbarang").style.display = 'block'; //munculkan
    document.getElementById("tampil_data").style.display = 'none'; //sembunyi
}

//bagian fungsi tombol bersih
function bersih() {
    document.getElementById('fbarang').reset();
}