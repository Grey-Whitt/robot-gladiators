// Game States
// "Win" - Players robot has defeated all enemy robots
//    * Fight all enemy robots
//    * Defeat each enemy robot
// "Lose" - Player robot's health is zero or less

var fightOrSkip = function() {
    //ask user if they want to fight or skip
    var prompFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    prompFight = prompFight.toLocaleLowerCase();
//                                                                              //could also be done using falsy
    if (prompFight === "" || prompFight === null) {                             // if (!promptFight) {
        window.alert("You need to provide a valid answer! please try again.");  //   window.alert("You need to provide a valid answer! Please try again.");
        return fightOrSkip();                                                   //   return fightOrSkip();
    }                                                                           //  }

    //if user picks skip confirm and then stop the loop 
    if (prompFight === "skip") {

        //confirm the user would like to skip 
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        //if true then leave fight 
        if (confirmSkip) {
            window.alert(playerInfo.Name + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping, but don't let them go into the negative
            playerInfo.money = Math.max(0, playerInfo.money - 10);
      
            // return true if user wants to leave
            return true;
        }
    }
    return false;
}

var fight = function (enemy) {
    while (playerInfo.Health > 0 && enemy.health > 0) {
        
        if (fightOrSkip()) {
            // if true, leave fight by breaking loop
            break;
        }

        // generate random damage value based on player's attack power
        var damage = randomNumber(playerInfo.Attack - 3, playerInfo.Attack);
        console.log(damage)

        enemy.health = Math.max(0, enemy.health - damage);
        console.log(enemy.health)

        console.log(
            playerInfo.Name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
        );

        // check enemy's health
        if (enemy.health <= 0) {
            window.alert(enemy.name + ' has died!');

            // award player money for winning
            playerInfo.Money = playerInfo.Money + 20;

            // leave while() loop since enemy is dead
            break;
        } else {
            window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
        }

        // remove players health by subtracting the amount set in the enemy.attack variable
        var damage = randomNumber(enemy.attack - 3, enemy.attack);

        playerInfo.Health = Math.max(0, playerInfo.Health - damage);

        console.log(
            enemy.name + ' attacked ' + playerInfo.Name + '. ' + playerInfo.Name + ' now has ' + playerInfo.Health + ' health remaining.'
        );

        // check player's health
        if (playerInfo.Health <= 0) {
            window.alert(playerInfo.Name + ' has died!');
            // leave while() loop if player is dead
            break;
        } else {
            window.alert(playerInfo.Name + ' still has ' + playerInfo.Health + ' health left.');
        }
    }
};

//function to start new game 
var startGame = function() {
    //resets stats
    playerInfo.reset();

    for (var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.Health > 0) {
            // let user know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            // use debugger to pause script from running and check what's going on at that moment in the code
            //debugger;

            // pick new enemy to fight based on the index of the enemy.names array
            var pickedEnemyObj = enemyInfo[i];

            // reset enemy.health before starting new fight
            pickedEnemyObj.health = randomNumber(40, 60);

            // pass the pickedEnemy.name variable's value into the fight function, where it will assume the value of the enemy.name parameter
            fight(pickedEnemyObj);
            
            //if we aren't at the last enemy in the array
            if (playerInfo.Health > 0 && i < enemyInfo.length - 1){
                //ask user if they want to use the store before the next round
                var storeConfirm = window.confirm("Visit the store before the next round?");

                // if yes  take them to the store() function 
                if (storeConfirm) {
                    shop();
                }
            }
        } else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }

    endGame();

};

// end the game 
var endGame = function() {
    // if the player is alive, they win
    if (playerInfo.Health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.Money + ".");
    } else {
        window.alert("You've lost your robot in battle.");
    }

    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        //restart
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!")
    }
};

var shop = function() {
    // ask the play what they would like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE."
    );
    shopOptionPrompt = parseInt(shopOptionPrompt);

    switch(shopOptionPrompt) {
        case 1:
            playerInfo.refillHealth();
            break;
        
        case 2:
            playerInfo.upgradeAttack();
            break;
            
        case 3:
            window.alert("Leaving the store");

            //do thing, so function will end
            break;

        default:
            window.alert("you did not pick a valid option, try again.");
            shop();
            break;
    }
};


var randomNumber = function(min, max) {
    var value =  Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};

//get name function 
var getPlayerName = function() {
    var name = "";

    while (name === "" || name === null) {
        name = prompt("What is your robot's name?");
    }

    console.log("Your robot's name is " + name);
    return name;
}

var playerInfo = {
    Name: getPlayerName(),
    Health: 100,
    Attack: 10,
    Money: 10,

    reset: function() {
        this.Health = 100;
        this.Attack = 10;
        this.Money = 10;
    },

    refillHealth: function() {
        if (this.Money >= 7) {
          window.alert("Refilling player's health by 20 for 7 dollars.");
          this.Health += 20;
          this.Money -= 7;
        } 
        else {
          window.alert("You don't have enough money!");
        }
    },

    upgradeAttack: function() {
        if (this.Money >= 7) {
          window.alert("Upgrading player's attack by 6 for 7 dollars.");
          this.Attack += 6;
          this.Money -= 7;
        } 
        else {
          window.alert("You don't have enough money!");
        }
    }
};

var enemyInfo = [
    {
      name: "Roborto",
      attack: randomNumber(10, 14)
    },
    {
      name: "Amy Android",
      attack: randomNumber(10, 14)
    },
    {
      name: "Robo Trumble",
      attack: randomNumber(10, 14)
    }
];

//start the game 
startGame();