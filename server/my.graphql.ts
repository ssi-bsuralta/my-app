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

export function setGraphQL(myExpress) {
    myExpress.use(
        '/graphql',
        myguard,
        graphqlHTTP({
            schema: schema,
            graphiql: true,
        })
    );

    myExpress.use(
        '/api/graphql',
        myguard,
        graphqlHTTP({
            schema: schema
        })
    );
}
