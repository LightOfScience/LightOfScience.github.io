---
layout: page-generic-default
title: Monty Hall Problem
seo: 
    keywords: Monty Hall Problem, Statistics, Probability, Mathematics
    description: Monty Hall Problem -  Suppose you're on a game show, and you're given the choice of three doors -- Behind one door is a car; behind the others, goats. You pick a door, say No. 1, and the host, who knows what's behind the doors, opens another door, say No. 3, which has a goat. He then says to you, "Do you want to pick door No. 2?" Is it to your advantage to switch your choice?
img: /media/special_pages/monty-hall-problem/monty-hall-problem-banner.jpg
permalink: /monty-hall-problem/
---
<hr>
<h1>Monty Hall Problem</h1>
<p>Suppose you're on a game show, and you're given the choice of three doors: Behind one door is a car; behind the others, goats. You pick a door, say No. 1, and the host, who knows what's behind the doors, opens another door, say No. 3, which has a goat. He then says to you, "Do you want to pick door No. 2?" Is it to your advantage to switch your choice?</p>
<hr>

<div class="host">
    <div class="host-img-container"><img src="/media/special_pages/monty-hall-problem/host.png" alt="" width="100%" ></div>
    <div class="message-container">
        <h1>Message from the Host</h1>
        <p id="host-message">Welcome<br>Please select a Box where you think the prize is at.</p>
    </div>
</div>

<div class="doors-group">
    <div class="door-wrapper">
        <button id="door1">
            <h2>Box A</h2>
            <div class="doorimg-container"><img src="/media/special_pages/monty-hall-problem/door-closed.png" alt=""  width="100%"></div>
        </button>
    </div>
    <div class="door-wrapper">
        <button id="door2">
            <h2>Box B</h2>
            <div class="doorimg-container"><img src="/media/special_pages/monty-hall-problem/door-closed.png" alt="" width="100%"></div>
        </button>
    </div>
    <div class="door-wrapper">
        <button id="door3">
            <h2>Box C</h2>
            <div class="doorimg-container"><img src="/media/special_pages/monty-hall-problem/door-closed.png" alt="" width="100%"></div>
        </button>
    </div>
</div>

<form action="" method="" style="padding: 10px; text-align: center;">
    <h3>Please Submit Your Game Result.</h3>
    <p>Name of the player:<input id="playerName" type="text" name="name"></p>
    <input type = "submit" name = "submit" value = "Submit" />
    <h1 id="submitStat"></h1>
</form>

<div style="height: 100px;"></div>

<style>

    .host
    {
        display: flex;
        width: 100%;
    }
    .host-img-container
    {
        width: 200px    ;
    }

    .doors-group
    {
        display: flex;
        width: 100%;
        justify-content: center;
        flex-wrap: wrap;
    }

    .door-wrapper
    {
        margin: 10px;
        padding: 10px;
        border: solid black 1px;
    }
    .door-wrapper > button
    {cursor: pointer;}

    .doorimg-container
    {
        width: 200px;
    }

    .door-selected{
        background-color: #00DBDE;
        background-image: linear-gradient(60deg, #00DBDE 0%, #FC00FF 100%);
    }

    .door-empty
    {
        background: #ff0000;
        transform: scale(.8);
        transition: transform .5s;
    }

    .door-empty > button
    {
        cursor: no-drop;
    }
</style>

<script>
    var completeStat = false;
    var choice1 = null;
    var choice2 = null;
    var switched = null;
    var winStat = null;

    console.log("Monty Hall Problem");
    var prizeDoor = Math.floor(Math.random()*10)%3;

    var rand2 = -1; //initilizing rand2

    var stage1 = false;
    var stage2 = false;

    var door1 = document.getElementById("door1");
    var door2 = document.getElementById("door2");
    var door3 = document.getElementById("door3");
    var doors = document.getElementsByClassName("door-wrapper");

    var hostMsg = document.getElementById("host-message")

    door1.addEventListener("click", () =>{
        console.log("You have selected Box A");
        if(stage1 == false && stage2 == false) step1(0,prizeDoor);
        else if (stage1 == true && stage2 == false) step2(0);
        else console.log("Alteady completed.");
    });
    door2.addEventListener("click", () =>{
        console.log("You have selected Box B");
        if(stage1 == false && stage2 == false) step1(1,prizeDoor);
        else if (stage1 == true && stage2 == false) step2(1);
        else console.log("Alteady completed.");
    });
    door3.addEventListener("click", () =>{
        console.log("You have selected Box C");
        if(stage1 == false && stage2 == false) step1(2,prizeDoor);
        else if (stage1 == true && stage2 == false) step2(2);
        else console.log("Alteady completed.");
    });

    function step1(doorSelect, doorPrize) //Step 1 Function
    {
        stage1 = true;

        doors[doorSelect].classList.add("door-selected");
        
        if(doorSelect === doorPrize)
        {
            rand2 = (doorPrize+1)%3;
        }
        else
        {
            rand2 = 3-doorSelect-doorPrize;
        }

        doors[rand2].children[0].children[1].children[0].src = "/media/special_pages/monty-hall-problem/door-empty.png"
        
        hostMsg.innerText="So, you've selected Box "+ (doorSelect+1) + ".\nNow I've revealed Door " + (rand2+1) +".\nSo do you like to change your choice or would you like to hold on to your previous choice?"

        doors[rand2].classList.add("door-empty");

        choice1 = doorSelect;
    }

    function step2(doorSelect) //Step 2 Function
    {
        if (doorSelect == rand2)
        {
            stage2 = false;
            alert("Box "+(doorSelect+1)+" has already been revealed. You can't select that box");
            return 0;
        }
        else {
            stage2 = true;
            doors[doorSelect].classList.add("door-selected");
        }

        doors[0].children[0].children[1].children[0].src = "/media/special_pages/monty-hall-problem/door-empty.png"
        doors[1].children[0].children[1].children[0].src = "/media/special_pages/monty-hall-problem/door-empty.png"
        doors[2].children[0].children[1].children[0].src = "/media/special_pages/monty-hall-problem/door-empty.png"
        doors[prizeDoor].children[0].children[1].children[0].src = "/media/special_pages/monty-hall-problem/door-prize.png"

        if(doorSelect == prizeDoor)
        {
            hostMsg.innerText="You've Won!"
            winStat = 1;
        }
        else {
            hostMsg.innerText="You've Lost!"
            winStat = 0;
        }

        choice2 = doorSelect;

    }


    function rprtSend(event)
    {

        try{event.preventDefault();}
        finally{}   

        if (completeStat) 
        {
            alert("You've already submitted your game result. You can refresh this page and play again.");
            return 0;
        }
        else 


        if (choice1 == 0) choice1 = 'A';
        else if(choice1 == 1) choice1 ='B';
        else choice1 = "C";

        if (choice2 == 0) choice2 = 'A';
        else if(choice2 == 1) choice2 ='B';
        else choice2 = "C";

        if (prizeDoor == 0) prizeDoor = 'A';
        else if(prizeDoor == 1) prizeDoor ='B';
        else prizeDoor = "C";

        if (choice1 == choice2) switched = 0;
        else switched = 1;

        var playerName = document.getElementById("playerName").value;

        var rprt='name='+playerName+'&choice1='+choice1+'&choice2='+choice2+'&prizeDoor='+prizeDoor+'&switched='+switched+'&winStat='+winStat;

        // Send to server
        var scriptURL = "https://script.google.com/macros/s/AKfycbztSHZyG-Cey61xkFpWeIoAMxUH6SuvAyXR6380Pw/exec?"+rprt;

        console.log(scriptURL);
        
        fetch(scriptURL,{method:'get'})
        .then(Response => {
            //Response = Response.text();
            document.getElementById("submitStat").innerHTML="Successfully Submitted! Thanks for Playing<br><a href=\"https://docs.google.com/spreadsheets/d/1IIRbj1Ll6jUtJ_f71nAYpPpr74s9_Yv9KTYbTq2-hMo/edit?usp=sharing\" target=\"_blank\">View All Datasets & Analysis</a>\"";
            console.log(Response);
            completeStat = true;
        })
        .catch(Error => {
            document.getElementById("submitStat").innerHTML="Error!! Couldn't Submit your result.<br>Error Response: "+Error;
            console.log(Error);
            completeStat = true;
        });
    }

    document.forms[0].addEventListener('submit', rprtSend);

</script>
