const first = document.querySelector("#First");
const last = document.querySelector("#Last");
const email = document.querySelector("#Email");
const password = document.querySelector("#Password");
console.log(first, last, email, password);

const info1 = document.querySelector("#info1");
const info2 = document.querySelector("#info2");
const info3 = document.querySelector("#info3");
const info4 = document.querySelector("#info4");
console.log(info1, info2, info3, info4);

const FirstError = document.querySelector("#firstError");
const LastError = document.querySelector("#lastError");
const EmailError = document.querySelector("#eMailError");
const PasswordError = document.querySelector("#passwordError");
console.log(  EmailError, LastError);

const claim = document.querySelector("#claim");
console.log(claim);

function iconError(params) {
    const info1 = document.querySelector("#info1");
    const info2 = document.querySelector("#info2");
    const info3 = document.querySelector("#info3");
    const info4 = document.querySelector("#info4");
    const claim = document.querySelector("#claim");
    const first = document.querySelector("#First");
    const last = document.querySelector("#Last");
    const email = document.querySelector("#Email");
    const password = document.querySelector("#Password");
    const FirstError = document.querySelector("#firstError");
    const LastError = document.querySelector("#lastError");
    const EmailError = document.querySelector("#eMailError");
    const PasswordError = document.querySelector("#passwordError");

    claim.addEventListener("click", function(){
        let firstName = document.getElementById("First").value
        if (firstName == "") {
            document.getElementById("info1").style.display = "flex";
            document.getElementById("firstError").style.display = "flex";
            document.getElementById("First").style.borderColor = "red";
        } else {
            document.getElementById("info1").style.display = "hidden";
            document.getElementById("firstError").style.display = "hidden" ;
            document.getElementById("First").style.borderColor = "grey";
        }
        let lastName = document.getElementById("Last").value
        if (lastName == "") {
            document.getElementById("info2").style.display = "flex";
            document.getElementById("lastError").style.display = "flex";
            document.getElementById("Last").style.borderColor = "red";
        } else {
            document.getElementById("info2").style.display = "hidden";
            document.getElementById("lastError").style.display = "hidden";
            document.getElementById("Last").style.borderColor = "grey";
        }

        let emailaddress = document.getElementById("Email").value
        let emailPattern = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
        if (emailaddress == "" || !emailPattern.test(emailaddress)) {
        document.getElementById("info3").style.display = "flex";
        document.getElementById("eMailError").style.display = "flex";
        document.getElementById("Email").style.borderColor = "red";
        } else {
        document.getElementById("info3").style.display = "hidden";
        document.getElementById("eMailError").style.display = "hidden";
        document.getElementById("Email").style.borderColor = "grey";
        }
    

        let password = document.getElementById("Password").value
        if (password == "") {
            document.getElementById("info4").style.display = "flex";
            document.getElementById("passwordError").style.display = "flex";
            document.getElementById("Password").style.borderColor = "red"
        } else {
            document.getElementById("info4").style.display = "hidden";
            document.getElementById("passwordError").style.display = "hidden";
            document.getElementById("Password").style.borderColor = "grey";
        }
    })
}
iconError();


