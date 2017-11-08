import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLFloat,
    GraphQLList
} from 'graphql';

import { OrderRepo } from '../models/order';
import { getProjection } from './my.common';

const OrderType = new GraphQLObjectType({
    name: 'Order',
    fields: () => ({
        _id: { type: GraphQLString },
        id: { type: GraphQLInt },
        order_number: { type: GraphQLString },
        study_name: { type: GraphQLString },
        user_id: { type: GraphQLString },
        client_id: { type: GraphQLInt }
    })
});

class OrderRootClass {
    order = {
        type: OrderType,
        args: {
            id: { type: GraphQLInt }
        },
        resolve: (parentValue, args, request, fieldASTs) => {
            return OrderRepo.findOne(request, args, getProjection(fieldASTs));
        }
    };

    orders = {
        type: new GraphQLList(OrderType),
        args: {
            user_id: { type: GraphQLInt }
        },
        resolve: (parentValue, args, request, fieldASTs) => {
            return OrderRepo.find(request, args, getProjection(fieldASTs));
        }
    };
}

export const OrderRoot = new OrderRootClass;
