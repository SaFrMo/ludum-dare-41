export function contains(bottomLeft, topRight, obj) {
    console.log(topRight)

    return (
        obj[0] > bottomLeft[0] &&
        obj[0] < topRight[0] &&
        obj[1] < bottomLeft[1] &&
        obj[1] > topRight[1]
    )
}
