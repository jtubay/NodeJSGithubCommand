//f23bffc8f57987ab6c6ba24974f6fecb98b4271e

const axios = require("axios");
const inquirer = require("inquirer");


var MarkdownIt = require('markdown-it'),
md = new MarkdownIt()

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
      console.log(response.data.bio);
      console.log(response.data.name)
      console.log(response.data.repos_url)
      console.log(response.data.company)
      console.log(response.data.location)
      console.log(response.data.followers)
      console.log(response.data.following)
      console.log(response.data.public_repos)
      console.log(response.data.avatar_url)
      

      

      //const test = `<h1>${response.data.bio}</h1><hr> ${response.data.name} ${response.data.company}`
      
     const test = md.render(`${response.data.name}`)

    
      fs.writeFile("me.md", JSON.stringify(test), err => {
          if(err) {
              return console.log("err")
          }
          console.log("done")
        
      })

    });
});

