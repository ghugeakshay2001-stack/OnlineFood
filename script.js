// ------ Smooth Scroll for Navbar Links -------
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ------ Contact Form Validation -------
document.querySelector("form").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    if(name === ""){
        alert("Please enter your Name");
        return;
    }
    if(email === "" || !email.includes("@")){
        alert("Please enter a valid Email");
        return;
    }
    if(phone === "" || phone.length < 10){
        alert("Please enter a valid Phone Number");
        return;
    }
    if(message === ""){
        alert("Please enter your Message");
        return;
    }

    alert("Your message has been sent successfully!");
});
