const { readFile, writeFile, writeFileSync } = require('fs')

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    } 
    const first = result;
    readFile('./content/second.txt', 'utf8', (err,result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result
        writeFileSync(
            './content/result-async.txt',
                `Here is the result: ${first}, ${second}`
                ,(err, result) => {
                    if(err){
                        return
                    }
                    console.log(result)
                }
        )
    })
    
})