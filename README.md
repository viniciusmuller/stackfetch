# Application currently in development.

## Setup:
- Clone the repository:

    ```bash
    git clone https://github.com/arcticlimer/stack-app.git
    ```

- Enter the API directory:

    ```bash
    cd stack-app/backend
    ```

- Install the dependencies:
    
    ```bash
    yarn
    ```

- Setup the database:

    ```bash
    yarn setup-db
    ```

- Start the server:

    ```bash
    yarn dev
    ```

Done! Now the server will be listening at http://localhost:8393.

## Current API:

| Action         | How to do it                        |
|----------------|-------------------------------------|
| Create a user  | POST request to /users              |
| Select a user  | GET request to /users/:userId       |
| Paginate users | GET request to /users/?page=:number |

> If no query string is provided on /users, the page parameter is defaulted to 0.