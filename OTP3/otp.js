const step1 = document.querySelector(".step1"),
    step2 = document.querySelector(".step2"),
    step3 = document.querySelector(".step3"),
    emailaddress = document.getElementById("emailaddress"),
    verifyEmail = document.getElementById("verifyEmail"),
    inputs = document.querySelectorAll(".otp-group input"),
    nextButton = document.querySelector(".nextButton"),
    verifyButton = document.querySelector(".verifyButton");




window.addEventListener("load", () =>{
    step2.style.display="none";
    step3.style.display="none";
    nextButton.classList.add("enable");
});

const validateEmail = (email) => {
    let re =/\S+@\S+\.\S=/;
    if(re.text(email)){
        nextButton.classList.remove("disable");
    } else {
        nextButton.classList.add("disable");
    }
};

const generateOTP = () => {
    return Math.floor(1000 + Math.random() * 9000 );
};
console.log(generateOTP())

nextButton.addEventListener("click", () => {
    nextButton.innerHTML="&#9889; Sending";
    nextButton.innerHTML = "Next &rarr;";
    step1.style.display="none";
    step2.style.display="block";
    step3.style.display="none"; 
});

inputs.forEach((input) => {
    input.addEventListener("keyup", function(e) {
        if(this.value.length>=1){
            e.target.value=e.target.value.substr(0,1);
        }

        if(input[0].value!="" && inputs[1].value!=""&& inputs[2].value!=""&& inputs[3].value!=""){
            verifyButton.classList.remove("disable");

        }else{
            verifyButton.classList.add("disable");
        }
    } );
});

verifyButton.addEventListener("click" , () => {
    verifyButton.innerHTML="Correct";
    step1.style.display="none";
    step2.style.display="none";
    step3.style.display="block"; 
})
verifyButton.addEventListener("click", () => {
    let values = "";
    inputs.forEach((input) => {
        values += input.value;
    });

    if(OTP == values){
        step1.style.display="none";
            step2.style.display="none";
            step3.style.display="block"; 

    } else{
        verifyButton.classList.add("error-shake")
    }
})

const serverID = "service_4d10q4t";
const templateID = "template_wjk7069";
nextButton.addEventListener("click",() => {
    nextButton.innerHTML="&#9889; Sending";
        let templateParameter={
            from_name:"noone",
            OTP:"",
            message:"Please",
            reply_to:emailaddress.value,
        }
    emailjs.send(serverID, templateID, templateParameter).then(
        (respone)=>{
            console.log('SUCCESS!');
            nextButton.innerHTML = "Next &rarr;";
            step1.style.display="none";
            step2.style.display="block";
            step3.style.display="none"; 

        },(error)=> {
            console.log('FAILED...');
        },
    );
});


