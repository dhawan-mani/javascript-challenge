// from data.js
var tableData = data;


// selected the table
var table = d3.select("#ufo-table")
table.attr("class", "table table-bordered table-dark")

// Inserting the data in data.js in the tables inside the web page.

tableData.forEach( function Level1(Ufo_Data){
    var trow = table.append("tr");
    Object.entries(Ufo_Data).forEach(([key,value]) =>
        {
        var cell = trow.append("td")
        cell.text(value)
        });
    });

// Selecting the datetime element on the web page.
 

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    event.preventDefault();
}
  
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    event.preventDefault();
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");

      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


var Filter_button = d3.select("#filters");
var city_button = d3.select("#city");
var country_button = d3.select("#country");
var state_button = d3.select("#state");
var shape_button = d3.select("#shape");

function handlechange(value) {
  // Getting the value of input field.       
    var input = d3.event.target.value.toLowerCase();
    is_city_applied = false;
    is_country_applied = false;
    is_state_applied = false;
    is_shape_applied = false;
    // find if the filters are set by user
    // we check for NULL because inputs are created dynamically
    city_input = document.getElementById("city_input");
    country_input = document.getElementById("country_input");
    state_input = document.getElementById("state_input");
    shape_input = document.getElementById("shape_input");
    date_filter = document.getElementById("datetime").value;
    is_date_applied = date_filter != "";
    if(city_input != null) {
      city_filter = city_input.value;
      is_city_applied = city_filter != "";
    }
    if(country_input != null) {
      country_filter = country_input.value;
      is_country_applied = country_filter != "";
    }
    if (state_input != null) {
      state_filter = state_input.value;
      is_state_applied = state_filter != "";
    }
    if (shape_input != null) {
      shape_filter = shape_input.value;
      is_shape_applied = shape_filter != "";
    }
    // start filtering
    filtered_data = tableData;
    if(is_city_applied) {
      filtered_data= filtered_data.filter(row => {
        if (row.city == city_filter) {
          return row;
        }
      });
    }
    if(is_country_applied) {
      filtered_data= filtered_data.filter(row => {
        if (row.country == country_filter) {
          return row;
        }
      });
    }
    if(is_state_applied) {
      filtered_data= filtered_data.filter(row => {
        if (row.state == state_filter) {
          return row;
        }
      });      
    }
    if(is_shape_applied) {
      filtered_data= filtered_data.filter(row => {
        if (row.shape == shape_filter) {
          return row;
        }
      });      
    }
    if(is_date_applied) {
      filtered_data= filtered_data.filter(row => {
        if (row.datetime == date_filter) {
          return row;
        }
      });      
    }
    tbody = d3.selectAll("td")
    // Remove any children from the table data
    tbody.html("");
    // Appending the filtered data to the table
    filtered_data.forEach( function Updated(Data){
      var trow = table.append("tr");
      Object.entries(Data).forEach(([key,value]) =>
          {
          var cell = trow.append("td")
          cell.text(value)
          });
    });
};


function city_click(value){
    // var e = d3.event.currentTarget.value;
    let input = document.getElementById("city").innerText;
    console.log(input);
    var label =Filter_button.append("label").text(`${input}`);
    var input_field = label.append("input")
    input_field.attr("id", "city_input")
    input_field.attr("type", "text");
    var form = d3.select("#form-group");
    form.append(label);
    form.append(input_field);
  
    input_field.on("change",handlechange);
};
function country_click(value){
  // var e = d3.event.currentTarget.value;
  let input = document.getElementById("country").innerText;

     console.log(input)
     
  var label =Filter_button.append("label").text(`${input}`);

  var input_field = label.append("input");
  input_field.attr("id", "country_input")
  input_field.attr("type", "text");
  input_field.attr("placeholder", "us")
  var form = d3.select("#form-group");
  form.append(input_field);
  input_field.on("change",handlechange)
  // input_field.attr("onChange" , {handlechange})

};
function state_click(value){
  // var e = d3.event.currentTarget.value;
  let input = document.getElementById("state").innerText;

     console.log(input)
     
  var label =Filter_button.append("label").text(`${input}`);

  var input_field = label.append("input")
  input_field.attr("id", "state_input")
  input_field.attr("type", "text")
  input_field.attr("placeholder", "ca")
  var form = d3.select("#form-group");
  form.append(input_field);
  input_field.on("change",handlechange)
  // input_field.attr("onChange" , {handlechange})


};

function shape_click(value){
  // var e = d3.event.currentTarget.value;
  let input = document.getElementById("shape").innerText;

     console.log(input)
     
  var label =Filter_button.append("label").text(`${input}`);

  var input_field = label.append("input");
  input_field.attr("id", "shape_input")
  input_field.attr("type", "text")
  input_field.attr("placeholder", "circle")
  var form = d3.select("#form-group");
  form.append(input_field);
  input_field.on("change",handlechange);
};

city_button.on("click",city_click);
country_button.on("click",country_click);
state_button.on("click",state_click);
shape_button.on("click",shape_click);

var date = d3.select("#datetime")
date.on("change",handlechange)
