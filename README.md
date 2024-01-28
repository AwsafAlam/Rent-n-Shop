# Rent-n-Shop

A simple application renting and buying/selling products.

We implement a NestJS backend (`server`) which exposes a graphql endpoint. The frontend is implemented with ReactJS (`web-frontend`). Users can add/remove/edit products using the graphql endpoints.

## Technologies Used:

#### Frontend

- Vite.js
- React
- Material-ui
- Apollo Graphql

#### Backend Server

- NestJS
- Postgres
- Graphql

## Batabase Overview

Database Design: Here, we provide the basic ERD for the Database Design. The plan is to integrate a recommendation system in the future to suggest regular users with their most needed items.

![Database](./docs/database.png?raw=true 'Database Architecture')

## Server

This Backend server is developed using NestJS, and serves as the backend for `Rent-n-Shop`, a simple online buy, sell & rental platform

## Installation

First, we need to ensure that the database is up and running. we can run `docker compose up` to spin up a Postgres instance.

Then, move to the server folder `cd ./server`, and run:

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

Further backend documentation can be found [here](../docs/backend-doc.md)

## Frontend

The frontend is developed with ViteJs, React, Apollo Graphql

Move to the frontend folder `cd ./web-frontend`, and run:

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run dev
```

This starts the application running on port 4000

### Frontend Pages

- /signup -> signup page
- /signin -> login page
- / → home Page [ Browse and search products, shows list of product ]
- /products [ Lists All products owned by me ]
- /product/add → add product
- /product/edit/:id → edit product
- /product/:id → product detail page (buy/rent from here) unauthenticated
- /profile → Shows bought, sold, borrowed lent products

### Pending Features:

The plan is to slowly add more features and incrementally develop the full application

- React context api (jwt login) - saving Auth token in frontend.
- Toggle logic in navbar (auth)
- Infinite Scroll
- Auth guard for apis - Nestjs
- Apis for Buy / rent
- Apis for getting user's own bought/sould/lent etc products

- Search feature in landing page
- Graphql subscriptions for notification on product buy/rent.
- full dockerization and server deployment.

### API Documentation

Api documentation for server side...



### Future Plans:

- Product Recommendation
- Related Categories
- Top Sellers
- Personalized discounts
- Gamification
