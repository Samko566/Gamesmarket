# Gamesmarket
## Testing docker - backend(.net + mssqp) + client(react(vite)) + proxy(nginx)
Problem with displaying images on the frontend

## Running the Project with docker.

1. Run the backend:

- Open the solution in Visual Studio or another IDE.

- In Solution Explorer, set the docker-compose as startup project.

- Click the Run button or use the following command to run in the terminal:
   
   In Gamesmarket\Gamesmarket
   ```sh
   docker-compose up -d
    ```
This will start the server at 5000 port and backend can be tested at http://localhost:5000/swagger

The entire project with all functionality can be viewed at http://localhost

2. Run the client:

   In Gamesmarket\Gamesmarket.ReactWeb
   ```sh
   docker build -t client .
   ```
   ```sh
   docker run -dp 5002:3000 client
   ```
This will start the frontend for testing at http://localhost:5002

3. Data to log in as admin user: Email - admin@gmail.com Password - Qwe!23
