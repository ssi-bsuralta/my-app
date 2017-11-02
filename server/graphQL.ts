import * as graphqlHTTP from 'express-graphql';
import {
    GraphQLSchema,
    GraphQLObjectType
} from 'graphql';

import OrderRootClass from './graphQL/order';

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        order: OrderRootClass.order,
        orders: OrderRootClass.orders
    }
});

const schema = new GraphQLSchema({
    query: RootQuery
});

export default function setGraphQL(app) {
    app.express.use('/graphql', graphqlHTTP({
        schema: schema,
        graphiql: true,
    }));

    app.express.use('/api/graphql', graphqlHTTP({
        schema: schema
    }));
}
