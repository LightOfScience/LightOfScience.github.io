console.clear();

whatsapp_number_container = document.getElementById("whatsapp-number");
sendMsg = document.getElementById("sendMsg");


apiNum = function(whatsapp_number){
    countryCode = "91";

    whatsapp_number = whatsapp_number.replaceAll(" ","");
    whatsapp_number = whatsapp_number.replace("+","");

    if(whatsapp_number.length == 10){
        whatsapp_number = countryCode+whatsapp_number.slice(0,10);
    }
    else if(whatsapp_number.length == 12){
        
    }
    else if(whatsapp_number.length <10 && whatsapp_number.length>0) {
        alert("Please enter a valid number.\nYou've entered a less than ten digits.");
    }
    else if(whatsapp_number.length >12) {
        alert("Please enter a valid number.\nYou've entered a more than twelve digits.");
    }
    else{}

    return whatsapp_number;
    console.log(whatsapp_number);
}


whatsapp_number_container.addEventListener("change",()=>{
    whatsapp_number = apiNum(whatsapp_number_container.value.toString());
});

sendMsg.addEventListener("click",()=>{
    whatsapp_number = apiNum(whatsapp_number_container.value.toString());
    window.open("https://api.whatsapp.com/send?phone="+whatsapp_number, '_blank');
});