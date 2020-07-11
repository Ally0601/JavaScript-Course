// =========================================================================================================================== 
// ======================================================   SECTION 1   ====================================================== 
// ===========================================================================================================================

var slideIndex = 0;

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    

  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, document.getElementById("timeinterval").value*1000); // Change image every 2 seconds
}

// =========================================================================================================================== 
// ======================================================   SECTION 2   ====================================================== 
// =========================================================================================================================== 

const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');

buttons.forEach(function(button) {
  button.addEventListener('click', calculate);
});

function calculate(event) {
  const clickedButtonValue = event.target.value;

  if (clickedButtonValue === '=') {
    if (display.value !== '') {
      display.value = eval(display.value);
    }
  } else if (clickedButtonValue === 'C') {
      display.value = '';
  } else {
      display.value += clickedButtonValue;
  }
}

// =========================================================================================================================== 
// ======================================================   SECTION 3   ====================================================== 
// ===========================================================================================================================

const form = document.getElementById('id');
var email = document.getElementById('email');

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}

function checkRequired(inputArr) {
  inputArr.forEach(function(input) {
      if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function emailVerification() {
  checkRequired([email]);
  checkEmail(email);
}



