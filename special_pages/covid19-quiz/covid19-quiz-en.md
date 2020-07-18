---
layout: page-generic-default
title: COVID19 Awareness Quiz
seo: 
    keywords: COVID19, Quiz, COVID19 Quiz
    description: COVID19 Awereness Quiz. All the participants will be awarded a participation certificate. This quiz is organized by Light Of Science.
img: /media/special_pages/covid19-quiz/quiz-banner.jpg
permalink: /covid19-quiz/
---

<div style="width: 100%; background: #014880;" ><img id="quiz-banner" src="/media/special_pages/covid19-quiz/quiz-banner.jpg" alt="" width="100%"></div>
<script>
    if (isMobile() == false) document.getElementById('quiz-banner').style.width = "50%";
</script>

<form name="kyc" action="" method="">
    <!--participant details-->
    <ul style="display: flex; flex-wrap: wrap; width: 80%; text-align: center; margin:auto; padding:5px; margin:10px auto; background: rgb(211, 255, 169); border-radius:1rem;">
        <input class="generic-ip" type="text" name="Name" id="qz-name" placeholder="Enter your Name" required>
        <input class="generic-ip" type="email" name="Email" id="qz-email" placeholder="Enter your Email" required>
        <input class="generic-ip" type="tel" name="Phone" id="qz-phone" placeholder="Enter your Phone" required>
        <input class="generic-ip" type="text" name="Institution" id="qz-institution" placeholder="Which Institution/Office do you belong to?">
        <input class="generic-ip" type="text" name="Department" id="qz-dept" placeholder="Your Department?">
        <button class="generic-ip" id="qz-start" type="submit" style="margin: 10px 60px; background:#44ff44; color:white; font-size: 2rem; border:none; border-radius: 20px;">Start</button>
    </ul>
</form>


<form name="quiz" method="POST" action="" style="width: 90%; margin: auto; margin:50px auto; ">

    <div id="questions-list">
        <div id="qn-cover"></div>
        <p id="timer">10 min. : 0 sec.</p>
        <!-- Question 1 : Start-->
        <div class="question">
            <h1 class="qn-title">Q1) Which are the Mild Symptoms of COVID-19?</h1>
            <ul class="option-list">
                <li class="option"><input class="option-ip" type="radio" name="q1" id="A1" value="A"><label class="option-label" for="A">A) Fever.</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q1" id="B1" value="B"><label class="option-label" for="B">B) Cough.</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q1" id="C1" value="C"><label class="option-label" for="C">C) Shortness of Breath.</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q1" id="D1" value="D"><label class="option-label" for="D">D) All of the above.</label></li>
            </ul>
        </div>
        <!-- Question 1: End -->

        <!-- Question 2 : Start-->
        <div class="question">
            <h1 class="qn-title">Q2) The capital of Hubie Provinces, is in the news for, </h1>
            <ul class="option-list">
                <li class="option"><input class="option-ip" type="radio" name="q2" id="A2" value="A"><label class="option-label" for="A">A) Most COVID19 Positive in China.</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q2" id="B2" value="B"><label class="option-label" for="B">B) First COVID19 Positive in China.</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q2" id="C2" value="C"><label class="option-label" for="C">C) COVID19 Free Zone of China.</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q2" id="D2" value="D"><label class="option-label" for="D">D) None of the Above.</label></li>
            </ul>
        </div>
        <!-- Question 2: End -->

        <!-- Question 3 : Start-->
        <div class="question">
            <h1 class="qn-title">Q3) A 15-year-old girl from Bihar who  cycled nearly 1,200 km, with her father riding pillion, to reach home amid the coronavirus lockdown, has been offered free tuition to appear for the IIT-JEE by Anand Kumar, founder of the widely-acclaimed coaching centre Super 30. 
                <br>What's the name of the girl?</h1>
            <ul class="option-list">
                <li class="option"><input class="option-ip" type="radio" name="q3" id="A3" value="A"><label class="option-label" for="A">A) Jaya Kumari
                </label></li>
                <li class="option"><input class="option-ip" type="radio" name="q3" id="B3" value="B"><label class="option-label" for="B">B) Jyoti Roy</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q3" id="C3" value="C"><label class="option-label" for="C">C) Jyoti Paswan</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q3" id="D3" value="D"><label class="option-label" for="D">D) Jyoti Kumari</label></li>
            </ul>
        </div>
        <!-- Question 3: End -->


        <!-- Question 4 : Start-->
        <div class="question">
            <h1 class="qn-title">Q4) The first tiger at Bronx Zoo Tiger, tested positive for COVID-19. What is the name of the tiger?</h1>
            <ul class="option-list">
                <li class="option"><input class="option-ip" type="radio" name="q4" id="A4" value="A"><label class="option-label" for="A">A) Sadia.</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q4" id="B4" value="B"><label class="option-label" for="B">B) Nadia.</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q4" id="C4" value="C"><label class="option-label" for="C">C) Naunia.</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q4" id="D4" value="D"><label class="option-label" for="D">D) Kimono.</label></li>
            </ul>
        </div>
        <!-- Question 4: End -->


        <!-- Question 5 : Start-->
        <div class="question">
            <h1 class="qn-title">Q5) According th WHO, what should be the minimum gap between two individuals under social distancing?</h1>
            <ul class="option-list">
                <li class="option"><input class="option-ip" type="radio" name="q5" id="A5" value="A"><label class="option-label" for="A">A) 3 Meters.</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q5" id="B5" value="B"><label class="option-label" for="B">B) 1 Meters.</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q5" id="C5" value="C"><label class="option-label" for="C">C) 2.5 Meters.</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q5" id="D5" value="D"><label class="option-label" for="D">D) 2 Meters.</label></li>
            </ul>
        </div>
        <!-- Question 5: End -->


        <!-- Question 6 : Start-->
        <div class="question">
            <h1 class="qn-title">Q6) Which very trending word, Narendra Nath Datta used in his popular literary work "Suyej Khale Hangor Shikar"(সুয়েজ খালে হাঙ্গর শিকার), meaning 40 days?</h1>
            <ul class="option-list">
                <li class="option"><input class="option-ip" type="radio" name="q6" id="A6" value="A"><label class="option-label" for="A">A) Coronavirus.</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q6" id="B6" value="B"><label class="option-label" for="B">B) Lockdown.</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q6" id="C6" value="C"><label class="option-label" for="C">C) Quarantine.</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q6" id="D6" value="D"><label class="option-label" for="D">D) Containment.</label></li>
            </ul>
        </div>
        <!-- Question 6: End -->


        <!-- Question 7 : Start-->
        <div class="question">
            <h1 class="qn-title">Q7) In January 2020, a new type of Coronavirus __???__ was identified as the cause of an out break of viral pneumonia in the capital of Hubei Province. (fill in the blank)</h1>
            <ul class="option-list">
                <li class="option"><input class="option-ip" type="radio" name="q7" id="A7" value="A"><label class="option-label" for="A">A) MARS-CoV-2</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q7" id="B7" value="B"><label class="option-label" for="B">B) SARS-nCoV-19</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q7" id="C7" value="C"><label class="option-label" for="C">C) SARS-CoV-2</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q7" id="D7" value="D"><label class="option-label" for="D">D) MARS-nCoV-19</label></li>
            </ul>
        </div>
        <!-- Question 7: End -->


        <!-- Question 8 : Start-->
        <div class="question">
            <h1 class="qn-title">Q8) What is the reason behind the naming of the Coronavirus group?</h1>
            <ul class="option-list">
                <li class="option"><input class="option-ip" type="radio" name="q8" id="A8" value="A"><label class="option-label" for="A">A) Due to crown like projection.</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q8" id="B8" value="B"><label class="option-label" for="B">B) Due to crown like tail.</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q8" id="C8" value="C"><label class="option-label" for="C">C) Due to crown like tail.</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q8" id="D8" value="D"><label class="option-label" for="D">D) None of the above.</label></li>
            </ul>
        </div>
        <!-- Question 8: End -->


        <!-- Question 9 : Start-->
        <div class="question">
            <h1 class="qn-title">Q9) Due to recent COVID19 outbreak "N95" masks are very popular in this vital situation. What does the 'N' stands for?</h1>
            <ul class="option-list">
                <li class="option"><input class="option-ip" type="radio" name="q9" id="A9" value="A"><label class="option-label" for="A">A) Non-Resistance to Virus.</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q9" id="B9" value="B"><label class="option-label" for="B">B) Non-Resistance to Oil.</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q9" id="C9" value="C"><label class="option-label" for="C">C) Non-Resistance to Bacteria.</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q9" id="D9" value="D"><label class="option-label" for="D">D) Non-Resistance to Dust.</label></li>
            </ul>
        </div>
        <!-- Question 9: End -->


        <!-- Question 10 : Start-->
        <div class="question">
            <h1 class="qn-title">Q10) What electronic device under consideration were infected by several microbes, most of which belonged to the natural flora of the human body as well as airborne fungi and soil?</h1>
            <ul class="option-list">
                <li class="option"><input class="option-ip" type="radio" name="q10" id="A10" value="A"><label class="option-label" for="A">A) Television.</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q10" id="B10" value="B"><label class="option-label" for="B">B) DVD Player.</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q10" id="C10" value="C"><label class="option-label" for="C">C) Mobile Phone.</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q10" id="D10" value="D"><label class="option-label" for="D">D) Microwave Oven.</label></li>
            </ul>
        </div>
        <!-- Question 10: End -->


        <!-- Question 11 : Start-->
        <div class="question">
            <h1 class="qn-title">Q11) A new COVID19 diagnostic kit, called "FNCAS9 Editor Linked Uniform Detection Assay" has been developed by IGIB (New Delhi). The name of the kit is inspired from a fictional character created by,</h1>
            <ul class="option-list">
                <li class="option"><input class="option-ip" type="radio" name="q11" id="A11" value="A"><label class="option-label" for="A">A) Sirshendu Mukhopadhay.</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q11" id="B11" value="B"><label class="option-label" for="B">B) Saradindu Bandopadhya.</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q11" id="C11" value="C"><label class="option-label" for="C">C) Sunil Ganguly</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q11" id="D11" value="D"><label class="option-label" for="D">D) Satyajit Roy.</label></li>
            </ul>
        </div>
        <!-- Question 11: End -->


        <!-- Question 12 : Start-->
        <div class="question">
            <h1 class="qn-title">Q12) Can COVID-19 be cured?</h1>
            <ul class="option-list">
                <li class="option"><input class="option-ip" type="radio" name="q12" id="A12" value="A"><label class="option-label" for="A">A) Yes – Hot drinks can cure COVID-19.</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q12" id="B12" value="B"><label class="option-label" for="B">B) No – COVID-19 is a death sentence.</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q12" id="C12" value="C"><label class="option-label" for="C">C) Yes - Worshipping the Goddess Corona will bless us cure.</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q12" id="D12" value="D"><label class="option-label" for="D">D) No – but most people get better by themselves.</label></li>
            </ul>
        </div>
        <!-- Question 12: End -->


        <!-- Question 13 : Start-->
        <div class="question">
            <h1 class="qn-title">Q13) As a preventive medication for asymptomatic healthcare workers working in non-COVID19 hospitals, ICMR issues revised advisory on use of,</h1>
            <ul class="option-list">
                <li class="option"><input class="option-ip" type="radio" name="q13" id="A13" value="A"><label class="option-label" for="A">A) Goumutra (Cow Urine).</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q13" id="B13" value="B"><label class="option-label" for="B">B) Hydroxy-chloroquine.</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q13" id="C13" value="C"><label class="option-label" for="C">C) Coronil by Ramdev.</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q13" id="D13" value="D"><label class="option-label" for="D">D) Hydroxy-bromoquine.</label></li>
            </ul>
        </div>
        <!-- Question 13: End -->


        <!-- Question 14 : Start-->
        <div class="question">
            <h1 class="qn-title">Q14) What should be the proportion of Alcohol in Ethanol based Hand Sanitizer?</h1>
            <ul class="option-list">
                <li class="option"><input class="option-ip" type="radio" name="q14" id="A14" value="A"><label class="option-label" for="A">A) 89.3%</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q14" id="B14" value="B"><label class="option-label" for="B">B) 85%</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q14" id="C14" value="C"><label class="option-label" for="C">C) 96%</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q14" id="D14" value="D"><label class="option-label" for="D">D) 99.8%</label></li>
            </ul>
        </div>
        <!-- Question 14: End -->


        <!-- Question 15 : Start-->
        <div class="question">
            <h1 class="qn-title">Q15) On which animal, Thailand began trials of their COVID19 Vaccine?</h1>
            <ul class="option-list">
                <li class="option"><input class="option-ip" type="radio" name="q15" id="A15" value="A"><label class="option-label" for="A">A) Rat.</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q15" id="B15" value="B"><label class="option-label" for="B">B) Guinea Pig.</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q15" id="C15" value="C"><label class="option-label" for="C">C) Monkey.</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q15" id="D15" value="D"><label class="option-label" for="D">D) Chimpanzee.</label></li>
            </ul>
        </div>
        <!-- Question 15: End -->


        <!-- Question 16 : Start-->
        <div class="question">
            <h1 class="qn-title">Q16) Trees may help reduce the effects of global warming by ...</h1>
            <ul class="option-list">
                <li class="option"><input class="option-ip" type="radio" name="q16" id="A16" value="A"><label class="option-label" for="A">A) Increasing Oxygen Concentration in the Atmosphere.</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q16" id="B16" value="B"><label class="option-label" for="B">B) Losing their leaves in Winter.</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q16" id="C16" value="C"><label class="option-label" for="C">C) Providing shade from UV rays.</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q16" id="D16" value="D"><label class="option-label" for="D">D) Increasing Carbon-di-oxide Concentrations in the atmosphere.</label></li>
            </ul>
        </div>
        <!-- Question 16: End -->


        <!-- Question 17 : Start-->
        <div class="question">
            <h1 class="qn-title">Q17) What is the Name  of beer produced by  Mexican brewery Cervecería Modelo and owned by Belgian company AB InBev?</h1>
            <ul class="option-list">
                <li class="option"><input class="option-ip" type="radio" name="q17" id="A17" value="A"><label class="option-label" for="A">A) Corona Power.</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q17" id="B17" value="B"><label class="option-label" for="B">B) Corona Extra.</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q17" id="C17" value="C"><label class="option-label" for="C">C) Corona Strong.</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q17" id="D17" value="D"><label class="option-label" for="D">D) Corona Mild.</label></li>
            </ul>
        </div>
        <!-- Question 17: End -->


        <!-- Question 18 : Start-->
        <div class="question">
            <h1 class="qn-title">Q18) Which age group is more prone to be affected by COVID-19?</h1>
            <ul class="option-list">
                <li class="option"><input class="option-ip" type="radio" name="q18" id="A18" value="A"><label class="option-label" for="A">A) COVID19 infection is mild in children.</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q18" id="B18" value="B"><label class="option-label" for="B">B) COVID19 occurs in all age groups.</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q18" id="C18" value="C"><label class="option-label" for="C">C) Older person and persons with pre-existing medical conditions are at high risk to develop serious illness.</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q18" id="D18" value="D"><label class="option-label" for="D">D) All of the above.</label></li>
            </ul>
        </div>
        <!-- Question 18: End -->


        <!-- Question 19 : Start-->
        <div class="question">
            <h1 class="qn-title">Q19) A very heart-breaking video went viral when, "A Child was trying to wake his/her dead mother, who died of starvation during COVID19 lockdown, at a railway station." What was the station, which somehow connected to Revolutionary Khudiram Bose?</h1>
            <ul class="option-list">
                <li class="option"><input class="option-ip" type="radio" name="q19" id="A19" value="A"><label class="option-label" for="A">A) New Alipur Station</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q19" id="B19" value="B"><label class="option-label" for="B">B) Muzaffarnagar Station</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q19" id="C19" value="C"><label class="option-label" for="C">C) Muzaffarpur Station</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q19" id="D19" value="D"><label class="option-label" for="D">D) Kanpur Central Station</label></li>
            </ul>
        </div>
        <!-- Question 19: End -->


        <!-- Question 20 : Start-->
        <div class="question">
            <h1 class="qn-title">Q20) Which of the following was discovered by Issac Newton during the lockdown during Great Plague of London?</h1>
            <ul class="option-list">
                <li class="option"><input class="option-ip" type="radio" name="q20" id="A20" value="A"><label class="option-label" for="A">A) Laws of Motion.</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q20" id="B20" value="B"><label class="option-label" for="B">B) Laws governing the Reflection of Light.</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q20" id="C20" value="C"><label class="option-label" for="C">C) Laws of Cooling</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q20" id="D20" value="D"><label class="option-label" for="D">D) Laws of Gravity.</label></li>
            </ul>
        </div>
        <!-- Question 20: End -->

        
        <!-- Question 21 : Start-->
        <div class="question">
            <h1 class="qn-title">Q21) The Mughals showed more interest in gardens and their development. Who ordered the planting of trees in various parts of his kingdom?</h1>
            <ul class="option-list">
                <li class="option"><input class="option-ip" type="radio" name="q21" id="A21" value="A"><label class="option-label" for="A">A) Akbar.</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q21" id="B21" value="B"><label class="option-label" for="B">B) Humayun.</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q21" id="C21" value="C"><label class="option-label" for="C">C) Babur.</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q21" id="D21" value="D"><label class="option-label" for="D">D) Bahadur Sah-l.</label></li>
            </ul>
        </div>
        <!-- Question 21: End -->

        
        <!-- Question 22 : Start-->
        <div class="question">
            <h1 class="qn-title">Q22) The writer of the book "Dharti Ki Pukar", was famous for,</h1>
            <ul class="option-list">
                <li class="option"><input class="option-ip" type="radio" name="q22" id="A22" value="A"><label class="option-label" for="A">A) Narmadabachao Movement.</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q22" id="B22" value="B"><label class="option-label" for="B">B) Save the Bhagirathi Movement.</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q22" id="C22" value="C"><label class="option-label" for="C">C) Chipko Movement.</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q22" id="D22" value="D"><label class="option-label" for="D">D) Silent Valley Movement.</label></li>
            </ul>
        </div>
        <!-- Question 22: End -->

        
        <!-- Question 23 : Start-->
        <div class="question">
            <h1 class="qn-title">Q23) According to the 2019 report, about how much area is covered by forests in India?</h1>
            <ul class="option-list">
                <li class="option"><input class="option-ip" type="radio" name="q23" id="A23" value="A"><label class="option-label" for="A">A) 21.67%</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q23" id="B23" value="B"><label class="option-label" for="B">B) 33.34%</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q23" id="C23" value="C"><label class="option-label" for="C">C) 19.87%</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q23" id="D23" value="D"><label class="option-label" for="D">D) 45.89%</label></li>
            </ul>
        </div>
        <!-- Question 23: End -->

        
        <!-- Question 24 : Start-->
        <div class="question">
            <h1 class="qn-title">Q24) If 'X' is the primary organ in the respiratory system of human body. Then what is 'X' of Earth?</h1>
            <ul class="option-list">
                <li class="option"><input class="option-ip" type="radio" name="q24" id="A24" value="A"><label class="option-label" for="A">A) Congo Basi Forest.</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q24" id="B24" value="B"><label class="option-label" for="B">B) The Sundarbans.</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q24" id="C24" value="C"><label class="option-label" for="C">C) Black Forest.</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q24" id="D24" value="D"><label class="option-label" for="D">D) Amazon Rain Forest.</label></li>
            </ul>
        </div>
        <!-- Question 24: End -->

        
        <!-- Question 25 : Start-->
        <div class="question">
            <h1 class="qn-title">Q25) If India estimated to spend ₹323053 crore (10.61%) in Defence, ₹30023 crores (00.98%) in Scientific Departments, how much did India estimate to spend in Health?</h1>
            <ul class="option-list">
                <li class="option"><input class="option-ip" type="radio" name="q25" id="A25" value="A"><label class="option-label" for="A">A) ₹219953 crores (7.23%).</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q25" id="B25" value="B"><label class="option-label" for="B">B) ₹258893 crores (8.51%).</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q25" id="C25" value="C"><label class="option-label" for="C">C) ₹67484 crores (2.21%).</label></li>
                <li class="option"><input class="option-ip" type="radio" name="q25" id="D25" value="D"><label class="option-label" for="D">D) ₹177362 crores (5.83%).</label></li>
            </ul>
        </div>
        <!-- Question 25: End -->

        
        <!-- Question 15 : Start--
        <div class="question">
            <h1 class="qn-title">Q15) </h1>
            <ul class="option-list">
                <li class="option"><input class="option-ip" type="radio" name="q15" id="A15" value="A"><label class="option-label" for="A">A) </label></li>
                <li class="option"><input class="option-ip" type="radio" name="q15" id="B15" value="B"><label class="option-label" for="B">B) </label></li>
                <li class="option"><input class="option-ip" type="radio" name="q15" id="C15" value="C"><label class="option-label" for="C">C) </label></li>
                <li class="option"><input class="option-ip" type="radio" name="q15" id="D15" value="D"><label class="option-label" for="D">D) </label></li>
            </ul>
        </div>
        !-- Question 15: End -->


    </div>

    <ul id="submit-block" style="display: flex; flex-wrap: wrap; width: 80%; text-align: center; margin:auto; padding:5px; background: rgb(255, 204, 204); border-radius:1rem;">
        <button class="generic-ip" id="submit" type="submit" style="margin: 10px 60px;">Submit&nbsp;&nbsp;</button>
        <h3 id="response" style="padding: 0 margin:0;"></h3>
    </ul>
</form>



<style>
#questions-list
{
    display: none;
    position: relative;
}
#qn-cover
{
    position: absolute;
    top:0; bottom:0; left:0; right:0;
    background: #ffffff00;
    z-index: 10;
    display: none;
}
#timer
{
    position:fixed;
    bottom:0; left:0;
    background: #8a0000;
    z-index: 10;
    padding:10px;
    margin:10px;
    color: #fff;
    text-align: center;
    border-radius: 5px;
}
.question
{
    background:#fff3ad;
    padding:5px;
    margin:20px 0;
    border-radius: 1rem;
    z-index: 1;
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
    align-items: flex-start;
}
.option-ip
{
    flex-grow: 0;
    flex-shrink: 0;
    appearance: none;
    -moz-appearance: none;
    width:30px;
    height: 30px;
    margin:0 10px 0 0;
    border: 4px solid rgb(0, 62, 177);
    border-radius: 0%;
    transition: .2s all linear;
    transform: scale(1);
}
.option-ip:checked
{
    border: 6px solid green;
    background: rgb(238, 255, 0);
    transform: scale(1.05);
    border-radius: 50%;
    
}
.option-label
{
    padding:0;
    margin:0;
}

.generic-ip, #response
{
    text-align: center;
    flex-basis: 100%;
    margin:2px 10px;
    padding: 10px;
}

#submit {display:none;}

.submitting
{   
    
}
.submitting::after
{
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 3px dotted black;
    border-radius: 50%;
    background-color: transparent;

    animation: bg-rotate .5s infinite;
    
}
@keyframes bg-rotate {
  0%   {transform: rotate(0deg);}
  50% {transform: rotate(360deg);}
  100% {transform: rotate(0deg);}

}
</style>



<script>

var qnStat = (id) => {return document.getElementById(id).checked == true ? true : false;} //enter the true options qnStat(trueOption)
function calcScore(ans){
    var score = 0;
    var option = document.getElementsByClassName('option-ip');
    ans.forEach(element => {
        if(option[element].checked == true) score = score+5;
    });

    return score;
};

const scriptURL = 'https://script.google.com/macros/s/AKfycbxVwU64hxFdDj3ZVuTgFNfeXaHZ7gEgThKXPQNy/exec';
const question_form = document.forms['quiz'];
const kyc_form = document.forms['kyc'];
const truth = [3,5,11,13,19,22,26,28,33,38,43,47,49,55,58,60,65,71,74,79,80,86,88,95,98];
kyc_form.addEventListener('submit', start);

function start (event)
{
    console.log("Start");
    event.preventDefault();
    try {
        if (localStorage.getItem("COVID19-Quiz") == "true")
        {
            throw "err";
            console.log("err");
        }
        else{
            
        }
    } 
    catch(err) {
            alert("You've already participated!");
            return false;
        }

    document.getElementById('questions-list').style.display='block';
    document.getElementById('submit').style.display='block';
    var total_time=600;//in seconds
    var timer = document.getElementById('timer');
    var refreshIntervalId = setInterval(() => {
        var min = Math.trunc(total_time/60);
        var sec = total_time%60;
        timer.innerHTML = "remaining<br>"+min+" min. : "+sec+" sec.";
        total_time = total_time-1;
        if (total_time == -1) {
            clearInterval(refreshIntervalId);
            timer.innerHTML="Time Over";
            document.getElementById('qn-cover').style.display='block';
            window.scrollTo(0,document.body.scrollHeight);
            submit();
        }
    }, 1000);
}

function showAnswers(ans)
{
    var option = document.getElementsByTagName('Label');
    for(i=0;i<option.length;i++)
    {
        option[i].style.background='#f005';
    };
    ans.forEach(element => {
        option[element].style.background='#0f05'
    });
}

question_form.addEventListener('submit', submit);
function submit(event){
    try{event.preventDefault();}
    finally{}
    document.getElementById('qn-cover').style.display='block';
    document.getElementById('submit').classList.add("submitting");
    document.getElementById('submit').innerText='Submitting';

    var data = {
        "name":        "",
        "email":       "",
        "phone":       "",
        "score":       "",
        "institution": "",
        "dept":        ""
    };
    data.name = document.getElementById('qz-name').value;
    data.email = document.getElementById('qz-email').value;
    data.phone = document.getElementById('qz-phone').value;
    data.score = calcScore(truth);
    data.institution = document.getElementById('qz-institution').value;
    data.dept = document.getElementById('qz-dept').value;
    
    
    fetch(scriptURL, {method: 'POST', body: JSON.stringify(data), mode: 'no-cors', cache: 'no-cache', headers:{'Content-Type': 'application/json'}})
        .then(response => {
            document.getElementById('submit').innerText='Submit Successful!';
            document.getElementById('response').innerHTML = "Successfully Submitted! You have scored " + data.score +". An email has been sent to "+data.email+" along with your participation certificate.<br> If any problem occours (Submission Error/Email Not Arrived etc.) please contact us via email, <a href='mailto:LightOfScience@outlook.com'>LightOfScience@outlook.com</a>";
            document.getElementById('submit').classList.remove("submitting");
            localStorage.setItem("COVID19-Quiz",true);
            showAnswers(truth);
            document.getElementById('timer').style.display='none';
            })
        .catch(error => document.getElementById('response').innerHTML = "Error!<br>Please contact us via email, <a href='mailto:LightOfScience@outlook.com'>LightOfScience@outlook.com</a>")
    
}
</script>