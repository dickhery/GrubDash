### Section 1: Introduction and Overview

# GrubDash Backend API

## Overview
GrubDash is a backend API for a food delivery service. This project allows frontend developers to demo initial design ideas for the GrubDash service. The API provides endpoints to manage dishes and orders, including creation, reading, updating, and deleting resources.

## Features
- RESTful API design
- Middleware for validation and error handling
- Comprehensive test coverage
- Follows Express.js best practices

## Requirements
- Node.js v18
- npm

### Section 2: Project Setup

## Project Setup
1. **Clone the repository:**
   ```sh
   git clone https://github.com/dickhery/GrubDash.git
   cd GrubDash

2. **Install Dependencies:**
    ```sh
    npm install


3. **Run the tests:**
    ```sh
    npm test


### Section 3: Usage and API Endpoints

## Usage

### Start the Server
To start the server, run the following command:
    `npm start`

## API Endpoints

### Dishes

- **GET /dishes**
  - Retrieves a list of all dishes.
  - Example response:
    ```json
    {
        "data": [
            {
              "id": "d351db2b49b69679504652ea1cf38241",
          "name": "Dolcelatte and chickpea spaghetti",
          "description": "Spaghetti topped with a blend of dolcelatte and fresh chickpeas",
          "price": 19,
          "image_url": "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?h=530&w=350"
  
            }
        ]
    }
    ```

- **POST /dishes**
  - Creates a new dish.
  - Example request body:
  ```json
    {
      "data": {
        "name": "Dolcelatte and chickpea spaghetti",
        "description": "Spaghetti topped with a blend of dolcelatte and fresh chickpeas",
        "price": 19,
        "image_url": "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?h=530&w=350"
      }
    }
    ```
    - Example response:
    ```json
    {
      "data": {
        "id": "d351db2b49b69679504652ea1cf38241",
        "name": "Dolcelatte and chickpea spaghetti",
        "description": "Spaghetti topped with a blend of dolcelatte and fresh chickpeas",
        "price": 19,
        "image_url": "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?h=530&w=350"
      }
    }
    ```

- **GET /dishes/:dishId**
  - Retrieves a specific dish by ID.
  - Example response:
    ```json
    {
      "data": {
        "id": "d351db2b49b69679504652ea1cf38241",
        "name": "Dolcelatte and chickpea spaghetti",
        "description": "Spaghetti topped with a blend of dolcelatte and fresh chickpeas",
        "price": 19,
        "image_url": "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?h=530&w=350"
      }
    }
    ```

- **PUT /dishes/:dishId**
  - Updates a specific dish by ID.
  - Example request body:
    ```json
    {
      "data": {
        "name": "Updated Name",
        "description": "Updated description",
        "price": 25,
        "image_url": "https://updated-image.url"
      }
    }
    ```
  - Example response:
    ```json
    {
      "data": {
        "id": "d351db2b49b69679504652ea1cf38241",
        "name": "Updated Name",
        "description": "Updated description",
        "price": 25,
        "image_url": "https://updated-image.url"
      }
    }
    ```

### Orders

- **GET /orders**
  - Retrieves a list of all orders.
  - Example response:
    ```json
    {
      "data": [
        {
          "id": "5a887d326e83d3c5bdcbee398ea32aff",
          "deliverTo": "308 Negra Arroyo Lane, Albuquerque, NM",
          "mobileNumber": "(505) 143-3369",
          "status": "delivered",
          "dishes": [
            {
              "id": "d351db2b49b69679504652ea1cf38241",
              "name": "Dolcelatte and chickpea spaghetti",
              "description": "Spaghetti topped with a blend of dolcelatte and fresh chickpeas",
              "image_url": "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?h=530&w=350",
              "price": 19,
              "quantity": 2
            }
          ]
        }
      ]
    }
    ```

- **POST /orders**
  - Creates a new order.
  - Example request body:
    ```json
    {
      "data": {
        "deliverTo": "308 Negra Arroyo Lane, Albuquerque, NM",
        "mobileNumber": "(505) 143-3369",
        "status": "delivered",
        "dishes": [
          {
            "id": "d351db2b49b69679504652ea1cf38241",
            "name": "Dolcelatte and chickpea spaghetti",
            "description": "Spaghetti topped with a blend of dolcelatte and fresh chickpeas",
            "image_url": "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?h=530&w=350",
            "price": 19,
            "quantity": 2
          }
        ]
      }
    }
    ```
  - Example response:
    ```json
    {
      "data": {
        "id": "5a887d326e83d3c5bdcbee398ea32aff",
        "deliverTo": "308 Negra Arroyo Lane, Albuquerque, NM",
        "mobileNumber": "(505) 143-3369",
        "status": "delivered",
        "dishes": [
          {
            "id": "d351db2b49b69679504652ea1cf38241",
            "name": "Dolcelatte and chickpea spaghetti",
            "description": "Spaghetti topped with a blend of dolcelatte and fresh chickpeas",
            "image_url": "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?h=530&w=350",
            "price": 19,
            "quantity": 2
          }
        ]
      }
    }
    ```

- **GET /orders/:orderId**
  - Retrieves a specific order by ID.
  - Example response:
    ```json
    {
      "data": {
        "id": "5a887d326e83d3c5bdcbee398ea32aff",
        "deliverTo": "308 Negra Arroyo Lane, Albuquerque, NM",
        "mobileNumber": "(505) 143-3369",
        "status": "delivered",
        "dishes": [
          {
            "id": "d351db2b49b69679504652ea1cf38241",
            "name": "Dolcelatte and chickpea spaghetti",
            "description": "Spaghetti topped with a blend of dolcelatte and fresh chickpeas",
            "image_url": "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?h=530&w=350",
            "price": 19,
            "quantity": 2
          }
        ]
      }
    }
    ```

- **PUT /orders/:orderId**
  - Updates a specific order by ID.
  - Example request body:
    ```json
    {
      "data": {
        "deliverTo": "1600 Pennsylvania Avenue NW, Washington, DC",
        "mobileNumber": "(202) 456-1111",
        "status": "pending",
        "dishes": [
          {
            "id": "d351db2b49b69679504652ea1cf38241",
            "name": "Dolcelatte and chickpea spaghetti",
            "description": "Spaghetti topped with a blend of dolcelatte and fresh chickpeas",
            "image_url": "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?h=530&w=350",
            "price": 19,
            "quantity": 2
          }
        ]
      }
    }
    ```
  - Example response:
    ```json
    {
        "data": {
            "id": "5a887d326e83d3c5bdcbee398ea32aff",
            "deliverTo": "1600 Pennsylvania Avenue NW, Washington, DC",
            "mobileNumber": "(202) 456-1111",
            "status": "pending",
            "dishes": [
              {
                "id": "d351db2b49b69679504652ea1cf38241",
                "name": "Dolcelatte and chickpea spaghetti",
                "description": "Spaghetti topped with a blend of dolcelatte and fresh chickpeas",
                "image_url": "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?h=530&w=350",
                "price": 19,
                "quantity": 2
              }
            ]
        }
    }
    ```

- **DELETE /orders/:orderId**
  - Deletes a specific order by ID.
  - Example response:
    ```json
    {
      "status": 204
    }
    ```

## Middleware

### validateDish.js
Ensures that all required dish properties are present and valid.

### validateOrder.js
Ensures that all required order properties are present and valid. Additionally, if `requireStatus` is true, it validates the status property.

### dishExists.js
Checks if a dish with the given ID exists.

### orderExists.js
Checks if an order with the given ID exists.

## Testing
To run the tests, execute the following command:
```sh
npm test

    