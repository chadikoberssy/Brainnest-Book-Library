function analyzeArray (inputArray) {
    const average = inputArray.reduce((a ,b) => a + b) / inputArray.length;
    const maximum = Math.max(...inputArray)
    const minimum = Math.min(...inputArray)
    const length = inputArray.length;
    

    const objectArrayValues = {
        average: average,
        maximum: maximum,
        minimum: minimum,
        length: length
    }

    return objectArrayValues
}



module.exports = analyzeArray;