import express from 'express'
import { schema } from './data/schema.mjs'
import { graphqlHTTP } from 'express-graphql'

const PORT = process.env.PORT || 4000;

const app = express()

app.get('/', (req, res) => {
    res.send('It is amazing')
})

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))

app.listen(PORT, () => console.log(`Server started on port localhost:${PORT}/graphql`))
