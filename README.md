# Instagram-Scrapper
## _Using Cheerio and instagram GhaphQL_

[![impin2rex|workwithme](https://workwithme.in/assets/images/favicon.svg)](https://workwithme.in/)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://github.com/impin2rex)

This is a simple instagram scrapper using cheerio and request-promise by targeting instagram public data DB GraphQL.
NodeJS-powered API.

- Put username on scrapper.js
- Get response containg profile detals.
- ✨Magic ✨

## Features

- Get all public data of a profile if the profile isn't private.
- Get MAX 12 images of a profile.

Cheerio parses markup and provides an API for traversing/manipulating the resulting data structure. It does not interpret the result as a web browser does. Specifically, it does not produce a visual rendering, apply CSS, load external resources, or execute JavaScript.
Here you can checkout [cheerio].

> Note: You can't check private profile data using this code.

## Used

Insta-Scrapper uses a number of open source projects to work properly:

- [Cheerio] - Fast, flexible & lean implementation of core jQuery designed specifically for the server.
- [node.js] - Run the backend.
- [request-promise] - The simplified HTTP request client 'request' with Promise support. Powered by Bluebird.
- [nodemon] - nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

You can send pull request from [git-repo-url].
 on GitHub.

## Installation

Scarpper requires [Node.js](https://nodejs.org/) to run.

Install the dependencies and devDependencies and start the server.

```sh
cd insta-scarpper
npm install
npm i -D nodemon
npm run scrap
```

## License

ISC

**Free Software, Hell Yeah!**

   [impin2rex]: <https://github.com/impin2rex>
   [git-repo-url]: <https://github.com/impin2rex/insta-scrapping>
   [cheerio]: <https://www.npmjs.com/package/cheerio>
   [request-promise]: <https://www.npmjs.com/package/request-promise>
   [nodemon]: <https://www.npmjs.com/package/nodemon>
   [node.js]: <http://nodejs.org>