const form = document.querySelector('form');
const succesMessage = document.querySelector('.success-message');
const firstNameInput = document.querySelector('input[name= "firstname"]');
const lastNameInput = document.querySelector('input[name= "lastname"]');
const emailInput = document.querySelector('input[name = "email"]');
const dateInput = document.querySelector('input[name="date"]');
const adressInput=document.querySelector('input[name="adress"]');

let isFormValid = false ;
let isValidationOn = false ;

const inputs = [firstNameInput,lastNameInput,adressInput,emailInput,dateInput];


// reset inputs if i already taped in
const resetInputElm = (elm)=>{
    elm.classList.remove("invalid");
    elm.nextElementSibling.classList.add("hidden");
};

//  if input invalid so remove error
const invalidateInputElm =(elm) =>{
    elm.classList.add("invalid"); // if invalid
    elm.nextElementSibling.classList.remove("hidden");
};

// for check the valiaton of the inputs
const validateInputs = () => {

    if(!isValidationOn) return;

    // resetInputElm(firstNameInput);
    // resetInputElm(emailInput);

    inputs.forEach(resetInputElm);
    isFormValid = true ;

    if(!firstNameInput.value || firstNameInput.value.length >= 20){
        invalidateInputElm(firstNameInput);
        isFormValid = false ;

        console.log(firstNameInput.value);
    }

    if(!lastNameInput.value || lastNameInput.value.length >= 20){
         invalidateInputElm(lastNameInput);
         isFormValid = false ;
    }
    if(!isValidEmail(adressInput.value)){
        invalidateInputElm(adressInput);
        isFormValid = false ;
    }
    if(!isValidEmail(emailInput.value)){
        invalidateInputElm(emailInput);
        isFormValid = false ;
    }

    if(! isValiddate(dateInput.value)){
        
        invalidateInputElm(dateInput);
        isFormValid = false;
    }

};


form.addEventListener("submit" ,(e)=> {

   // e.preventdefault(); // not refrech the page
    e.preventDefault();
    isValidationOn = true ;
    validateInputs();

    if(isFormValid){
        form.remove();
      succesMessage.classList.remove("hidden");
        alert('thnks bro');
    }
});
// to catch errors in every input
inputs.forEach((input) =>{
input.addEventListener("input",(e)=>{
    e.preventDefault();
    validateInputs();
});
});

const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  
  const isValidPhone = (phone) => {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(String(phone).toLowerCase());
  };
  const isValiddate =(date) => {
    const re =/^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
    return re.test(String(date).toLowerCase());
  }
  