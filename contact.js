checkBeforSend()
{
    const fname = document.getElementById('fname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const msg = document.getElementById('msg').value;
    if ((fname == null || email == null || phone == null || msg == null)) {
        alert("problem");
    }
}