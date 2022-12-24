<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
# Pre requisites
 $ VS Code
 $ Postman or Insomnia
 $ Docker
 $ MySql Workbench

# How it works
**SET UP**
1. Once you have above requirements.
2. To test the backend end point prefer to use postman or Insomnia
3. The database is running on the docker.
  To run the dabase jsut run this command on local terminal.
  $ **doker run --name mysql -e MYSQL_ROOT_PASSWORD=yourpass MYSQL_DATABASE=dbname -d -p 3306:3306 mysql:latest**
4. To start myql use this cmd : $ docker start mysql
5. Once its running you good to go and check your endpoints by running server 
  $ **npm run start:dev**
6. I will give you my end points to test (base http://localhost:3001/v1/api/auth/)
7. For signup (http://localhost:3001/v1/api/auth/signup)
8. For Login http://localhost:3001/v1/api/auth/signin)
9. Once you signin it will create JWT token for security.

**Process of implementation
**
1. The full api is developed using NestJS and mySQL using sequelize ORM.
2. NestJS is very new to me and understanding Nest little bit tough but Once you know the process its very simple to work on it. Mainly how (module, services and controller works).
3. Important thing is there is very less documentation for using Sequelize ORM with Nest but its same as TypeOrm jsut some methods and functions need to be applied.
4. All Endpoints are in auth controller for User Authentication and Authorization. 
5. I have used Bcrypt and JWT.
6. Bcrypt is used to hash the passwords. I can simple use SHA 256 alog and salt it to encrypt my password but there is a possibility of attacks by using Rainbow tables.
7. Jwt is used for taken genaration. It will check user giving password and already stored that user password and returs true if both match and genarates token for that particular user.
8. Once token create I simply use the middleware to protect another routes if they have header with token key. (i need to implement more via securities but it will out of my time box and need to learn more on nest Gaurd methods).
9. But I jest simple used this token and tested one endpoint to see I am getting proper user on that token.
10. Now my api is working for auth services and it can communicate with front end.
11. finally all protected values stored in .env file. (used dotenv)


## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
