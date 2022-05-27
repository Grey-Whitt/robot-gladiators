# robot-gladiators

## Description:
This was my first introduction to the world of JavaScript. Robot Gladiators is a turn based fighting game that lives in the browsers alert system, each round the 
player is prompted with two options "FIGHT" or "RUN". The goal is to last as many rounds as possible.

With this project I learned how to:  

Identify and declare variables containing primitive and object data types in JavaScript  

Write for loops to iterate over strings and arrays    

Write conditional statements using if/else and switch.  

Explain the importance of objects in JavaScript and create objects that contain both properties and methods.  

Explain and implement the difference between function declarations and expressions.  

Explain and implement comparison and logical operators.  
  
# Table of Contents

- [Repository](#repository)
- [Examples](#examples)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Questions](#questions)
- [Contributions](#contributing)
- [License](#license)

## Repository:

---

- [My Github Profile](https://github.com/Grey-Whitt)

- [This Repository](https://github.com/Grey-Whitt/robot-gladiators)

## Examples

---

This is the logic that handles the flow of the game  
```
//function to start new game 
var startGame = function() {
    //resets stats
    playerInfo.reset();

    for (var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
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
            if (playerInfo.health > 0 && i < enemyInfo.length - 1){
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
```



## Usage

---

Download the repository and open index.html


## Technologies Used

---

JavaScript

## Questions

---

If you have any questions feel free to email me or find me on LinkedIn

[greywhitt@gmail.com](mailto:greywhitt@gmail.com)

[My LinkedIn](https://www.linkedin.com/in/grey-whittenberger)

[www.greywhitt.com](www.greywhitt.com)

## Contributing:

---

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.1%20adopted-ff69b4.svg)](./uploads/CODE_OF_CONDUCT.md)

Contributions, issues and feature requests are welcome.

## License:

---

![MIT License](https://img.shields.io/badge/license-MIT-blue)

Copyright 2022 Grey Whittenberger

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

For more information about licenses, please visit:
[License](https://opensource.org/licenses/MIT)
