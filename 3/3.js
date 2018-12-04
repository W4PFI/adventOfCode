calculateOverlaps()



function calculateOverlaps() {
    var matrix = createMatrix(1000)
    var count = 1
    var intactChecker = new Array
    var lineReader = require('readline').createInterface({
        input: require('fs').createReadStream('input.txt')
    });

    lineReader.on('line', function (line) {

        line.split('@', 1)
        var coord = line.split('@', 2)[1].split(':', 2)[0].trimLeft().split(",", 2)
        var size = line.split('@', 2)[1].split(':', 2)[1].trimLeft().split("x", 2)
        updateElement(matrix, parseInt(coord[1]), parseInt(size[1]), parseInt(coord[0]), parseInt(size[0]), count++)
        var intact = [count, (size[0] * size[1])]
        intactChecker.push(intact)
    }).on('close', () => {
        //printArray(matrix)
        console.log("Total Overlaps : " + (matrix.toString().match(/X/g) || []).length)

    });


}

function updateElement(matrix, row, rowWidth, column, columnWidth, value) {
    for (var rowCount = 0; rowCount < rowWidth; rowCount++) {

        var rowData = matrix[row + rowCount]
        for (var columnCount = 0; columnCount < columnWidth; columnCount++) {
            if (rowData[column + columnCount] === "X") continue
            if (rowData[column + columnCount] != ".") {
                rowData[column + columnCount] = "X"
            } else {
                rowData[column + columnCount] = value.toString()
            }
        }
    }
}

function createMatrix(size) {
    myArray = new Array()
    for (var i = 0; i < size; i++) {
        myArray.push(".".repeat(size).split(""))
    }
    return myArray
}

function printArray(arrayToPrint) {
    for (var i = 0; i < arrayToPrint.length; i++) {
        console.log(arrayToPrint[i])
    }
}
