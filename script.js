function validateForm() { 
	var fname = document.forms["myForm"]["fName"].value; 
	var lname = document.forms["myForm"]["lName"].value; 
	var email = document.forms["myForm"]["email"].value;
	var phone = document.forms["myForm"]["phone"].value; 
	var e = document.getElementById("topic");
    var value = e.value;
    var text = e.options[e.selectedIndex].text;
    var msg = document.getElementById("msg").value;


	if (fname == "") { 
		alert("First Name must be filled out"); 
		return false; 
	}
	if (lname == "") { 
		alert("Last Name must be filled out"); 
		return false; 
	}
	if (email == "") { 
		alert("Email must be filled out"); 
		return false; 
    }
	if (phone == "") { 
		alert("Phone Number must be filled out"); 
		return false; 
	}

    if (document.getElementById("newsletter").checked == true) {
        Email.send({
            To: "jonas.frerker@my.jcu.edu.au",
            From: email,
            Subject: text,
            Body: msg
        }).then( 
            message => alert("mail sent successfully")
        );
    }
}