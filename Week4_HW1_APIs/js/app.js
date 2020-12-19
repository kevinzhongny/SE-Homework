let complaintInput = 10;
let thisUrl = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?`
let borough = null;
let filteredData = {};

$(() => {
    $('form').on('submit', (event) => {
        event.preventDefault(); // stops refresh
        complaintInput = $('#user-complaint-input').val(); // assigns user input of complaints
        console.log(complaintInput);
    })

    $(":button").click(function() {
      borough = this.id;
      console.log(borough);
      
      $.ajax({
        url: thisUrl,
        type: "GET",
        data: {
          "$limit" : complaintInput,
          "$$app_token" : "jpVG5chSu6x6IeYK89DVpiTKB",
          "agency" : "NYPD",
          "borough" : borough
        }
      }).then(function(data) {
        // alert("Retrieved " + data.length + " records from the dataset!");
        console.log(data);
        for (let i = 0; i < complaintInput; i++) {
          // filteredData[i] = {
          //   descriptor: data[i].complaint_type,
          //   resolution_description: data[i].resolution_description
          // }
          $('body').append($("<tr>")
            .append($("<td>").append(data[i].descriptor))
            .append($("<td align='right'><input type='button' id='PoBtn' onclick='$(this).next().toggle()' value='WHAT DID THE POLICE DO?'>"))
            .append($("<td id='reso'>").append(data[i].resolution_description)))
        }
      });
    })
})
