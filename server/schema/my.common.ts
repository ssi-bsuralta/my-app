export function getProjection(fieldASTs) {
    const selections = fieldASTs.fieldNodes[0].selectionSet.selections;

    return selections.reduce((projections, selection) => {
        projections[selection.name.value] = true;
        return projections;
    }, {});
}
