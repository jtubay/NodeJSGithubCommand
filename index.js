//f23bffc8f57987ab6c6ba24974f6fecb98b4271e

const axios = require("axios");
const inquirer = require("inquirer");
inquirer.prompt([
  {
    type: "input",
    message: "Please enter your username:",
    name: "username"
  }
]).then( answers => {
  axios.get(`https://api.github.com/users/${answers.username}`)
    .then( response => {
      console.log(response);
    });
});