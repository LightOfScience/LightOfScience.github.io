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
    else if(whatsapp_number.length>0 && whatsapp_number.length <10 || whatsapp_number.length >12 || whatsapp_number.length == 11) {
        alert("Please enter a valid number.\nYou must enter either a 10 digit number (without country code) or 12 digit number (including country code).");
        return 0;
    }
    else{}

    return whatsapp_number;
    console.log(whatsapp_number);
}


whatsapp_number_container.addEventListener("change",()=>{
    whatsapp_number = apiNum(whatsapp_number_container.value.toString());
    if(whatsapp_number == 0) return "Error!";
    else {}
});

sendMsg.addEventListener("click",()=>{
    whatsapp_number = apiNum(whatsapp_number_container.value.toString());
    if(whatsapp_number == 0) return "Error!";
    else window.open("whatsapp://send?phone="+whatsapp_number, '_blank');
});