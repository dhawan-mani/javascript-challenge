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
    //console.log(value);
    //console.log(d3.event.target); 
    console.log(this.value);  
    // console.log(type);      
    var input = d3.event.target.value;
    //console.log(input);
    target_id = d3.event.target.id;
    console.log(target_id);
    var filtered_data =tableData.filter(Ufo_Data =>  
      {
        if (Ufo_Data.datetime === input && target_id == "datetime" ){
        return Ufo_Data.datetime ;
        }
       if (Ufo_Data.city === input && target_id=="city_input") 
       {
        return Ufo_Data.city 
      } 
       if (Ufo_Data.state === input &&  target_id == "state_input") {
         return Ufo_Data.state;
      }  
      if (Ufo_Data.country === input && target_id== "country_input") {
        return Ufo_Data.country;
      }
      if(Ufo_Data.shape === input &&  target_id== "shape_input") {
          return Ufo_Data.shape
      }
       
      });
        
      // var filtered_data = tableData.filter(Ufo_Data => Ufo_Data.city === input)
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


function city_click(value){
    // var e = d3.event.currentTarget.value;
    let input = document.getElementById("city").innerText;
    console.log(input);
    var label =Filter_button.append("label").text(`${input}`);
    var input_field = label.append("input")
    input_field.attr("id", "city_input")
    var form = d3.select("#form-group");
    form.append(label);
    form.append(input_field);
  
    input_field.on("change",handlechange)
   
  
 
};
function country_click(value){
  // var e = d3.event.currentTarget.value;
  let input = document.getElementById("country").innerText;

     console.log(input)
     
  var label =Filter_button.append("label").text(`${input}`);

  var input_field = label.append("input");
  input_field.attr("id", "country_input")
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

  var input_field = label.append("input");
  input_field.attr("id", "state_input")
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
  var form = d3.select("#form-group");
  form.append(input_field);
  input_field.on("change",handlechange)
  // input_field.attr("onChange" , {handlechange})


};

city_button.on("click",city_click);
country_button.on("click",country_click);
state_button.on("click",state_click);
shape_button.on("click",shape_click);


var date = d3.select("#datetime")


    date.on("change",handlechange)
    // state_button.on("change",handlechange)
    // country_button.on("change",handlechange)
    // shape_button.on("change",handlechange)




  //   document.querySelectorAll('#datetime,#city_input,#state_input,#country_input,#shape_input').forEach(element => {
  //     element.addEventListener('keyup',handlechange , false);
  // });


// city_input.on("click",Dropdown_filter);
country_field = document.getElementById("country_input").innerText;
// console.log(country_field)
