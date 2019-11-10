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
      choices: ['red', 'green', 'blue', 'purple', 'pink', 'orange']
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
      const imageUrl = response.data.avatar_url
      

      

  
     const test = `<div style=background-color:grey;><h1 style=color:${answers.color}>${response.data.name}</h1>![avatar](${imageUrl})<h3>Bio: ${response.data.bio}</h3><h4>Repo URL: ${response.data.repos_url}</h4><h4>Public Repos: ${response.data.public_repos}</h4><h4>Follower: ${response.data.followers}</h4><h4>Following: ${response.data.following}</h4><h4>Location: ${response.data.location}</h4></div>`

    
      fs.writeFile("output.md", JSON.stringify(test), err => {
          if(err) {
              return console.log("err")
          }
          console.log("done")
        
      })

    });
});

