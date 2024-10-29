function validateForm() {
    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let paket = document.getElementById("paket").value;

    if (nama === "" || email === "" || paket === "") {
        alert("Semua kolom harus diisi!");
        return false;
    }
    alert("Pemesanan berhasil!");
    return true;
}