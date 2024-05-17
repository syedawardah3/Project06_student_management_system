#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.yellowBright.bold.underline('\t\n **************************WELCOME TO WARDAH SHAH STUDENT MANAGEMENT APP************************ \t\t'))

const randomNumber: number = Math.floor(10000 + Math.random() * 90000);

let myBalance: number = 0;

let answer = await inquirer.prompt([
    {
        name: "students",
        type: "input",
        message: chalk.magentaBright("Enter your name: "),
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return chalk.redBright("Please enter a non-empty value.");
        },
    },
    {
        name: "courses",
        type: "list",
        message: chalk.blueBright.italic("Select the course to enroll in:"),
        choices: ["HTML", "CSS", "JavaScript", "TypeScript", "Python"],
    },
]);

const tutionFees: { [key: string]: number } = {
    "HTML": 3000,
    "CSS": 5000,
    "JavaScript": 7000,
    "TypeScript": 8000,
    "Python": 8000,
};

console.log(chalk.cyanBright.bold(`\nTuition Fee for ${answer.courses}: ${tutionFees[answer.courses]}/-`));
console.log(chalk.redBright(`Your current balance: ${myBalance}`));

let paymentType = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: chalk.greenBright("Select a payment method:"),
        choices: ["Bank Transfer", "Easypaisa", "Jazz Cash"],
    },
    {
        name: "amount",
        type: "input",
        message: chalk.redBright("Enter the amount to pay:"),
        validate: function (value) {
            if (parseFloat(value) > 0) {
                return true;
            }
            return chalk.yellowBright("Please enter a positive value.");
        },
    },
]);

console.log(chalk.magentaBright(`\nYou selected the payment method: ${paymentType.payment}\n`));

const courseTutionFees = tutionFees[answer.courses];
const paymentAmount = parseFloat(paymentType.amount);

if (courseTutionFees === paymentAmount) {
    console.log(chalk.grey(`\nCongratulations! You have successfully enrolled in the ${answer.courses} course.\n`));

    let nextStep = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: chalk.redBright("What would you like to do next?"),
            choices: ["View Status", "Exit"],
        },
    ]);

    if (nextStep.select === "View Status") {
        console.log(chalk.magentaBright.bold.underline(`\n***Student Status***`));
        console.log(chalk.yellowBright(`Student Name: ${answer.students}`));
        console.log(chalk.yellowBright(`Student ID: ${randomNumber}`));
        console.log(chalk.yellowBright(`Enrolled Course: ${answer.courses}`));
        console.log(chalk.yellowBright(`Paid Tuition Fee: ${paymentAmount}`));
        console.log(chalk.yellowBright(`Current Balance: ${myBalance += paymentAmount}`));
    } else {
        console.log(chalk.blueBright(`\n***Thank you for using our system!***\n`));
    }

} else {
    console.log(chalk.yellowBright(`\nYou have not paid the full tuition fee for the ${answer.courses} course.\n`));
}