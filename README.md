# NoSQL Social Network API
![license_badge](https://img.shields.io/badge/license-MIT-blueviolet)


## Description
This application is a back-end API framework for an online social network. The application has full CRUD functionality, using MongoDB & Mongoose to manage a database of user information & content. 

---

## Table of Contents
* [Installation](#installation)
* [Walkthrough](#walkthrough)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Questions](#questions)

---

## Installation 
Before installing, please make sure you have node.js installed locally. If you don't already have node.js, you can download it via their [website](https://nodejs.dev/). After cloning this repo, open the integrated terminal in VS Code & install the necessary npm packages. A package.json file already exists with listed dependencies, so you can simply enter "npm install" to acquire the packages. Next, simply type 'npm start' in your terminal to run the application. 

---

## Walkthrough
[Walkthrough_Video](https://drive.google.com/file/d/1BwnqaxUqWpEVMvg9DSUS5n6KZZoTredf/view?usp=sharing)

## Usage
The application's database is based on users & thoughts, but also includes friends & reactions. Currently, the app is back-end focused, but could be connected to a front end UI for full user functionality.
### Users
You can get the information for all users or one user, which includes an array of their friends, an array of thoughts that they've posted, and their friend count. You can also create a new user, update an existing user, or delete a user. 
### Thoughts
You can get the information for all thoughts or one thought, which includes an array of reactions to that thought as well as a reaction count. You can also create a new thought, update an existing thought, or delete a thought. 
### Friends
You can add or remove a user from another user's array of friends.
### Reactions
You can post a reaction to a specific thought, as well as delete a reaction.

---

## License
This project is licenced by [MIT](https://choosealicense.com/licenses/mit/).

---

## Contributing
If you'd like to contribute, please contact me via the email listed below. 

---

## Questions
View all of my projects on [GitHub](https://github.com/lola-violet).

If you have any questions or want to contribute, please contact me via email at [lolaviolet.dev@gmail.com](mailto:lolaviolet.dev@gmail.com).