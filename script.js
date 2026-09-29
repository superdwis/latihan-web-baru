const itineraryButton = document.querySelector("#download-itinerary");
const downloadStatus = document.querySelector("#download-status");
const galleryTiles = document.querySelectorAll(".gallery-tile");
const imageDialog = document.querySelector(".image-dialog");
const dialogImage = imageDialog.querySelector("img");
const dialogCaption = imageDialog.querySelector("p");

itineraryButton.addEventListener("click", () => {
  const itinerary = [
    "PANDUAN BELAJAR MINGGUAN",
    "Ruang Belajar | Belajar bersama, tumbuh bersama",
    "",
    "SENIN | Tentukan satu tujuan belajar untuk minggu ini",
    "SELASA | Belajar fokus selama 25 menit tanpa distraksi",
    "KAMIS | Praktikkan satu konsep lewat catatan atau proyek kecil",
    "SABTU | Refleksi kemajuan dan berbagi dengan teman belajar",
    "",
    "Tips: Sisihkan waktu istirahat dan sesuaikan jadwal dengan ritmemu.",
    "Lokasi belajar bersama: Perpustakaan Nasional RI, Jakarta"
  ].join("\n");
  const file = new Blob([itinerary], { type: "text/plain;charset=utf-8" });
  const fileUrl = URL.createObjectURL(file);
  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = "panduan-belajar-mingguan.txt";
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(fileUrl);
  downloadStatus.textContent = "Panduan belajar berhasil diunduh.";
});

galleryTiles.forEach((tile) => {
  tile.addEventListener("click", () => {
    const image = tile.querySelector("img");
    dialogImage.src = tile.dataset.image;
    dialogImage.alt = image.alt;
    dialogCaption.textContent = tile.dataset.caption;
    imageDialog.showModal();
  });
});

imageDialog.querySelector(".dialog-close").addEventListener("click", () => imageDialog.close());
imageDialog.addEventListener("click", (event) => {
  if (event.target === imageDialog) imageDialog.close();
});