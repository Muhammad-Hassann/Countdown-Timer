#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

console.log(chalk.bold.magenta("\n\t######################################"));

console.log(chalk.bold.blue("\n\t\t ⏱  Countdown Timer ⏱ \n"));

console.log(chalk.bold.magenta("\t######################################"));

const userInput = await inquirer.prompt({
  name: "time",
  message: "Enter time in seconds",
  type: "input",
});

if (isNaN(userInput.time)) {
  console.log(`Please enter a valid number`);
} else if (userInput.time < 0) {
  console.log("You can't have negative time");
} else {
  showCountdown(userInput.time);
}

function showCountdown(initialNum: number) {
  let currentNum = initialNum;

  let interval = setInterval(() => {
    if (currentNum > 0) {
      console.log(`00 : ${currentNum.toString().padStart(2, "0")}`);
      currentNum--;
    } else {
      clearInterval(interval);
      console.log(chalk.bold.blue("\n ⌛  Countdown Finished! ⌛"));
    }
  }, 1000);
}
