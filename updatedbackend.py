import random

def rps_game():
    choices = ['rock', 'paper', 'scissors']
    win_count = 0
    loss_count = 0

    print("Welcome to Rock, Paper, Scissors!")
    print("Enter your choice (rock, paper, scissors), 'reset' to reset score, or 'quit' to exit.")

    while True:
        user_choice = input("Your choice: ").lower()

        if user_choice == 'quit':
            print("Bye!")
            break

        if user_choice == 'reset':
            win_count = 0
            loss_count = 0
            print("Score has been reset.")
            continue

        if user_choice not in choices:
            print("Did you read the instructions? Please choose rock, paper, or scissors.")
            continue

        computer_choice = random.choice(choices)
        print(f"Computer chose: {computer_choice}")

        if user_choice == computer_choice:
            print("It's a tie!")
        elif (user_choice == 'rock' and computer_choice == 'scissors') or \
             (user_choice == 'paper' and computer_choice == 'rock') or \
             (user_choice == 'scissors' and computer_choice == 'paper'):
            print("You win!")
            win_count += 1
        else:
            print("Computer wins!")
            loss_count += 1

        print(f"Score: Win: {win_count} Loss: {loss_count}")

rps_game()

