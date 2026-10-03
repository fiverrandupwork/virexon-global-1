const form = document.querySelector("form");

form.addEventListener("submit", function(event){

    const name = document.querySelector('input[name="fullname"]').value;

    const email = document.querySelector('input[name="email"]').value;

    const phone = document.querySelector('input[name="phone"]').value;

    const cnic = document.querySelector('input[name="cnic"]').value;

   if(
name === "" ||
email === "" ||
phone === "" ||
cnic === ""
){
        event.preventDefault();
        alert("Please fill all required fields.");
        return;
    }

    alert("Thank you! Your application has been submitted.");

});
const openBtn = document.getElementById("openCertificate");

const popup = document.getElementById("certificatePopup");

const closeBtn = document.querySelector(".close-popup");

openBtn.addEventListener("click", function(){

    popup.style.display = "flex";

});

closeBtn.addEventListener("click", function(){

    popup.style.display = "none";

});

popup.addEventListener("click", function(e){

    if(e.target === popup){

        popup.style.display = "none";

    }

});