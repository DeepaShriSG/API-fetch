const result = fetch("https://jsonplaceholder.typicode.com/users");

result
  .then((data) => data.json())
  .then((data1) => {
    for (var i = 0; i < data1.length; i++) {

      const div1= document.getElementById("cards");
      div1.innerHTML += `<div class = "col-3 my-3">
      <div class="card  w-100">
              
                      <ul class="list-group list-group-flush">
                       <li class="list-group-item"> <b>Name:         ${data1[i].name}    </b>         </li>
                       <li class="list-group-item">Email:        ${data1[i].email}            </li>
                       <li class="list-group-item">street:       ${data1[i].address.street}   </li>
                       <li class="list-group-item">City:         ${data1[i].address.city}     </li>
                   </ul>
            </div>
          </div>`;

      
    }
  });
