import express from 'express'
import schema from './schema.mjs'
import { graphqlHTTP } from 'express-graphql'
import resolvers from './resolvers.mjs'

const app = express()

app.get('/', (req, res) => {
    res.send('It is amazing')
})

// const friendDatabase = {}

// class Friend {
//     constructor(id, { firstName, lastName, gender, email }){
//         this.id = id
//         this.firstName = firstName
//         this.lastName = lastName
//         this.gender = gender
//         this.email = email
//     }
// }

// const root = { 
//     friend: () => { 
//         return {
//             "id": 1234567,
//             "firstName": "Isaac",
//             "lastName": "Ssemugenyi",
//             "gender": "Male",
//             "email": "isaacpro01@gmail.com"
//         }
//     },
//     createFriend: ({ input }) => {
//         let id = require('crypto').randomBytes(10).toString('hex')
//         friendDatabase[id] = input
//         return new Friend(id, input)
//     }
//  }

const root = resolvers

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(4000, () => console.log(`Server started on port localhost:4000/graphql`))