//Variables
var events;
let html = '';

//Etiquetas de mi fichero.html
var eventos = document.getElementById("eventos");

//Acceso a los datos de eventos
console.log("Fetch TicketMaster");
fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=k3Wjtyy4e8sgQapShQD7rV3jgY7c6PuP&`, {
  headers: {
    Accept:'application/json'
  },
  method:'GET',
  Host: `app.ticketmaster.com`,

Connection: 'Keep-Alive'
})

.then(response => response.json())
.then(data => {
        console.log(data._embedded.events)
        
        //Tratamiento de datos
        //document.write('<h1>Listado de eventos');
        events = data._embedded.events;

        for (let i = 0; i < events.length; i++) 
        {  
            html += '<div class="grid-item">'
                      +'<div class="card shadow-sm">'
                        +`<img src="${events[i].images[0].url}" alt="carousel1" width="300" height="300"></text></svg>`
                        +`<p class="card-text"><h5>${events[i].name}</h5></p>`
                        +'<div class="card-body">'
                          +'<class="card-text">'
                          +'<div class="d-flex justify-content-between align-items-center">'
                            +'<div class="card-body">'
                              //+`<p class="card-text">${events[i]._embedded.venues[0].location.address.line1}`+'<br>'+`${events[i]._embedded.venues[0].state.name}</p>`
                              +`<p class="card-text">${events[i].dates.start.localDate}`+`<br>${events[i].dates.start.localTime}<br>`
                              +`<p class="card-text">Ver plano del local del evento <a href="${events[i].seatmap.staticUrl}">aquí</a></p>`
                              +'<div class="d-flex justify-content-between align-items-center">'
                                +`<p><a class="btn btn-sm btn-outline-secondary" href="${events[i]._embedded.attractions[0].url}" role="More Info">Buy Tickets</a></p>`
                              +'</div>'
                            +'</div>'
                          +'</div>'
                        +'</div>'
                      +'</div>'
                    +'</div>';
        }

        eventos.innerHTML = html;

      })
.catch(error => console.error(error))


//Validacion forms
/*
document.getElementById("form").addEventListener('submit', 
    function login (event){
      event.preventDefault()
      let user = document.getElementById("inputEmail").value;
      let password = document.getElementById("inputPassword").value;
      console.log("User " + user + " with password " + password +" tried to log in.")
    })

*/
    const user = document.getElementById("inputEmail");
    const password = document.getElementById("inputPassword");
    user.addEventListener("input", function (event) {
      if (user.validity.tooShort) {
        user.setCustomValidity("Introduzca un nombre de usuario con al menos 5 caracteres");
      } else {
        user.setCustomValidity("");
      }
    });
    password.addEventListener("input", function (event) {
      if (password.validity.patternMismatch) {
        password.setCustomValidity("Introduzca una contraseña de entre 10 y 20 caracteres alfanuméricos.");
      } else {
        password.setCustomValidity("");
      }
    });

    function submitForm (){
      document.login.submit();
    }