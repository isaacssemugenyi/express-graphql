import express from 'express'
import { schema } from './data/schema.mjs'
import { graphqlHTTP } from 'express-graphql'

const app = express()

app.get('/', (req, res) => {
    res.send('It is amazing')
})

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))

app.listen(4000, () => console.log(`Server started on port localhost:4000/graphql`))