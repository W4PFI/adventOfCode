
console.log (calculation())

  
function calculation () {
    var output = 0;
    var lineReader = require('readline').createInterface({
        input: require('fs').createReadStream('input.txt')
      });
     
      lineReader.on('line', function (line) {
        output = Number(line) + output;
        console.log ("Read in " + line.toString())
        
      }).on('close', () => {
         console.log ("Final output "  + output)
      });
      return output
}