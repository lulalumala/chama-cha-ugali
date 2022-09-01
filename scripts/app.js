const emailLogin = document.querySelector(".email-login")
const passwordLogin = document.querySelector(".password-login")
const login = document.querySelector(".login")
const emailAddress = document.querySelector(".email-input")
const password = document.querySelector(".password-input")
const confirmPassword = document.querySelector(".confirm-password")
const submit = document.querySelector(".submit")
const letters = "abcdefghijklmnopqrstuvwxyz"
const upperCase = letters.toUpperCase()
const specialChar = "!@#$%^&*()<>;?"
const upper = []
const lower = []
const special = []
const num = []
// const passwordValue = emailInput.value
// innertext
const eAddress = document.querySelector(".eaddress")
const passwordLabel = document.querySelector(".pword")
const confirmPasswrd=document.querySelector(".confirm")



submit.addEventListener("click", function (e) {
    console.log(password.value.length)
    if (emailAddress.value == "") {
        eAddress.innerHTML="Please enter your email address"
        console.log("Please enter")
    }
   
    if (password.value.length < 8 || password.value.length > 12) {
        passwordLabel.innerHTML= "Your password should be between 8 to 12 characters"
        console.log("Your password should be between 8 to 12 characters")
    }
    if (password !== confirmPassword) {
        confirmPasswrd.innerHTML="Your password does not match"
        console.log("Your password doesn't match")
    }
    
        for (char of password.value) {
            if (letters.includes(char)) {
                lower.push(char)
            }
        
            else if (upperCase.includes(char)) {
                upper.push(char)
            }
            else if (specialChar.includes(char)) {
                special.push(char)
            }
            else if (Number(char) !== NaN) {
                num.push(char)
            }
        
        console.log(lower)
        console.log(upper)
            console.log(special)
            console.log(num)
            if (upper.length == 0) {
                password.value=null
               passwordLabel.innerHTML= "Your password must have a least one capital letter"
            }
            else if (lower.length == 0) {
                password.value=null
                passwordLabel.innerHTML= "Your password must have at least one lower case letter"
            }
            else if (special.length == 0) {
                password.value=null
                passwordLabel.innerHTML= "Your password must have at least one special character" 
            }
            else if (num.length == 0) {
                password.value=null
                passwordLabel.innerHTML="Your password must have at least one numer"
            }
               
    }
})

login.addEventListener("click", function () {
  console.log(passwordLogin.value)
    if (emailLogin.length > 1)
   { console.log("Hi")}
})