// Poin 4: Mengganti nama di Welcoming Speech
function replaceName() {
    let name = prompt("Masukkan nama Anda:", "Harfi");
    if (name) {
        document.getElementById("welcome-text").innerText = "Hi " + name + ", Welcome To Website";
    }
}
replaceName();

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("messageForm");
    const formBox = document.getElementById("formBox");
    const resultBox = document.getElementById("resultBox");
    const backBtn = document.getElementById("backToForm");

    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("input-name").value || "Guest";
        const birthdate = document.getElementById("input-birthdate").value;
        const message = document.getElementById("input-message").value;

        const genderInput = document.querySelector(
            'input[name="gender"]:checked'
        );
        const gender = genderInput ? genderInput.value : "-";

        // isi output
        document.getElementById("popup-name").textContent = name;
        document.getElementById("popup-birthdate").textContent = birthdate;
        document.getElementById("popup-gender").textContent = gender;
        document.getElementById("popup-message").textContent = message;

        // sembunyikan form, tampilkan hasil
        formBox.classList.add("hidden");
        resultBox.classList.remove("hidden");
    });

    backBtn.addEventListener("click", function () {
        resultBox.classList.add("hidden");
        formBox.classList.remove("hidden");
        form.reset();
    });

});
