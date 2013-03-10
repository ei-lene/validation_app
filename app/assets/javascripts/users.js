$(document).ready(function(){

  // DOM selector
  var userName = $('#user_username'),
      firstName = $('#user_first_name'),
      lastName = $('#user_last_name'),
      email = $('#user_email'),
      emailConfirmation = $('#user_email_confirmation'),
      emailInputs = $('#user_email, #user_email_confirmation'),
      password = $('#user_password'),
      passwordConfirmation = $('#user_password_confirmation'),
      passwordInputs = $('#user_password, #user_password_confirmation'),
      userNameError = $('#username_error'),
      firstNameError = $('#first_name_error'),
      lastNameError = $('#last_name_error'),
      emailError = $('#email_error'),
      emailConfError = $('#email_confirmation_error'),
      passwordError = $('#password_error'),
      passwordConfError = $('#password_confirmation_error'),
      newUserForm = $('#new_user') ;
  
  $('span').hide(); // Initially hide error message spans

  // Validation functions
  function validateUsername(){
    var userNameVal = userName.val();  
    if(userNameVal.length < 3) {
      userNameError.show().addClass('red');
      return false;
    }
    else {
      userNameError.hide().addClass('red');
      return true;
    }
  }

  function validateFirstname(){
    var firstNameVal = firstName.val();
    var alphabet = /[a-zA-Z]/;
    if(firstNameVal.length < 3 || !alphabet.test(firstNameVal)) {
      firstNameError.show().addClass('red');
      return false;
    }
    else {
      firstNameError.hide();
      return true;
    }
  }

  function validateLastname(){
    var lastNameVal = lastName.val();
    var alphabet = /[a-zA-Z]/;
    if(lastNameVal.length < 3 || !alphabet.test(lastNameVal)) {
      lastNameError.show().addClass('red');
      return false;
    }
    else {
      lastNameError.hide();
      return true;
    }
  }

  function validateEmail() {
    var emailVal = email.val();
    var e = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/;
    if(!e.test(emailVal)) {
      emailError.show().addClass('red');
      return false;
    }
    else {
      emailError.hide();
      emailConfError.hide();
      return true;
    }
  }

  function validatePassword(){
    var passwordVal = password.val();
    if(passwordVal.length < 6) {
      passwordError.show().text("Password should have at least 6 characters").addClass('red');
      return false;
    }
    else {
      passwordError.hide();
      passwordConfError.hide();
      return true;
    }
  }

  function validatePasswordStrength(){
    var lowercase = /[a-z]/
    var uppercase = /[A-Z]/
    var numeric = /[0-9]/
    var passwordVal = password.val();
    passwordError.show(); 
    if(lowercase.test(passwordVal) && uppercase.test(passwordVal) && numeric.test(passwordVal)){
      
      passwordError.text("Password strength: Strong").removeClass().addClass('green');
    }
    else if(lowercase.test(passwordVal) && uppercase.test(passwordVal)){
      // passwordError.removeClass();
      passwordError.text("Password strength: Medium").removeClass().addClass('amber');
    }
    else if(numeric.test(passwordVal) && uppercase.test(passwordVal)){
      // passwordError.removeClass();
      passwordError.text("Password strength: Medium").removeClass().addClass('amber');
    }
    else if(numeric.test(passwordVal) && lowercase.test(passwordVal)){
      // passwordError.removeClass();
      passwordError.text("Password strength: Medium").removeClass().addClass('amber');
    }
    else {
      // passwordError.removeClass();
      passwordError.text("Password strength: Weak").addClass('red');
    }
  }

  // Validate input formats on Blur
  userName.blur(function(){
    validateUsername(); 
  });

  firstName.blur(function(){
    validateFirstname(); 
  });

  lastName.blur(function(){
    validateLastname(); 
  });

  email.blur(function(){
    validateEmail(); 
  });

  password.blur(function(){
    validatePassword(); 
  });

  password.keyup(function(){
     validatePasswordStrength(); 
  });


  // Email confirmation validation on Keyup and Blur
  emailInputs.keyup(function(){
    emailConfVal = emailConfirmation.val();
    emailVal = email.val();
    emailConfError.show(); 
    if(emailVal===''||emailConfVal==='') {
        emailConfError.hide();
    }
    else if(emailVal === emailConfVal){
      emailConfError.text("Email entries match").addClass('green');
    }       
    else {
      emailConfError.hide();
      emailConfError.removeClass;
      emailConfError.text("Confirmation email does not match email").addClass('red');
      emailConfError.show();
    }
  }); 

  emailConfirmation.blur(function(){
    emailConfVal = emailConfirmation.val();
    emailVal = email.val();
    emailConfError.show(); 
    if(emailVal===''||emailConfVal==='') {
        emailConfError.hide();
    }
    else if(emailVal === emailConfVal){
      emailConfError.text("Email entries match").addClass('green');
    } 
  });

  // Password confirmation validation on Keyup and Blur
  passwordInputs.keyup(function(){
    passwordConfVal = passwordConfirmation.val();
    passwordVal = password.val();
    passwordConfError.show(); 
    if(passwordVal===''||passwordConfVal==='') {
        passwordConfError.hide();
    }
    else if(passwordVal === passwordConfVal){
      passwordConfError.removeClass;
      passwordConfError.text("Password entries match").addClass('green');
    }       
    else {
      passwordConfError.hide();
      passwordConfError.removeClass;
      passwordConfError.text("Confirmation password does not match password").addClass('red');
      passwordConfError.show();
    }
  }); 

  passwordConfirmation.blur(function(){
    passwordConfVal = passwordConfirmation.val();
    passwordVal = password.val();
    passwordConfError.show(); 
    if(passwordVal===''||passwordConfVal==='') {
      passwordConfError.hide();
    }
    else if(passwordVal === passwordConfVal){
      passwordConfError.text("Password entries match").addClass('green');
    } 
  });  

  // Validation on submit
  newUserForm.submit(function(){  
    if(validateUsername() & validateFirstname() & validateLastname() & validateEmail() &validatePassword()) {
      return true;
    } 
    else {
      return false;
    }
  }); // end submit form

}); // end document ready