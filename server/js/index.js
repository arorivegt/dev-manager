const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors')


var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);
var root = { hello: () => 'Hello world!' };

app.use(cors());
app.use(express.json());
app.set('port', process.env.PORT || 3001);

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'nemanager'
});

app.get('/validateUser', (req , res) => {
    const user = req.query.user;
    const password = req.query.password;

    db.query('SELECT * FROM users WHERE domain_username=? ',
            [user], 
            (err, result) => {
                if (err){
                    console.log(err)
                }else{
                    res.send(result)
                }
            });
});

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(app.get('port'), () => {
    console.log("Hello, My server is running on port 3001");
});

