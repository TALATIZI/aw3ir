
$(document).ready(()=>{


  $("#add").click(()=>{

  let firstName = $("#firstname").val();
  let lastName = $("#lastname").val();
  let birthDay = $("#birthDay").val();
  let email = $("#email").val();
  let address = $("#address").val(); 
  // let phone = $("#phone").val();


  contactStore.add(firstName,lastName,birthDay,email,address);

  document.querySelector("table tbody").innerHTML = document.querySelector("table tbody").innerHTML +
    '<tr><td>'+ firstName+'</td><td>'+lastName+'</td><td>'+birthDay+'</td><td>'+email+'</td><td>'+address+'</td><td>';

  });


    var contactStore = (function () {
        // variable privée
      var contactList = [];
    
      // Expose these functions via an interface while hiding
      // the implementation of the module within the function() block
    
      return {
        add: function(_name, _firsname, _date, _adress, _mail) {
          var contact = { name: _name,
                          firstname: _firsname,
                          date: _date,
                          adress: _adress,
                          mail: _mail
          };
          // ajout du contact à la liste
          contactList.push(contact);
            
          return contactList;
        },
    
        getList: function() {
          return contactList;
        }
      }
    })();

  });