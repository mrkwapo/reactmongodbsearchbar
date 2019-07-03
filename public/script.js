function getMentorInfo() {
    const input = document.getElementById("username").value;
    const url = "/api/showprofile/" + input;
    axios.get(url)
    .then(response => {
      displayMentors(response.data, "mentorInfo");
    })
 }
 


 function displayMentors(mentorData, id) {
      const listMentors = mentorData.map((element, index) => {
        return (
   
        
        "<table>"
        +"<caption>"
        +"Mentor: "
        + (index + 1)
        +"</caption>"

        +"<tr>"

        +"<th>"

        +"Username"

        +"</th>"

        +"<th>"

        +"Speaking Language"

        +"</th>"

        +"<th>"

        +"Program Language"

        +"</th>"             

        +"</tr>"

        +"<tr>"

+ "<td>"

        + element.username

+ "</td>"

+ "<td>" 

        + element.speakinglanguage

        + "</td>"

        + "<td>"

        + (element.programlanguage ? element.programlanguage : " " +

    element.itemname + " no content")

        + "</td>"

        + "</tr>"

        + "</table>"
    )
  })

  document.getElementById(id).innerHTML 
= "<ul>" + listMentors.join("\n") + "</ul>"

}

function registerMentor() {
    const userName = document.getElementById("user-name").value;
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const mentorEmail = document.getElementById("mentor-email").value;
    const password = document.getElementById("password").value;
    
    console.log(userName, firstName, lastName, mentorEmail, password);
    
    const payload = {
      username: userName,
      firstname: firstName,
      lastname: lastName,
      mentoremail: mentorEmail,
      password
    }
    axios.post("/api/", payload)
      .then(response => {
        console.log(response)
      })
    }

    function getAllMentors(){
        axios.get("/api/getallmentors/")
        .then(response=> {
          displayMentors(response.data, "result")
        })
    }