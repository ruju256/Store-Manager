// get the form
const form = document.querySelector("form");
// get username by selecting input id
const email = document.querySelector("#email");
// get password by selecting input id
const password = document.querySelector("#password");

// prevent form behaviour which is submitting somewhere
form.addEventListener("submit", function(e){
    e.preventDefault() // do nothing
	// check if username is admin and password is andela
	if(email.value ==="admin@andela.com" && password.value ==="admin123"){
	  //send user to admin dashboard
		window.location = "./admin_dashboard.html";
    }
    else if(email.value ==="attendant@andela.com" && password.value ==="andela123"){
         //send user to admin dashboard
		window.location = "./attendant_dashboard.html";
     }
	else if(email.value ==="admin@andela.com" && password.value !=="admin123"){
	   // wrong password so inform user
		alert("Invalid password") // can be replaced by a span tag
    }
    else if(email.value ==="attendant@andela.com" && password.value !=="andela123"){
        // wrong password so inform user
         alert("Invalid password") // can be replaced by a span tag
     }
	
});