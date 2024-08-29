//

const nameEl = document.getElementById("fullName");
const passwordEl = document.getElementById("password");
const confirmPasswordEl = document.getElementById("confirmPassword");
const phoneEl = document.getElementById("phone");
const emailEl = document.getElementById("email");
const countryEl = document.getElementById("country");
const genderEl = document.getElementsByName("genderGroup");
const tncEl = document.getElementById("tnc");

const nameErrEl = document.getElementById("nameErr");
const passwordErrEl = document.getElementById("passwordErr");
const phoneErrEl = document.getElementById("phoneErr");
const emailErrEl = document.getElementById("emailErr");
const countryErrEl = document.getElementById("countryErr");
const genderErrEl = document.getElementById("genderErr");
const tncErrEl = document.getElementById("tncErr");

function validateForm() {
  let nameErr,
    phoneErr,
    countryErr,
    genderErr,
    emailErr,
    tncErr,
    passwordErr = "";
  let isFormValid = false;

  // ****** Name Field Validation ******
  if (nameEl.value.trim() == "") {
    nameErr = "Name must not be empty";
  } else if (nameEl.value.trim().length < 8) {
    nameErr = "Name must be minimum 8 character length";
  } else {
    nameErr = "";
  }
  nameErrEl.innerText = nameErr;

  // ****** Password and Confirm Password Field Validation ******
  if (passwordEl.value.trim() == "" && confirmPasswordEl.value.trim() == "") {
    passwordErr = "Password and confirm password cannot be empty";
  } else if (passwordEl.value !== confirmPasswordEl.value) {
    passwordErr = "Password and confirm password doesn't match";
  } else {
    passwordErr = "";
  }
  passwordErrEl.innerText = passwordErr;

  // ***** Phone validation ******/
  if (phoneEl.innerText.trim().length < 10) {
    phoneErr = "phone number must be 10 character length";
  } else {
    phoneErr = "";
  }
  phoneErrEl.innerText = phoneErr;

  // **** Email Validation *****/
  // const emailRegex = /^([a-zA-Z0-9_-.]+)@([a-zA-Z0-9_-.]+).([a-zA-Z]{2,})$/;
  // console.log(emailEl.value);
  // if (!emailRegex.test(emailEl.innerText.trim())) {
  //   emailErr = "Email doesn't match";
  // } else {
  //   emailErr = "";
  // }
  // emailErrEl.innerText = emailErr;

  // **** Country Field Validation *****/
  console.log(countryEl.value);
  if (countryEl.value.trim() === "") {
    countryErr = "Please select a country";
  } else {
    countryErr = "";
  }
  countryErrEl.innerText = countryErr;

  let isGenderSelected = false;
  for (let i = 0; i < genderEl.length; i++) {
    if (genderEl[i].checked) {
      isGenderSelected = true;
      break;
    }
  }

  if (!isGenderSelected) {
    genderErr = "Please Select a gender";
  } else {
    genderErr = "";
  }
  genderErrEl.innerText = genderErr;
  console.log(genderEl);

  if (!tncEl.checked) {
    tncErr = "You must agree the terms and conditions";
  } else {
    tncErr = "";
  }
  tncErrEl.innerText = tncErr;
}

nameEl.addEventListener("change", validateForm);
passwordEl.addEventListener("change", validateForm);
confirmPasswordEl.addEventListener("change", validateForm);
countryEl.addEventListener("change", validateForm);
phoneEl.addEventListener("change", validateForm);
emailEl.addEventListener("change", validateForm);
countryEl.addEventListener("change", validateForm);
tncEl.addEventListener("change", validateForm);
for (let i = 0; i < genderEl.length; i++) {
  genderEl[i].addEventListener("change", validateForm);
}
