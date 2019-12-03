const express = require("express");
const expessGraphQL = require("express-graphql");
const schema = require("./schemas/schema");

const app = express();
const port = process.env.PORT || 4000;

app.use("/api", expessGraphQL({
    schema: schema,
    graphiql: true
}));

app.listen(port, ()=> console.log(`Server running on ${port}`));