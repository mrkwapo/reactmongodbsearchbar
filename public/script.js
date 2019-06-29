function getMentorInfo() {
    const input = document.getElementById("username").value;
    console.log(input);
    
    axios.get("/showprofile/" + input)
    .then(response => {
        document.getElementById("mentorInfo").innerHTML= JSON.stringify(response.data);
        console.log("axios", response.data);
    })

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
        axios.get("/getallmentors/")
        .then(response=> {
            document.getElementById("mentorresult").innerHTML= JSON.stringify(response.data)
        })
    }