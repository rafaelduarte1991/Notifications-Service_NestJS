## Description

This application is a microservice responsible for handling notifications from various sources.

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
## Test the app

After following the instructions above, run the application, access an API platform (example:postman), and follow the instructions below:

Update the required information in brackets. Except the {{$guid}} if you are using POSTMAN.
This will be useful in order to generate the id, it can be replaced for a valid id. 

### Create notification:

POST: http://localhost:3000/notifications <br /><br />
body:<br />
{<br />
    "recipientId": "{{$guid}}",<br />
    "content": "fill content",<br />
    "category": "fill category"<br />
}<br />

#### Count the number of notifications:

GET: http://localhost:3000/notifications/count/from/{recipientId}

#### Get notification from a specific recipient:

GET: http://localhost:3000/notifications/from/{recipientId}

#### Cancel notification

PATCH: http://localhost:3000/notifications/{id}/cancel

#### Read notifications 

PATCH: http://localhost:3000/notifications/{id}/read

#### Unread notifications 

PATCH: http://localhost:3000/notifications/{id}/unread

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

