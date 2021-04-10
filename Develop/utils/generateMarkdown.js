
//array for link and description of license 
var licenseArr = [
  {
    license: 'GNU GPLv3',
    link: 'https://spdx.org/licenses/GPL-3.0-or-later.html',
    description:'Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available.'
  }, 
  {
    license:'GNU AGPLv3',
    link: 'https://spdx.org/licenses/AGPL-3.0-or-later.html',
    description: 'Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights'
  }, 
  {
    license: 'GNU LGPLv3',
    link:'https://spdx.org/licenses/LGPL-3.0-or-later.html',
    description:'Permissions of this copyleft license are conditioned on making available complete source code of licensed works and modifications under the same license or the GNU GPLv3. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work through interfaces provided by the licensed work may be distributed under different terms and without source code for the larger work.'
  }, 
  {
    license: 'Mozilla Public License 2.0',
    link:'https://spdx.org/licenses/MPL-2.0.html',
    description:'Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.'
  }, 
  {
    license:'Apache License 2.0',
    link: 'https://spdx.org/licenses/Apache-2.0.html',
    description:'A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.'
  }, 
  {
    license:'MIT License', 
    link:'https://spdx.org/licenses/MIT.html',
    description:'A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.'
  }, 
  {
    license:'NoBoost Software License 1.0', 
    link:'https://spdx.org/licenses/BSL-1.0.html',
    description:'A simple permissive license only requiring preservation of copyright and license notices for source (and not binary) distribution. Licensed works, modifications, and larger works may be distributed under different terms and without source code.'
  },
  {
    license:'The Unlicense',
    link:'https://spdx.org/licenses/Unlicense.html',
    description:'A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.'
  }

]
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license) {
    return '';
  } 
    return `
      ![badge](https://img.shields.io/badge/license-${license}-brightgreen)
    `;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license) {
    for( var i = 0; i< licenseArr.length; i++) {
      if(license[0] === licenseArr[i].license) { 
        return  `${licenseArr[i].link}`
      }  
    }
  } else {
    return '';
  }  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license) {
    for( var i = 0; i< licenseArr.length; i++) {
      if(license[0] === licenseArr[i].license) {
        return  ` 
    ## License
    This application is covered by the ${license} license. 
    Link: ${renderLicenseLink(license)}
    Description:${licenseArr[i].description}`
      }  
    }
  } else {
    return '';
  } 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
//console.log(data)
  return `
    # ${data.title}

    ${renderLicenseBadge(data.license)}

    ## Description
    ${data.description}

    ## Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    
    ${renderLicenseSection(data.license)}


    ## Contributing
    ${data.contributing}

    ## Tests
    ${data.test}

    ## Questions
    Find me on GitHub: [${data.username}](https://github.com/${data.username})
   
    Email me with any questions: ${data.email}


    This README was generated with ❤️ by [README-generator](https://github.com/latoyadawson/readME-generator)
  `;
}

module.exports = generateMarkdown;
