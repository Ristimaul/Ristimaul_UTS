function handleSubmit(event) {
    event.preventDefault(); // Mencegah pengiriman formulir default

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const messageElement = document.getElementById('message');

    if (password !== confirmPassword) {
        messageElement.textContent = "Kata sandi tidak cocok!";
        messageElement.style.color = "red";
        return false;
    }

    // Jika semua validasi berhasil
    messageElement.textContent = "Registrasi berhasil! Selamat datang, " + name + "!";
    messageElement.style.color = "green";

    return true;
}