# RESTful API

## Introduction

This is a RESTful API built using MongoDB, Express, and Node.js. It is a simple API that allows users to create, read, update, and delete (CRUD) data from a MongoDB database.

## Installation

To install this project, follow these steps:

1. Clone the repository:

```bash
 git clone https://github.com/WeslenLakins/rest-api.git
```

2. Install the dependencies:

```bash
 npm install
```

## Usage

To use this project, follow these steps:

1. Start the server:

```bash
 npm start
```

2. Download and install [Postman](https://www.postman.com/downloads/).

3. Open Postman and create a new request.

4. Enter the URL of the request. For example, if you are running the server locally, the URL would be `http://localhost:3000/`.

5. Select the type of request you want to make (GET, POST, PUT, DELETE).

6. Click the "Send" button to send the request.

## API Endpoints

- `POST /postOne`: Creates a new user.
- `GET /getAll`: Returns all users.
- `GET /getOne/:id`: Returns a single user with the specified ID.
- `PUT /updateOne/:id`: Updates a single user with the specified ID.
- `DELETE /deleteOne/:id`: Deletes a single user with the specified ID.

## License

This project is licensed under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Contact

If you have any questions or comments about this project, please feel free to contact on Twitter at [@WeslenLakins](https://twitter.com/WeslenLakins).

## Contributions

Contributions are welcome! Please fork the repository and submit pull requests with your changes. For major changes, please open an issue first to discuss what you would like to change.
