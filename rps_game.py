import random

def rps_game():
    choices = ['rock', 'paper', 'scissors']
    
    print("Welcome to Rock, Paper, Scissors!")
    print("Enter your choice (rock, paper, scissors) or 'quit' to exit.")

    while True:
        user_choice = input("Your choice: ").lower()
        
        if user_choice == 'quit':
            print("Bye!")
            break
            
        if user_choice not in choices:
            print("Did you even read the instructions? Please choose rock, paper, or scissors.")
            continue
            
        computer_choice = random.choice(choices)
        print(f"Computer chose: {computer_choice}")
        
        if user_choice == computer_choice:
            print("It's a tie!")
        elif (user_choice == 'rock' and computer_choice == 'scissors') or \
             (user_choice == 'paper' and computer_choice == 'rock') or \
             (user_choice == 'scissors' and computer_choice == 'paper'):
            print("You win!")
        else:
            print("Computer wins!")

rps_game()
