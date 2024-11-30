function hitungIPK() {
    const nilaiInput = document.querySelectorAll(".nilai");
    let totalBobot = 0;
    let totalSKS = 0;

    // Mapping nilai ke bobot
    const nilaiBobot = {
        "A": 4.0,
        "A-": 3.7,
        "B+": 3.3,
        "B": 3.0,
        "B-": 2.7,
        "C+": 2.3,
        "C": 2.0,
        "D": 1.0,
        "E": 0.0
    };

    nilaiInput.forEach(input => {
        const nilai = input.value.trim().toUpperCase(); // Nilai input (e.g., A, B+)
        const sks = parseInt(input.getAttribute("data-sks")); // SKS mata kuliah
        const bobot = nilaiBobot[nilai] || 0; // Bobot nilai (default 0 jika tidak valid)

        totalBobot += bobot * sks;
        totalSKS += sks;
    });

    const ipk = totalSKS ? (totalBobot / totalSKS).toFixed(2) : 0.0;

    // Tampilkan IPK di halaman
    document.getElementById("hasil-ipk").textContent = ipk;

    // Update grafik
    updateGrafik(ipk);
}

// Membuat grafik IPK menggunakan Chart.js
function updateGrafik(ipk) {
    const ctx = document.getElementById("grafikIpk").getContext("2d");

    if (window.grafikIpkInstance) {
        window.grafikIpkInstance.destroy();
    }

    window.grafikIpkInstance = new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["IPK Saat Ini"],
            datasets: [{
                label: "IPK",
                data: [parseFloat(ipk)],
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 4
                }
            }
        }
    });
}
