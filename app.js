const inquirer = require('inquirer');

const promptUser = () => {
return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username'
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:'
        }
    ]);
};


const promptProject = portfolioData => {
 
    console.log(`
  =================
  Add a New Project
  =================
  `);
   // if no projects array-create one
   if(!portfolioData.projects) {
    portfolioData.projects=[];
  }
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)'
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you build this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)'
      },
      {
        type: 'confirm',
        name: 'feature',
        message: 'Would you like to feature this project?',
        default: false
      },
      {
        type: 'confirm',
        name: 'confirmAddProject',
        message: 'Would you like to enter another project?',
        default: false
      }
      // add data to projects array
      .then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
          return promptProject(portfolioData);
        } else {
          return portfolioData;
        }
      })
    ]);
  };
  // chain functions together using promises and then() method
  promptUser()
    .then(promptProject)
    .then(portfolioData => {
      console.log(portfolioData);
  });
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

