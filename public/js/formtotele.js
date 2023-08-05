document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const botToken = "6361380821:AAHlItR_NS9gO5wUwSGmalrMDmpo59DImQk";
    const chatId = "971971733"; // Anda dapat mendapatkan ini dengan mengirim pesan ke bot @userinfobot di Telegram.

    const Name = document.getElementById('Name').value;
    const Email = document.getElementById('Email').value;
    const Message = document.getElementById('Message').value;

    const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=Name :%0A${encodeURIComponent(Name)} %0A%0AEmail : %0A${encodeURIComponent(Email)} %0A%0AMessage : %0A${encodeURIComponent(Message)}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.ok) {

                Swal.fire(
                    'Successfull!',
                    'Pesan berhasil dikirim!',
                    'success'
                )
                document.getElementById("Name").value = "";
                document.getElementById("Email").value = "";
                document.getElementById("Message").value = "";
            } else {

                Swal.fire(
                    'Error!',
                    'Pesan gagal dikirim!',
                    'error'
                )
                document.getElementById("Name").value = "";
                document.getElementById("Email").value = "";
                document.getElementById("Message").value = "";

            }
        })
        .catch(error => {
            Swal.fire(
                'Error!',
                'Terjadi kesalahan saat mengirim pesan!',
                'error'
            )
        });


});
