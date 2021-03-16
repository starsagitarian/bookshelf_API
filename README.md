# Bookshelf_API

This is a simple REST API created as bookshelf application  for creating and curating books based on authors, formats and titles. 
There are 3 data entities as described below:
<ul>
    <li><h3>Titles</h3><p>A title can have many authors</p></li>
    <li><h3>Authors</h3><p>An Author can have many titles</p></li>
    <li><h3>Formats</h3><p>A title can have only one format</p></li>
</ul>

The API provides all the basic CRUD endpoints for each of the above entities. 

## How to access the API

The API can be accessed at port:3003 from your local machines.
Once there you would need to visit the config folder and update the development object within the config.json file.
You would then need to use "sequelize db:create" to initialize/create the database on PostgreSQL. Once done can check on your local psql cmd prompt or pgadmin for more details.
Here I have used Nodemon as a dev dependency and hence after running the customary "npm install" you can now fire up the API by typing in the command "npm run dev". 
Once all the tables are in place, and the server is up and running, you can query the API with the routes provided. The "Morgan" package would keep track of the API hits and the responses in the terminal. 

Described below is the tech stack

## Tech stack

<ul>
    <li>Node.js</li>
    <li>Express.js</li>
    <li>PostgreSQL</li>
    <li>Sequelize ORM</li>
    <li>handlebars</li>
</ul>

## Testing

All the routes were tested using Postman and the folder has a seperate file containing a json of the all the routes tested with suitable data. This file needs to be opened in Postman and it will give you folder-wise distribution of the routes. 

## Issues/Future Scope

As a developer, there are many areas that could be looked at, especially validation and the use of views (handlebars) for a much more better user experience. Having said that, there could always be a case where the above code malfunctions. Please reach out if anybody experiences any issues. Troubleshooting would be an enriching experience in itself!!

