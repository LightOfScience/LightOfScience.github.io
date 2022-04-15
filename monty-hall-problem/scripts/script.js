// Global Variables
const scriptAPI = "https://script.google.com/macros/s/AKfycbwzTzelmUJfJwEQIuzk8pkw0rpvJ_ISKF24fuh6M5XKXABDqvuGAIvPrsM9VBT31TKxAw/exec?"
var choice1 = null;
var choice2 = null;
var prize = null;
var msgBox = null;
var box1 = null;
var box2 = null;
var box3 = null;
var submitBtn = null;
var playername = null;
var submitStat = false;

////////////////////////
//    INITIALIZATION  //
////////////////////////
document.addEventListener("DOMContentLoaded", () =>{
    msgBox = document.getElementById("host-msg");
    box1 = document.getElementById("box1"); // Box 1 Button
    box2 = document.getElementById("box2"); // Box 2 Button
    box3 = document.getElementById("box3"); // Box 3 Button
    submitBtn = document.getElementById("submit"); // Submit Button
    submitBtn.addEventListener("click", submitData);     // Submit Button Click Listener
    game();
})
///////////////////////////////////////////////////////////////////////////////////////////////




function submitData(data)
{
    if(!submitStat) httpGETAsync(scriptAPI + data, (response) => {hostMsg(response);submitStat=true;});
    else hostMsg("You've already Submitted! Please Reload to play again.");
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


//////////////////////////////////////////////////
//  Main Game        /////////////////////////////
//////////////////////////////////////////////////
async function game()
{
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
    await hostMsg("Hello, Welcome to the game of Statistics.",3000);
    await hostMsg("There are, three boxes. Only one of them contains a reward. Choose wisely!");
    choice1 = await selectBox(); 
    lockBox(choice1);

    //Phase 2
    console.log("Phase 2");
    await hostMsg("So, You've selected Box "+ choice1 + ". Now, I'me revealing one box.",1000);
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
    await delay(2000);


    //Phase 3
    console.log("Phase 3");
    await hostMsg("Do you want to change your choice? Choose Wisely!");
    unlockBox(choice1);
    choice2 = await selectBox(); 
    lockBox(choice2);


    //Phase 4
    console.log("Phase 4");
    if(choice1==choice2) await hostMsg("So, you have not switched!. Now lets see if this was a wise decision.",4000);
    else await hostMsg("So, you have switched!. Now lets see if this was a wise decision.",4000);
    openBox("A");
    openBox("B");
    openBox("C");
    unlockBox(choice2);
    if(choice2==prize) await hostMsg("CONGRATULATIONS! You have WON!!!");
    else await await hostMsg("SORRY! You have LOST!!!");
    

    //Submit Result
    playername = document.getElementById("input").value;
    let data = "name="+playername+"&choice1="+choice1+"&choice2="+choice2+"&prize="+prize;
    submitData(data);
}
////////////////// Game End   //////////////////////////////////////////



//////////////////////////////////////////////////////
// Clicked Box  //////////////////////////////////////
///////////////////////////////////////////////////
function selectBox()
{
    return new Promise((resolve, reject)=>{
        box1.onclick = ()=>{console.log("Box 1 selected."); resolve("A");} 
        box2.onclick = ()=>{console.log("Box 2 selected."); resolve("B");} 
        box3.onclick = ()=>{console.log("Box 3 selected."); resolve("C");} 
    })   
}
/////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////
// Reveal Box             ///////////////
/////////////////////////////////////////
function openBox(box)
{
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
//////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////
// Add Lock Over Box    ///////////////
/////////////////////////////////////////
function lockBox(box)
{
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
////////////////////////////////////////////////////////////


//////////////////////////////////////////
// Remove Lock Over Box    ///////////////
/////////////////////////////////////////
function unlockBox(box)
{
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
/////////////////////////////////////////////////////////





///////////////////////////////////////////////
//   Host Message         /////////////////////
//////////////////////////////////////////////
function hostMsg(msg,delay)
{
    // TypeWriter JS Documentation: https://github.com/tameemsafi/typewriterjs
    var typewriter = new Typewriter(msgBox, {
        loop: false,
        delay: 25,
    });
    typewriter
        .deleteAll()
        .typeString(msg)
        .stop().start();
    return new Promise((resolve, reject) => {
        setTimeout(()=>{resolve(true);},delay);})
}
////////////////////////////////////////////////////////


//////////////////////////////////////////////
// Generic Delay Function ////////////////////
//////////////////////////////////////////////
function delay(delay)
{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{resolve(true);},delay);})
}
////////////////////////////////////////////////////////