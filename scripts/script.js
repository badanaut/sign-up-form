const form            = document.querySelector("form")
const fname        = document.querySelector("#first-name")
const lname = document.querySelector("#last-name")
const email        = document.querySelector("#email")
const number = document.querySelector("#phone-number")
const password        = document.querySelector("#password")
const confirmPassword = document.querySelector("#confirm-password")
const fnameErr        = document.querySelector("#fname-error")
const lnameErr = document.querySelector("#lname-error")
const emailErr        = document.querySelector("#email-error")
const numberErr = document.querySelector("#number-error")
const passwordErr        = document.querySelector("#psw-error")
const confirmPasswordErr = document.querySelector("#cpsw-error")
const submitBtn       = document.querySelector("#submit-btn");


fname.addEventListener("input", ()=>{
    if (fname.value === '') {
        fnameErr.textContent = '*Please type in your first name.';
      } else {
        fnameErr.textContent = '';
      }
})

lname.addEventListener("input", ()=>{
    if (lname.value === '') {
        lnameErr.textContent = '*Please type in your last name.';
      } else {
        lnameErr.textContent = '';
      }
})

email.addEventListener("input", ()=>{
    if (email.validity.typeMismatch) {
        emailErr.textContent = '*Please type in a valid Email. ex(john.doe@email.com)';
      } else {
        emailErr.textContent = '';
      }
})

number.addEventListener("input", ()=>{
    if (number.validity.patternMismatch || number.value === '') {
        numberErr.textContent = '*Please type in a 10 digit phone number';
      } else {
        numberErr.textContent = '';
      }
})

password.addEventListener("input", () => {
    if (password.validity.patternMismatch){
      const currentValue = password.value;
      const regExpCap = /[A-Z]/g;
      const regExpDig = /[0-9]/g;
      let message = '*';
     
      if (regExpCap.test(currentValue)){
        message += '';
      } 
      else {
        message += 'Missing at least 1 capital letter.';
        message.app += "\n";
      }
      
      
      if (regExpDig.test(currentValue)){
        message += '';
      } 
      else {
        message += 'Missing at least 1 number.';
        message += "\n";
      }
      
      if (currentValue.length < 9){
        message += 'Password must be at least 8 characters.';
        message += "\n";
      } 
      else {
        message += '';
      }
      passwordErr.textContent = message;

    } 
    else {
        passwordErr.textContent = '';
    }
});


confirmPassword.addEventListener("input", () => {
    if (password.value !== confirmPassword.value) {
    confirmPasswordErr.textContent = 'Passwords do not match';
    } else {
    confirmPasswordErr.textContent = '';
    }
})




