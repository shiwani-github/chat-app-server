const express = require('express');
const mongoDB = require('./config/db');
const cors = require('cors');
const errorHandlers = require('./handlers/errorHandler')
const dotenv = require('dotenv');
dotenv.config();

mongoDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended : true}))
app.use(cors());

const port = process.env.PORT;

//Setup Error Handlers
app.use(errorHandlers.notFound);
app.use(errorHandlers.mongooseErrors);
if (process.env.ENV === "DEVELOPMENT") {
  app.use(errorHandlers.developmentErrors);
} else {
  app.use(errorHandlers.productionErrors);
}

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
