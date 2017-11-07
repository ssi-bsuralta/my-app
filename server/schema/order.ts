import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLFloat,
    GraphQLList
} from 'graphql';

import { Order } from '../models/order';
import { mycommon } from './my.common';

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
            return Order.findOne(args, mycommon.getProjection(fieldASTs)).lean();
        }
    };

    orders = {
        type: new GraphQLList(OrderType),
        args: {
            user_id: { type: GraphQLInt }
        },
        resolve: (parentValue, args, request, fieldASTs) => {
            return Order.find(args, mycommon.getProjection(fieldASTs)).lean();
        }
    };
}

export const OrderRoot = new OrderRootClass;
