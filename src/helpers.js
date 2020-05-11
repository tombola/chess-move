const columns = ["A","B","C","D","E","F","G","H"]

function getNumber(numericString) {
    return !isNaN(numericString) ? parseInt(numericString) : null
}

export function getRow(position) {
    return (position !== undefined && position.length === 2) ? getNumber(position[1]) : null
}

export function getColumn(position) {
    return (position !== undefined && position.length === 2) ? position[0] : null
}

export function getPosition(row, column) {
    if (!isNaN(row) && row <= 8 && columns.includes(column)) {
        return {"row": row, "col": column}
    }
}

export function getCoordinates(position) {
    if (position.length === 2) {
        return {"x": positionLetterToNumber(position[0]), "y": position[1]}
    }
}

export function positionLetterToNumber(letter) {
    const positionLetter = columns.indexOf(letter)
    if (positionLetter > -1) {
        return columns.indexOf(letter) + 1
    }
    return null
}