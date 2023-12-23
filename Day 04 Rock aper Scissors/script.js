function playGame(userChoice) {
    const choices = ['Rock 👊🏼', 'Paper ✋🏼', 'Scissors ✌🏼'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
    let result = '';
  
    if (userChoice === computerChoice) {
        document.getElementById('result').style.color='black';
      result = "🤝Match Draw!🤝";
    } else if (
      (userChoice === 'Rock 👊🏼' && computerChoice === 'Scissors ✌🏼') ||
      (userChoice === 'Paper ✋🏼' && computerChoice === 'Rock 👊🏼') ||
      (userChoice === 'Scissors ✌🏼' && computerChoice === 'Paper ✋🏼')
    ) {
        document.getElementById('result').style.color='green';
      result = '🎉You Win!🎉';
    } else {
        document.getElementById('result').style.color='red';
      result = '🥲You Lose!🥲';
    }
    
    document.getElementById('com_choice').innerText="Computer Choice : "+computerChoice;
    document.getElementById('user_choice').innerText="Your Choice : "+ userChoice;
    document.getElementById('result').innerHTML = result;
  }