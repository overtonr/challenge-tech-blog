# Challenge: Tech Blog

Deployed Link : [Tech Blog](https://overtonr-tech-blog.herokuapp.com/)

<br>

## Description
This CMS-style blog allows users to publish a blog post as well as comment on other blog posts. The ability to update and delete existing posts is also an option! Built with no starter code, this application follows the MVC paradigm. The application uses Handlebars to dynamically generate content onto the page depending on whether the user is logged in or not.
```
```
Session data is stored so that data persists as long as the server is running.

```js
const ses = {
    secret: '',
    cookie: {},
    resave: false,
    saveUnitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};
```



[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<br>

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Collaborators](#collaborators)
- [Questions](#questions)

<br>

## Installation
No installation required.

<br>

## Usage
The homepage for the deployed website displays any existing blog posts.
[]

<br>

Users can clink the links on the navigation bar to log in to their account. If a user has not made an account yet, they must fill in the sign up form to create an account. 
[]

<br>

They will then be able to log in and create a blog post by giving it a title and typing in the content for the post.
[]

<br>

Users also have the option to comment on an existing blog post that is present on their dashboard. After submitted, the comment will be displayed under the blog submission.
[]

<br>

There is also the option to update or delete an existing blog post:
[]

<br>

Make sure you don't forget to log out after posting, commenting, updating, and deleting content!




<br>

## License
This application is covered under the MIT License

<br>

## Collaborators
None

<br>

## Questions
https://github.com/overtonr
