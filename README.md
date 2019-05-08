# Random Phone Number Generator

[![Build Status](https://travis-ci.org/emmabaye/random-phone-number-generator.svg?branch=develop)](https://travis-ci.org/emmabaye/random-phone-number-generator)
[![Coverage Status](https://coveralls.io/repos/github/emmabaye/random-phone-number-generator/badge.svg)](https://coveralls.io/github/emmabaye/random-phone-number-generator)
[![codecov](https://codecov.io/gh/emmabaye/random-phone-number-generator/branch/develop/graph/badge.svg)](https://codecov.io/gh/emmabaye/random-phone-number-generator)


## Features

- Generate 10 digits phone numbers
- Download phone numbers as JSON, text and CSV

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

This applications runs on Windows, MacOS and Linux operating systems. You need to have the following installed to run this application.

- Nodejs >8.x.x

### Installation

```bash
# Clone this repository in your terminal
git clone https://github.com/emmabaye/events-manager.git my-project

# Change directory
cd my-project

# Populate environment variables
npm install

```

Rename `sample.env` file with to `.env` and populate it with appropriate environment variable values, then proceed to the next step

```bash
# Start application in development mode
npm run start-dev

# If you want to build for production
npm run build-server && npm run build-client

# then start application in production mode
npm run start
```

### Running the tests and coverage

```bash
 # Run server-side tests
 npm run test

 # Run client-side tests
 npm run test-client

 # Run client-side tests in watch mode
 npm run test-client-watch
```

### Coding style tests

This application uses ESLint to lint ES6 code.

```bash
#Lint code
npm run lint
```

## Deployment

The scripts in package.json are setup for ease of deployment on Heroku or any nodejs hosting provider. Follow this tutorial if you need help, https://devcenter.heroku.com/articles/deploying-nodejs

## Built With

- [Nodejs](https://nodejs.org/en/) - JavaScript server-side engine
- [Expressjs](https://expressjs.com/) - Web framework
- [React](https://reactjs.org/) - View library
- [Bootstrap 4](https://v4-alpha.getbootstrap.com/) - CSS framework
- [Babel](https://babeljs.io/) - ES6 Transpiler
- [ESlint](https://eslint.org/) - ES6 linting
- [Mocha](https://mochajs.org/) - JavaScript testing framework
- [Supertest](https://v4-alpha.getbootstrap.com/) - For HTTP assertions in tests

## Contributing

Feel free to contribute to this repository. Your pull requests are welcomed

## Authors

- **Emmanuel Abaye** - [emmabaye](https://github.com/emmabaye)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Thanks to everyone that assisted me in building this application.
