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
    var filter_button = d3.select("#filter-btn")

    function handlechange() {
// Getting the value of input field.
    event.preventDefault();        
    // var input = d3.event.target.value
    var input = document.getElementById("datetime").value;
    console.log(input);
    //input = input.replace();
    // input_date = new Date(input);
    // search_date = input_date.getYear() + "/" + input_date.getMonth() + "/" + input_date.getDate();
    // console.log(search_date);
    // console.log("*****");
    var filtered_data = tableData.filter(Ufo_Data => {
        if (input == "") {
            return Ufo_Data.datetime;
        }
        if (Ufo_Data.datetime == input)
            return Ufo_Data.datetime;
    });


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
    
    // Adding event listener to the filter table 
     filter_button.on("click",handlechange)


    