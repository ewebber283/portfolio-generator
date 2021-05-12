const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'imput',
            name: 'name',
            message: 'What is your name?'
        }
    ])
    .then(answers => console.log(answers));
//const fs = require('fs');
//const generatePage = require('./src/page-template.js');
//holds command line arguments
//const profileDataArgs = process.argv.slice(2);
// extract arguments and store in variable
//const [name, github] = profileDataArgs;
//const pageHTML = generatePage(name, github);
// generates the page


//fs.writeFile('./index.html', generatePage(name, github), err => {
  //  if (err) throw new err;

    //console.log('Portfolio complete! Check out index.html to see the output!');
//});

