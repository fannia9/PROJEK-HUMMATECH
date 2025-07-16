document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    const loading = document.getElementById("loading");
    loading.classList.add("hide");
  }, 1000);
});

document.addEventListener("DOMContentLoaded", function () {
  const pesanButtons = document.querySelectorAll(".pesan-btn");
  const infoPenerbanganInput = document.getElementById("infoPenerbangan");

  pesanButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const maskapai = this.getAttribute("data-maskapai");
      const keberangkatan = this.getAttribute("data-keberangkatan");
      const tujuan = this.getAttribute("data-tujuan");
      const jam = this.getAttribute("data-jam");

      infoPenerbanganInput.value = `${maskapai} | ${keberangkatan} → ${tujuan} | ${jam}`;
    });
  });
});
