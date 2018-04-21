export function distance(a, b) {
    console.log(a, b)
}

export function contains(bottomLeft, topRight, obj) {
    return (
        obj[0] > bottomLeft[0] &&
        obj[0] < topRight[0] &&
        obj[1] < bottomLeft[1] &&
        obj[1] > topRight[1]
    )
}
