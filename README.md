# 🚧 Application currently in development 🚧

## Setup:

- Clone the repository:

  ```bash
  git clone https://github.com/arcticlimer/stackfetch.git
  ```

- Enter the app directory:

  ```bash
  cd stackfetch
  ```

### If you want a development environment:

- Run the development script

  ```bash
  sh dev.sh
  ```

  > Note: You should have postgresql installed and running it from a user with CREATEDB role in order to run this app.

Done! Now the react server will be listening at http://localhost:3000 and the express server at http://localhost:3333.

### If you want a production build:

- Run the development script

  ```bash
  sh build.sh
  ```

Done! Now the application will be listening at http://localhost:8080!
