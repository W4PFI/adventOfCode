calculateChecksum()
findPrototypeFabric()

  
function calculateChecksum () {
    var output = 0
    var twoMatch = 0
    var threeMatch = 0

    var lineReader = require('readline').createInterface({
        input: require('fs').createReadStream('input.txt')
      });
     
      lineReader.on('line', function (line) {
        var foundTwoMatch = false;
        var foundThreeMatch = false;
        var array = line.split("")
        array.sort();
        for (i = 0; i < array.length; i++ ) {
            if (array[i]===array[i+2]) {
                if (!foundThreeMatch) threeMatch++
                i = i + 2
                foundThreeMatch=true
            } else 
            { if (array[i]===array[i+1]) {
                    if (!foundTwoMatch) twoMatch++
                    i = i + 1
                    foundTwoMatch=true
                }
            }
            
        }
      }).on('close', () => {
         console.log ("Final output ")
         console.log ("Total double matches " + twoMatch)
         console.log ("Total triple matches " + threeMatch)
         var checkSum = twoMatch * threeMatch
         console.log ("Checksum " + checkSum) 
      });

}

function findPrototypeFabric () {
    var boxIds = new Array
    var matchedBoxIds = new Array
    var lineReader = require('readline').createInterface({
        input: require('fs').createReadStream('input.txt')
      });
     
      lineReader.on('line', function (line) {
          boxIds.push(line.split(""))
          
      }).on('close', () => {
        console.log ("Read in " + boxIds.length + " ids")  
        while (boxIds.length>1) {
            boxId = boxIds.pop()
            comparator(boxId, boxIds, 1)
          }
          
          
      }); 
      
}    
// assume sorted arrays of same length
// return true if the match 
function comparator (sourceBoxId, boxIds, numberOfDifferences) {
    for (var boxIdLooper=0; boxIdLooper < boxIds.length; boxIdLooper++) {
        var delta = 0
        var lastDifference = 0
        var boxIdToCompare = boxIds[boxIdLooper]
        for (var compareElement=0; compareElement < sourceBoxId.length; compareElement++) {
            if (sourceBoxId[compareElement]!=boxIdToCompare[compareElement]) {
                delta++
                lastDifference = compareElement
                if (delta > numberOfDifferences) {
                    break;
                }
                
            } 
            // Reached the end and only found less than the number of differences
            if (compareElement===sourceBoxId.length-1&&delta<=numberOfDifferences) {
                console.log ("Input " + sourceBoxId.join(""))
                console.log ("Matches: " + boxIdToCompare.join(""))
                sourceBoxId.splice(lastDifference,1)
                console.log ("Answer: " + sourceBoxId.join(""))
                return true
            }
        }
        
        
    }
    
}
