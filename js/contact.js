document.getElementById('theClick').addEventListener('click', go2);


function go2() {

    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const msg = document.getElementById('msg').value;
    if ((fname == '' || lname == '' || email == '' || phone == '' || msg == '')) {
        alert("1 or more of the data in the form are missing");
        return;
    }
    let result = email.includes("@");
    let result2 = email.includes(".");
    if (!(result && result2)) {
        alert('Result : BAD  of Email Checker, Try again..');
    }

}