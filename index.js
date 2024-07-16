#! /usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "userId",
        message: "Kindly Enter your ID"
    },
    {
        type: "number",
        name: "userPin",
        message: "Kindly Enter your PIN"
    }, {
        type: "list",
        name: "accountType",
        choices: ["Current ", "Saving"],
        message: "Select your Account Typoe"
    }, {
        type: "list",
        name: "transactionType",
        choices: ["Fast Cash", "Withdraw"],
        message: "Select your transaction",
        when(answers) {
            return answers.accountType;
        },
    }, {
        type: "list",
        name: "amount",
        choices: [1000, 2000, 10000, 100000],
        message: "Select your Amount",
        when(answers) {
            return answers.transactionType == "Fast Cash";
        },
    }, {
        type: "number",
        name: "amount",
        choices: ["Fast Cash", "Withdraw"],
        message: "Select your Amount",
        when(answers) {
            return answers.transactionType == "Withdraw";
        },
    }
]);
if (answers.userId && answers.userPin) {
    const balance = Math.floor(Math.random() * 10000000);
    console.log(balance);
    const EnteredAmount = answers.amount;
    if (balance >= EnteredAmount) {
        const remianing = balance - EnteredAmount;
        console.log("Your Remaining Balance is", remianing);
    }
    else {
        console.log("Insuficient Balance");
    }
}
