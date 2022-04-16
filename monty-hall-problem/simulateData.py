import requests
import random
import os
import time

i=1
dataset = input("Number of dataset :: ")
dataset = int(dataset)
os.system("cls")


while (i <= dataset):
    os.system("color F5")
    print ("\n")
    print (" ----------------------------------------------- ")
    print ("  Monty Hall Problem (Experimental Verification)")
    print (" ----------------------------------------------- ")

    player_options = ['A', 'B', 'C']                # Player choice of doors > A, B, C

    prize = random.choice(player_options)      # Computer calculates random between A,B,C to store the prize

    host_options = ['A', 'B', 'C']
    host_options.remove(prize)                      # Host's options to reveal doors

    print ("\n")
    ################################################################################################################
    #player_choice1 = input("Choose your door :: ").upper()  # Player's first Choice as uppercase
    player_choice1 = random.choice(player_options)  # Randomized Player's first Choice as uppercase
    ################################################################################################################

    if player_choice1 == host_options[0]:
        host_choice = host_options[1]               # Host reveals Door
    elif player_choice1 == host_options[1]:
        host_choice = host_options[0]               # Host reveals Door
    else:
        host_choice = random.choice(host_options)   # Host reveals Door

    print ("\n\n")
    print ("Host revealed the DOOR %s and there's NOTHING beghind DOOR %s" %(host_choice, host_choice))
    print ("\n\n")
        
    player_options2 = ['A', 'B', 'C']
    player_options2.remove(host_choice) # Players second choice -- for random value generation

    #############################################################################################################################
    #player_choice2 = input("New choice of door :: ").upper()  # Player Swithching Choice
    player_choice2 = random.choice(player_options2)  # Randomized Player Swithching Choice
    #############################################################################################################################

    while True: # loop for illegal choice

        if player_choice2 == player_choice1:
            switching_status = "Did NOT Switched"
            break
            
        if player_choice2 == host_choice:
            print ("Illegal Choice! Try again")
            player_choice2 = input("New choice of door :: ").upper()
            pass
            
        else:
            switching_status = "Switched"
            break
            

    if player_choice2 == prize:
        player_status = "WON"
    else:
        player_status = "LOST"

    # Game Status
    print ("\n\n")
    print ("Options given to the Player :: A, B ,C")
    print ("Prize is behind :: %s " %prize)
    print ("Player Choose :: %s" %player_choice1)
    print ("Game Host reveals an empty door at :: %s" %host_choice)
    print ("\n\n")
    print ("Player %s" %(switching_status))
    print ("Player %s" %(player_status))
    print ("\n\n")

    

    i=i+1 # next game
    #time.sleep(1)
    urlAPI = "https://script.google.com/macros/s/AKfycbwzTzelmUJfJwEQIuzk8pkw0rpvJ_ISKF24fuh6M5XKXABDqvuGAIvPrsM9VBT31TKxAw/exec";
    data = {"name":"simulation", "choice1":player_choice1, "choice2":player_choice2, "prize":prize}
    try:
        err = requests.get(urlAPI,data)
    except err:
        print(err)
    os.system("cls")