import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLFloat,
    GraphQLList
} from 'graphql';

import Order from '../models/order';

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
            return Order.findOne(args, getProjection(fieldASTs)).lean();
        }
    };

    orders = {
        type: new GraphQLList(OrderType),
        args: {
            user_id: { type: GraphQLInt }
        },
        resolve: (parentValue, args, request, fieldASTs) => {
            return Order.find(args, getProjection(fieldASTs)).lean();
        }
    };
}

export default new OrderRootClass;

function getProjection(fieldASTs) {
    const selections = fieldASTs.fieldNodes[0].selectionSet.selections;

    return selections.reduce((projections, selection) => {
        projections[selection.name.value] = true;
        return projections;
    }, {});
}
