const form=document.querySelector("form");
statusTxt = form.querySelector(".button-area span");

form.onsubmit = (e)=>{
    e.preventDefault(); //preventing form from submitting
    statusTxt.style.color="#0D6EFD";
    statusTxt.style.display="block";

    let xhr = new XMLHttpRequest(); //create new xml object
    xhr.open("POST", "message.php", true); //sending post request to message.php file
    xhr.onload = ()=>{//once ajax loaded
        if(xhr.readyState === 4 && xhr.status ===200){//if aja// x response status is 200 & ready tatus is 4 means there is no any error
            let response = xhr.response; //storing ajax response in a response variable
            if (response.indexOf("Email and Message field are required!")!==-1 ||response.indexOf("Enter a valid email address")||response.indexOf("Sorry, Failed to send yoour message")){
                statusTxt.style.color="red";
            }else{
                form.reset();
                setTimeout(()=>{
                    statusTxt.style.display = "none";
                },3000);
            }
            console.log(response);
            statusTxt.innerText = response;        }
    }
    let formData = new FormData(form); //creating new FormData obj. this obj is used to send formdata
    xhr.send(formData); //sending form data
}