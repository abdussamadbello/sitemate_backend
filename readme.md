
# SiteMate Backend

This project consists of a client and server application designed for managing issues efficiently. The client communicates with the server through a REST API, enabling the creation, retrieval, updating, and deletion (CRUD) of issues.

## Project Structure


```server/
    .gitignore
    controllers/
        issueController.js
    index.js
    models/
        issueModel.js
        test/
            issueModel.test.js
    package.json
    routes/
        issueRoutes.js
client/
    .gitignore
    cli/
        api/
            issueApi.js
        index.js
    package.json```


### Server

The server application is built with `express` and exposes a REST API to manage issues. It uses `uuid` to generate unique identifiers for each issue.

#### Installation

To set up the server, navigate to the server directory and install the necessary dependencies:

```bash
cd server
npm install
```

#### Usage

To run the server, you can choose between development and production modes:

- **Development Mode**:

  ```bash
  npm run dev
  ```

- **Production Mode**:

  ```bash
  npm start
  ```

#### API Endpoints

The server exposes the following API endpoints:

- **GET** `/api/issues`: Retrieve all issues.
- **GET** `/api/issues/:id`: Retrieve a specific issue by ID.
- **POST** `/api/issues`: Create a new issue.
- **PUT** `/api/issues/:id`: Update an existing issue by ID.
- **DELETE** `/api/issues/:id`: Delete an issue by ID.

These endpoints are defined in the `server/controllers/issueController.js` and `server/routes/issueRoutes.js` files.

### Testing

The server includes a suite of tests written with `jest` to ensure functionality. The tests are located in `server/models/test/issueModel.test.js`.

To run the tests, execute the following command:

```bash
npm test
```

### Client

The client application acts as an interface for interacting with the server API. It leverages `axios` for making HTTP requests and `commander` to provide a command-line interface for easy operation.

#### Installation

To get started with the client, navigate to the client directory and install the necessary dependencies:

```bash
cd client
npm install
```

#### Usage

The client offers a set of commands to interact with the server's API:

- **`getIssues`**: Fetches all issues.
- **`getIssueById <id>`**: Retrieves a specific issue by its ID.
- **`createIssue -n <name> -d <description>`**: Creates a new issue with a name and description.
- **`updateIssue <id> -n <name> -d <description>`**: Updates an existing issue by its ID.
- **`deleteIssue <id>`**: Deletes an issue by its ID.

These commands are implemented in the `client/cli/api/issueApi.js` file.

##### Example

```bash
# Fetch all issues
node index.js list

# Create a new issue
node index.js create -n "New Issue" -d "Description of the new issue"
```
