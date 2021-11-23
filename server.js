const express = require('express')
const app = express()

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

//const foodRoutes = require('./routes/FoodRoutes')

//app.use('/foods', foodRoutes)

//criar rota inicial / endpoint
app.get('/', (req, res) => {
    res.json({message: 'Oi Express!'})
})

app.listen(3000)