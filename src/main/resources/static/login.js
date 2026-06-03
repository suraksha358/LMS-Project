const loginForm =
    document.getElementById("loginForm");


// LOGIN

loginForm.addEventListener("submit",
    function (e){

        e.preventDefault();

        const email =
            document.getElementById("email").value;

        const password =
            document.getElementById("password").value;


        // ADMIN LOGIN

        if(email === "admin@gmail.com"
            && password === "admin123"){

            // DIRECT REDIRECT

            window.location.href = "dashboard.html";
        }

        else{

            alert("Invalid Email or Password");
        }
    });