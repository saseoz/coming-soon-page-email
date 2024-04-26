const form = document.querySelector(".email-container");
const email = document.getElementById("email");

const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

function validate() {
    const errorMsg = email.nextElementSibling;
    if (!email.value.match(pattern)) {
        errorMsg.classList.add("show");
        email.style.borderColor = "hsl(354, 100%, 66%)"
        return false;
    } else {
        errorMsg.classList.remove("show");
        email.style.borderColor = "";
        return true;
    }
}

email.addEventListener("keyup", validate);

form.addEventListener("submit", function(event) {
    if (!validate()) {
        event.preventDefault();
    }
})
