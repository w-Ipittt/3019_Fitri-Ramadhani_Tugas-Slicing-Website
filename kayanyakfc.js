//Toggle menu
const btnHamburger = document.getElementById("btnHamburger");
const navLinks = document.getElementById("navLinks");

btnHamburger.addEventListener("click", function () {
    navLinks.classList.toggle("aktif");
});

const btnLayanan = document.getElementById("btnLayanan");
const dropdownMenu = document.getElementById("dropdownMenu");

btnLayanan.addEventListener("click", function () {
    dropdownMenu.classList.toggle("aktif");
});

//Tutup dropdown kalau klik di luar area dropdown
document.addEventListener("click", function (event) {
    const klikDiDalamDropdown = btnLayanan.contains(event.target) || dropdownMenu.contains(event.target);
    if (!klikDiDalamDropdown) {
        dropdownMenu.classList.remove("aktif");
    }
});

//Tombol floating "Pesan Sekarang" muncul pas discroll ke bawah
const btnFloating = document.getElementById("btnFloating");

window.addEventListener("scroll", function () {
    if (window.scrollY > 400) {
        btnFloating.classList.add("tampil");
    } else {
        btnFloating.classList.remove("tampil");
    }
});

//Klik tombol floating langsung scroll ke menu
btnFloating.addEventListener("click", function () {
    document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
});