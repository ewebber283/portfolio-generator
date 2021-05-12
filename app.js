const fs = require('fs');

const generatePage = require('./src/page-template.js');
//holds command line arguments

const profileDataArgs = process.argv.slice(2);
// extract arguments and store in variable
const [name, github] = profileDataArgs;

// generates the page


fs.writeFile('./index.html', generatePage(name, github), err => {
    if (err) throw new err;

    console.log('Portfolio complete! Check out index.html to see the output!');
})

