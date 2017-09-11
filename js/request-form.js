var COLOR_RED = '#bb4444';
var COLOR_GREY = '#aaaaaa';

var requestForm = document.querySelector('.request-form');
var nameInput = document.querySelector('#name');
var emailInput = document.querySelector('#email');
var selectCountry = requestForm.querySelector('.request-form__select-country');
var agreeCheckbox = document.querySelector('#agree');

var reset = requestForm.querySelectorAll('.close-cross');
var resetEmail = reset[0];
var resetName = reset[1];

var errorMessageName = document.querySelector('.error-message_name');
var errorMessageEmail = document.querySelector('.error-message_email');
var errorMessageCountry = document.querySelector('.error-message_country');
var errorMessageAgree = document.querySelector('.error-message_agree');

var placeholderEmail = document.querySelector('.request-form__placeholder_email');
var placeholderName = document.querySelector('.request-form__placeholder_name');

// Placeholder translate

nameInput.addEventListener('focus', function(event) {
    placeholderName.style.top = '36%';
    placeholderName.style.fontSize = '10px';
});

emailInput.addEventListener('focus', function(event) {
    placeholderEmail.style.top = '17%';
    placeholderEmail.style.fontSize = '10px';
});

nameInput.addEventListener('blur', function(event) {
    if (this.value === '') {
        placeholderName.style.top = '41%';
        placeholderName.style.fontSize = '16px';
    }
});

emailInput.addEventListener('blur', function(event) {
    if (this.value === '') {
        placeholderEmail.style.top = '22%';
        placeholderEmail.style.fontSize = '16px';
    }
});

// E-mail input validity 

emailInput.onchange = function() {
    var checkEmail = new RegExp('^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$');

   if (checkEmail.test(this.value)) {
        resetEmail.classList.remove('close-cross_error');
        resetEmail.classList.add('close-cross_valid');
        
        this.classList.remove('input_invalid');
        this.classList.add('input_valid');
        
        errorMessageEmail.classList.remove('show');

        placeholderEmail.style.color = COLOR_GREY;
    } else {
        resetEmail.classList.remove('close-cross_valid');
        resetEmail.classList.add('close-cross_error');
        
        this.classList.remove('input_valid');
        this.classList.add('input_invalid');
        
        errorMessageEmail.classList.add('show');

        placeholderEmail.style.color = COLOR_RED;
    }
};

// Username input validity 

nameInput.onchange = function() {
    var checkName = new RegExp('^[A-Za-zА-Яа-яёЁ][A-Za-zА-Яа-яёЁ\\ -]+$');
    
    if (checkName.test(this.value)) {
        resetName.classList.remove('close-cross_error');
        resetName.classList.add('close-cross_valid');
        
        this.classList.remove('input_invalid');
        this.classList.add('input_valid');
        
        errorMessageName.classList.remove('show');

        placeholderName.style.color = COLOR_GREY;
    } else {
        resetName.classList.add('close-cross_error');
        resetName.classList.remove('close-cross_valid');
        
        this.classList.remove('input_valid');
        this.classList.add('input_invalid');
        
        errorMessageName.classList.add('show');

        placeholderName.style.color = COLOR_RED;
    } 
};

// Country select validity 

selectCountry.onchange = function() {
    if (this.value !== 'Not selected') {
        this.classList.add('input_valid');
        this.classList.remove('input_invalid');

        errorMessageCountry.classList.remove('show');
    } else {
        this.classList.remove('input_valid');
        this.classList.add('input_invalid');

        errorMessageCountry.classList.add('show');
    }
}

// Agree checkbox validity

agreeCheckbox.onchange = function() {
    errorMessageAgree.classList.remove('show');
}

// Request-form validity

requestForm.addEventListener('submit', function(event) {
    event.preventDefault();

    if (nameInput.value === '') {
        resetName.classList.add('close-cross_error');

        nameInput.classList.remove('input_valid');
        nameInput.classList.add('input_invalid');

        errorMessageName.classList.add('show');

        placeholderName.style.color = COLOR_RED;
    }

    if (emailInput.value === '') {
        resetEmail.classList.add('close-cross_error');

        emailInput.classList.remove('input_valid');
        emailInput.classList.add('input_invalid');

        errorMessageEmail.classList.add('show');

        placeholderEmail.style.color = COLOR_RED;
    }

    if (selectCountry.value === 'Not selected') {
        selectCountry.classList.remove('input_valid');
        selectCountry.classList.add('input_invalid');

        errorMessageCountry.classList.add('show');
    } else {
        selectCountry.classList.add('input_valid');
        selectCountry.classList.remove('input_invalid');
        
        errorMessageCountry.classList.remove('show');
    }

    if (agreeCheckbox.checked === false) {
        errorMessageAgree.classList.add('show');
    }  
});

// Reset crosses

resetEmail.addEventListener('click', function(event) {
    event.preventDefault();
    emailInput.value = '';
});

resetName.addEventListener('click', function(event) {
    event.preventDefault();
    nameInput.value = '';
});
