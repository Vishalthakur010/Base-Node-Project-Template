This is a base node js project template, which anyone can use as it has been prepared, by keeping some of the most important code principles and project management recommendations. Feel free to change anything.


`src` :- Inside the src folder all the actual source code regarding the project will reside, this will not include any kind of tests. (You might want to make seperate tests folder)

Lets take a look inside the `src` folder

- `config` :- In this folder anything and everything regarding any configurations or setup of a library or module will be done. For example: setting up `dotenv` so that we can use the enviroment variables anywhere in a cleaner fashion, this is done in the `server-config.js`. One more example can be setup your logging library that can help you to prepare meaningful logs, so configuration for this library should also be done here.

- `routes` :- In the routes folder, we register a route and the corresponding middleware and controllers to it.

- `middlewarea` :- They are just going to intersept the incomming requests where we can write our validators, authentications etc.

- `controllers` :- They are kind of last middlewares as post them you call your buisness layer to execute the buisness logic. In controlers we just receive the incomming requests and data and then pass it to the buisness layer, and once business layer returns an output, we structure the API response in controlelrs and send the output.

- `repositiries` :- This folder contains all the logic using which we interact with the DB by writing queries, all the raw queries or ORM queries will go here.

- `services` :- Contains the business logic and interacts with repositories for data from the database.

- `utils` :- Contains helper methods, error classes etc.


### Setup the project

 - Download this template from github and open it in your favourite text editor.

 - Go inside the folder and execute following command
    ```
        npm install
    ```
    
 - In the root directory create a `.env` file and the follwing env variables 
    ```
        PORT=<port number of your choice>
    ```

    ex:
    ```
        PORT=3000
    ```
- Inside the `src/config` folder create a file named as `config.json` and write the following code :
    ```
        {
        "development": {
            "username": "root",
            "password": null,
            "database": "database_development",
            "host": "127.0.0.1",
            "dialect": "mysql"
        },
        "test": {
            "username": "root",
            "password": null,
            "database": "database_test",
            "host": "127.0.0.1",
            "dialect": "mysql"
        },
        "production": {
            "username": "root",
            "password": null,
            "database": "database_production",
            "host": "127.0.0.1",
            "dialect": "mysql"
        }
        }

    ```
- If you want to do it manually by commands
    ```
        npm install sequelize : run inside the root of project
        npm i mysql2 : run inside the root sequelize initof project
        npm i sequelize-cli : run inside root of project
            cd src : move to src
        npx sequelize init : run inside src
    ```
-By executing `npx sequelize init` you will get migrations and seeders folder along with config.json inside config folder.

- If you are setting up your dvelopment enviroment, then write the username if your DB, password of your DB and in dialect mention whatever DB you are using. For ex : mysql, mariadb etc.

- If you are setting up test or Production enviroment, make sure you also replace the host with the hosted db url.

- To run the server
    ```
        npm run dev
    ```