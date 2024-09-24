# Gamesmarket
## Testing launching an application via Docker - backend(.net) + db(mssql) + client(react(vite)) + proxy(nginx)
Running 4 containers together via docker-compose

## Running the Project with docker.

1. Run it all together:

- Open the solution in Visual Studio or another IDE.

- In Solution Explorer, set the docker-compose as startup project.

- Click the Run button or use the following command to run in the terminal:
   
   In Gamesmarket\Gamesmarket
   ```sh
   docker-compose up -d
    ```
This will start the backend at 5000:80 port, frontend at 5001:3000 port, db at 1433:1433 port, proxy at 80:80 port.
 
The backend can be tested at http://localhost:5000/swagger and the frontend can be tested at http://localhost:5001

The entire project with all functionality can be viewed at http://localhost

2. Run the client only:

   In Gamesmarket\Gamesmarket.ReactWeb
   ```sh
   docker build -t client .
   ```
   ```sh
   docker run -dp 5001:3000 client
   ```
This will start the frontend for testing at http://localhost:5001

3. Data to log in as admin user: Email - admin@gmail.com Password - Qwe!23
