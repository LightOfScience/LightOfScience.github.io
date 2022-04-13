////////////////////////
//    INITIALIZATION  //
////////////////////////
document.addEventListener("DOMContentLoaded", () =>{
    game();
})
///////////////////////////////////////////////////////////////////////////////////////////////


const scriptAPI = "https://script.google.com/macros/s/AKfycbwzTzelmUJfJwEQIuzk8pkw0rpvJ_ISKF24fuh6M5XKXABDqvuGAIvPrsM9VBT31TKxAw/exec?"
var choice1 = null;
var choice2 = null;
var prize = null;



function submitData()
{
    httpGETAsync(scriptAPI + data, (response) => {console.log(response)});
}

//////////////////////////
// Async GET Request  ////
//////////////////////////
function httpGETAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}
////////////////////////////////////////////////////////////////////////////////////////////////////

async function game()
{
    const box1 = document.getElementById("box1"); // Box 1 Button
    const box2 = document.getElementById("box2"); // Box 2 Button
    const box3 = document.getElementById("box3"); // Box 3 Button

    const submitBtn = document.getElementById("submit"); // Submit Button
    submitBtn.addEventListener("click", submitData);     // Submit Button Click Listener

    var rand1 = Math.floor(Math.random()*10)%3;
    if(rand1==0) {
        prize = "A"; 
        box1.children[2].children[0].src = "./assets/giftbox.png";
    }
    else if(rand1==1) {
        prize = "B"; 
        box2.children[2].children[0].src = "./assets/giftbox.png";
    }
    else if(rand1==2) {
        prize = "C"; 
        box3.children[2].children[0].src = "./assets/giftbox.png";
    }

    var rand2 = Math.floor(Math.random()*10)%2;
    
    //Phase 1
    console.log("Phase 1");
    await hostMsg("Hello, Welcome to the game of Statistics.");
    choice1 = await selectBox(); 
    lockBox(choice1);

    //Phase 2
    console.log("Phase 2");
    if(choice1==prize)
    {
        if(choice1=="A")
        {
            if(rand2==0) openBox("B");
            else openBox("C");
        }
        else if(choice1=="B")
        {
            if(rand2==0) openBox("C");
            else openBox("A");
        }
        else if(choice1=="C")
        {
            if(rand2==0) openBox("A");
            else openBox("B");
        }
    }
    else
    {
        if(choice1=="A"&&prize=="B") openBox("C");
        else if(choice1=="A"&&prize=="C") openBox("B");
        else if(choice1=="B"&&prize=="C") openBox("A");
        else if(choice1=="B"&&prize=="A") openBox("C");
        else if(choice1=="C"&&prize=="A") openBox("B");
        else if(choice1=="C"&&prize=="B") openBox("A");
    }


    //Phase 3
    console.log("Phase 3");
    choice2 = await selectBox(); 
    unlockBox(choice1);
    lockBox(choice2);


    //Phase 4
    console.log("Phase 4");
    //unlockBox(choice1);
    //unlockBox(choice2);
    //unlockBox(prize);
    openBox("A");
    openBox("B");
    openBox("C");
    
}

function selectBox()
{
    const box1 = document.getElementById("box1"); // Box 1 Button
    const box2 = document.getElementById("box2"); // Box 2 Button
    const box3 = document.getElementById("box3"); // Box 3 Button

    return new Promise((resolve, reject)=>{
        box1.onclick = ()=>{console.log("Box 1 selected."); resolve("A");} 
        box2.onclick = ()=>{console.log("Box 2 selected."); resolve("B");} 
        box3.onclick = ()=>{console.log("Box 3 selected."); resolve("C");} 
    })   
}


function openBox(box)
{
    const box1 = document.getElementById("box1"); // Box 1 Button
    const box2 = document.getElementById("box2"); // Box 2 Button
    const box3 = document.getElementById("box3"); // Box 3 Button

    if(box=="A")
    {
        box1.children[0].classList.add("slide-mystry"); //Show Lock 1
    }
    else if(box=="B")
    {
        box2.children[0].classList.add("slide-mystry");
    }
    else if(box=="C")
    {
        box3.children[0].classList.add("slide-mystry");
    }
}

function lockBox(box)
{
    const box1 = document.getElementById("box1"); // Box 1 Button
    const box2 = document.getElementById("box2"); // Box 2 Button
    const box3 = document.getElementById("box3"); // Box 3 Button

    if(box=="A")
    {
        box1.children[1].classList.add("show"); //Show Lock 1
    }
    else if(box=="B")
    {
        box2.children[1].classList.add("show");
    }
    else if(box=="C")
    {
        box3.children[1].classList.add("show");
    }
}
function unlockBox(box)
{
    const box1 = document.getElementById("box1"); // Box 1 Button
    const box2 = document.getElementById("box2"); // Box 2 Button
    const box3 = document.getElementById("box3"); // Box 3 Button

    if(box=="A")
    {
        box1.children[1].classList.remove("show");
    }
    else if(box=="B")
    {
        box2.children[1].classList.remove("show");
    }
    else if(box=="C")
    {
        box3.children[1].classList.remove("show");
    }
}






function hostMsg(msg)
{
    return new Promise((resolve, reject) => {
        console.log(msg);
        resolve(true);
    })
}