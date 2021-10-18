function validation(){
  
    const nom = document.getElementById("nom").value;
    const prenom = document.getElementById("prenom").value;
  
    document.getElementById("error").innerHTML = "";
  
    for(let item of document.querySelectorAll('.inputgrp')){
      if(item.value.length < 5){
        
        var label =   document.querySelector("label[for="+item.id+"]").textContent;
        
        document.getElementById("error").innerHTML += `La saisie du ${label} est obligatoire <br/>`;
        
        
        document.getElementById("error").classList.add("display");
        document.getElementById("resultat").classList.remove("display")
    
      }
        
    }
      if(document.getElementById("error").innerHTML == ""){
        var nom = document.querySelector("#nom").value;
        document.getElementById("resultat").innerHTML = `Bienvenue à ${prenom} ${nom}`;
        document.getElementById("error").classList.remove("display")
        document.getElementById("resultat").classList.add("display")
      }
  
      
    
  }