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
    var date = d3.select("#datetime")
    // var  City = d3.select("#myDropdown").select("a[0")
    function handlechange(value) {
// Getting the value of input field.        
    var input = d3.event.target.value
   

    var filtered_data = tableData.filter(Ufo_Data => Ufo_Data.datetime === input);
        console.log(filtered_data)
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
    // City.on("channge",handlechange)



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
var filter_list = d3.select("#myDropdown");

function Dropdown_filter(value){
    var input = d3.event.target.value
    console.log(input);
    var label =Filter_button.append("li").append("label").text(`${input}`);
  
    var input_field = label.append("input");
    var form = d3.select("#form-group");
    form.append(input_field);

};

filter_list.on("click",Dropdown_filter);







// var country_label = Filter_button.append("li").append("label").text("country");
// var country_input = country_label.append("input");
// var form = d3.select("#form-group")
// form.append(country_input);



// $('.dropdown-toggle').dropdown()

// date.on("change",handlechange)
// Filter_button.on("show.bs.dropdown",function change() {


// })

