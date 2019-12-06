const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList
} = require("graphql");
const periodicTable = require("periodic-table");

// Periodic Table
const elementsType = new GraphQLObjectType({
    name: "elementsType",
    fields: () => ({
        atomicNumber: { type: GraphQLString },
        symbol: { type: GraphQLString },
        name: { type: GraphQLString },
        atomicMass: {
            type: GraphQLString, resolve(value) {
                return value.atomicMass.toString();
            }
        },
        cpkHexColor: { type: GraphQLString },
        electronicConfiguration: { type: GraphQLString },
        electronegativity: { type: GraphQLString },
        atomicRadius: { type: GraphQLString },
        ionRadius: { type: GraphQLString },
        vanDelWaalsRadius: { type: GraphQLString },
        ionizationEnergy: { type: GraphQLString },
        electronAffinity: { type: GraphQLString },
        oxidationStates: { type: GraphQLString },
        standardState: { type: GraphQLString },
        bondingType: { type: GraphQLString },
        meltingPoint: { type: GraphQLString },
        boilingPoint: { type: GraphQLString },
        density: { type: GraphQLString },
        groupBlock: { type: GraphQLString },
        yearDiscovered: { type: GraphQLString },
    })
});

// Root Query
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: () => ({
        elements: {
            type: new GraphQLList(elementsType),
            resolve(parentValue, args) {
                const keysList = Object.keys(args);
                const allElements = periodicTable.all();
                if (!keysList.length) {
                    return periodicTable.all();
                } else {
                    const element = allElements.find((element) => element[keysList[0]].toString() === args[keysList[0]]);
                    return [element];
                }
            },
            args: {
                atomicNumber: { type: GraphQLString },
                symbol: { type: GraphQLString },
                name: { type: GraphQLString },
                atomicMass: { type: GraphQLString },
                cpkHexColor: { type: GraphQLString },
                electronicConfiguration: { type: GraphQLString },
                electronegativity: { type: GraphQLString },
                atomicRadius: { type: GraphQLString },
                ionRadius: { type: GraphQLString },
                vanDelWaalsRadius: { type: GraphQLString },
                ionizationEnergy: { type: GraphQLString },
                electronAffinity: { type: GraphQLString },
                oxidationStates: { type: GraphQLString },
                standardState: { type: GraphQLString },
                bondingType: { type: GraphQLString },
                meltingPoint: { type: GraphQLString },
                boilingPoint: { type: GraphQLString },
                density: { type: GraphQLString },
                groupBlock: { type: GraphQLString },
                yearDiscovered: { type: GraphQLString },
            }
        }
    })
});

module.exports = { RootQuery };