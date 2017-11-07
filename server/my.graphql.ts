import * as graphqlHTTP from 'express-graphql';
import {
    GraphQLSchema,
    GraphQLObjectType
} from 'graphql';

import OrderRootClass from './schema/order';
import myGuard from './guard';

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
    app.express.use(
        '/graphql',
        myGuard,
        graphqlHTTP({
            schema: schema,
            graphiql: true,
        })
    );

    app.express.use(
        '/api/graphql',
        myGuard,
        graphqlHTTP({
            schema: schema
        })
    );
}
