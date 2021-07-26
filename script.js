//Clear all local session storage
sessionStorage.clear();
var car_data = "";
var id_add_to_cart = [];
var shopping_id;
var session_array_data = [];
var session_array_rental_days = [];
var session_array_rental_cost;
var session_storage_days;
var inputbox_rental_days;
var shopping_cart_count = 0;

function get_json_data() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // var myObj = this.responseText;
      car_data = JSON.parse(this.responseText);
      console.log(car_data);
      var i = 0;
      for (i = 0; i < car_data.length; i++) {
        // var car_detail_array = [];
        // car_detail_array.push("<table class='car_table'><tbody id='table_body_row'>");
        // car_detail_array.push("<tr><td class='car_image'>car image<img src='images/"+ car_data[i].model + ".jpg'></td></tr>");
        // car_detail_array.push("<tr><td class='brand_model_year'>"car_data[i].brand + "-" + car_data[i].model + "-" + car_data[i].model_year + "</td></tr>");
        // car_detail_array.push("<tr><td class='mileage'>Mileage: " + car_data[i].mileage +"</td></tr>");
        // car_detail_array.push("<tr><td class='fuel_type'>Fuel Type: " + car_data[i].fuel_type +"</td></tr>");
        // car_detail_array.push("<tr><td class='seats'>Seats: " + car_data[i].seats +"</td></tr>");
        // car_detail_array.push("<tr><td class='price_per_day'>Price Per Day: " + car_data[i].price_per_day +"</td></tr>");
        // car_detail_array.push("<tr><td class='availability'>Availability: " + car_data[i].availability +"</td></tr>");
        // car_detail_array.push("<tr><td class='description'>Description: " + car_data[i].description +"</td></tr></tbody></table>"");



        // var car_info = "<table class='car_table'><tbody id='table_body_row'><tr><td class='car_image'>car image<img src='images/"+ car_data[i].model + ".jpg'></td></tr><tr><td class='brand_model_year'>" + car_data[i].brand + "-" + car_data[i].model + "-" + car_data[i].model_year + "</td></tr><tr><td class='mileage'>Mileage: " + car_data[i].mileage +"</td></tr><tr><td class='fuel_type'>Fuel Type: " + car_data[i].fuel_type +"</td></tr><tr><td class='seats'>Seats: " + car_data[i].seats +"</td></tr><tr><td class='price_per_day'>Price Per Day: " + car_data[i].price_per_day +"</td></tr><tr><td class='availability'>Availability: " + car_data[i].availability +"</td></tr><tr><td class='description'>Description: " + car_data[i].description +"</td></tr></tbody></table>";

        // $("body").append(car_info);   // Append new elements

        // Create element with id
        // g = document.createElement('div');
        // g.setAttribute("id", "Div1");

        // Create element and append to div element
        // var para = document.createElement("P");                       // Create a <p> node
        // var t = document.createTextNode("This is a paragraph.");      // Create a text node
        // para.appendChild(t);                                          // Append the text to <p>
        // document.getElementById("myDIV").appendChild(para);           // Append <p> to <div> with id="myDIV"

        // alert ("HI");
        // alert(car_data[i].id);
        var current_id = car_data[i].id;

        var car_div = document.createElement("div");
        car_div.setAttribute("id", current_id);
        car_div.setAttribute("class", "card container");
        car_div.setAttribute("style", "width: 15rem;");
        car_div.innerHTML = `

            <img class="card-img-top" src="images/${car_data[i].model}.jpg" alt="${car_data[i].model}"  display="block">
            <div class="card-body">
              <h3 class="card-title">${car_data[i].brand}-${car_data[i].model}-${car_data[i].model_year}</h3>
              <p class="card-text"><b>Mileage: </b>${car_data[i].mileage}</p>
              <p class="card-text"><b>Fuel Type: </b>${car_data[i].fuel_type}</p>
              <p class="card-text"><b>Seats: </b>${car_data[i].seats}</p>
              <p class="card-text"><b>Price Per Day: </b>$${car_data[i].price_per_day}</p>
              <p class="card-text"><b>Availability: </b>${car_data[i].availability}</p>
              <p class="card-text"><b>Descriptions: </b>${car_data[i].descriptions}</p>

              <a href="#" class="btn btn-primary" onClick="add_to_shopping_cart(${car_data[i].id})">Add to Shopping Cart!</a>
            </div>
          `;

        // car_div.innerHTML = `<p>hi from car_div</p>`;
        document.getElementById("list_car").appendChild(car_div);



      }
      // document.getElementById("car_detail").innerHTML = car_data[4].brand;
      // alert(car_data);
      // alert("Hi");
    }
  };
  xmlhttp.open("GET", "cars.json", true);
  xmlhttp.send();
}

function add_to_shopping_cart(avaiable_id) {
  // alert(avaiable_id);
  var availabilityIndex = 0;
  for (availabilityIndex = 0; availabilityIndex < car_data.length; availabilityIndex++) {
    if (car_data[availabilityIndex].id == avaiable_id) {
      if (car_data[availabilityIndex].availability == true) {
        alert("Add to the cart successfully");
        // sessionStorage.setItem("cart_id", JSON.stringify(id_add_to_cart));
        // var storedArray = JSON.parse(sessionStorage.getItem("cart_id"));//no brackets
        // var i;
        // for (i = 0; i < storedArray.length; i++) {
        //             alert(storedArray[i]);
        // }
        id_add_to_cart.push(avaiable_id);
        // if (sessionStorage.getItem("cart_id") == null) {
        //   sessionStorage.setItem("cart_id", id_add_to_cart);
        // }else {

        // }
        sessionStorage.setItem("cart_id", id_add_to_cart);
        // sessionStorage.setItem("cart_id", avaiable_id);
        // var storedArray = sessionStorage.getItem("cart_id");
        // var i;
        // for (i = 0; i < storedArray.length; i++) {
        //             alert(storedArray[i]);
        // }

      } else if (car_data[availabilityIndex].availability === false) {
        alert("Sorry, the car is not avaiable now. Please select other cars.");
      }
    }
  }

}

function showShoppingCart() {
  // alert("btn_shopping_cart");
  // sessionStorage.removeItem("cart_id");
  // var tempSessionStorage = sessionStorage.getItem("cart_id");
  document.getElementById("btn_shopping_cart").style.display = "none";
  document.getElementById("list_car").style.display = "none";
  document.getElementById("shopping_cart").style.display = "block";


  // var tempSessionStorage = sessionStorage.getItem("cart_id");

  // alert(tempSessionStorage);
  // if (sessionStorage.getItem("cart_id") === null) {
  //   document.getElementById("list_car").style.display = "none";
  //   document.getElementById("shopping_cart").style.display = "block";
  //   msg_no_car();

  // }
  var storedSessionArray = sessionStorage.getItem("cart_id");
  // alert(storedSessionArray);
  if (storedSessionArray != null) {
    // alert("true");
    var i;
    var referIndex;

    for (i = 0; i < storedSessionArray.length; i = i + 2) {
      if (storedSessionArray[i] !== ",") {
        session_array_data.push(storedSessionArray[i]);
      }
    }
    for (i = 0; i < session_array_data.length; i++) {
      for (var j = 0; j < car_data.length; j++) {
        if (session_array_data[i] == car_data[j].id) {
          referIndex = j;
          // alert("J:" + referIndex);
        }
      }
      // alert("storedSessionArray: "+storedSessionArray[i]);
      // alert(car_data[referIndex].model);
      shopping_id = "sid" + session_array_data[i];
      var node = document.createElement("tr");
      // node.setAttribute("id", shopping_id);
      node.innerHTML = `<td><img width="40px" height="40px" src="images/${car_data[referIndex].model}.jpg"></td><td>${car_data[referIndex].model_year}-${car_data[referIndex].brand}-${car_data[referIndex].model}</td><td><p class="shopping_cart_price_per_day">$${car_data[referIndex].price_per_day}</p></td><td><input class="input_rental_days"></input></td><td><a href="#" class="btn btn-primary" onClick="delete_this_row(this.id)" id=${shopping_id} >Delete</a></td>`;
      // node.appendChild(textnode);

      document.getElementById("shopping_cart_table_body").appendChild(node);

    }
  }

  // var x;
  // var ss = sessionStorage.getItem("cart_id");
  // var getfirstss = sessionStorage.getItem("cart_id");

  // for(x=0;x<sessionStorage.getItem("cart_id").length;x+=2) {
  //   console.log("session:");
  //   console.log(sessionStorage.getItem("cart_id"));
  //   console.log("x: " +x);
  //   console.log("ss: " +ss);
  //   console.log("getfirstss: " + getfirstss);
  //   var getfirstssarray = getfirstss[x];
  //   console.log("getfirstssarray: " + getfirstssarray);
  // }
  // console.log(sessionStorage.getItem("cart_id").length);
  // while(sessionStorage.getItem("cart_id")) {
  //   console.log(sessionStorage.getItem("cart_id"));
  //   sessionStorage.removeItem("cart_id");
  // }
}

function delete_this_row(shopping_row_id) {
  //   alert("function delete_this_row");
  // var node = document.getElementById("shopping_row_id");
  // if (node.parentNode) {
  //   node.parentNode.removeChild(node);
  //   alert("removed item");
  // }
  var remove_id = shopping_row_id;
  var row = document.getElementById(remove_id);
  row.parentNode.parentNode.parentNode.removeChild(row.parentNode.parentNode);
  var updateSession_value = parseInt(shopping_row_id.slice(3));
  sessionStorage.removeItem("cart_id");

  const newArray = id_add_to_cart.indexOf(updateSession_value);
  if (newArray > -1) {
    id_add_to_cart.splice(newArray, 1);
    sessionStorage.setItem("cart_id", id_add_to_cart)
  }


  document.getElementById(shopping_row_id).parentNode.parentNode.parentNode.removeChild(shopping_row_id.parentNode.parentNode);
}

function process_to_checkout() {
  var is_rental_day_greaterthan_zero;
  var input_index_rental_day;
  var getInputClass = document.getElementsByClassName('input_rental_days');
  if (sessionStorage.getItem("cart_id") == null) {
    msg_no_car();
  } else {
    for (var k = 0; k < getInputClass.length; k++) {
      if (parseInt(getInputClass[k].value) > 0) {
        is_rental_day_greaterthan_zero = true;
      } else if (getInputClass[k].value == "") {
        is_rental_day_greaterthan_zero = false;
        alert("Rental Day can not be empty!");
        return false;
      } else if (parseInt(getInputClass[k].value) <= 0) {
        is_rental_day_greaterthan_zero = false;
        alert("Rental Day must greater than 0!");
        return false;
      } else if (parseInt(getInputClass[k].value) % 1 != 0) {
        is_rental_day_greaterthan_zero = false;
        alert("Rental Day must be whole number!");
        return false;
      }
    }

  }

  if (is_rental_day_greaterthan_zero == true) {
    document.getElementById("shopping_cart").style.display = "none";
    document.getElementById("checkout_detail").style.display = "block";
  }
  // inputbox_rental_days = document.getElementsByClassName("input_rental_days");
  // for(var p=0;p<inputbox_rental_days.length;p++) {

  // }

}

function msg_no_car() {
  alert("No car has been reserved.");
  document.getElementById("shopping_cart").style.display = "none";
  document.getElementById("list_car").style.display = "flex";
  document.getElementById("btn_shopping_cart").style.display = "block";
}

function booking() {
  // alert("booking");
  var checkEmailInput = document.getElementById("emailaddress").value;
  if (checkEmailInput == null) {
    return false;
  } else {

    document.getElementById("checkout_detail").style.display = "none";
    document.getElementById("delivery_detail_and_cost").style.display = "block";
    showBookingDetail();
  }
}

function showBookingDetail() {
  var firstname = document.getElementById("fname").value;
  var lastname = document.getElementById("lname").value;
  var addressline1 = document.getElementById("addressline1").value;
  var addressline2 = document.getElementById("addressline2").value;
  var city = document.getElementById("city").value;
  var postcode = document.getElementById("postcode").value;


  var paymenttype = document.getElementById("paymenttype");
  var paymenttypeselected = paymenttype.options[paymenttype.selectedIndex].text;


  var select_state_value;
  // var booking_btn = document.getElementById("booking");
  var select_state = document.getElementById("state");
  select_state_value = select_state.value;

  //   booking_btn.onclick = (event) => {
  //     event.preventDefault();
  //     select_state_value = select_state.value;
  // };

  var payment_type_selected_value;
  // booking_btn = document.getElementById("booking");
  var payment_type_select = document.getElementById("paymenttype");
  payment_type_selected_value = payment_type_select.value;

  //   booking_btn.onclick = (event) => {
  //     event.preventDefault();
  //     payment_type_selected_value = paymenttype.value;
  // };

  var comma;
  if (addressline2 !== null) {
    comma = ", "
  } else {
    comma == "";
  }
  inputbox_rental_days = document.getElementsByClassName("input_rental_days");
  var shopping_cart_price_per_day_array = document.getElementsByClassName("shopping_cart_price_per_day");
  var totalCostOfRentalCar = 0;
  for (var z = 0; z < inputbox_rental_days.length; z++) {
    var temp_days = parseInt(shopping_cart_price_per_day_array[z].textContent.slice(1));
    totalCostOfRentalCar = inputbox_rental_days[z].value * temp_days;
  }


  document.getElementById("deliveryname").innerHTML = "Hi " + firstname + " " + lastname;
  document.getElementById("deliveryaddress").innerHTML = "Delivery Address: " + addressline1 + comma + addressline2 + ", " + city + ", " + select_state_value + ", " + postcode;
  document.getElementById("deliverypayemnttype").innerHTML = "Payment Type: " + payment_type_selected_value;
  document.getElementById("deliverytotalcost").innerHTML = "Total Cost: $" + totalCostOfRentalCar;


}

// function back_to_selection () {
//   document.getElementById("checkout_detail").style.display = "none";
//     document.getElementById("list_car").style.display = "flex";
//     var clear_content = "";


//     document.getElementById("shopping_cart").innerHTML = clear_content;

//     var shopping_cart_template = document.createElement("div");
//         shopping_cart_template.setAttribute("id", "car_reservation");
//         shopping_cart_template.innerHTML = `<table class="table">
//       <tr>
//         <thead class="thead-light">
//           <th scope="col">Thumbnail</th>
//           <th scope="col">Vehicle</th>
//           <th scope="col">Price Per Day</th>
//           <th scope="col">Rental Days</th>
//           <th scope="col">Actions</th>
//         </thead>
//       </tr>
//       <tbody id="shopping_cart_table_body">

//       </tbody>
//     </table>

//     <a class="btn btn-primary" onClick="process_to_checkout()" style="float: right;">Proceeding to Checkout</a>`;

//     document.getElementById("shopping_cart").appendChild(shopping_cart_template);


//     document.getElementById("btn_shopping_cart").style.display = "block";
// }
