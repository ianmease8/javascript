const fs = require(fs)

let data = findMax()

fs.writeFile('yourworkouts.txt', data, (err) => {
      
    if (err) throw err;
})