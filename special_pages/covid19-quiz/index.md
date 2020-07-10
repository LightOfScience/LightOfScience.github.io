---
layout: page-generic-default
title: COVID19 Quiz
seo: 
    keywords: COVID19, Quiz, COVID19 Quiz
    description:
img: /data/df.img
permalink: /covid19-quiz/
---

<form name="quiz" style="width: 90%; margin: auto; ">
    
    <!-- Question 1 : Start-->
    <div class="question">
        <h1 class="qn-title">Q1) Qustion 1 is to be placed here</h1>
        <ul class="option-list">
            <li class="option"><input class="option-ip" type="radio" name="q1" id="A1" value="A"><label class="option-label" for="A">A) Option A is to be placed here</label></li>
            <li class="option"><input class="option-ip" type="radio" name="q1" id="B1" value="B"><label class="option-label" for="B">B) </label></li>
            <li class="option"><input class="option-ip" type="radio" name="q1" id="C1" value="C"><label class="option-label" for="C">C) </label></li>
            <li class="option"><input class="option-ip" type="radio" name="q1" id="D1" value="D"><label class="option-label" for="D">D) </label></li>
        </ul>
    </div>
    <!-- Question 1: End -->

    <!-- Question 2 : Start-->
    <div class="question">
        <h1 class="qn-title">Q2) Qustion 2 is to be placed here</h1>
        <ul class="option-list">
            <li class="option"><input class="option-ip" type="radio" name="q2" id="A2" value="A"><label class="option-label" for="A">A) Option A is to be placed here</label></li>
            <li class="option"><input class="option-ip" type="radio" name="q2" id="B2" value="B"><label class="option-label" for="B">B) </label></li>
            <li class="option"><input class="option-ip" type="radio" name="q2" id="C2" value="C"><label class="option-label" for="C">C) </label></li>
            <li class="option"><input class="option-ip" type="radio" name="q2" id="D2" value="D"><label class="option-label" for="D">D) </label></li>
        </ul>
    </div>
    <!-- Question 2: End -->

    <!--participant details-->
    <ul style="display: flex; flex-wrap: wrap; width: 80%; text-align: center; margin:auto;">
        <input class="generic-ip" type="text" name="Name" id="qz-name" placeholder="Enter your Name" required>
        <input class="generic-ip" type="email" name="Email" id="qz-email" placeholder="Enter your Eamil" required>
        <input class="generic-ip" type="text" name="Institution" id="qz-institution" placeholder="Which Institution/Office you belong to?">
        <input class="generic-ip" type="text" name="Department" id="qz-dept" placeholder="Your Department?">
        <button class="generic-ip" type="submit" style="margin: 10px 60px;">Submit</button>
    </ul>
</form>
<p id="response"></p>

<style>
.question
{
    background:rgb(252, 252, 252);
    padding:5px;
}
.qn-title
{
    padding:3px;
    margin:5px;
    color:rgb(0, 62, 177);
}
.option-list
{
    list-style: none;
    display: flex;
    flex-grow: 0;
    flex-shrink: 0;
    margin:0;
    padding:10px;
    margin:20px;
    flex-wrap: wrap;
    background:rgb(254, 254, 254);
}
.option
{
    flex-basis: calc(50% - 4px);
    padding:10px 2px;
    display: flex;
    align-items: center;
}
.option-ip
{
    width:20px;
    height: 20px;
    margin:10px;
    border-radius: 0%;
}
.option-label
{
    padding:0;
    margin:0;
}

.generic-ip
{
    text-align: center;
    flex-basis: 100%;
    margin:2px 10px;
    height: 40px;
}
</style>



<script>

var qnStat = (id) => {return document.getElementById(id).checked == true ? true : false;} //enter the true options qnStat(trueOption)
var calcScore = () => {
    var score =0;
    if (qnStat('A1')) score++; //True Option q1
    if (qnStat('C2')) score++; //Enter option q2
    return score;
};


const scriptURL = 'https://script.google.com/macros/s/AKfycby_ud_GWfqVoS-Z7A5MFo6nL4GWrL1RFI1dH_r5/exec';
const form = document.forms['quiz'];



form.addEventListener('submit', e => {
    var data = {
        "name":        "",
        "email":       "",
        "score":       "",
        "institution": "",
        "dept":        ""
    };
    data.name = document.getElementById('qz-name').value;
    data.email = document.getElementById('qz-email').value;
    data.score = calcScore();
    data.institution = document.getElementById('qz-institution').value;
    data.dept = document.getElementById('qz-dept').value;

    
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: JSON.stringify(data), mode: 'no-cors', cache: 'no-cache', headers:{'Content-Type': 'application/json'}})
        .then(response => document.getElementById('response').innerHTML = "Success!")
        .catch(error => document.getElementById('response').innerHTML = "Error!")
})
</script>