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
Once there you would need to visit the config folder and update the development object within the config.json file (Although a bad practice, I have currently supplied the credentials )
You would thnn need to use "sequelize db:create" to initialize/create the database on PostgreSQL. Once done can check on your local psql cmd prompt or pgadmin for more details.
Once all the tables are in place, you can now query the API with the routes provided. 

Described below is the tech stack

## tech stack

<ul>
    <li>Node.js</li>
    <li>Express.js</li>
    <li>PostgreSQL</li>
    <li>Sequelize ORM</li>
    <li>handlebars</li>
</ul>

## Testing

all the routes were tested using Postman and the folder has a seperate file containing a json of the all the routes tested with suitable data
