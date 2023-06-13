const form=document.querySelector("form");
statusTxt = form.querySelector(".button-area span");

form.onsubmit = (e)=>{
    e.preventDefault(); //preventing form from submitting
    statusTxt.style.display="block";

    let xhr = new XMLHttpRequest(); //create new xml object
    xhr.open("POST", "message.php", true); //sending post request to message.php file
    xhr.onload = ()=>{

    }
    xhr.send();
}