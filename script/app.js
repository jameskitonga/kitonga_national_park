function validate_password() {

//     var pass = document.getElementById('pass').value;
//     var confirm_pass = document.getElementById('confirm_pass').value;
//     if (pass != confirm_pass) {
//         document.getElementById('wrong_pass_alert').style.color = 'red';
//         document.getElementById('wrong_pass_alert').innerHTML
//             = '☒ Use same password';
//         document.getElementById('create').disabled = true;
//         document.getElementById('create').style.opacity = (0.4);
//     } else {
//         document.getElementById('wrong_pass_alert').style.color = 'green';
//         document.getElementById('wrong_pass_alert').innerHTML =
//             '🗹 Password Matched';
//         document.getElementById('create').disabled = false;
//         document.getElementById('create').style.opacity = (1);
//     }
// }

// function wrong_pass_alert() {
//     if (document.getElementById('pass').value != "" &&
//         document.getElementById('confirm_pass').value != "") {
//         alert("Your response is submitted");
//     } else {
//         alert("Please fill all the fields");
//     }
// }

// window.onload = function () {
//     document.getElementById('contact-form').addEventListener('submit', function (event) {
//         event.preventDefault();
//         // generate a five digit number for the contact_number variable
//         this.contact_number.value = Math.random() * 100000 | 0;
//         // these IDs from the previous steps
//         emailjs.sendForm('contact_service', 'contact_form', this)
//             .then(function () {
//                 console.log('SUCCESS!');
//             }, function (error) {
//                 console.log('FAILED...', error);
//             });
//     });
// }







const passWord=getElementById("password")

    function Validate() {
        var password = document.getElementById("txtPassword").value;
        var confirmPassword = document.getElementById("txtConfirmPassword").value;
        if (password != confirmPassword) {
            alert("Passwords do not match.");
            return false;
        }
        return true;
    }




