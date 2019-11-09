//f23bffc8f57987ab6c6ba24974f6fecb98b4271e

const axios = require("axios");
const inquirer = require("inquirer");
const fs = require('fs')
inquirer.prompt([
  {
    type: "input",
    message: "Please enter your username:",
    name: "username"
  },
  {
      type: 'list',
      name: 'color',
      message: 'what is your favorite color?',
      choices: ['red', 'green', 'blue']
  }
]).then( answers => {
  axios.get(`https://api.github.com/users/${answers.username}`)
    .then( response => {
      console.log(response);
      console.log(answers.color)
    
      fs.writeFile(response.name + ".json", JSON.stringify(answers, null, 2), err => {
          if(err) {
              return console.log("err")
          }
          console.log("done")
      })

    });
});