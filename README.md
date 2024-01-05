## Description

This application is a microservice responsible for handling notifications from various sources using Kafka.

The repository consists of two folders. One folder contains the application (notifications-service), 
which is essentially a Kafka consumer responsible for consuming messages sent by the producer located in the (kafka-producer) folder. 
The consumer then registers the messages in the database using Prisma.

## Getting start

You must clone or download the repository.

## Installation

Once you have the repository, you must install the node_modules in both applications (notifications-service and kafka-producer). To do so, follow this procedure in both folders: 

```bash
# install
$ npm install
```

## Change credentials and message

The Kafka cluster can be created in various ways and integrated into the project. The method used here involves utilizing the Upstash service. To use this service, simply create an account, establish the cluster and topic, and then connect the application to it.

### Connect to your cluster

When you open the cluster, you can see on the Details tab the section "Connect to your cluster", select node, copy the credentials info given:
<pre>
clientId: 'my-app', 
brokers: ['Replace with your Kafka broker'],  
ssl: true, 
sasl: { 
    mechanism: 'Replace with your SASL mechanism',  
    username: 'Replace with your username', 
    password: 'Replace with your password' 
}, 
}); 
</pre>

and paste the information in both apps: 

##### kafka-producer

In the file kakfa-consumer.service.ts (src/infra/kafka/kakfa-consumer.service.ts)

##### notifications-service (consumer)

In the file producer.js

The message can be edited inside the producer.js file:

<pre>
messages: [ 
        { 
          value: JSON.stringify({ 
            content: 'Solicitação de amizade', 
            category: 'social', 
            recipientId: randomUUID(), 
          }) 
        }, 
      ], 
</pre>

## Running the app

### notifications-service

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### kafka-producer

```bash
# run
$ node producer.js
```
## Test the app

### Kafka 

You only have to run both applications and the message will be sent.

### API platform 

After following the instructions above, run the application (notifications-service), access an API platform (example:postman), and follow the instructions below:

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

### Check the DB using Prisma Studio

On the notifications-service application: 

```bash
# run
$ npx prisma studio
```
## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
