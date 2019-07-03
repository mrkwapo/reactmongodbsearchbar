function getMentorInfo() {
    const input = document.getElementById("username").value;
    const url = "/api/showprofile/" + input;
    axios.get(url)
    .then(response => {
      displayMentors(response.data, "mentorInfo");
    })
 }
 


 function displayMentors(mentorData, id) {
      const listMentors = mentorData.map(element => {
        return (
          "<li>"
          + "Mentor:"
          + element.username
          + "|"
          +"Program Language:"
          + (element.programlanguage ? element.programlanguage: " " +
          element.username + "did not add program languages.")
          +"</li>"
        )
      })

        document.getElementById("result").innerHTML
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