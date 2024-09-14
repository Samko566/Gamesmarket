# Gamesmarket
## Testing docker - backend(.net + mssqp) + client(react(vite)) + proxy(nginx)
Problem with running front and back together with nginx redirect

## Running the Project with docker.

1. Run the backend:

- Open the solution in Visual Studio or another IDE.

- In Solution Explorer, set the docker-compose as startup project.

- Click the Run button or use the following command to run in the terminal:
   
   In Gamesmarket\Gamesmarket
   ```sh
   docker-compose up -d
    ```
This will start the server at https://localhost:5000

2. Run the client:

   In Gamesmarket\Gamesmarket.ReactWeb
   ```sh
   docker build -t client .
   ```
   ```sh
   docker run -dp 5001:3000 client
   ```
This will start the frontend at https://localhost:5001

3. Data to log in as admin user: Email - admin@gmail.com Password - Qwe!23
