// from data.js
var tableData = data;


// selected the table
var table = d3.select("#ufo-table")

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
 
    // var  City = d3.select("#myDropdown").select("a[0")

    
    
 



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


var Filter_button = d3.select("filter list-group-item");
var city_button = d3.select("#city");
var country_button = d3.select("#country");
var state_button = d3.select("#state");
var shape_button = d3.select("#shape");
function city_click(value){
    // var e = d3.event.currentTarget.value;
    let input = document.getElementById("city").innerText;

       console.log(input)
       
    var label =Filter_button.append("label").text(`${input}`);
  
    var input_field = label.append("input");
    var form = d3.select("#form-group");
    form.append(input_field);

};
function country_click(value){
  // var e = d3.event.currentTarget.value;
  let input = document.getElementById("country").innerText;

     console.log(input)
     
  var label =Filter_button.append("label").text(`${input}`);

  var input_field = label.append("input");
  var form = d3.select("#form-group");
  form.append(input_field);

};
function state_click(value){
  // var e = d3.event.currentTarget.value;
  let input = document.getElementById("state").innerText;

     console.log(input)
     
  var label =Filter_button.append("label").text(`${input}`);

  var input_field = label.append("input");
  var form = d3.select("#form-group");
  form.append(input_field);

};

function shape_click(value){
  // var e = d3.event.currentTarget.value;
  let input = document.getElementById("shape").innerText;

     console.log(input)
     
//   var label =Filter_button.append("label").text(`${input}`);

 var label = Filter_button.html("<label for="shape">`${input}`</label>");

  var input_field = label.append("input");
  var form = d3.select("#form-group");
  form.append(input_field);

};

city_button.on("click",city_click);
country_button.on("click",country_click);
state_button.on("click",state_click);
shape_button.on("click",shape_click);


var date = d3.select("#datetime")

function handlechange(value) {
  // Getting the value of input field.        
      var input = d3.event.target.value
     
  
      var filtered_data = tableData.filter(Ufo_Data => Ufo_Data.datetime === input);
          console.log(filtered_data)
          console.log(input)
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
  date.on("change",handlechange)
  city_button.on("change",handlechange)
    state_button.on("change",handlechange)
    country_button.on("change",handlechange)
    shape_button.on("change",handlechange)








// city_input.on("click",Dropdown_filter);


// var country_label = Filter_button.append("li").append("label").text("country");
// var country_input = country_label.append("input");
// var form = d3.select("#form-group")
// form.append(country_input);


