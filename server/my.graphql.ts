import * as graphqlHTTP from 'express-graphql';
import { GraphQLSchema, GraphQLObjectType } from 'graphql';

import { OrderRoot } from './schema/order';
import { myguard } from './guard';

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        order: OrderRoot.order,
        orders: OrderRoot.orders
    }
});

const schema = new GraphQLSchema({
    query: RootQuery
});

export function setGraphQL(app) {
    app.express.use(
        '/graphql',
        myguard,
        graphqlHTTP({
            schema: schema,
            graphiql: true,
        })
    );

    app.express.use(
        '/api/graphql',
        myguard,
        graphqlHTTP({
            schema: schema
        })
    );
}
