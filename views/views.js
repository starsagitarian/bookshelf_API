const handlebars = require('handlebars');

const viewName = handlebars.compile(`
    <body style="background-color: rgb(110, 152, 194);
    font-family: 'Helvetica Neue';
    font-style: italic;
    text-align: center;">    
    <h1 style="color: teal;">=============================================</h1>
    <h1>Hello User!</h1>
    <h3>Welcome to the bookshelf Node-SQL-API</h3>
    <p>Hope this is as per your requirement!!<br>Please checkout the other routes!!</p>
    <h1 style="color: teal;">=============================================</h1>
    </body>
`);

const normal = handlebars.compile(`
    <body style="background-color: rgb(110, 152, 194);
    font-family: 'Helvetica Neue';
    font-style: italic;
    text-align: center;">    
    <h1 style="color: teal;">=============================================</h1>
    <p>Following is the output</p>
    <p>{{output}}</p>
    <h1 style="color: teal;">=============================================</h1>
    </body>
`);

const errorMessage = handlebars.compile(`
    <body style="background-color: rgb(243, 114, 114);
    font-family: 'Helvetica Neue';
    font-style: italic;
    text-align: center;">    
    <h1 style="color: teal;">=============================================</h1>
    <h1>OMG!!</h1>
    <h3>There is an error</h3>
    <p>for further support... <br>Please contact ME!!! 😂</p>
    <h1 style="color: teal;">=============================================</h1>
    </body>
`);

const successMessage = handlebars.compile(`
    <body style="background-color: rgb(116, 248, 116);
    font-family: 'Helvetica Neue';
    font-style: italic;
    text-align: center;">    
    <h1 style="color: teal;">=============================================</h1>
    <h1>Congratulations!! 😎😎 You achieved it!! 😎😎</h1>
    <h3>now Take a bow!!👏</h3>
    <p>for further support... <br>Please contact ME!!! </p>
    <h1 style="color: teal;">=============================================</h1>
    </body>
`);

module.exports = {viewName, errorMessage, successMessage, normal};

