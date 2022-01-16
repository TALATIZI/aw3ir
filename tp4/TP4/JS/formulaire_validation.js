$(document).ready(() => {
let firstName = $("#firstname");
    let lastName = $("#lastname");
    let birthDay = $("#birthDay");
    let email = $("#email");
    let address = $("#address"); 
    let phone = $("#phone");

    let firstNameCounter = $("#firstNameCounter");
    let lastNameCounter = $("#lastNameCounter");

    var nbrChF = 0;
    var nbrChL = 0; 
    
    console.log(firstNameCounter);

    firstName.keypress(()=> {
        nbrChF += 1;
        firstNameCounter.text(nbrChF) ;
    });

    lastName.keypress(() =>{
        nbrChL += 1;
        lastNameCounter.text(nbrChL);
    });
}); 
window.onload = function () {  
    const myModal = new bootstrap.Modal(document.getElementById('myModal'), focus)
const form = document.querySelector('form');
const succesMessage = document.querySelector('.success-message');
const firstNameInput = document.querySelector('input[name= "firstname"]');
const lastNameInput = document.querySelector('input[name= "lastname"]');
const emailInput = document.querySelector('input[name = "email"]');
const dateInput = document.querySelector('input[name="date"]');
const adressInput = document.querySelector('input[name="adress"]');
const img = `<img style ='width:300px;'src = 'https://maps.googleapis.com/maps/api/staticmap?markers=${adressInput}&zoom=14&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg'/>`;
let isFormValid = false;
let isValidationOn = false;

const inputs = [firstNameInput, lastNameInput, adressInput, emailInput, dateInput];


// reset inputs if i already taped in
const resetInputElm = (elm) => {
    elm.classList.remove("invalid");
    elm.nextElementSibling.classList.add("hidden");
};

//  if input invalid so remove error
const invalidateInputElm = (elm) => {
    elm.classList.add("invalid"); // if invalid
    elm.nextElementSibling.classList.remove("hidden");
};

// for check the valiaton of the inputs
const validateInputs = () => {

    if (!isValidationOn) return;

    // resetInputElm(firstNameInput);
    // resetInputElm(emailInput);

    inputs.forEach(resetInputElm);
    isFormValid = true;

    if (!firstNameInput.value || firstNameInput.value.length >= 20) {
        invalidateInputElm(firstNameInput);
        isFormValid = false;

        console.log(firstNameInput.value);
    }

    if (!lastNameInput.value || lastNameInput.value.length >= 20) {
        invalidateInputElm(lastNameInput);
        isFormValid = false;
    
    }
    if (!dateInput.value) {
        invalidateInputElm(dateInput);
        isFormValid = false;
    }
    if (!adressInput.value || adressInput.value.length >= 20) {
        invalidateInputElm(adressInput);
        isFormValid = false;

}
    if (!isValidEmail(emailInput.value)) {
        invalidateInputElm(adressInput);
        isFormValid = false;
    };
    
} 

form.addEventListener("submit", (e) => {

    // e.preventdefault(); // not refrech the page
    e.preventDefault();
    isValidationOn = true;
    validateInputs();

    if (isFormValid) {
        form.remove();
         succesMessage.classList.remove("hidden");
        //  alert('bonjour');
        var myModal = new bootstrap.Modal(document.getElementById('myModal'));
       const elt= document.getElementById('poste');
       const elt1=document.getElementById('piste');
        elt.innerHTML=firstNameInput.value;
     elt1.innerHTML=dateInput.value;

myModal.show();

    }
});

// to catch errors in every input
inputs.forEach((input) => {
    input.addEventListener("input", (e) => {
        e.preventDefault();
        validateInputs();
    });
    contactStore.add(document.querySelector("#firstname").value, document.querySelector("#lastname").value, newdate, document.querySelector("#adresse").value, document.querySelector("#email").value);
        document.querySelector("tbody").innerHTML = "";
        var listecontact = contactStore.getList();
        for (var index in listecontact) {
            document.querySelector("tbody").innerHTML =
                document.querySelector("tbody").innerHTML +
                                "<tr><td>" +
                                listecontact[index].name +
                                "</td><td>" +
                                listecontact[index].firstname +
                                "</td><td>" +
                                listecontact[index].date +
                                "</td><td> <a href= 'https://maps.googleapis.com/maps/api/staticmap?markers=${document.querySelector(" + listecontact[index].adress + ").value}&zoom=7&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg' target='_blank'>" +
                                listecontact[index].adress +
                                " </a> </td><td> <a href='mailto:'>"+
                                listecontact[index].mail +
                                "</a></td></tr>" ;
        }


        document.querySelector("#lastname").value = "";
        document.querySelector("#firstname").value = "";
        document.querySelector("#Date-de-naissance").value = "";
        document.querySelector("#adresse").value = "";
        document.querySelector("#email").value = "";
        document.querySelector(`#lastname + span`).textContent = "";
        document.querySelector(`#firtname + span`).textContent = "";
});

const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};
function calcNbChar(id) {
    document.querySelector(`#${id} + span`).textContent = document.querySelector(`#${id}`).value.length + " car.";
}

     console.log( "DOM ready!" );
}