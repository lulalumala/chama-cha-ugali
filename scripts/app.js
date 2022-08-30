const emailAddress = document.querySelector(".email-input")
const password = document.querySelector(".password-input")
const confirmPassword = document.querySelector(".confirm-password")
const submit = document.querySelector(".submit")
console.log(emailAddress)
emailAddress.addEventListener("input", function () {
    console.log(emailAddress.value)
})
