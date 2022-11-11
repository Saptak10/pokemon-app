const express = require('express');

const dbConnection = require('./config/dbConnection');
const errorHandler = require('./middleware/errorMiddleware')

const userRoute = require('./route/userRoutes');
const pokemonRoute = require('./route/pokemonRoutes');

const app = express();

if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const cors = require('cors');

dbConnection();

app.use(express.json())
app.use(express.urlencoded({ extended : true }))
app.use(cors());

// app.use('/', (req, res) => {
//     res.send('Backend API Server is running...')
// })
app.use('/', userRoute)
app.use('/pokemons', pokemonRoute)

app.use(errorHandler)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening at port http://localhost:${port}/`));